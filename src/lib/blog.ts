import fs from 'fs'
import path from 'path'
import { blogPosts } from './blog-posts'
import type { BlogPost } from './blog-types'

export type { BlogPost, BlogPostMeta } from './blog-types'
export { formatPostDate } from './blog-types'

export function calcReadTime(slug: string): string {
  const filePath = path.join(process.cwd(), 'src/app/blog', slug, 'page.tsx')
  try {
    const source = fs.readFileSync(filePath, 'utf-8')
    const returnMatch = source.match(/return\s*\(([\s\S]*)\)\s*\}\s*$/)
    const jsxContent = returnMatch ? returnMatch[1] : source
    const wordCount = jsxContent
      .replace(/<[^>]+>/g, ' ')
      .replace(/\{[^}]*\}/g, ' ')
      .split(/\s+/)
      .filter((w) => /[a-zA-Z]{3,}/.test(w)).length
    return `${Math.max(1, Math.ceil(wordCount / 200))} min read`
  } catch {
    return '5 min read'
  }
}

export function coverImagePath(slug: string): string | null {
  const conventionImage = `/blog/${slug}.jpg`
  const exists = fs.existsSync(
    path.join(process.cwd(), 'public', conventionImage),
  )
  return exists ? conventionImage : null
}

/**
 * Reads the post registry (src/lib/blog-posts.ts) and returns every post
 * sorted newest-first, with its read time and cover image resolved. Backs
 * the blog index, its JSON-LD, and the sitemap.
 */
export function getPosts(): BlogPost[] {
  return Object.entries(blogPosts)
    .map(
      ([slug, postMeta]): BlogPost => ({
        ...postMeta,
        slug,
        imageUrl: coverImagePath(slug),
        readTime: calcReadTime(slug),
      }),
    )
    .sort((a, b) => b.date.localeCompare(a.date))
}
