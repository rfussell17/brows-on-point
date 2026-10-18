import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import GalleryGrid, { type GalleryGroup } from '@/components/gallery-grid'
import { BreadcrumbJsonLd } from '@/components/json-ld/breadcrumb'
import GoogleReviewsBanner from '@/components/media/google-reviews-banner'
import {
  BOOKING_CTA,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
} from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Before and after photos of lash lifts, brows, permanent makeup, teeth whitening, tooth gems and skin tightening at Brows on Point in West Kelowna.',
  robots: {
    index: false,
    follow: false,
  },
}

const S = '/services'

// Every service photo in public/services, grouped by the service it shows.
// lashes-tinting-closeup-01.jpg is left out: it isn't a tint-only photo.
// Brow Tinting & Shaping has no photo yet.
const groups: GalleryGroup[] = [
  {
    title: 'Lash Lift and Tint',
    href: '/lash-lift-and-tint',
    images: [
      `${S}/lashes/lashes-lift-bomb-before-after-01.jpg`,
      `${S}/lashes/lashes-lift-bomb-before-after-02.jpg`,
      `${S}/lashes/lashes-lift-bomb-before-after-03.jpg`,
      `${S}/lashes/lashes-lift-keratin-before-after-01.jpg`,
      `${S}/lashes/lashes-lift-keratin-before-after-02.jpg`,
    ],
  },
  {
    title: 'Microblading',
    href: '/microblading',
    images: [
      `${S}/permanent-makeup/permanent-makeup-microblading-closeup-01.jpg`,
      `${S}/permanent-makeup/permanent-makeup-microblading-before-after-01.jpg`,
      `${S}/permanent-makeup/permanent-makeup-microblading-before-after-02.jpg`,
      `${S}/permanent-makeup/permanent-makeup-microblading-before-after-03.jpg`,
      `${S}/permanent-makeup/permanent-makeup-microblading-healed-01.jpg`,
    ],
  },
  {
    title: 'Powder Brows',
    href: '/powder-brows',
    images: [
      `${S}/permanent-makeup/permanent-makeup-powder-brows-before-after-01.jpg`,
      `${S}/permanent-makeup/permanent-makeup-powder-brows-before-after-02.jpg`,
      `${S}/permanent-makeup/permanent-makeup-powder-brows-before-after-03.jpg`,
      `${S}/permanent-makeup/permanent-makeup-powder-brows-healed-01.jpg`,
    ],
  },
  {
    title: 'Permanent Eyeliner',
    href: '/permanent-eyeliner',
    images: [
      `${S}/permanent-makeup/permanent-makeup-eyeliner-before-after-01.jpg`,
      `${S}/permanent-makeup/permanent-makeup-eyeliner-closeup-01.jpg`,
    ],
  },
  {
    title: 'Saline Tattoo & PMU Removal',
    href: '/saline-tattoo-removal',
    images: [
      `${S}/permanent-makeup/permanent-makeup-removal-saline-before-after-01.jpg`,
      `${S}/permanent-makeup/permanent-makeup-removal-saline-before-after-02.jpg`,
      `${S}/permanent-makeup/permanent-makeup-removal-saline-emergency-healing-01.jpg`,
    ],
  },
  {
    title: 'Teeth Whitening',
    href: '/teeth-whitening',
    images: [
      `${S}/smile/smile-teeth-whitening-basic-before-after-01.jpg`,
      `${S}/smile/smile-teeth-whitening-basic-before-after-02.jpg`,
      `${S}/smile/smile-teeth-whitening-basic-before-after-03.jpg`,
      `${S}/smile/smile-teeth-whitening-basic-before-after-04.jpg`,
      `${S}/smile/smile-teeth-whitening-ultra-before-after-01.jpg`,
      `${S}/smile/smile-teeth-whitening-ultra-before-after-02.jpg`,
      `${S}/smile/smile-teeth-whitening-ultra-before-after-03.jpg`,
      `${S}/smile/smile-teeth-whitening-before-after-01.jpg`,
    ],
  },
  {
    title: 'Swarovski Tooth Gems',
    href: '/tooth-gems',
    images: [
      `${S}/smile/smile-tooth-gem-closeup-01.jpg`,
      `${S}/smile/smile-tooth-gem-closeup-02.jpg`,
      `${S}/smile/smile-tooth-gem-closeup-03.jpg`,
      `${S}/smile/smile-tooth-gem-closeup-04.jpg`,
    ],
  },
  {
    title: 'Skin Tightening',
    href: '/skin-tightening',
    images: [`${S}/skin-tightening/skin-tightening-treatment-closeup-01.jpg`],
  },
]

export default function GalleryPage() {
  return (
    <div>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ]}
      />
      <div className="bg-primary py-28 sm:py-36">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-display text-light">Gallery</h1>
            <p className="mt-8 text-lead text-gray-100">
              Real results from the studio. Tap any photo to see it larger.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-primary-950 py-24 ring-1 ring-inset ring-secondary-700 sm:py-32">
        <Container>
          <GalleryGrid groups={groups} />
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
