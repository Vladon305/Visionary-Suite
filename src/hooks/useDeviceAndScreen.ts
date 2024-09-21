import { useEffect, useState } from 'react'

export const useDeviceAndScreen = () => {
	// Состояние для хранения информации о устройстве
	const [deviceInfo, setDeviceInfo] = useState({
		isMobile: false,
		isTablet: false,
		isDesktop: false,
		screenOrientation: '',
	})

	// Функция для определения модели устройства
	const detectDevice = () => {
		const userAgent = navigator.userAgent
		if (/(android|iphone)/i.test(userAgent)) {
			return 'mobile'
		}
		if (/ipad/i.test(userAgent) || /tablet/i.test(userAgent)) {
			return 'tablet'
		}
		return 'desktop'
	}

	// Функция для определения направления экрана
	const getScreenOrientation = () => {
		const orientation = window.screen.orientation.type
		if (orientation === 'landscape-primary') return 'landscape'
		else return 'portrait'
	}

	// Обработчик изменения размера окна
	const handleResize = () => {
		const screenWidth = window.innerWidth
		const screenHeight = window.innerHeight

		if (screenWidth < 768 && screenHeight < 768) {
			setDeviceInfo(prev => ({
				...prev,
				isMobile: true,
				isTablet: false,
				isDesktop: false,
			}))
		} else if (screenWidth >= 1024 || screenHeight >= 1024) {
			setDeviceInfo(prev => ({
				...prev,
				isMobile: false,
				isTablet: false,
				isDesktop: true,
			}))
		} else if (
			(screenWidth >= 768 || screenHeight >= 768) &&
			(screenWidth < 1024 || screenHeight < 1024)
		) {
			setDeviceInfo(prev => ({
				...prev,
				isMobile: false,
				isTablet: true,
				isDesktop: false,
			}))
		}

		const deviceType = detectDevice()
		const orientation = getScreenOrientation()

		setDeviceInfo(prev => ({
			...prev,
			deviceType,
			screenOrientation: orientation,
		}))
	}

	// Эффекты
	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return deviceInfo
}
