import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const isUnderMaintenance = process.env.MAINTENANCE_MODE === "true";
  const inDevelopment = true;
  const pathname = req.nextUrl.pathname.toLowerCase();

  const pathUnderMaintenance = ['/about'];
  const pathUnderDevelopment = ['/announcement', '/testimonials', '/contacts'];

  const matchesMaintenance = pathUnderMaintenance.some((path) =>
    pathname.startsWith(path)
  );

  const matchesDevelopment = pathUnderDevelopment.some((path) =>
    pathname.startsWith(path)
  );

  if (isUnderMaintenance && matchesMaintenance) {
    return NextResponse.redirect(new URL('/error_code/503', req.url));
  }

  if (inDevelopment && matchesDevelopment) {
    return NextResponse.redirect(new URL('/error_code/403', req.url));
  }

  return NextResponse.next();
}
