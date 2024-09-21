import { NextRequest, NextResponse } from 'next/server'
import { PAGES_URL } from './config/pages-url.config'

export async function middleware(request: NextRequest) {
	const { url } = request

	const root = '/'
	const isMainLayout = url.includes(PAGES_URL.mainRoot)

	if (isMainLayout || root) {
		return NextResponse.redirect(new URL(PAGES_URL.DREAM_TIME, request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/', '/main'],
}
