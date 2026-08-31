import {
  ArrowPathIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  HeartIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline'
import { type ComponentType, type FC, type ReactNode } from 'react'
import { Container } from '../container'
import InfoBanner from './info-banner'
import type { ServiceData } from './service-data'

interface ServiceDetailProps {
  data: ServiceData
  className?: string
}

type BgVariant = 'primary' | 'primary-950'
const opposite = (variant: BgVariant): BgVariant =>
  variant === 'primary' ? 'primary-950' : 'primary'

/**
 * Walks every full-bleed section ServiceDetail can render — extraSections,
 * then serviceOptions, then the main prep/process/aftercare block — each
 * taking the opposite tone of whatever precedes it, starting from the
 * (always bg-primary) header. This is what keeps two identically-coloured
 * sections from ever landing back to back, even on pages that render more
 * than one of these optional blocks. ServicePage continues this same chain
 * one step further for the testimonial's colour.
 */
const getSectionVariants = (data: ServiceData) => {
  let last: BgVariant = 'primary'
  let extraSectionsVariant: BgVariant | undefined
  let serviceOptionsVariant: BgVariant | undefined

  if (data.extraSections) {
    extraSectionsVariant = opposite(last)
    last = extraSectionsVariant
  }
  if (data.serviceOptions) {
    serviceOptionsVariant = opposite(last)
    last = serviceOptionsVariant
  }

  return {
    extraSectionsVariant,
    serviceOptionsVariant,
    detailVariant: opposite(last),
  }
}

export const getServiceDetailBgVariant = (data: ServiceData): BgVariant =>
  getSectionVariants(data).detailVariant

const ServiceDetail: FC<ServiceDetailProps> = ({ data, className = '' }) => {
  const { extraSectionsVariant, serviceOptionsVariant, detailVariant } =
    getSectionVariants(data)
  const detailBgClass =
    detailVariant === 'primary-950'
      ? 'bg-primary-950 ring-1 ring-inset ring-secondary-700'
      : 'bg-primary'
  const serviceOptionsBgClass =
    serviceOptionsVariant === 'primary-950'
      ? 'bg-primary-950 ring-1 ring-inset ring-secondary-700'
      : 'bg-primary'
  const renderSection = (
    title: string,
    Icon: ComponentType<{ className?: string }>,
    content: ReactNode,
    variant: 'light' | 'dark' | 'darker' = 'light',
  ) => {
    if (variant === 'light') {
      return (
        <div className="rounded-2xl bg-gray-200 p-6 ring-1 ring-primary-100">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
            <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
            {title}
          </h3>
          <div className="prose prose-sm mt-3 max-w-none leading-7 text-gray-600">
            {content}
          </div>
        </div>
      )
    }
    const cardBgClass =
      variant === 'darker' ? 'bg-primary-950' : 'bg-primary-800'
    return (
      <div
        className={`rounded-lg ${cardBgClass} p-6 ring-1 ring-secondary-700`}
      >
        <h3 className="flex items-center gap-2 text-lg font-semibold text-light">
          <Icon className="h-5 w-5 text-secondary-300" aria-hidden="true" />
          {title}
        </h3>
        <div className="prose prose-sm prose-invert mt-3 max-w-none leading-7 text-light/80">
          {content}
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      {data.extraSections && (
        <InfoBanner
          sections={data.extraSections}
          bgVariant={extraSectionsVariant}
        />
      )}

      {data.serviceOptions && (
        <div className={`${serviceOptionsBgClass} py-24 sm:py-32`}>
          <Container>
            <h3 className="text-lg font-semibold text-light">
              {data.serviceOptionsHeading ?? 'Choose Your Service'}
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {data.serviceOptions.map((option) => (
                <div
                  key={option.name}
                  className="rounded-lg bg-primary-800 p-6 ring-1 ring-secondary-700 transition-colors hover:bg-primary-700 hover:ring-secondary-500"
                >
                  <h4 className="text-lg font-semibold text-light">{option.name}</h4>
                  <div className="mt-1 text-lg font-semibold text-light">
                    {option.price}
                  </div>
                  <div className="prose prose-sm prose-invert mt-2 leading-6 text-light/70">
                    {option.description}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}

      <div className={`relative ${detailBgClass} py-24 sm:py-32`}>
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {renderSection(
              'How to Prepare',
              ClipboardDocumentCheckIcon,
              data.preparation,
            )}
            {renderSection('Process', ArrowPathIcon, data.process)}
            {renderSection('Aftercare Instructions', HeartIcon, data.aftercare)}
            {renderSection('Results', CheckBadgeIcon, data.benefits)}
          </div>

          {(data.contraindications || data.policyNotice) && (
            <div
              className={
                data.contraindications && data.policyNotice
                  ? 'mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2'
                  : 'mt-10'
              }
            >
              {data.contraindications &&
                renderSection(
                  'Who Should Avoid This',
                  ShieldExclamationIcon,
                  data.contraindications,
                  'darker',
                )}
              {data.policyNotice &&
                renderSection(
                  'Booking Policy',
                  CurrencyDollarIcon,
                  data.policyNotice,
                  'dark',
                )}
            </div>
          )}

          {data.touchUpPricing && (
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-light">
                Touch-Up Pricing
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-lg bg-primary-50 p-6 text-center ring-1 ring-primary-100">
                  <div className="text-base text-gray-600">
                    First Appointment
                  </div>
                  <div className="mt-1 text-lg font-semibold text-primary">
                    {data.touchUpPricing.firstAppointment}
                  </div>
                </div>
                <div className="rounded-lg bg-primary-50 p-6 text-center ring-1 ring-primary-100">
                  <div className="text-base text-gray-600">Touch-Up</div>
                  <div className="mt-1 text-lg font-semibold text-primary">
                    {data.touchUpPricing.touchUp}
                  </div>
                </div>
                <div className="rounded-lg bg-primary-50 p-6 text-center ring-1 ring-primary-100">
                  <div className="text-base text-gray-600">Year One Total</div>
                  <div className="mt-1 text-lg font-semibold text-primary">
                    {data.touchUpPricing.yearOne}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  )
}

export default ServiceDetail
