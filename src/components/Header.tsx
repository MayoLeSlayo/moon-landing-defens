'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-r from-black to-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
              <span className="text-white font-bold text-lg">🌙</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Moon Landing Defense</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-200 transition-colors font-medium">
              Search
            </Link>
            <Link href="/chat" className="text-white hover:text-gray-200 transition-colors font-medium">
              AI Assistant
            </Link>
            <Link href="/evidence" className="text-white hover:text-gray-200 transition-colors font-medium">
              Evidence Library
            </Link>
            <Link href="/debate-tips" className="text-white hover:text-gray-200 transition-colors font-medium">
              Debate Tips
            </Link>
            <Link href="/admin" className="text-white hover:text-gray-200 transition-colors font-medium">
              Admin
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors text-white"
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
          <div className="md:hidden py-4 border-t border-white border-opacity-20 bg-black bg-opacity-50 backdrop-blur-sm rounded-b-xl mt-4">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-white hover:text-gray-200 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10" onClick={() => setIsMenuOpen(false)}>
                Search
              </Link>
              <Link href="/chat" className="text-white hover:text-gray-200 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10" onClick={() => setIsMenuOpen(false)}>
                AI Assistant
              </Link>
              <Link href="/evidence" className="text-white hover:text-gray-200 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10" onClick={() => setIsMenuOpen(false)}>
                Evidence Library
              </Link>
              <Link href="/debate-tips" className="text-white hover:text-gray-200 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10" onClick={() => setIsMenuOpen(false)}>
                Debate Tips
              </Link>
              <Link href="/admin" className="text-white hover:text-gray-200 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10" onClick={() => setIsMenuOpen(false)}>
                Admin
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}