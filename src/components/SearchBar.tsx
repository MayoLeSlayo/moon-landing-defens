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
    <form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
          <svg className="h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full pl-16 pr-20 py-6 text-xl glass-morphism border-2 border-white border-opacity-20 rounded-2xl focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none transition-all duration-300 bg-white bg-opacity-10 text-white placeholder-gray-300 cosmic-glow"
        />
        
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-300"></div>
          ) : (
            <button
              type="submit"
              className="glass-morphism text-white px-6 py-3 rounded-xl hover:bg-white hover:bg-opacity-20 transition-all duration-300 font-medium cosmic-glow"
              disabled={!query.trim()}
            >
              Search
            </button>
          )}
        </div>
      </div>
      
      {/* Quick suggestions */}
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <span className="text-sm text-gray-200 mr-2 flex items-center">Try:</span>
        {['waving flag', 'no stars', 'radiation belt', 'shadows', 'moon rocks'].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => {
              setQuery(suggestion);
              handleSearch(suggestion);
            }}
            className="text-sm glass-morphism hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-full transition-all duration-300 text-gray-200 hover:text-white"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </form>
  );
}