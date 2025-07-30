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
        <section className="hero-space flex items-center justify-center px-6">
          <div className="hero-content max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Defend <span className="gradient-text">Apollo</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
              Counter moon landing conspiracy theories with scientific evidence, expert analysis, and authoritative sources from the Apollo missions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  (document.querySelector('input[type="text"]') as HTMLInputElement)?.focus();
                  document.querySelector('section:nth-of-type(2)')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-modern btn-primary"
              >
                Try Moon Defense
              </button>
              <button 
                onClick={() => {
                  window.location.href = '/evidence';
                }}
                className="btn-modern border-2 border-white text-white hover:bg-white hover:text-black"
              >
                Explore Evidence
              </button>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Search the Evidence Database
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Find scientific rebuttals to any moon landing conspiracy theory
              </p>
            </div>
            <SearchBar onResults={setSearchResults} />
          </div>
        </section>

        {/* Results Section */}
        <section className="py-8 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <SearchResults results={searchResults} />
          </div>
        </section>

        {/* Featured Stats - Only show when no search results */}
        {searchResults.length === 0 && (
          <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <a href="/evidence/moon-rocks" className="card-modern p-8 text-center group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">842</div>
                  <div className="text-sm text-gray-600 mb-3">Pounds of Moon Rocks</div>
                  <div className="text-xs text-blue-600 transition-colors">Learn More →</div>
                </a>
                <a href="/evidence/countries" className="card-modern p-8 text-center group">
                  <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">30+</div>
                  <div className="text-sm text-gray-600 mb-3">Countries Confirmed</div>
                  <div className="text-xs text-emerald-600 transition-colors">Learn More →</div>
                </a>
                <a href="/evidence/workforce" className="card-modern p-8 text-center group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">400K</div>
                  <div className="text-sm text-gray-600 mb-3">People Worked on Apollo</div>
                  <div className="text-xs text-blue-600 transition-colors">Learn More →</div>
                </a>
                <a href="/evidence/retroreflectors" className="card-modern p-8 text-center group">
                  <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">Active</div>
                  <div className="text-sm text-gray-600 mb-3">Retroreflectors Today</div>
                  <div className="text-xs text-emerald-600 transition-colors">Learn More →</div>
                </a>
              </div>
            </div>
          </section>
        )}

        {/* No Search State - Featured Evidence */}
        {searchResults.length === 0 && (
          <section className="py-20 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                Top 5 Pieces of Evidence
              </h2>
              
              <div className="grid gap-6">
                {[
                  {
                    title: "Retroreflectors Active RIGHT NOW",
                    description: "Scientists at observatories worldwide bounce lasers off Apollo equipment every single day with millimeter precision - impossible to fake",
                    icon: "🔬",
                    color: "blue"
                  },
                  {
                    title: "400,000 People Worked on Apollo",
                    description: "The largest peacetime workforce in history spanning 20,000+ companies - impossible to keep secret for 50+ years",
                    icon: "👥",
                    color: "emerald"
                  },
                  {
                    title: "842 Pounds of Moon Rocks",
                    description: "Analyzed by independent laboratories worldwide with unique properties impossible to replicate on Earth",
                    icon: "🪨",
                    color: "blue"
                  },
                  {
                    title: "Soviet Union Cold War Rivals Confirmed",
                    description: "The USSR tracked Apollo missions with advanced surveillance - they had every motivation to expose a hoax but never did",
                    icon: "📡",
                    color: "emerald"
                  },
                  {
                    title: "30+ Countries Independently Verified",
                    description: "Nations worldwide tracked missions with radio telescopes and confirmed authenticity, including geopolitical rivals",
                    icon: "🌍",
                    color: "blue"
                  }
                ].map((evidence, index) => {
                  const linkMap = [
                    '/evidence/retroreflectors',
                    '/evidence/workforce', 
                    '/evidence/moon-rocks',
                    '/evidence/countries',
                    '/evidence/countries'
                  ];
                  
                  return (
                    <a 
                      key={index} 
                      href={linkMap[index]}
                      className="card-modern p-8 rounded-xl border-l-4 border-blue-500 block hover:border-blue-600 transition-colors group"
                    >
                      <div className="flex items-start space-x-6">
                        <div className="text-4xl">{evidence.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            {evidence.title}
                          </h3>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {evidence.description}
                          </p>
                          <div className="mt-4 text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                            Learn More →
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="text-center mt-16">
                <p className="text-gray-600 mb-8 text-xl">
                  Ready to counter conspiracy theories? Start by searching above.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {['waving flag', 'no stars', 'radiation belt', 'fake photos'].map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        // This would trigger a search - implement the connection
                        console.log('Search for:', term);
                      }}
                      className="btn-secondary text-gray-700 border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg transition-all duration-300"
                    >
                      Search &quot;{term}&quot;
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