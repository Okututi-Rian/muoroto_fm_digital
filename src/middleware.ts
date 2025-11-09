import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

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
  "/sign-in(.*)",     // ADD THIS LINE
  "/sign-up(.*)",     // ADD THIS LINE
]);

// Ignored routes (Clerk should not run any logic)
const isIgnoredRoute = createRouteMatcher([
  "/api/webhooks/clerk",
  "/api/live-listeners",
  "/api/proxy/(.*)",
]);

export default clerkMiddleware((auth, req) => {
  // Skip any ignored route entirely
  if (isIgnoredRoute(req)) return;

  // Allow public routes
  if (isPublicRoute(req)) return;

  // Everything else requires authentication
  auth().protect();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)"],
};

