import type { Metadata } from 'next';
import AboutUsInteractive from './components/AboutUsInteractive';

export const metadata: Metadata = {
  title: 'About Us - Muoroto FM Digital',
  description: 'Discover the story behind Muoroto FM - Kenya\'s most innovative digital radio station. Learn about our mission, team, awards, and community impact as we bridge traditional wisdom with contemporary broadcasting excellence.',
};

export default function AboutUsPage() {
  return (
    <main className="pt-16 lg:pt-18">
      <AboutUsInteractive />
    </main>
  );
}
