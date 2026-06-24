// app/layout.tsx

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Hurricane, Roboto } from 'next/font/google'

export const metadata: Metadata = {
  title: {
    template: '%s - Radiant',
    default: 'Radiant - Close every deal',
  },
}

const hurricane = Hurricane({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-hurricane',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // or any weights you need
  display: 'swap',
  variable: '--font-roboto',
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${hurricane.variable} ${roboto.variable}`}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/blog/feed.xml"
        />
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </head>
      <body className="text-gray-600 antialiased">
        <Navbar />
        <div className="min-h-screen">
          <main>{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  )
}
