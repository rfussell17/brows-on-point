import {
  ArrowPathIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  HeartIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline'
import { type ComponentType, type FC, type ReactNode } from 'react'
import type { ServiceData } from './service-data'

interface ServiceDetailProps {
  data: ServiceData
  className?: string
}

const ServiceDetail: FC<ServiceDetailProps> = ({ data, className = '' }) => {
  const renderSection = (
    title: string,
    Icon: ComponentType<{ className?: string }>,
    content: ReactNode,
  ) => (
    <div className="rounded-2xl bg-primary-50 p-6 ring-1 ring-primary-100">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
        <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
        {title}
      </h3>
      <div className="prose prose-sm mt-3 max-w-none leading-7 text-gray-600">
        {content}
      </div>
    </div>
  )

  return (
    <div className={`${className} mb-24`}>
      {data.extraSections && (
        <div className="relative bg-light">
          <div className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
            <div className="flex flex-col space-y-10">
              {data.extraSections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-2xl font-semibold text-primary">
                    {section.heading}
                  </h2>
                  <div className="prose mt-2 text-base leading-7 text-gray-600">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {data.serviceOptions && (
        <div className="bg-primary-950 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-light">
              {data.serviceOptionsHeading ?? 'Choose Your Service'}
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {data.serviceOptions.map((option) => (
                <div
                  key={option.name}
                  className="rounded-lg bg-primary-800 p-6 ring-1 ring-secondary-700 transition-colors hover:bg-primary-700 hover:ring-secondary-500"
                >
                  <h4 className="font-semibold text-light">{option.name}</h4>
                  <div className="mt-1 text-lg font-semibold text-light">
                    {option.price}
                  </div>
                  <div className="prose prose-sm prose-invert mt-2 leading-6 text-light/70">
                    {option.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="relative bg-light">
        <div
          className={`mx-auto max-w-6xl px-6 lg:px-8 ${
            data.extraSections || data.serviceOptions ? 'pt-16' : ''
          }`}
        >
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

          {data.contraindications && (
            <div className="mt-6">
              {renderSection(
                'Who Should Avoid This',
                ShieldExclamationIcon,
                data.contraindications,
              )}
            </div>
          )}

          {data.touchUpPricing && (
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-primary">
                Touch-Up Pricing
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-lg bg-primary-50 p-6 text-center ring-1 ring-primary-100">
                  <div className="text-sm text-gray-600">First Appointment</div>
                  <div className="mt-1 text-lg font-semibold text-primary">
                    {data.touchUpPricing.firstAppointment}
                  </div>
                </div>
                <div className="rounded-lg bg-primary-50 p-6 text-center ring-1 ring-primary-100">
                  <div className="text-sm text-gray-600">Touch-Up</div>
                  <div className="mt-1 text-lg font-semibold text-primary">
                    {data.touchUpPricing.touchUp}
                  </div>
                </div>
                <div className="rounded-lg bg-primary-50 p-6 text-center ring-1 ring-primary-100">
                  <div className="text-sm text-gray-600">Year One Total</div>
                  <div className="mt-1 text-lg font-semibold text-primary">
                    {data.touchUpPricing.yearOne}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
