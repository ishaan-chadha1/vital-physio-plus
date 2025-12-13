import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const path = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  // Handle www subdomain - redirect to non-www
  if (hostname === 'www.vitalphysio.plus') {
    const redirectUrl = `https://vitalphysio.plus${path}${search}`;
    return NextResponse.redirect(redirectUrl, 301);
  }

  // Handle redirect domains
  if (hostname === 'vitalphysioplus.com' || hostname === 'www.vitalphysioplus.com') {
    const redirectUrl = `https://vitalphysio.plus${path}${search}`;
    return NextResponse.redirect(redirectUrl, 301);
  }

  // Handle vitalphysio.in - fallback redirect
  if (hostname === 'vitalphysio.in' || hostname === 'www.vitalphysio.in') {
    const redirectUrl = `https://vitalphysio.plus${path}${search}`;
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
