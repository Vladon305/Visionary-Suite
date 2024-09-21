'use client'

import { useDeviceAndScreen } from '@/hooks/useDeviceAndScreen'
import { Layout, Menu, MenuProps } from 'antd'
import { usePathname, useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'

const { Sider } = Layout

type Props = {
	background?: string
	menuItems?: MenuProps['items']
	isCollapsed: boolean
	setIsCollapsed: Dispatch<SetStateAction<boolean>>
}

export const Sidebar = ({
	background,
	menuItems,
	isCollapsed,
	setIsCollapsed,
}: Props) => {
	const currentPath = usePathname()

	const router = useRouter()

	const { isMobile } = useDeviceAndScreen()

	return (
		<Sider
			style={{ background }}
			trigger={null}
			breakpoint='lg'
			collapsedWidth='0'
			collapsible
			collapsed={isCollapsed}
			onBreakpoint={broken => {
				setIsCollapsed(broken)
			}}
			width={isMobile ? '100%' : undefined}
		>
			<Menu
				defaultSelectedKeys={[currentPath]}
				selectedKeys={[currentPath]}
				mode='inline'
				style={{ height: '100%', borderRight: 0 }}
				onSelect={({ key }) => {
					router.push(key)
				}}
				items={menuItems}
			/>
		</Sider>
	)
}

export default Sidebar
