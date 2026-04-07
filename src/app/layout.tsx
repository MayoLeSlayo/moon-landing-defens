import type { Metadata } from 'next'
import './globals.css'
import ChatWidget from '@/components/ChatWidget'

export const metadata: Metadata = {
  title: 'Were The Moon Landings Real? — The Evidence',
  description: 'Did we land on the moon? Explore the science, sources, and evidence behind every moon landing conspiracy theory — and why they\'re wrong.',
  keywords: 'were the moon landings real, did we land on the moon, moon landing hoax, apollo conspiracy theory, moon landing evidence, was the moon landing faked',
  openGraph: {
    title: 'Were The Moon Landings Real? — The Evidence',
    description: 'Did we land on the moon? Explore the science behind every moon landing conspiracy theory.',
    siteName: 'Were The Moon Landings Real?',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}