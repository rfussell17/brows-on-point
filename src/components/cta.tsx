import Link from 'next/link'
import type { FC, ReactNode } from 'react'
import { Container } from './container'

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
    <div className={`bg-primary py-24 sm:py-32 ${className}`}>
      <Container>
        <div className="lg:flex lg:items-center lg:justify-between">
          <h2 className="text-4xl text-light sm:text-6xl">{title}</h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            {primaryButton && (
              <Link
                href={primaryButton.href}
                className="rounded-md bg-light px-3.5 py-2.5 text-base font-semibold text-primary shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
              >
                {primaryButton.text}
              </Link>
            )}
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className="text-base font-semibold leading-6 text-light"
              >
                {secondaryButton.text} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CallToAction
