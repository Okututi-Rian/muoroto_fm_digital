import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET() {
  const heroes = await db.homepageHero.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(heroes);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const hero = await db.homepageHero.create({ data: body });
  return NextResponse.json(hero, { status: 201 });
}
