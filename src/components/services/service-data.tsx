import type { StaticImageData } from 'next/image'
import type { ComponentType, ReactNode } from 'react'
import bombLiftImage from '../../../public/services/bomb_lift_and_tint.jpg'
import lashImage from '../../../public/services/lash2.png'
import TestimonialBrows from '../media/testimonial-brows'
import TestimonialMakeup from '../media/testimonial-makeup'
import TestimonialOne from '../media/testimonial-one'
import TestimonialTeeth from '../media/testimonial-teeth'
export interface ServiceData {
  thumbnail: string
  title: string
  description: string
  headerImage: string | StaticImageData
  detailImage: string | StaticImageData
  duration: string
  results: string
  price: string
  about: string
  benefits: ReactNode
  process: ReactNode
  preparation: ReactNode
  aftercare: ReactNode
  contraindications?: ReactNode
  testimonial?: {
    component: ComponentType<any>
    props?: Record<string, any>
  }
  faqs: Array<{
    question: string
    answer: string
  }>
  slug: string
  shortDescription: string
}

// Add slug and shortDescription to each service
export const lashServiceData: ServiceData = {
  slug: 'lash-lift',
  shortDescription:
    'Transform your natural lashes with our signature BOMB Lift treatment or premium Keratin Lash Lift treatments.',
  title: 'Professional Lash Lifts',
  description:
    'Transform your natural lashes with our exclusive BOMB Lift or premium Keratin Lash Lift treatments',
  headerImage: bombLiftImage,
  detailImage: lashImage,
  duration: '45-60 minutes',
  results: '6-12 weeks',
  price: '$70 - $80',
  testimonial: {
    component: TestimonialOne,
  },
  thumbnail: '/services/thumbnail_lash_lift_brows_on_point.png',
  about:
    'At Brows on Point, we offer two exceptional lash lift treatments: our exclusive BOMB Lift and our premium Keratin Lash Lift. Both treatments enhance your natural lashes from root to tip, creating a beautiful, uplifted appearance without the need for extensions or daily curling.',
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Dramatically enhanced natural lashes without extensions</li>
        <li>Choice between our exclusive BOMB Lift or Keratin Treatment</li>
        <li>Optional tinting process</li>
        <li>Biotin-infused formula promotes natural lash growth</li>
        <li>Reduces daily makeup routine time</li>
        <li>Optional tinting for added definition</li>
        <li>Low maintenance, natural-looking results</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Initial consultation to determine desired results and treatment</li>
        <li>Thorough cleansing of the eye area</li>
        <li>Application of silicon shields to protect lower lashes</li>
        <li>Careful separation and lifting of lashes</li>
        <li>Application of lifting solution and setting solution</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Arrive with completely clean lashes (no makeup)</li>
        <li>Remove contact lenses before treatment</li>
        <li>Avoid caffeine before appointment</li>
        <li>Discontinue use of lash serums 48 hours before treatment</li>
        <li>Inform us of any eye conditions or sensitivities</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Avoid water, steam, and heat for 48 hours</li>
        <li>No mascara or eye makeup for 48 hours</li>
        <li>Avoid touching or rubbing eyes</li>
        <li>Use only recommended aftercare products</li>
        <li>Sleep on your back for the first night</li>
        <li>Consider our specialized aftercare products for optimal results</li>
      </ul>
    </div>
  ),
  contraindications: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Recent eye surgery or procedures</li>
        <li>Active eye infections or conditions</li>
        <li>Severe allergies affecting the eye area</li>
        <li>First trimester pregnancy</li>
        <li>Chemotherapy treatments</li>
      </ul>
    </div>
  ),
  faqs: [
    {
      question: "What's the difference between BOMB Lift and Keratin Lift?",
      answer:
        'The BOMB Lift is our exclusive treatment offering dramatic results lasting 6-8 weeks, enhanced with biotin for lash growth. The Keratin Lift provides a more natural lift with added protein treatment, lasting 10-12 weeks.',
    },
    {
      question: 'Can I wear mascara after a lash lift?',
      answer:
        "Yes, after 48 hours you can wear mascara, though many clients find they don't need it. We recommend waiting 48 hours to allow the lift to fully set.",
    },
    {
      question: 'Is the treatment painful?',
      answer:
        "No, both treatments are completely painless. You'll relax with your eyes closed throughout the procedure.",
    },
    {
      question: 'How long do results last?',
      answer:
        'BOMB Lift results typically last 6-8 weeks, while Keratin Lift results can last 10-12 weeks, depending on your natural lash growth cycle.',
    },
  ],
}

