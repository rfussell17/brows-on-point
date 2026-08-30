// app/layout.tsx

import { LocalBusinessJsonLd } from '@/components/json-ld/local-business'
import { Navbar } from '@/components/navbar'
import { SITE_URL } from '@/lib/site'

import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Hurricane, Roboto } from 'next/font/google'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Brows on Point',
    default:
      'Brows on Point | Lash, Brow & Permanent Makeup Studio in West Kelowna',
  },
  description:
    "West Kelowna's lash and brow bar for lash lifts, brow tinting, permanent makeup, teeth whitening, and tooth gems. Book online today.",
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
        {/* LAUNCH GATE: remove this line only when told the site is going live. See BLOCKERS.md. */}
        <meta name="robots" content="noindex, nofollow, noarchive" />
        <LocalBusinessJsonLd />
      </head>
      <body className="text-gray-600 antialiased">
        <Navbar />
        <div className="min-h-dvh">
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
