import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'Moon Landing Defense - Evidence-Based Truth',
  description: 'AI-powered evidence base for countering moon landing conspiracy theories with scientific facts and authoritative sources.',
  keywords: 'moon landing, Apollo, NASA, conspiracy theories, space facts, evidence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}