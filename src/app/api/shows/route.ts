import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

// GET all shows
export async function GET(req: NextRequest) {
  try {
    const shows = await db.show.findMany({
      include: {
        host: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            imageUrl: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(shows, { status: 200 });
  } catch (error) {
    console.error("Error fetching shows:", error);
    return NextResponse.json(
      { error: "Failed to fetch shows" },
      { status: 500 }
    );
  }
}

// POST - Create a new show
export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const {
      title,
      description,
      genre,
      timeSlot,
      duration,
      frequency,
      imageUrl,
      isLive,
    } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    // Get the current user from database
    const currentUser = await db.user.findUnique({
      where: { clerkId: userId },
    });

    if (!currentUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const show = await db.show.create({
      data: {
        title,
        description,
        hostId: currentUser.id,
        genre: genre || "General",
        timeSlot: timeSlot || "",
        duration: duration || "",
        frequency: frequency || "Weekly",
        imageUrl,
        isLive: isLive || false,
      },
      include: {
        host: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            imageUrl: true,
          },
        },
      },
    });

    return NextResponse.json(show, { status: 201 });
  } catch (error) {
    console.error("Error creating show:", error);
    return NextResponse.json(
      { error: "Failed to create show" },
      { status: 500 }
    );
  }
}
