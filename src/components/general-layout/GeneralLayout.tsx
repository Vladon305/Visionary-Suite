/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Button, Layout, Skeleton, Space, theme } from 'antd'
import cn from 'classnames'
import { useState } from 'react'
import { Header } from './header'
import styles from './layout.module.scss'
import { Sidebar } from './sidebar'
import { sidebarItems } from './sidebar-items'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import React from 'react'

const { Content } = Layout

type Props = {
	children: React.ReactNode
}

type SizeType = 'default' | 'small' | 'large'
type ButtonShapeType = 'circle' | 'square' | 'round' | 'default'
type AvatarShapeType = 'circle' | 'square'

const GeneralLayout = ({ children }: Props) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken()

	const [size, setSize] = useState<SizeType>('default')
	const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(false)
	const [buttonShape, setButtonShape] = useState<ButtonShapeType>('default')
	const [avatarShape, setAvatarShape] = useState<AvatarShapeType>('circle')
	const [block, setBlock] = useState(false)

	return (
		<>
			<Layout className={styles.layout}>
				<Header background={colorBgContainer}>
					<div className={styles.header__container}>
						<Button
							type='text'
							icon={
								isCollapsedSidebar ? (
									<MenuUnfoldOutlined />
								) : (
									<MenuFoldOutlined />
								)
							}
							onClick={() => setIsCollapsedSidebar(!isCollapsedSidebar)}
							style={{
								fontSize: '16px',
								width: 64,
								height: 64,
							}}
						/>
						<div></div>
						<Space>
							<Skeleton.Button
								active={false}
								size={size}
								shape={buttonShape}
								block={block}
							/>
							<Skeleton.Avatar active={false} size={size} shape={avatarShape} />
							{/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
						</Space>
					</div>
				</Header>
				<Layout
					className={cn(styles.layoutContentContainer, {
						[styles.noPaddingLeft]: isCollapsedSidebar,
					})}
				>
					<Sidebar
						background={colorBgContainer}
						menuItems={sidebarItems}
						isCollapsed={isCollapsedSidebar}
						setIsCollapsed={setIsCollapsedSidebar}
					/>
					<Layout className={styles.content__layout}>
						<Content
							className={styles.content}
							style={{
								background: colorBgContainer,
								borderRadius: borderRadiusLG,
							}}
						>
							{children}
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</>
	)
}

export default GeneralLayout
