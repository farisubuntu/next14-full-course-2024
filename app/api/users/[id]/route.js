import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  return NextResponse.json({
    result: `User Id: ${id}`,
  });
}

