'use client'

import { useState } from 'react'
import { BlogCard } from './blog-card'
import type { BlogPost } from '@/lib/blog-types'

export function BlogFilter({
  posts,
  categories,
}: {
  posts: BlogPost[]
  categories: string[]
}) {
  const [active, setActive] = useState<string | null>(null)

  const filtered = active ? posts.filter((p) => p.category === active) : posts

  const counts: Record<string, number> = {}
  posts.forEach((post) => {
    counts[post.category] = (counts[post.category] ?? 0) + 1
  })

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActive(null)}
          className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide uppercase transition-colors ${
            active === null
              ? 'bg-primary text-light'
              : 'bg-primary-100 text-primary hover:bg-primary-200'
          }`}
        >
          All Posts <span className="opacity-60">({posts.length})</span>
        </button>
        {categories.map((category) => {
          const isActive = active === category
          return (
            <button
              key={category}
              onClick={() => setActive(isActive ? null : category)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide uppercase transition-colors ${
                isActive
                  ? 'bg-primary text-light'
                  : 'bg-primary-100 text-primary hover:bg-primary-200'
              }`}
            >
              {category}{' '}
              <span className="opacity-60">({counts[category] ?? 0})</span>
            </button>
          )
        })}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  )
}
