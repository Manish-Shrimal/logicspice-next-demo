// import { NextResponse } from 'next/server';

// export function middleware(request) {

// const url = new URL(request.url);
// const origin = url.origin;
// const pathname = url.pathname;
// const requestHeaders = new Headers(request.headers);
// requestHeaders.set('x-url', request.url);
// requestHeaders.set('x-origin', origin);
// requestHeaders.set('x-pathname', pathname);



// return NextResponse.next({
//     request: {
//         headers: requestHeaders,
//     }
// });
// }

import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = new URL(request.url);
  const origin = url.origin;
  const pathname = url.pathname;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);
  requestHeaders.set('x-origin', origin);
  requestHeaders.set('x-pathname', pathname);

  // Basic Authentication Logic
  const auth = request.headers.get('authorization');
  const username = process.env.BASIC_AUTH_USER || 'admin';
  const password = process.env.BASIC_AUTH_PASS || 'password';

  const expectedAuth = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;

  if (auth !== expectedAuth) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: {
        'www-authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  // Proceed if authorized and include existing functionality
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*',
};
