import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shaivya Bora, Product Manager',
  description: 'PM with 4.5+ years building products across Fintech, Media, AI & B2B SaaS. Currently leading AI voice bots at SquadStack.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
