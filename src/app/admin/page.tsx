import AdminDashboard from "../admin/components/AdminDashboard";

export default async function AdminPage() {
  // User is authenticated at this point (middleware ensures it)
  return (
    <div className="min-h-screen bg-background">
      <AdminDashboard />
    </div>
  );
}