export const browServiceData: ServiceData = {
  slug: 'brow-services',
  shortDescription:
    'Achieve perfect brows with microblading and powder brow techniques',
  title: 'Brow Enhancement Services',
  description:
    'Achieve your perfect brows with our specialized microblading and powder brow techniques',
  headerImage: '/services/powder_brow.jpg',
  thumbnail: '/services/thumbnail_brows_brows_on_point.png',
  detailImage: '/services/powder_brow.jpg',
  duration: '2-2.5 hours',
  results: '1-3 years, depending on treatment',
  price: 'Microblading: $275 | Powder Brows: $300',
  testimonial: {
    component: TestimonialBrows,
  },
  about:
    'Our comprehensive brow enhancement services offer two distinct techniques: Microblading for natural-looking hair strokes, and Powder Brows for a soft, filled-in appearance. Each treatment is customized to your face shape and desired outcome.',
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Natural-looking, semi-permanent results</li>
        <li>Customized shape and color matching</li>
        <li>Reduced daily makeup routine</li>
        <li>Solution for sparse or over-plucked brows</li>
        <li>Enhanced facial symmetry</li>
        <li>Water-resistant and smudge-proof results</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Comprehensive consultation for shape and colour</li>
        <li>Precise measuring and marking of brow shape</li>
        <li>Application of topical anesthetic</li>
        <li>Careful implementation of chosen technique</li>
        <li>Colour saturation process</li>
        <li>Aftercare instructions and products</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Avoid blood thinners for 2 weeks prior</li>
        <li>No alcohol 48 hours before procedure</li>
        <li>Discontinue Retinol products 2 weeks prior</li>
        <li>No recent chemical peels or botox</li>
        <li>No tanning or sunburn in the area</li>
        <li>No caffeine 24 hours before appointment</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Follow-up appointment scheduling</li>
        <li>Keep the area clean and dry for 7 days</li>
        <li>Apply provided aftercare product as directed</li>
        <li>Avoid makeup on the brow area for 2 weeks</li>
        <li>No swimming or excessive sweating</li>
        <li>Avoid direct sunlight during healing</li>
        <li>Attend follow-up appointment as scheduled</li>
      </ul>
    </div>
  ),
  contraindications: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Pregnancy or breastfeeding</li>
        <li>Active skin conditions in the area</li>
        <li>Uncontrolled autoimmune conditions</li>
        <li>Recent chemotherapy</li>
        <li>Blood-thinning medications</li>
        <li>Keloid scarring history</li>
      </ul>
    </div>
  ),
  faqs: [
    {
      question: 'Which technique is right for me?',
      answer:
        'Microblading is ideal for natural-looking hair strokes and works best for normal to dry skin. Powder Brows create a soft, filled-in look and work well for all skin types, especially oily skin.',
    },
    {
      question: 'Is the procedure painful?',
      answer:
        'We use effective numbing cream to minimize discomfort. Most clients describe the sensation as pressure rather than pain.',
    },
    {
      question: 'How long does it take to heal?',
      answer:
        'Initial healing takes 7-10 days, with complete healing within 4-6 weeks. The color will appear darker initially before softening to the desired shade.',
    },
    {
      question: 'Do I need a touch-up?',
      answer:
        'Yes, a touch-up appointment is recommended 6-8 weeks after the initial procedure to ensure optimal results and longevity.',
    },
  ],
}

export const permanentMakeupData: ServiceData = {
  slug: 'permanent-makeup',
  shortDescription:
    'Long-lasting, natural-looking enhancement for eyes, brows, and lips',
  title: 'Permanent Makeup Services',
  description:
    'Enhance your natural features with our professional permanent makeup solutions.',
  headerImage: '/services/permanent_eyeliner.jpg',
  thumbnail: '/services/thumbnail_makeup_brows_on_point.png',
  detailImage: '/services/permanent_eyeliner.jpg',
  duration: '2-3 hours',
  testimonial: {
    component: TestimonialMakeup,
  },
  results: '2-3 years',
  price: 'Starting at $230',
  about:
    'Our permanent makeup services provide long-lasting enhancement of your natural features. We specialize in eyeliner, lip color, and corrective treatments, using state-of-the-art techniques and equipment for precise, natural-looking results.',
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Long-lasting, natural-looking results</li>
        <li>Time-saving daily routine</li>
        <li>Customized color matching</li>
        <li>Enhanced facial symmetry</li>
        <li>Waterproof and smudge-proof</li>
        <li>Ideal for active lifestyles</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Initial consultation for design and colour</li>
        <li>Application of topical anesthetic</li>
        <li>Precise marking and measuring</li>
        <li>Gradual color implementation</li>
        <li>Review and adjustments</li>
        <li>Aftercare instructions</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Avoid blood thinners for 2 weeks</li>
        <li>No alcohol 48 hours before</li>
        <li>Stop Retinol products 2 weeks prior</li>
        <li>No recent facial treatments</li>
        <li>Avoid sun exposure</li>
        <li>Come with clean, makeup-free skin</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Follow-up scheduling</li>
        <li>Keep area clean and dry</li>
        <li>Apply provided aftercare products</li>
        <li>Avoid makeup during healing</li>
        <li>Protect from sun exposure</li>
        <li>No swimming or saunas</li>
        <li>Schedule touch-up as recommended</li>
      </ul>
    </div>
  ),
  contraindications: (
    <ul className="list-disc pl-6 [&>li]:py-1.5">
      <li>Pregnancy or nursing</li>
      <li>Autoimmune conditions</li>
      <li>Active skin infections</li>
      <li>Recent chemical peels</li>
      <li>Blood disorders</li>
      <li>Certain medications</li>
    </ul>
  ),
  faqs: [
    {
      question: 'What exactly is permanent makeup?',
      answer:
        "Permanent makeup (Micro Pigmentation) involves implanting natural pigments under the skin's superficial layers using a sterile micro-needle to create lasting cosmetic definition. It's ideal for enhancing eyes, eyebrows, and areas lacking natural color or hair.",
    },
    {
      question: 'Is the procedure painful?',
      answer:
        'We use effective numbing creams to minimize discomfort during the procedure.',
    },
    {
      question: 'What is the healing process like?',
      answer:
        'Initial healing takes 7-10 days. The color will appear darker at first before settling into a natural shade.',
    },
    {
      question: 'Can I have MRI with permanent makeup?',
      answer:
        'Yes, our pigments are MRI-safe. Always inform your healthcare provider about your permanent makeup.',
    },
  ],
}

