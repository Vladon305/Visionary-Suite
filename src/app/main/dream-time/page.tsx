import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import DreamTime from './DreamTime'

export const metadata: Metadata = {
	title: 'Dream Time',
	...NO_INDEX_PAGE,
}

export default function DreamTimePage() {
	return <DreamTime />
}
