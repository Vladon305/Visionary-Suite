'use client'

import { Card, Modal, Tabs, TimePickerProps } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useEffect, useMemo, useState } from 'react'

import { TimeSelect } from '@/components/time-select/TimeSelect'
import { CalculateType } from '@/types/dreamTime.type'
import './dream-time.scss'
import { calculateSleepTime } from './utils/calculateSleepTime'
import { calculateTimeRange } from './utils/calculateTimeRange'

dayjs.extend(customParseFormat)

const DreamTime = () => {
	const [time, setTime] = useState(dayjs('00:00', 'HH:mm'))
	const [activeTabKey, setActiveTabKey] = useState<CalculateType>('wokeUp')
	const [calculatedTimes, setCalculatedTimes] = useState<Dayjs[]>([])
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [modalTime, setModalTime] = useState<Dayjs>(time)

	const onChangeTime: TimePickerProps['onChange'] = time => {
		if (!time) return setTime(dayjs('00:00', 'HH:mm'))
		setTime(time)
	}

	const items = useMemo(
		() => [
			{
				label: `Когда проснуться`,
				key: 'wokeUp',
				children: (
					<div>
						<TimeSelect time={time} onChange={onChangeTime} />
					</div>
				),
			},
			{
				label: `Когда лечь`,
				key: 'lieDown',
				children: (
					<div>
						<TimeSelect time={time} onChange={onChangeTime} />
					</div>
				),
			},
		],
		[time]
	)

	useEffect(() => {
		setCalculatedTimes(calculateSleepTime(time, activeTabKey))
	}, [time, activeTabKey])

	const showModal = (time: Dayjs) => {
		setIsModalOpen(true)
		setModalTime(time)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	const onChangeActiveTabKey = (key: string) => {
		setActiveTabKey(key as CalculateType)
	}

	const calculatedTimeRange = useMemo(() => {
		if (activeTabKey === 'wokeUp') {
			return calculateTimeRange(time, modalTime)
		} else {
			return calculateTimeRange(modalTime, time)
		}
	}, [activeTabKey, time, modalTime])

	return (
		<div>
			<Tabs
				activeKey={activeTabKey}
				onChange={onChangeActiveTabKey}
				type='card'
				items={items}
			/>
			<Card>
				{calculatedTimes.map((time, i) => (
					<Card.Grid key={time.date() + i} onClick={() => showModal(time)}>
						{time.format('HH:mm')}
					</Card.Grid>
				))}
			</Card>
			<Modal
				title='Basic Modal'
				open={isModalOpen}
				onCancel={handleCancel}
				footer={<></>}
			>
				<Card>
					<p>Сколько времени на сон:</p>
					<p>
						{calculatedTimeRange?.hours} часа,
						{calculatedTimeRange?.minutes} минут
					</p>
				</Card>
			</Modal>
		</div>
	)
}

export default DreamTime
