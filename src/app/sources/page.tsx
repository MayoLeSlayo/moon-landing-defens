'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sources } from '@/data/conspiracies';

export default function SourcesPage() {
  const sourcesByType = sources.reduce((acc, source) => {
    if (!acc[source.type]) {
      acc[source.type] = [];
    }
    acc[source.type].push(source);
    return acc;
  }, {} as Record<string, typeof sources>);

  const typeColors = {
    nasa: 'bg-blue-100 text-blue-800 border-blue-200',
    observatory: 'bg-green-100 text-green-800 border-green-200',
    international: 'bg-purple-100 text-purple-800 border-purple-200',
    academic: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    government: 'bg-red-100 text-red-800 border-red-200'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="space-gradient text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Scientific Sources</h1>
            <p className="text-xl text-gray-200">
              Authoritative sources and references backing our evidence responses
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-8">
          {Object.entries(sourcesByType).map(([type, typeSources]) => (
            <div key={type} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                {type === 'nasa' ? 'NASA' : type} Sources
              </h2>
              
              <div className="grid gap-6">
                {typeSources.map((source) => (
                  <div key={source.id} className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
                    type === 'nasa' ? 'border-blue-500' :
                    type === 'observatory' ? 'border-green-500' :
                    type === 'international' ? 'border-purple-500' :
                    type === 'academic' ? 'border-yellow-500' :
                    'border-red-500'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-apollo-blue hover:text-blue-700 hover:underline"
                          >
                            {source.title}
                          </a>
                        </h3>
                        <p className="text-gray-600 font-medium mb-2">
                          {source.organization}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {source.summary}
                        </p>
                      </div>
                      
                      <div className="ml-6 flex flex-col items-end space-y-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          typeColors[source.type as keyof typeof typeColors] || 'bg-gray-100 text-gray-800 border-gray-200'
                        }`}>
                          {source.type === 'nasa' ? 'NASA' : source.type}
                        </span>
                        
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Credibility:</span>
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full ${
                              source.credibilityScore >= 9 ? 'bg-green-500' :
                              source.credibilityScore >= 7 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}></div>
                            <span className="ml-1 text-sm font-medium">
                              {source.credibilityScore}/10
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-apollo-blue hover:text-blue-700 font-medium"
                      >
                        Visit Source
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Source Statistics */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Source Quality Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-evidence-green mb-2">
                  {sources.filter(s => s.credibilityScore >= 9).length}
                </div>
                <div className="text-sm text-gray-600">High Credibility (9-10)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {sources.filter(s => s.credibilityScore >= 7 && s.credibilityScore < 9).length}
                </div>
                <div className="text-sm text-gray-600">Good Credibility (7-8)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-apollo-blue mb-2">
                  {Math.round(sources.reduce((acc, s) => acc + s.credibilityScore, 0) / sources.length * 10) / 10}
                </div>
                <div className="text-sm text-gray-600">Average Score</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}