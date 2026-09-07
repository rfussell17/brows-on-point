import { SITE_URL } from '@/lib/site'

export function BlogPostingJsonLd({
  title,
  description,
  date,
  slug,
  ogImage,
  category,
}: {
  title: string
  description: string
  date: string
  slug: string
  ogImage?: string
  category?: string
}) {
  const image = `${SITE_URL}${ogImage ?? '/og/brows-on-point-og.jpg'}`
  const pageUrl = `${SITE_URL}/blog/${slug}`

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    url: pageUrl,
    image: [image],
    author: { '@type': 'Person', name: 'Jamie Fussell' },
    publisher: {
      '@type': 'Organization',
      name: 'Brows on Point',
      url: SITE_URL,
    },
    ...(category && { articleSection: category }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
