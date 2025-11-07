import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import LiveRadioInteractive from './components/LiveRadioInteractive';

export const metadata: Metadata = {
  title: 'Live Radio - Muoroto FM Digital',
  description: 'Experience Muoroto FM\'s live broadcasting with real-time streaming, interactive program guide, DJ profiles, and community engagement tools for authentic Kenyan radio.',
};

export default function LiveRadioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <LiveRadioInteractive />
    </main>
  );
}
