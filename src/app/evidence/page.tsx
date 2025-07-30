'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { conspiracyTheories, evidenceResponses, sources } from '@/data/conspiracies';

export default function EvidencePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedConspiracy, setSelectedConspiracy] = useState<string | null>(null);

  const categories = ['all', 'physics', 'photography', 'technology', 'historical', 'logical'];
  
  const filteredConspiracies = selectedCategory === 'all' 
    ? conspiracyTheories 
    : conspiracyTheories.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="space-gradient text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Evidence Library</h1>
            <p className="text-xl text-gray-200">
              Comprehensive collection of scientific evidence and expert responses to conspiracy theories
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Category Filter */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                    selectedCategory === category
                      ? 'bg-apollo-blue text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Evidence Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Conspiracy List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Conspiracy Theories ({filteredConspiracies.length})
              </h2>
              
              {filteredConspiracies.map((conspiracy) => (
                <div
                  key={conspiracy.id}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-gray-200 hover:border-apollo-blue hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Link href={`/evidence/${conspiracy.id}`} className="block hover:text-apollo-blue">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-apollo-blue transition-colors">
                          {conspiracy.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-3 italic">
                        &quot;{conspiracy.claim}&quot;
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {conspiracy.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="ml-4 flex flex-col items-end">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        conspiracy.category === 'physics' ? 'bg-blue-100 text-blue-800' :
                        conspiracy.category === 'photography' ? 'bg-green-100 text-green-800' :
                        conspiracy.category === 'technology' ? 'bg-purple-100 text-purple-800' :
                        conspiracy.category === 'historical' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {conspiracy.category}
                      </span>
                      
                      <span className="text-xs text-gray-500 mt-2">
                        {evidenceResponses.filter(r => r.conspiracyId === conspiracy.id).length} responses
                      </span>
                    </div>
                  </div>

                  {/* Common Variations */}
                  {conspiracy.commonVariations.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium text-gray-700 mb-2">Common variations:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {conspiracy.commonVariations.slice(0, 2).map((variation, index) => (
                          <li key={index} className="italic">• &quot;{variation}&quot;</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* View Details Button */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link 
                      href={`/evidence/${conspiracy.id}`}
                      className="inline-flex items-center text-apollo-blue hover:text-blue-700 font-medium text-sm"
                    >
                      View detailed analysis →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Evidence Library
                </h3>
                <p className="text-gray-600 mb-6">
                  Click on any conspiracy theory title to view comprehensive evidence, detailed analysis, and scientific sources.
                </p>
                
                {/* Featured Categories */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm">Browse by Category:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.slice(1).map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-2 rounded-lg text-sm capitalize transition-colors ${
                          selectedCategory === category
                            ? 'bg-apollo-blue text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* AI Assistant Link */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link 
                    href="/chat"
                    className="block w-full bg-apollo-blue text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Ask AI Assistant
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-apollo-blue mb-2">
                {conspiracyTheories.length}
              </div>
              <div className="text-sm text-gray-600">Conspiracy Theories</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-evidence-green mb-2">
                {evidenceResponses.length}
              </div>
              <div className="text-sm text-gray-600">Evidence Responses</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-gray-700 mb-2">
                {sources.length}
              </div>
              <div className="text-sm text-gray-600">Scientific Sources</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-apollo-blue mb-2">
                {Math.round(evidenceResponses.reduce((acc, r) => acc + r.effectiveness, 0) / evidenceResponses.length)}
              </div>
              <div className="text-sm text-gray-600">Avg Effectiveness</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}