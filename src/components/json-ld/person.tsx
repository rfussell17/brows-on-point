import { BUSINESS_REF } from '@/lib/site'

export function PersonJsonLd({ credentials }: { credentials: string[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jamie Fussell',
    jobTitle: 'Owner, Lash & Brow Artist',
    worksFor: BUSINESS_REF,
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
