import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Main',
	...NO_INDEX_PAGE,
}

export default function MainPage() {
	return <div>Main</div>
}
