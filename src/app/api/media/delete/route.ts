import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { deleteFile, purgeCache } from "@/lib/imagekit";
import { db } from "@/lib/prisma";

export async function DELETE(req: NextRequest) {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await db.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user || (user.role !== "ADMIN" && user.role !== "EDITOR")) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { fileId, mediaId } = await req.json();

    if (!fileId || !mediaId) {
      return NextResponse.json(
        { error: "File ID and Media ID are required" },
        { status: 400 }
      );
    }

    // Get media asset details
    const mediaAsset = await db.mediaAsset.findUnique({
      where: { id: mediaId },
    });

    if (!mediaAsset) {
      return NextResponse.json(
        { error: "Media asset not found" },
        { status: 404 }
      );
    }

    // Delete from ImageKit
    const deleteResult = await deleteFile(fileId);

    if (!deleteResult.success) {
      return NextResponse.json(
        { error: "Failed to delete file from ImageKit", details: deleteResult.error },
        { status: 500 }
      );
    }

    // Purge CDN cache
    const purgeResult = await purgeCache([mediaAsset.url]);

    // Delete from database
    await db.mediaAsset.delete({
      where: { id: mediaId },
    });

    return NextResponse.json({
      success: true,
      message: "File deleted successfully",
      purgeCacheResult: purgeResult.success ? "Cache purged" : "Cache purge failed",
    });
  } catch (error) {
    console.error("Media deletion error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}