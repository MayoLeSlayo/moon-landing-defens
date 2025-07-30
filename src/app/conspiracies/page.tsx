'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { conspiracyTheories } from '@/data/conspiracies';

export default function ConspiraciesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="space-gradient text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Common Conspiracy Theories</h1>
            <p className="text-xl text-gray-200">
              Addressing the most widespread moon landing conspiracy theories with scientific evidence
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid gap-6">
            {conspiracyTheories.map((conspiracy) => (
              <div key={conspiracy.id} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-conspiracy-red">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {conspiracy.title}
                    </h2>
                    <div className="conspiracy-highlight mb-4">
                      <p className="text-gray-800 text-lg">
                        <strong>The Claim:</strong> &quot;{conspiracy.claim}&quot;
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    conspiracy.category === 'physics' ? 'bg-blue-100 text-blue-800' :
                    conspiracy.category === 'photography' ? 'bg-green-100 text-green-800' :
                    conspiracy.category === 'technology' ? 'bg-purple-100 text-purple-800' :
                    conspiracy.category === 'historical' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {conspiracy.category}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {conspiracy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Common Variations */}
                {conspiracy.commonVariations.length > 0 && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">You might also hear:</h3>
                    <ul className="space-y-2">
                      {conspiracy.commonVariations.map((variation, index) => (
                        <li key={index} className="text-gray-700 italic">
                          • &quot;{variation}&quot;
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6 text-center">
                  <a
                    href={`/?search=${encodeURIComponent(conspiracy.title.toLowerCase())}`}
                    className="bg-evidence-green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium"
                  >
                    See Evidence Response
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}