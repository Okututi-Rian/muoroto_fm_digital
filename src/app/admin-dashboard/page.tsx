import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AdminDashboardInteractive from './components/AdminDashboardInteractive';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Muoroto FM Digital',
  description: 'Comprehensive content management system for shows, podcasts, news, sponsors, and real-time updates with complete backend control for station operations.',
};

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <AdminDashboardInteractive />
      </main>
    </div>
  );
}