export const teethServiceData: ServiceData = {
  slug: 'teeth-services',
  shortDescription: 'Professional teeth whitening and crystal gem applications',
  title: 'Teeth Whitening and Tooth Gems',
  description:
    'Transform your smile with our teeth whitening and crystal gem services.',
  headerImage: '/services/thumbnail_teeth_brows_on_point.png',

  thumbnail: '/services/thumbnail_teeth_brows_on_point.png',
  detailImage: '/services/thumbnail_teeth_brows_on_point.png',
  testimonial: {
    component: TestimonialTeeth,
  },
  duration: '30-60 minutes',
  results: 'Whitening: 6 months Gems: 6-24 months',
  price: 'Whitening: $99 Gems: $60+',
  about:
    'Our professional teeth enhancement services include advanced whitening treatments and Swarovski crystal tooth gems. Using dental-grade products and techniques, we provide safe and effective smile transformations.',
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Immediate visible results</li>
        <li>Professional-grade whitening system</li>
        <li>No heat damage technology</li>
        <li>Custom gem placement options</li>
        <li>Safe for enamel</li>
        <li>Long-lasting results</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Initial consultation and assessment</li>
        <li>Treatment selection and planning</li>
        <li>Professional cleaning preparation</li>
        <li>Application of whitening gel or gems</li>
        <li>LED light treatment (for whitening)</li>
        <li>Final inspection and care instructions</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Brush teeth thoroughly before appointment</li>
        <li>No coffee or dark beverages 2 hours prior</li>
        <li>Recent dental cleaning recommended</li>
        <li>Inform us of any sensitivity issues</li>
        <li>Consult about existing dental work</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Avoid staining foods/drinks for 48 hours</li>
        <li>Use recommended whitening toothpaste</li>
        <li>Follow specific gem care instructions</li>
        <li>Maintain regular dental hygiene</li>
        <li>Schedule touch-up appointments as needed</li>
      </ul>
    </div>
  ),
  contraindications: (
    <ul className="list-disc pl-6 [&>li]:py-1.5">
      <li>Active dental decay or disease</li>
      <li>Severe tooth sensitivity</li>
      <li>Recent dental surgery</li>
      <li>Pregnancy (consult required)</li>
      <li>Certain types of dental work</li>
    </ul>
  ),
  faqs: [
    {
      question: 'How many shades whiter will my teeth get?',
      answer:
        'Most clients see a 2-10 shade improvement in just one session, with results lasting up to 6 months.',
    },
    {
      question: 'Are tooth gems safe?',
      answer:
        'Yes, we use dental-grade adhesive and genuine Swarovski crystals, applied using professional techniques that protect your enamel.',
    },
    {
      question: 'How long do tooth gems last?',
      answer:
        'With proper care, tooth gems can last 6-24 months. They can be safely removed by a dental professional when desired.',
    },
    {
      question: 'Will whitening cause sensitivity?',
      answer:
        'Our LED system is designed to minimize sensitivity. Most clients experience little to no discomfort during or after treatment.',
    },
  ],
}

// Add a services array for easy mapping
export const allServices = [
  lashServiceData,
  browServiceData,
  permanentMakeupData,
  teethServiceData,
]
