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
      <Header transparent={true} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-space flex items-center justify-center px-6">
          <div className="hero-content max-w-4xl mx-auto text-center">
            <h1 className="text-sm md:text-base font-bold mb-3 text-gray-300 tracking-[0.25em] uppercase">
              Were the Apollo Moon Landings in the 60s Faked?
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Defend <span className="gradient-text">Apollo</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
              Half a century of lies hasn&apos;t touched the truth. Twelve men walked on the Moon. The science still holds. The evidence still stands. This site is here to help you defend it — smarter, faster, and more effectively than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
                  (document.querySelector('#search input[type="text"]') as HTMLInputElement)?.focus();
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

        {/* Who This Is For + Are You Certain */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Who this site is for */}
            <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who This Site Is Built For</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For the person who knows the moon landings happened — and keeps running into people who insist they didn&apos;t. For the frustrated friend, the patient sibling, the teacher who&apos;s heard it one too many times. For anyone who values truth and wants to defend it with something stronger than &quot;just look it up.&quot;
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                This site is a weapon for truth defenders. Search any conspiracy claim and get an instant, evidence-backed rebuttal. Every response is written to be copied, pasted, shared, and said out loud — built for real debates, not academic papers.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-0.5">→</span>
                  <span>Search any conspiracy theory and get a direct, sourced response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-0.5">→</span>
                  <span>Copy-paste ready rebuttals for texts, forums, and family dinners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-0.5">→</span>
                  <span>Browse the evidence library for deep dives on every major claim</span>
                </li>
              </ul>
            </div>

            {/* Are You Certain */}
            <div className="bg-gray-900 text-white rounded-2xl p-10">
              <h2 className="text-2xl font-bold mb-4 text-white">Are You Certain The Landings Were Faked?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Then this website is not for you. Stop wasting my server resources.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                This site was built for the silent undecided — the mind that is genuinely seeking rational truth to form an opinion, not simply hunting for confirmation of what it already believes. If your conclusion arrived before your research, no evidence on this page will matter to you.
              </p>
              <p className="text-gray-300 leading-relaxed">
                But if there is still a flicker of honest curiosity in you — if some part of you is willing to follow the evidence wherever it leads — then stay. The science is not complicated. The proof is not hidden. It has been sitting in plain sight for over fifty years, waiting for anyone willing to actually look.
              </p>
            </div>

          </div>
        </section>

        {/* Search Section */}
        <section id="search" className="py-24 px-6 bg-white">
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
                <a href="/evidence/countries-confirmed-60s-moon-landings" className="card-modern p-8 text-center group">
                  <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">30+</div>
                  <div className="text-sm text-gray-600 mb-3">Countries Confirmed</div>
                  <div className="text-xs text-emerald-600 transition-colors">Learn More →</div>
                </a>
                <a href="/evidence/workforce" className="card-modern p-8 text-center group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">400K</div>
                  <div className="text-sm text-gray-600 mb-3">People Worked on Apollo</div>
                  <div className="text-xs text-blue-600 transition-colors">Learn More →</div>
                </a>
                <a href="/evidence/images-videos-prove-moon-landings" className="card-modern p-8 text-center group">
                  <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">📷</div>
                  <div className="text-sm text-gray-600 mb-3">Photos Prove It</div>
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
                    title: "30+ Countries Independently Verified",
                    description: "Nations worldwide tracked missions with radio telescopes and confirmed authenticity, including geopolitical rivals",
                    icon: "🌍",
                    color: "emerald"
                  },
                  {
                    title: "The Photos and Videos Are Real",
                    description: "Every 'suspicious' detail in Apollo photography — sharp shadows, lit astronauts, diverging shadows — is explained by simple lunar physics with no atmosphere",
                    icon: "📷",
                    color: "blue"
                  }
                ].map((evidence, index) => {
                  const linkMap = [
                    '/evidence/retroreflectors',
                    '/evidence/workforce',
                    '/evidence/moon-rocks',
                    '/evidence/countries-confirmed-60s-moon-landings',
                    '/evidence/images-videos-prove-moon-landings',
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