import { type FC, type ReactNode } from 'react'
import type { ServiceData } from './service-data'

interface ServiceDetailProps {
  data: ServiceData
  className?: string
}

const ServiceDetail: FC<ServiceDetailProps> = ({ data, className = '' }) => {
  const renderSection = (title: string, content: ReactNode) => (
    <div>
      <h2 className="text-4xl text-primary">{title}</h2>
      <div className="prose mt-2 text-base/7 text-gray-700">{content}</div>
    </div>
  )

  return (
    <div className={`relative bg-white ${className} mb-24`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-x-12 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="flex flex-col space-y-10">
            {renderSection('How to Prepare', data.preparation)}
            {renderSection('Results', data.benefits)}
          </div>

          <div className="flex flex-col space-y-10">
            {renderSection('Process', data.process)}
            {renderSection('Aftercare Instructions', data.aftercare)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
