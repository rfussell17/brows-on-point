import { SITE_URL } from '@/lib/site'
import type { Metadata } from 'next'
import { coverImagePath, type BlogPostMeta } from './blog'

/**
 * Builds a post's Next.js `metadata` export from the same `postMeta` object
 * the page already defines for its header and JSON-LD, so title/description
 * are never written twice. Resolves the cover image itself — a post file
 * never needs to know whether /public/blog/<slug>.jpg exists.
 */
export function createPostMetadata(
  slug: string,
  postMeta: BlogPostMeta,
): Metadata {
  const { title, description, date, keywords = [] } = postMeta
  const image = `${SITE_URL}${coverImagePath(slug) ?? '/default-image.jpg'}`

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    keywords,
    openGraph: {
      type: 'article',
      url: `/blog/${slug}`,
      title,
      description,
      siteName: 'Brows on Point',
      publishedTime: date,
      modifiedTime: date,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
