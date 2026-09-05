import { getPosts } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'
import type { MetadataRoute } from 'next'

const routes = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/training',
  '/brows',
  '/brows/brow-tint-and-shape',
  '/lashes',
  '/lashes/lash-lift-and-tint',
  '/lashes/lash-and-brow-tinting',
  '/lashes/lash-growth-serum',
  '/permanent-makeup',
  '/permanent-makeup/microblading',
  '/permanent-makeup/powder-brows',
  '/permanent-makeup/permanent-eyeliner',
  '/permanent-makeup/saline-tattoo-removal',
  '/smile',
  '/smile/teeth-whitening',
  '/smile/sensitive-teeth-whitening',
  '/smile/tooth-gems',
  '/skin-tightening',
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
