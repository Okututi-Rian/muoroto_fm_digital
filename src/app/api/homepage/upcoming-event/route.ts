import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET() {
  const events = await db.upcomingEvent.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(events);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const event = await db.upcomingEvent.create({ data: body });
  return NextResponse.json(event, { status: 201 });
}
