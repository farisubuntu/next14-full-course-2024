import { NextResponse } from "next/server";
import { users } from "@/app/utills/db";

export async function GET() {
  return NextResponse.json(users);
}
