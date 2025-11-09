import { NextResponse } from "next/server";

let currentListeners = 1247;

export async function GET() {
  try {
    // Simulate real-time listener count updates
    const variation = Math.floor(Math.random() * 10) - 5; // -5 to +5
    currentListeners = Math.max(800, currentListeners + variation);
    
    return NextResponse.json({
      listeners: currentListeners,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Live listeners API error:", error);
    return NextResponse.json(
      { error: "Failed to get listener count" },
      { status: 500 }
    );
  }
}