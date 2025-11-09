import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import AdminDashboard from "../admin/components/AdminDashboard";

export default async function AdminPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminDashboard />
    </div>
  );
}
