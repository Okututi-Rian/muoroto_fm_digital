import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

// GET all media assets
export async function GET(req: NextRequest) {
  try {
    const media = await db.mediaAsset.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(media, { status: 200 });
  } catch (error) {
    console.error("Error fetching media:", error);
    return NextResponse.json(
      { error: "Failed to fetch media" },
      { status: 500 }
    );
  }
}

// POST - Create a new media asset
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
    const { fileName, originalName, fileType, fileSize, url, thumbnailUrl, folder } = body;

    if (!fileName || !url) {
      return NextResponse.json(
        { error: "File name and URL are required" },
        { status: 400 }
      );
    }

    const media = await db.mediaAsset.create({
      data: {
        fileName,
        originalName: originalName || fileName,
        fileType: fileType || "image",
        fileSize: fileSize || 0,
        url,
        thumbnailUrl,
        folder: folder || "uploads",
        uploadedBy: userId,
      },
    });

    return NextResponse.json(media, { status: 201 });
  } catch (error) {
    console.error("Error creating media:", error);
    return NextResponse.json(
      { error: "Failed to create media" },
      { status: 500 }
    );
  }
}
