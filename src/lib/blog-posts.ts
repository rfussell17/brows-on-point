import type { BlogPostMeta } from './blog-types'

/**
 * Next's App Router only allows specific named exports from a page.tsx file
 * (default, metadata, generateStaticParams, etc.) — anything else fails
 * Next's own generated type validation at build time. So a post's metadata
 * can't live as a custom export inside its own page.tsx; it's registered
 * here instead, keyed by slug, and the post file imports its own entry back
 * out to build its `metadata` export and pass to <BlogPostLayout/>.
 *
 * Add a new post by adding its folder at src/app/blog/<slug>/page.tsx and
 * an entry here with the same slug.
 */
export const blogPosts: Record<string, BlogPostMeta> = {
  'lash-lift-aftercare-tips': {
    title: 'How to Make Your Lash Lift and Tint Last Longer',
    description:
      'The first 48 hours after a lash lift and tint matter most. Here are the aftercare habits that help your lift and tint last the full 6-12 weeks.',
    date: '2026-09-05',
    category: 'Lashes',
    keywords: [
      'lash lift aftercare',
      'lash lift and tint',
      'how long does a lash lift last',
    ],
  },
}
