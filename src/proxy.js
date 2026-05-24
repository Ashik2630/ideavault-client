import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if (!session) {
        const callbackUrl = `${request.nextUrl.pathname}${request.nextUrl.search}`;
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('callbackUrl', callbackUrl);
        return NextResponse.redirect(loginUrl);
    }
    // session exists -> attempt to get token and inject into request headers
    try {
        const tokenData = await auth.api.getToken({ headers: await headers() });
        const token = tokenData?.token;
        if (token) {
            const incoming = await headers();
            const newHeaders = new Headers(incoming);
            newHeaders.set('x-verification-token', token);
            return NextResponse.next({ request: { headers: newHeaders } });
        }
    } catch (err) {
        // if token retrieval fails, just continue without injection
    }
}
 
export const config = {
  matcher: ['/ideas/:ideasAll+', "/add-idea", "/my-ideas", "/my-interactions", "/profile"],
}