import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moon Landing Defense System',
  description: 'AI-powered knowledge base for defending moon landing facts and countering conspiracy theories',
  keywords: 'moon landing, Apollo, NASA, conspiracy theories, space facts, evidence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 dark:bg-space-black">
          {children}
        </div>
      </body>
    </html>
  )
}