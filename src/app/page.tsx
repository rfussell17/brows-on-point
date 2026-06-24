import CallToAction from '@/components/cta'
import DetailRow from '@/components/detail-row'
import FAQSection from '@/components/faq-section'
import Hero from '@/components/hero'
import LashLiftHome from '@/components/lash-lift-home'
import LogoGrid, { logos } from '@/components/media/logo-grid'
import TestimonialGroup from '@/components/media/testimonial-group'
import TestimonialOne from '@/components/media/testimonial-one'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

const generalFAQs = [
  {
    question: 'What services do you offer?',
    answer:
      'We specialize in permanent makeup, lash lifts, brow enhancements, and teeth whitening + gems. Each service is performed with the highest safety standards and customized to your unique features and preferences.',
  },
  {
    question: 'Is it safe?',
    answer:
      'Yes, all our procedures follow strict Public Health Guidelines. We use only single-use sterile needles and supplies, maintain rigorous sanitation protocols, and use dermatologist-tested products.',
  },
  {
    question: "What's the age requirement?",
    answer:
      'All clients must be 18 years or older and present valid ID at their appointment.',
  },
  {
    question: 'Do the procedures hurt?',
    answer:
      'While individual pain tolerance varies, we use medical-grade topical anesthetics before and during procedures to ensure your comfort.',
  },
  {
    question: 'What about aftercare?',
    answer:
      'Proper aftercare is crucial for optimal results. We provide detailed instructions for each service and include all necessary aftercare products with your treatment.',
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <TestimonialOne />

        <DetailRow />
        <CallToAction
          title="See All Beauty Services"
          primaryButton={{
            text: 'All Services',
            href: '/services',
          }}
          secondaryButton={{
            text: 'Book Now',
            href: 'https://app.acuityscheduling.com/schedule.php?owner=15235407',
          }}
        />
        <LashLiftHome />
        {/* <TestimonialTwo /> */}

        <LogoGrid
          title="We only use the best products"
          logos={logos}
          theme="dark"
        />
      </main>
      <TestimonialGroup />

      <CallToAction
        title="It's time to put yourself first"
        primaryButton={{
          text: 'Reserve Appointment',
          href: 'https://app.acuityscheduling.com/schedule.php?owner=15235407',
        }}
      />
      <FAQSection faqs={generalFAQs} title="Common Questions" className="" />
    </div>
  )
}
