import GeneralLayout from '@/components/general-layout/GeneralLayout'
import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
}

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <GeneralLayout>{children}</GeneralLayout>
}
