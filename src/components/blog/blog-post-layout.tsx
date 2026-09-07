import { Container } from '@/components/container'
import FAQSection from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { BlogPostingJsonLd } from '@/components/json-ld/blog-posting'
import { BreadcrumbJsonLd } from '@/components/json-ld/breadcrumb'
import GoogleReviewsBanner from '@/components/media/google-reviews-banner'
import {
  BOOKING_CTA,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
} from '@/lib/site'
import {
  calcReadTime,
  formatPostDate,
  type BlogPostMeta,
} from '@/lib/blog'
import type { ReactNode } from 'react'

interface BlogPostLayoutProps {
  slug: string
  postMeta: BlogPostMeta
  /** Short summary + bullets shown right under the header, before the body. */
  tldr?: { summary: string; points: string[] }
  /** The post body — plain prose (h2/h3/p/ul), styled via the typography plugin. */
  children: ReactNode
  faqs?: Array<{ question: string; answer: string }>
  relatedPosts?: Array<{ title: string; href: string }>
}

export function BlogPostLayout({
  slug,
  postMeta,
  tldr,
  children,
  faqs,
  relatedPosts,
}: BlogPostLayoutProps) {
  const { title, description, date, category, ogImage } = postMeta
  const readTime = calcReadTime(slug)

  return (
    <div className="blog-page">
      <BlogPostingJsonLd
        title={title}
        description={description}
        date={date}
        slug={slug}
        ogImage={ogImage}
        category={category}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: title, path: `/blog/${slug}` },
        ]}
      />

      <article className="bg-light py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-600 hover:text-secondary-700"
            >
              <span aria-hidden="true">←</span> Back to blog
            </Link>

            <header className="mt-8">
              <span className="inline-block rounded bg-secondary-100 px-3 py-1.5 text-xs font-semibold tracking-wide text-secondary-700 uppercase">
                {category}
              </span>
              <h1 className="mt-6 text-4xl text-primary sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                {description}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-primary-100 pt-6 text-sm text-gray-500">
                <span className="font-medium text-primary">
                  Jamie Fussell
                </span>
                <span aria-hidden="true">·</span>
                <time dateTime={date}>{formatPostDate(date)}</time>
                <span aria-hidden="true">·</span>
                <span>{readTime}</span>
              </div>
            </header>

            {tldr && (
              <aside className="mt-10 rounded-2xl bg-primary-50 p-6 ring-1 ring-primary-100">
                <div className="text-xs font-semibold tracking-wide text-secondary-600 uppercase">
                  TL;DR
                </div>
                <p className="mt-2 text-base leading-7 text-primary">
                  {tldr.summary}
                </p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-6 text-gray-600">
                  {tldr.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </aside>
            )}

            <div className="prose prose-lg mt-12 max-w-none prose-headings:text-primary prose-a:font-semibold prose-a:text-secondary-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-primary">
              {children}
            </div>

            {relatedPosts && relatedPosts.length > 0 && (
              <section className="mt-16 rounded-2xl bg-primary-50 p-6 ring-1 ring-primary-100">
                <div className="text-xs font-semibold tracking-wide text-secondary-600 uppercase">
                  Keep reading
                </div>
                <ul className="mt-4 space-y-2">
                  {relatedPosts.map((post) => (
                    <li key={post.href}>
                      <Link
                        href={post.href}
                        className="font-medium text-primary hover:text-secondary-600 hover:underline"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <p className="mt-16 text-center text-xs text-gray-400">
              This post is for general information and isn&apos;t a
              substitute for an in-person consultation.
            </p>
          </div>
        </Container>
      </article>

      {faqs && faqs.length > 0 && (
        <FAQSection faqs={faqs} bgVariant="primary" />
      )}

      <GoogleReviewsBanner
        rating={GOOGLE_RATING}
        reviewCount={GOOGLE_REVIEW_COUNT}
        reviewsUrl={GOOGLE_REVIEWS_URL}
        bgVariant={faqs && faqs.length > 0 ? 'primary-950' : 'primary'}
        cta={BOOKING_CTA}
      />

      <Footer />
    </div>
  )
}
