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
        <section className="hero-space text-white py-24 px-4 min-h-screen flex items-center">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 stellar-text">
              Defend the <span className="text-yellow-300">Truth</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-100 font-light">
              AI-powered evidence base for countering moon landing conspiracy theories
            </p>
            <p className="text-lg mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Search for conspiracy theories and get instant access to scientific evidence, 
              authoritative sources, and battle-tested responses for social media debates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-morphism cosmic-glow px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                Start Defending Truth
              </button>
              <button className="border border-white border-opacity-30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                Explore Evidence
              </button>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="nebula-gradient py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 stellar-text">
                Search the Evidence Database
              </h2>
              <p className="text-gray-200 text-lg">
                Find scientific rebuttals to any moon landing conspiracy theory
              </p>
            </div>
            <SearchBar onResults={setSearchResults} />
            
            {/* Featured Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 mb-8">
              <a href="/evidence/moon-rocks" className="glass-morphism cosmic-glow p-6 rounded-xl text-center hover:bg-white hover:bg-opacity-20 transition-all duration-300 group">
                <div className="text-4xl font-bold text-blue-300 mb-2 group-hover:text-white transition-colors">842</div>
                <div className="text-sm text-gray-200 mb-3">Pounds of Moon Rocks</div>
                <div className="text-xs text-blue-300 group-hover:text-yellow-300 transition-colors">Learn More →</div>
              </a>
              <a href="/evidence/countries" className="glass-morphism nebula-glow p-6 rounded-xl text-center hover:bg-white hover:bg-opacity-20 transition-all duration-300 group">
                <div className="text-4xl font-bold text-green-300 mb-2 group-hover:text-white transition-colors">30+</div>
                <div className="text-sm text-gray-200 mb-3">Countries Confirmed</div>
                <div className="text-xs text-green-300 group-hover:text-yellow-300 transition-colors">Learn More →</div>
              </a>
              <a href="/evidence/workforce" className="glass-morphism cosmic-glow p-6 rounded-xl text-center hover:bg-white hover:bg-opacity-20 transition-all duration-300 group">
                <div className="text-4xl font-bold text-blue-300 mb-2 group-hover:text-white transition-colors">400K</div>
                <div className="text-sm text-gray-200 mb-3">People Worked on Apollo</div>
                <div className="text-xs text-blue-300 group-hover:text-yellow-300 transition-colors">Learn More →</div>
              </a>
              <a href="/evidence/retroreflectors" className="glass-morphism nebula-glow p-6 rounded-xl text-center hover:bg-white hover:bg-opacity-20 transition-all duration-300 group">
                <div className="text-4xl font-bold text-green-300 mb-2 group-hover:text-white transition-colors">Active</div>
                <div className="text-sm text-gray-200 mb-3">Retroreflectors Today</div>
                <div className="text-xs text-green-300 group-hover:text-yellow-300 transition-colors">Learn More →</div>
              </a>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-8 px-4 bg-white">
          <SearchResults results={searchResults} />
        </section>

        {/* No Search State - Featured Evidence */}
        {searchResults.length === 0 && (
          <section className="eclipse-gradient py-20 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white stellar-text">
                Top 5 Pieces of Evidence
              </h2>
              
              <div className="grid gap-8">
                {[
                  {
                    title: "Retroreflectors Active RIGHT NOW",
                    description: "Scientists at observatories worldwide bounce lasers off Apollo equipment every single day with millimeter precision - impossible to fake",
                    icon: "🔬",
                    color: "evidence-green"
                  },
                  {
                    title: "400,000 People Worked on Apollo",
                    description: "The largest peacetime workforce in history spanning 20,000+ companies - impossible to keep secret for 50+ years",
                    icon: "👥",
                    color: "apollo-blue"
                  },
                  {
                    title: "842 Pounds of Moon Rocks",
                    description: "Analyzed by independent laboratories worldwide with unique properties impossible to replicate on Earth",
                    icon: "🪨",
                    color: "evidence-green"
                  },
                  {
                    title: "Soviet Union Cold War Rivals Confirmed",
                    description: "The USSR tracked Apollo missions with advanced surveillance - they had every motivation to expose a hoax but never did",
                    icon: "📡",
                    color: "apollo-blue"
                  },
                  {
                    title: "30+ Countries Independently Verified",
                    description: "Nations worldwide tracked missions with radio telescopes and confirmed authenticity, including geopolitical rivals",
                    icon: "🌍",
                    color: "evidence-green"
                  }
                ].map((evidence, index) => (
                  <div key={index} className="glass-morphism p-8 rounded-2xl border-l-4 border-yellow-400 hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="text-4xl filter drop-shadow-lg">{evidence.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-white mb-3 stellar-text">
                          {evidence.title}
                        </h3>
                        <p className="text-gray-200 text-lg leading-relaxed">
                          {evidence.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-16">
                <p className="text-gray-200 mb-8 text-xl">
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
                      className="glass-morphism px-6 py-3 rounded-xl text-white hover:bg-white hover:bg-opacity-20 transition-all duration-300 cosmic-glow"
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