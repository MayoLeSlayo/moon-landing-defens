import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evidence Library — Moon Landing Proof & Scientific Sources',
  description: 'Browse all 44 moon landing conspiracy theories with full scientific evidence, source citations, and expert analysis. Find the proof for any claim.',
  keywords: 'moon landing evidence library, apollo proof, moon landing conspiracy debunked list, scientific evidence moon landing real',
  openGraph: {
    title: 'Evidence Library — Moon Landing Proof & Scientific Sources',
    description: 'Browse all 44 moon landing conspiracy theories with full scientific evidence and expert analysis.',
  },
};

export default function EvidenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
