import { Dayjs } from 'dayjs';

export function calculateTimeRange(start: Dayjs, end: Dayjs) {
  const diffInSeconds = start.diff(end, 'second');
  const hours = Math.floor(diffInSeconds / 3600);
  const minutes = Math.floor((diffInSeconds % 3600) / 60);
  return { hours, minutes };
}
