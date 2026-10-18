import { getPosts } from '@/lib/blog'
import { serviceLinks } from '@/lib/service-links'
import { SITE_URL } from '@/lib/site'
import type { MetadataRoute } from 'next'

const routes = [
  '/',
  '/about',
  '/testimonials',
  '/services',
  '/gallery',
  '/contact',
  '/training',
  ...serviceLinks.map((service) => service.href),
  '/blog',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts()
  const postRoutes = posts.map((post) => `/blog/${post.slug}`)

  return [...routes, ...postRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }))
}
