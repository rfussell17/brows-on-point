export interface BlogPostMeta {
  title: string
  description: string
  /** ISO date string, e.g. '2026-03-05'. */
  date: string
  category: string
  keywords?: string[]
}

export interface BlogPost extends BlogPostMeta {
  slug: string
  /** Public path to a conventionally-named cover image, or null if none exists yet. */
  imageUrl: string | null
  readTime: string
}

export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
