import Link from 'next/link'
import type { FC, ReactNode } from 'react'

interface CallToActionProps {
  title: string | ReactNode
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  className?: string
}

const CallToAction: FC<CallToActionProps> = ({
  title,
  primaryButton,
  secondaryButton,
  className = '',
}) => {
  return (
    <div className={`bg-primary ${className}`}>
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-4xl text-white sm:text-6xl">{title}</h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          {primaryButton && (
            <Link
              href={primaryButton.href}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {primaryButton.text}
            </Link>
          )}
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="text-sm font-semibold leading-6 text-light"
            >
              {secondaryButton.text} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default CallToAction
