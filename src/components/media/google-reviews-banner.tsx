import { StarIcon } from '@heroicons/react/24/solid'
import { BUSINESS_ADDRESS } from '@/lib/site'
import { Container } from '../container'
import { Link } from '../link'

interface GoogleReviewsBannerProps {
  rating: number
  reviewCount: number
  reviewsUrl: string
  /** Defaults to the studio's own address — no API key or Place ID needed. */
  mapAddress?: string
  bgVariant?: 'light' | 'primary' | 'primary-950'
}

const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" className="h-8 w-8 shrink-0" aria-hidden="true">
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20.5H24v7h11.3C33.7 31.9 29.3 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5-5C33.6 5.6 29 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.2-.1-2.4-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="m6.3 14.7 5.7 4.2C13.6 15.3 18.4 12 24 12c3.1 0 5.9 1.2 8 3.1l5-5C33.6 5.6 29 4 24 4c-7.5 0-14 4.2-17.7 10.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.2 0 9.8-1.7 13.4-4.6l-6.2-5.2C29.3 35.7 26.8 36.5 24 36.5c-5.3 0-9.7-3.1-11.3-7.5l-5.9 4.5C10 39.5 16.5 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20.5H24v7h11.3c-.8 2.2-2.2 4.1-4.1 5.4l6.2 5.2C41 34.7 44 29.8 44 24c0-1.2-.1-2.4-.4-3.5z"
    />
  </svg>
)

const GoogleReviewsBanner: React.FC<GoogleReviewsBannerProps> = ({
  rating,
  reviewCount,
  reviewsUrl,
  mapAddress = BUSINESS_ADDRESS,
  bgVariant = 'primary',
}) => {
  const isDark = bgVariant !== 'light'
  const bgClass =
    bgVariant === 'primary-950'
      ? 'bg-primary-950 ring-1 ring-inset ring-secondary-700'
      : bgVariant === 'primary'
        ? 'bg-primary'
        : 'bg-light'
  const headingColor = isDark ? 'text-light' : 'text-primary'
  const subColor = isDark ? 'text-light/70' : 'text-gray-600'
  const starOffColor = isDark ? 'text-primary-700' : 'text-gray-300'
  const ringClass = isDark ? 'ring-secondary-700' : 'ring-primary-100'
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    mapAddress,
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`

  return (
    <div className={`${bgClass} py-8 md:py-12 lg:py-20`}>
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:justify-around lg:gap-16">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-3">
              <GoogleLogo />
              <h2 className={`text-3xl sm:text-5xl ${headingColor}`}>
                {rating.toFixed(1)} out of 5
              </h2>
            </div>
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-6 w-6 ${
                      i < Math.round(rating) ? 'text-secondary-300' : starOffColor
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className={`text-base ${subColor}`}>
                Based on {reviewCount} Google reviews
              </p>
              <Link
                href={reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md bg-light px-3.5 py-2.5 text-base font-semibold text-primary shadow-sm hover:bg-primary-50"
              >
                Read Our Google Reviews
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-col items-center lg:w-[480px]">
            <div
              className={`h-64 w-full overflow-hidden rounded-lg ring-1 ${ringClass} sm:h-80 lg:h-auto lg:flex-1`}
            >
              <iframe
                src={mapSrc}
                title="Brows on Point location map"
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className={`mt-4 text-center text-base ${subColor}`}>
              {mapAddress}
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default GoogleReviewsBanner
