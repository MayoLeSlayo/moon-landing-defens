'use client';

import { useState } from 'react';
import Link from 'next/link';

const TOP_PROOFS = [
  { label: 'Retroreflectors', href: '/evidence/retroreflectors' },
  { label: '400K Workforce', href: '/evidence/workforce' },
  { label: 'Moon Rocks', href: '/evidence/moon-rocks' },
  { label: '30+ Countries Confirmed', href: '/evidence/countries-confirmed-60s-moon-landings' },
  { label: 'Apollo Footage', href: '/evidence/images-videos-prove-moon-landings' },
];

export default function Header({ transparent = false }: { transparent?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`absolute top-0 left-0 right-0 z-[100] ${transparent ? 'bg-transparent' : 'bg-gradient-to-r from-black to-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
              <span className="text-white font-bold text-lg">🌙</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Were The Moon Landings Real?</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#search" className="text-white hover:text-gray-200 transition-colors font-bold uppercase tracking-widest text-sm">
              Search
            </Link>

            {/* Top Proofs Dropdown — pure CSS hover via group */}
            <div className="group relative">
              <button className="text-white hover:text-gray-200 transition-colors font-bold uppercase tracking-widest text-sm flex items-center gap-1">
                Top Proofs
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 w-56 pt-2 hidden group-hover:block z-[100]">
                <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-1">
                  {TOP_PROOFS.map((proof) => (
                    <Link key={proof.href} href={proof.href} className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white transition-colors">
                      {proof.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/evidence" className="text-white hover:text-gray-200 transition-colors font-bold uppercase tracking-widest text-sm">
              Evidence Library
            </Link>
            <Link href="/debate-tips" className="text-white hover:text-gray-200 transition-colors font-bold uppercase tracking-widest text-sm">
              Debate Tips
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
          <div className="md:hidden py-4 border-t border-white border-opacity-20 bg-gray-950 bg-opacity-100 rounded-b-xl mt-4">
            <nav className="flex flex-col space-y-2">
              <Link href="/#search" className="text-white hover:text-gray-200 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 font-bold uppercase tracking-widest text-sm" onClick={() => setIsMenuOpen(false)}>
                Search
              </Link>

              <div className="px-4 pt-1 pb-1">
                <p className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-1">Top Proofs</p>
                {TOP_PROOFS.map((proof) => (
                  <Link key={proof.href} href={proof.href} className="block text-gray-200 hover:text-white py-1 text-sm pl-2" onClick={() => setIsMenuOpen(false)}>
                    {proof.label}
                  </Link>
                ))}
              </div>
              <Link href="/evidence" className="text-white hover:text-gray-200 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 font-bold uppercase tracking-widest text-sm" onClick={() => setIsMenuOpen(false)}>
                Evidence Library
              </Link>
              <Link href="/debate-tips" className="text-white hover:text-gray-200 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 font-bold uppercase tracking-widest text-sm" onClick={() => setIsMenuOpen(false)}>
                Debate Tips
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}