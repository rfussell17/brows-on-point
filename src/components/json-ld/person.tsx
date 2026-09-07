import { SITE_URL } from '@/lib/site'

export function PersonJsonLd({ credentials }: { credentials: string[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jamie Fussell',
    jobTitle: 'Owner, Lash & Brow Artist',
    worksFor: {
      '@type': 'LocalBusiness',
      name: 'Brows on Point',
      url: SITE_URL,
    },
    hasCredential: credentials.map((name) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: name,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
