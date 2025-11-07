import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import NewsAndUpdatesInteractive from './components/NewsAndUpdatesInteractive';

export const metadata: Metadata = {
  title: 'News & Updates - Muoroto FM Digital',
  description: 'Stay informed with the latest news, community updates, and cultural stories from Muoroto FM. Your trusted source for Central Kenya news and current affairs.',
};

export default function NewsAndUpdatesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-18">
        <NewsAndUpdatesInteractive />
      </div>
    </main>
  );
}
