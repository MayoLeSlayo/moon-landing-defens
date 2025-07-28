'use client';

import { useState } from 'react';
import { SearchResult, EvidenceResponse } from '@/types';

interface SearchResultsProps {
  results: SearchResult[];
}

export default function SearchResults({ results }: SearchResultsProps) {
  const [selectedResponseType, setSelectedResponseType] = useState<'short' | 'comprehensive' | 'educational'>('short');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-6xl mx-auto mt-8">
      {/* Response Type Selector */}
      <div className="mb-6 flex justify-center">
        <div className="bg-white rounded-lg p-1 shadow-md">
          {['short', 'comprehensive', 'educational'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedResponseType(type as any)}
              className={`px-4 py-2 rounded-md capitalize transition-colors ${
                selectedResponseType === type
                  ? 'bg-apollo-blue text-white'
                  : 'text-gray-600 hover:text-apollo-blue'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        {results.map((result) => {
          const response = result.responses.find(r => r.responseType === selectedResponseType) || result.responses[0];
          
          return (
            <div key={result.conspiracy.id} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-apollo-blue">
              {/* Conspiracy Theory Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {result.conspiracy.title}
                    </h3>
                    <div className="conspiracy-highlight mb-3">
                      <p className="text-gray-700 italic">
                        <strong>Claim:</strong> &quot;{result.conspiracy.claim}&quot;
                      </p>
                    </div>
                  </div>
                  <div className="ml-4 flex flex-col items-end">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      result.conspiracy.category === 'physics' ? 'bg-blue-100 text-blue-800' :
                      result.conspiracy.category === 'photography' ? 'bg-green-100 text-green-800' :
                      result.conspiracy.category === 'technology' ? 'bg-purple-100 text-purple-800' :
                      result.conspiracy.category === 'historical' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {result.conspiracy.category}
                    </span>
                    <span className="text-sm text-gray-500 mt-1">
                      Match: {Math.round(result.relevanceScore * 10)}%
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {result.matchedKeywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="bg-evidence-green bg-opacity-20 text-evidence-green px-2 py-1 rounded text-xs font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Response */}
              {response && (
                <div className="evidence-highlight mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 capitalize">
                      {response.responseType} Response
                    </h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">
                        Effectiveness: {response.effectiveness}/10
                      </span>
                      <button
                        onClick={() => copyToClipboard(response.content, response.id)}
                        className="bg-apollo-blue text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                      >
                        {copiedId === response.id ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                    {response.content}
                  </p>
                </div>
              )}

              {/* Sources */}
              {response?.scientificSources && response.scientificSources.length > 0 && (
                <div className="border-t pt-4">
                  <h5 className="text-sm font-semibold text-gray-700 mb-3">Scientific Sources:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {response.scientificSources.map((source) => (
                      <div key={source.id} className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 pr-3">
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-apollo-blue hover:text-blue-700 font-medium text-sm"
                            >
                              {source.title}
                            </a>
                            <p className="text-xs text-gray-600 mt-1">
                              {source.organization}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full ${
                              source.credibilityScore >= 9 ? 'bg-green-500' :
                              source.credibilityScore >= 7 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`} title={`Credibility: ${source.credibilityScore}/10`}>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Common Variations */}
              {result.conspiracy.commonVariations.length > 0 && (
                <div className="border-t pt-4 mt-4">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Common Variations:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {result.conspiracy.commonVariations.slice(0, 3).map((variation, index) => (
                      <li key={index} className="italic">• &quot;{variation}&quot;</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* No results message */}
      {results.length > 10 && (
        <div className="text-center mt-6 p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-600">
            Showing top {Math.min(10, results.length)} results of {results.length} total matches.
          </p>
        </div>
      )}
    </div>
  );
}