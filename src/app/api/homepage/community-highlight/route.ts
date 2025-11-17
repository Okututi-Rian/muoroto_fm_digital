import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET() {
  const highlights = await db.communityHighlight.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(highlights);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const highlight = await db.communityHighlight.create({ data: body });
  return NextResponse.json(highlight, { status: 201 });
}
