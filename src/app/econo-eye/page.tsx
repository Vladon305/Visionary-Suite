import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Econo Eye',
	...NO_INDEX_PAGE,
}

export default function EconoEyePage() {
	return <div>EconoEye</div>
}
