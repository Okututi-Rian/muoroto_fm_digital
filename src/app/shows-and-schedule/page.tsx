import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ShowsAndScheduleInteractive from './components/ShowsAndScheduleInteractive';

export const metadata: Metadata = {
  title: 'Shows & Schedule - Muoroto FM Digital',
  description: 'Explore our comprehensive program guide featuring cultural storytelling, spiritual content, news analysis, and entertainment shows. Discover host profiles, episode archives, and complete scheduling information for all Muoroto FM programs.',
};

export default function ShowsAndSchedulePage() {
  return (
    <>
      <Header />
      <ShowsAndScheduleInteractive />
    </>
  );
}
