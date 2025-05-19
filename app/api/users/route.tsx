import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "Anand Deep Singh",
      email: "Anand@gmail.com",
    },
  ]);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name) {
      return NextResponse.json({ error: "Name is mandatory" }, { status: 400 });
    }
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
  } catch (error) {
    console.error(error, "Errrr");
  }
}
