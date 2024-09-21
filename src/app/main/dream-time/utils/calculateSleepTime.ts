import { CalculateType } from '@/types/dreamTime.type'
import { Dayjs } from 'dayjs'

export function calculateSleepTime(
	start: Dayjs,
	calculateType: CalculateType = 'wokeUp'
): Dayjs[] {
	const dates: Dayjs[] = []
	if (calculateType === 'wokeUp') {
		for (let i = 0; i < 6; i++) {
			const date = dates[0]
				? dates[i - 1].clone().add(1, 'hour').add(30, 'minute')
				: start.clone().subtract(9, 'hour')
			dates.push(date)
		}
	} else {
		for (let i = 0; i < 6; i++) {
			const date = dates[0]
				? dates[i - 1].clone().add(1, 'hour').add(30, 'minute')
				: start.clone().add(1, 'hour').add(45, 'minute')
			dates.push(date)
		}
	}
	return dates
}
