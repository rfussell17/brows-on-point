import React from 'react'
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
}

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
  className = '',
}) => {
  return (
    <section className={`p-8 sm:p-24 ${className} bg-light`}>
      <FaqPageJsonLd faqs={faqs} />
      <h2 className="py-16 text-3xl text-primary sm:text-5xl">{title}</h2>
      <div className="grid gap-4">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardHeader className="bg-primary font-bold text-light transition-colors hover:bg-primary-800">
              {faq.question}
            </CardHeader>
            <CardContent>{faq.answer}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
