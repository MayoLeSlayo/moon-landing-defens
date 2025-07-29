'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
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
            <Link href="/admin" className="text-white hover:text-gray-200 transition-colors font-medium">
              Admin
            </Link>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 text-white"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
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
              <Link href="/admin" className="text-white hover:text-gray-200 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10" onClick={() => setIsMenuOpen(false)}>
                Admin
              </Link>
              <button
                onClick={toggleTheme}
                className="text-white hover:text-gray-200 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 text-left"
              >
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}