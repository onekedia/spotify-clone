import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req){
    const token = await getToken({
        req, secret: process.env.JWT_SECRET
    })

    const {pathname} = req.nextUrl

    //  Allow the request if the following is true...
    // 1) token exist
    // 2) Its a request for auth and provider fetching
    if (pathname.includes('/api/auth') || token){
        return NextResponse.next()
    }

    // Redirect them to login if no token or auth request

    if (!token && pathname !== '/login'){
        return NextResponse.redirect('/login')
    }
}