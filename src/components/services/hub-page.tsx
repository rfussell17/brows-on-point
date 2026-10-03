import { Container } from '@/components/container'
import FAQSection from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { BreadcrumbJsonLd } from '@/components/json-ld/breadcrumb'
import { Link } from '@/components/link'
import {
  ACUITY_URL,
  BOOKING_CTA,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
} from '@/lib/site'
import type { ReactNode } from 'react'
import GoogleReviewsBanner from '../media/google-reviews-banner'
import { ServiceCard } from './service-card'

export interface HubSpoke {
  title: string
  description: string
  href: string
  image?: string
}

interface HubPageProps {
  title: string
  /** This hub's own path, e.g. "/brows" — used for its BreadcrumbList. */
  path: string
  intro: ReactNode
  spokes: HubSpoke[]
  secondaryCta?: { text: string; href: string }
  faqs?: Array<{ question: string; answer: string }>
  /** Optional H2 content blocks rendered after the spoke grid, for pages that need exact-phrase headings. */
  sections?: Array<{ heading: string; content: ReactNode }>
}

export default function HubPage({
  title,
  path,
  intro,
  spokes,
  secondaryCta,
  faqs,
  sections,
}: HubPageProps) {
  // Section backgrounds alternate down the page: spoke grid (primary-950),
  // then optional text sections (primary), then optional FAQ (primary-950 after
  // sections, primary otherwise), then the reviews/CTA/map banner, which must
  // differ from whatever lands right before it.
  const hasSections = Boolean(sections && sections.length > 0)
  const faqBgVariant = hasSections ? 'primary-950' : 'primary'
  const reviewsBgVariant =
    Boolean(faqs) !== hasSections ? 'primary-950' : 'primary'

  return (
    <div>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: title, path },
        ]}
      />
      <div className="bg-primary px-6 py-24 sm:py-32 lg:px-8">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-display text-light">{title}</h1>
            <div className="mt-6 text-lead text-gray-100">{intro}</div>
            <div className="mt-8 flex items-center justify-center gap-x-4">
              <Link
                href={ACUITY_URL}
                className="inline-flex rounded-md bg-light px-4 py-2.5 text-body font-semibold text-primary shadow-sm hover:bg-primary-50"
              >
                Book Now
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex rounded-md border border-light px-4 py-2.5 text-body font-semibold text-light hover:bg-light/10"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-primary-950 py-24 ring-1 ring-inset ring-secondary-700 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {spokes.map((spoke) => (
              <ServiceCard
                key={spoke.href}
                title={spoke.title}
                description={spoke.description}
                href={spoke.href}
                image={spoke.image}
              />
            ))}
          </div>
        </Container>
      </div>

      {hasSections && sections && (
        <div className="bg-primary py-24 ring-1 ring-inset ring-secondary-700 sm:py-32">
          <Container>
            <div className="mx-auto max-w-3xl space-y-16">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-heading text-light">{section.heading}</h2>
                  <div className="mt-6 space-y-4 text-body text-gray-100">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}

      {faqs && <FAQSection faqs={faqs} bgVariant={faqBgVariant} />}

      <GoogleReviewsBanner
        rating={GOOGLE_RATING}
        reviewCount={GOOGLE_REVIEW_COUNT}
        reviewsUrl={GOOGLE_REVIEWS_URL}
        bgVariant={reviewsBgVariant}
        cta={BOOKING_CTA}
      />

      <Footer />
    </div>
  )
}
