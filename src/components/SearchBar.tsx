'use client';

import { useState } from 'react';
import { SearchResult } from '@/types';
import { SearchEngine } from '@/lib/search';

interface SearchBarProps {
  onResults: (results: SearchResult[]) => void;
  placeholder?: string;
}

export default function SearchBar({ onResults, placeholder = "Search conspiracy theories or enter a claim..." }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const searchEngine = new SearchEngine();

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      onResults([]);
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate a slight delay for better UX
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const results = searchEngine.fuzzySearch(searchQuery);
      onResults(results);
    } catch (error) {
      console.error('Search error:', error);
      onResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    // Debounced search
    if (value.length > 2) {
      handleSearch(value);
    } else if (value.length === 0) {
      onResults([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      handleSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
          <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full pl-16 pr-28 py-6 text-xl border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white shadow-lg"
        />
        
        <div className="absolute inset-y-0 right-0 pr-6 flex items-center">
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          ) : (
            <button
              type="submit"
              className="btn-modern btn-primary"
              disabled={!query.trim()}
            >
              Search
            </button>
          )}
        </div>
      </div>
      
      {/* Quick suggestions */}
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <span className="text-sm text-gray-600 mr-2 flex items-center">Try:</span>
        {['waving flag', 'no stars', 'radiation belt', 'shadows', 'moon rocks'].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => {
              setQuery(suggestion);
              handleSearch(suggestion);
            }}
            className="text-sm bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-all duration-300 text-gray-700"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </form>
  );
}