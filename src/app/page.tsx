'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import SearchResults from '@/components/SearchResults';
import { SearchResult } from '@/types';

export default function HomePage() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="space-gradient text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Defend the <span className="text-lunar-silver">Truth</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              AI-powered evidence base for countering moon landing conspiracy theories
            </p>
            <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
              Search for conspiracy theories and get instant access to scientific evidence, 
              authoritative sources, and battle-tested responses for social media debates.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <SearchBar onResults={setSearchResults} />
            
            {/* Featured Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-apollo-blue mb-2">842</div>
                <div className="text-sm text-gray-600">Pounds of Moon Rocks</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-evidence-green mb-2">50+</div>
                <div className="text-sm text-gray-600">Years of Analysis</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-apollo-blue mb-2">30+</div>
                <div className="text-sm text-gray-600">Countries Confirmed</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-evidence-green mb-2">6</div>
                <div className="text-sm text-gray-600">Successful Landings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-8 px-4 bg-white">
          <SearchResults results={searchResults} />
        </section>

        {/* No Search State - Featured Evidence */}
        {searchResults.length === 0 && (
          <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Top 5 Pieces of Evidence
              </h2>
              
              <div className="grid gap-6">
                {[
                  {
                    title: "Retroreflectors - Active Today",
                    description: "Scientists bounce lasers off retroreflectors left on the moon RIGHT NOW with millimeter precision",
                    icon: "🔬",
                    color: "evidence-green"
                  },
                  {
                    title: "Soviet Union Tracking",
                    description: "The USSR, our space race rival, tracked and confirmed the missions with their own technology",
                    icon: "📡",
                    color: "apollo-blue"
                  },
                  {
                    title: "Third-Party Verification",
                    description: "Multiple countries independently tracked the missions with radio telescopes",
                    icon: "🌍",
                    color: "evidence-green"
                  },
                  {
                    title: "Moon Rocks Analysis",
                    description: "842 pounds of moon rocks analyzed by independent laboratories worldwide for 50+ years",
                    icon: "🪨",
                    color: "apollo-blue"
                  },
                  {
                    title: "Orbital Photography",
                    description: "NASA's Lunar Reconnaissance Orbiter has photographed the landing sites, showing equipment we left",
                    icon: "📸",
                    color: "evidence-green"
                  }
                ].map((evidence, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl border-l-4 border-evidence-green">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{evidence.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {evidence.title}
                        </h3>
                        <p className="text-gray-700">
                          {evidence.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-6">
                  Ready to counter conspiracy theories? Start by searching above.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['waving flag', 'no stars', 'radiation belt', 'fake photos'].map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        // This would trigger a search - implement the connection
                        console.log('Search for:', term);
                      }}
                      className="bg-apollo-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Search "{term}"
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}