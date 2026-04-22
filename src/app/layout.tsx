import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-var',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-var',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-var',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shaivya Bora — Product Manager',
  description: 'PM with 4.5+ years building products across Fintech, Media, AI & B2B SaaS. Currently leading AI voice bots at SquadStack.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
