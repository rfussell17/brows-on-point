import React from 'react'
import { Container } from './container'
import { FaqPageJsonLd } from './json-ld/faq-page'

interface FAQ {
  question: string
  answer: string
}

interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`overflow-hidden rounded-lg ${className}`}>{children}</div>
)

const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`border-b p-4 ${className}`}>{children}</div>
)

const CardContent: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
)

interface FAQSectionProps {
  faqs: Array<FAQ>
  title?: string
  className?: string
  /** Defaults to the original light section. Pass a dark variant to match whatever section precedes this one on the page. */
  bgVariant?: 'light' | 'primary' | 'primary-950'
}

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
  className = '',
  bgVariant = 'light',
}) => {
  const isDark = bgVariant !== 'light'
  const bgClass =
    bgVariant === 'primary-950'
      ? 'bg-primary-950 ring-1 ring-inset ring-secondary-700'
      : bgVariant === 'primary'
        ? 'bg-primary'
        : 'bg-light'
  const headingClass = isDark ? 'text-light' : 'text-primary'
  const cardClass = isDark
    ? 'bg-primary-800 ring-1 ring-secondary-700'
    : 'bg-light shadow-md ring-1 ring-primary-100'
  const headerClass = isDark
    ? 'border-secondary-700 bg-primary-950 font-bold text-light transition-colors hover:bg-primary-900'
    : 'bg-primary font-bold text-light transition-colors hover:bg-primary-800'
  const contentClass = isDark ? 'text-light/80' : ''

  return (
    <section className={`${bgClass} py-24 sm:py-32 ${className}`}>
      <FaqPageJsonLd faqs={faqs} />
      <Container>
        <h2 className={`text-5xl ${headingClass}`}>{title}</h2>
        <div className="mt-12 grid gap-4">
          {faqs.map((faq, index) => (
            <Card key={index} className={cardClass}>
              <CardHeader className={headerClass}>{faq.question}</CardHeader>
              <CardContent className={contentClass}>{faq.answer}</CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FAQSection
