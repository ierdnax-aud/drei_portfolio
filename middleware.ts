import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname.startsWith("/admin")) {
    // For now, allow access. In production:
    // 1. Integrate Clerk authentication
    // 2. Check user role/permissions from database
    // 3. Redirect unauthorized users to login
    const response = NextResponse.next()
    response.headers.set("X-Admin-Route", "true")
    return response
  }

  const response = NextResponse.next()
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  return response
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
}
