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
  <div
    className={`overflow-hidden rounded-lg bg-light shadow-md ring-1 ring-primary-100 ${className}`}
  >
    {children}
  </div>
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
  const bgClass =
    bgVariant === 'primary-950'
      ? 'bg-primary-950 ring-1 ring-inset ring-secondary-700'
      : bgVariant === 'primary'
        ? 'bg-primary'
        : 'bg-light'
  const headingClass = bgVariant === 'light' ? 'text-primary' : 'text-light'

  return (
    <section className={`${bgClass} py-24 sm:py-32 ${className}`}>
      <FaqPageJsonLd faqs={faqs} />
      <Container>
        <h2 className={`text-3xl sm:text-5xl ${headingClass}`}>{title}</h2>
        <div className="mt-12 grid gap-4">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader className="bg-primary font-bold text-light transition-colors hover:bg-primary-800">
                {faq.question}
              </CardHeader>
              <CardContent>{faq.answer}</CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FAQSection
