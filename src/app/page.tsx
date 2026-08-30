import CallToAction from '@/components/cta'
import DetailRow from '@/components/detail-row'
import FAQSection from '@/components/faq-section'
import { Footer } from '@/components/footer'
import Hero from '@/components/hero'
import LashLiftHome from '@/components/lash-lift-home'
import LogoGrid, { logos } from '@/components/media/logo-grid'
import TestimonialGroup from '@/components/media/testimonial-group'
import TestimonialOne from '@/components/media/testimonial-one'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  description:
    "West Kelowna's lash and brow bar for lash lifts, brow tinting, permanent makeup, teeth whitening, and tooth gems. Book your appointment online today.",
  robots: {
    index: false,
    follow: false,
  },
}

const generalFAQs = [
  {
    question: 'What services do you offer?',
    answer:
      'I specialize in permanent makeup, lash lifts, brow enhancements, and teeth whitening + gems. Each service is performed with the highest safety standards and customized to your unique features and preferences.',
  },
  {
    question: 'Is it safe?',
    answer:
      'Yes, all my procedures follow strict Public Health Guidelines. I use only single-use sterile needles and supplies, maintain rigorous sanitation protocols, and use dermatologist-tested products.',
  },
  {
    question: "What's the age requirement?",
    answer:
      'All clients must be 18 years or older and present valid ID at their appointment.',
  },
  {
    question: 'Do the procedures hurt?',
    answer:
      'While individual pain tolerance varies, I use medical-grade topical anesthetics before and during procedures to ensure your comfort.',
  },
  {
    question: 'What about aftercare?',
    answer:
      'Aftercare makes a real difference to your results. I provide detailed instructions for each service and include all necessary aftercare products with your treatment.',
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <LogoGrid
          title="I only use the best products"
          logos={logos}
          theme="dark"
        />

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
        <TestimonialOne />
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

      <Footer />
    </div>
  )
}
