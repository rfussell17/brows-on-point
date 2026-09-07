import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { BlogFilter } from '@/components/blog/blog-filter'
import { BreadcrumbJsonLd } from '@/components/json-ld/breadcrumb'
import GoogleReviewsBanner from '@/components/media/google-reviews-banner'
import { getPosts } from '@/lib/blog'
import {
  BOOKING_CTA,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
  ogMeta,
} from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Lash, brow, and skin care tips from Brows on Point in West Kelowna — aftercare advice, treatment comparisons, and answers to what clients ask most.',
  openGraph: ogMeta('/og/blog-og_brows-on-point.jpg', 'Blog'),
}

export default function BlogPage() {
  const posts = getPosts()
  const categories = Array.from(
    new Set(posts.map((post) => post.category)),
  ).sort()

  return (
    <div>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]}
      />
      <div className="bg-primary py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl text-light sm:text-7xl">Blog</h1>
            <p className="mt-8 text-lg leading-8 text-gray-100">
              Aftercare tips, treatment comparisons, and answers to what
              clients ask most, from the studio at Brows on Point.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-primary-950 py-24 ring-1 ring-inset ring-secondary-700 sm:py-32">
        <Container>
          {posts.length > 0 ? (
            <BlogFilter posts={posts} categories={categories} />
          ) : (
            <p className="text-center text-lg text-light/70">
              No posts yet — check back soon.
            </p>
          )}
        </Container>
      </div>

      <GoogleReviewsBanner
        rating={GOOGLE_RATING}
        reviewCount={GOOGLE_REVIEW_COUNT}
        reviewsUrl={GOOGLE_REVIEWS_URL}
        bgVariant="primary"
        cta={BOOKING_CTA}
      />

      <Footer />
    </div>
  )
}
