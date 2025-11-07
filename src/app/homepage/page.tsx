import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';
import QuickAccessTiles from './components/QuickAccessTiles';
import TrendingNews from './components/TrendingNews';
import UpcomingEvents from './components/UpcomingEvents';

export const metadata: Metadata = {
  title: 'Homepage - Muoroto FM Digital',
  description: 'Welcome to Muoroto FM Digital - Your truthful voice in Kenya. Experience authentic Kikuyu culture, community news, and spiritual nourishment through our live radio broadcasts and digital content.',
};

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HomepageInteractive />
        <QuickAccessTiles />
        <TrendingNews />
        <UpcomingEvents />
      </main>
    </div>
  );
}
