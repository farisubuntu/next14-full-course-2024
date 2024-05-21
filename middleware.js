import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware ran successfully");
  return NextResponse.json({ resutl: "success" });
}

export const config = {
  matcher: ["/login/:path*"],
};
