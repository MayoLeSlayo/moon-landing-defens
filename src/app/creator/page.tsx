import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact or Contribute — Were The Moon Landings Real?',
  description: 'Get in touch, share feedback, or contribute to WereTheMoonLandingsReal.com. We are always looking to improve.',
  openGraph: {
    title: 'Contact or Contribute — Were The Moon Landings Real?',
    description: 'Get in touch, share feedback, or contribute to WereTheMoonLandingsReal.com.',
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
            <h1 className="page-title">Contact or Contribute</h1>
            <p className="text-xl text-gray-200 page-subtitle">We&apos;re always looking to improve — your feedback matters.</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-6">

            {/* Feedback & Contact — primary */}
            <div className="bg-gray-900 text-white rounded-2xl p-10 md:p-14">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
                <div className="w-12 h-1 bg-blue-500 mb-8"></div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Whether you have feedback, a correction, a question, or you&apos;d like to contribute to the site — we genuinely want to hear from you. This project exists to get the science right, and that means being open to input from people who care about the same thing.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-10">
                  We&apos;re always looking to improve the accuracy, depth, and presentation of the evidence. If you see something that could be better, or something that&apos;s missing entirely, please reach out.
                </p>
                <div className="bg-white bg-opacity-10 rounded-xl p-6 inline-block">
                  <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Email</p>
                  <a
                    href="mailto:apollodefender@gmail.com"
                    className="text-white text-xl font-semibold hover:text-blue-300 transition-colors"
                  >
                    apollodefender@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contributing */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 md:p-14">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Want to Contribute?</h2>
                <div className="w-12 h-1 bg-blue-500 mb-8"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  If you&apos;re interested in contributing — whether that&apos;s writing, research, design, or something else — send an email and tell us a bit about yourself. Including your LinkedIn profile is appreciated, and we&apos;ll follow up there if we&apos;re in touch.
                </p>
              </div>
            </div>

            {/* About the creator — secondary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 md:p-14">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">A Little About the Person Behind This</h2>
                <div className="w-12 h-1 bg-gray-200 mb-8"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Due to the wild reality of today&apos;s society, the creator is not currently exposing themselves directly. What we can say: they&apos;re based in Florida, and may or may not have a dog named Poncho and a mullet.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
