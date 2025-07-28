'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="space-gradient text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-lunar-silver rounded-full flex items-center justify-center">
              <span className="text-space-black font-bold text-lg">🌙</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Moon Landing Defense</h1>
              <p className="text-sm text-gray-300">Evidence-Based Truth</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-lunar-silver transition-colors">
              Search
            </Link>
            <Link href="/chat" className="hover:text-lunar-silver transition-colors">
              AI Assistant
            </Link>
            <Link href="/evidence" className="hover:text-lunar-silver transition-colors">
              Evidence Library
            </Link>
            <Link href="/admin" className="hover:text-lunar-silver transition-colors">
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