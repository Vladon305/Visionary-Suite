import { PAGES_URL } from '@/config/pages-url.config'
import {
	ClockCircleOutlined,
	MoneyCollectOutlined,
	UnorderedListOutlined,
} from '@ant-design/icons'
import React from 'react'

export const sidebarItems = [
	{
		key: `${PAGES_URL.TASK_MASTER}`,
		icon: React.createElement(UnorderedListOutlined),
		label: `TaskMaster`,
	},
	{
		key: `${PAGES_URL.ECONO_EYE}`,
		icon: React.createElement(MoneyCollectOutlined),
		label: `EconoEye`,
	},
	{
		key: `${PAGES_URL.DREAM_TIME}`,
		icon: React.createElement(ClockCircleOutlined),
		label: `DreamTime`,
	},
]
