import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET() {
  const news = await db.trendingNewsItem.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(news);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newsItem = await db.trendingNewsItem.create({ data: body });
  return NextResponse.json(newsItem, { status: 201 });
}
