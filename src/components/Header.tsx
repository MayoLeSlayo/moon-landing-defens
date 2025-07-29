'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="glass-morphism backdrop-blur-md text-white shadow-2xl border-b border-white border-opacity-20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center cosmic-glow group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">🌙</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold stellar-text">Moon Landing Defense</h1>
              <p className="text-sm text-gray-300">Evidence-Based Truth</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-yellow-300 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10">
              Search
            </Link>
            <Link href="/chat" className="hover:text-yellow-300 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10">
              AI Assistant
            </Link>
            <Link href="/evidence" className="hover:text-yellow-300 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10">
              Evidence Library
            </Link>
            <Link href="/admin" className="hover:text-yellow-300 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10">
              Admin
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-apollo-blue transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-apollo-blue">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-lunar-silver transition-colors" onClick={() => setIsMenuOpen(false)}>
                Search
              </Link>
              <Link href="/chat" className="hover:text-lunar-silver transition-colors" onClick={() => setIsMenuOpen(false)}>
                AI Assistant
              </Link>
              <Link href="/evidence" className="hover:text-lunar-silver transition-colors" onClick={() => setIsMenuOpen(false)}>
                Evidence Library
              </Link>
              <Link href="/admin" className="hover:text-lunar-silver transition-colors" onClick={() => setIsMenuOpen(false)}>
                Admin
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}