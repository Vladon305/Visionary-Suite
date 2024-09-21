import { TimePicker, TimePickerProps } from 'antd'
import { Dayjs } from 'dayjs'

export const TimeSelect = ({
	time,
	onChange,
}: {
	time: Dayjs
	onChange: TimePickerProps['onChange']
}) => {
	return (
		<TimePicker
			format='HH:mm'
			onChange={onChange}
			value={time}
			defaultOpenValue={time}
		/>
	)
}
