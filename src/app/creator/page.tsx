import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'The Creator — Were The Moon Landings Real?',
  description: 'About the creator of WereTheMoonLandingsReal.com. Want to contribute? Find out how to get involved.',
  openGraph: {
    title: 'The Creator — Were The Moon Landings Real?',
    description: 'About the creator of WereTheMoonLandingsReal.com.',
  },
};

export default function CreatorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={true} />

      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="page-hero text-white page-hero-standard px-4">
          <div className="page-hero-content max-w-4xl mx-auto text-center">
            <h1 className="page-title">The Creator</h1>
            <p className="text-xl text-gray-200 page-subtitle">The mind behind Were The Moon Landings Real?</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Who made this */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">So you wanna know who made this site?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Welp, due to the wild reality of today&apos;s society, the creator is not currently exposing themselves directly. However, we will say this: They are located in Florida and may or may not have a dog named Poncho and a mullet.
              </p>
            </div>

            {/* Contribute */}
            <div className="bg-gray-900 text-white rounded-2xl p-10">
              <h2 className="text-2xl font-bold mb-6">Want to contribute to this site?</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Send an email to{' '}
                <a href="mailto:apollodefender@gmail.com" className="text-white underline hover:text-gray-300 transition-colors">
                  apollodefender@gmail.com
                </a>
                {' '}and be sure to include your LinkedIn profile. We will reach out only to your LinkedIn profile if we deem it legit.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                If we respond, it will be via email to the public address listed on your LinkedIn, or directly through LinkedIn messaging.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
