import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Public routes (no auth required)
const isPublicRoute = createRouteMatcher([
  "/",
  "/homepage",
  "/about-us",
  "/live-radio",
  "/shows-and-schedule",
  "/news-and-updates",
  "/api/webhooks/clerk",
  "/api/live-listeners",
  "/api/proxy/(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

// Ignored routes (Clerk should not run any logic)
const isIgnoredRoute = createRouteMatcher([
  "/api/webhooks/clerk",
  "/api/live-listeners",
  "/api/proxy/(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // Skip any ignored route entirely
  if (isIgnoredRoute(req)) return;

  // Allow public routes
  if (isPublicRoute(req)) return;

  // Everything else requires authentication
  const authSession = await auth();
  if (!authSession.userId) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)"],
};

