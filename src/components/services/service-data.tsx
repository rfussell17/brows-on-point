import Link from 'next/link'
import type { ComponentType, ReactNode } from 'react'
export interface ServiceData {
  thumbnail?: string
  title: string
  description: string
  galleryImages?: string[]
  duration?: string
  results?: string | ReactNode
  price?: string | ReactNode
  about: string | ReactNode
  /** Header booking button text; defaults to "Book your Appointment". */
  bookingLabel?: string
  /** Overrides the default "Please don't book…" intro above the avoid list. */
  avoidIntro?: ReactNode
  /** Hide the Duration / Results / Price row in the header (values still feed schema). */
  hideStats?: boolean
  benefits?: ReactNode
  process: ReactNode
  preparation: ReactNode
  aftercare: ReactNode
  contraindications?: ReactNode
  avoidHeading?: string
  avoidService?: string
  extraSections?: Array<{ heading: string; content: ReactNode }>
  serviceOptions?: Array<{
    name: string
    price: ReactNode
    description: ReactNode
  }>
  serviceOptionsHeading?: string
  policyNotice?: ReactNode
  touchUpPricing?: {
    firstAppointment: string
    touchUp: string
    yearOne: string
  }
  hubLink?: { text: string; href: string }
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

export const pmuContraindications = (
  <div className="mx-auto max-w-2xl px-6">
    <ul className="list-disc space-y-2 pl-6">
      <li>Pregnancy or breastfeeding</li>
      <li>Active skin conditions or uncontrolled autoimmune conditions</li>
      <li>
        Lupus or rheumatoid arthritis, unless controlled and cleared with a
        doctor&apos;s note
      </li>
      <li>
        Recent chemotherapy, blood-thinning medications, or a history of keloid
        scarring
      </li>
    </ul>
  </div>
)

const whiteningContraindications = (crownsNote: string) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
    <div>
      <h4 className="font-semibold text-light">Dental Health</h4>
      <ul className="mt-2 list-disc space-y-2 pl-6">
        <li>Active cavities or tooth decay</li>
        <li>Periodontal disease or gum recession</li>
        <li>Exposed dentin or significant enamel erosion</li>
        <li>Cracked or fractured teeth</li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-light">Medical</h4>
      <ul className="mt-2 list-disc space-y-2 pl-6">
        <li>Pregnancy or breastfeeding</li>
        <li>Under 18 years old</li>
        <li>Known allergy to peroxide</li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-light">Other Limitations</h4>
      <ul className="mt-2 list-disc space-y-2 pl-6">
        <li>
          Crowns, veneers, bonding, or other restorations on front teeth
          won&apos;t whiten more than their original shade{crownsNote}
        </li>
        <li>
          Deep intrinsic staining, such as from tetracycline or severe
          fluorosis, may not respond to whitening
        </li>
      </ul>
    </div>
  </div>
)

export const teethWhiteningContraindications = whiteningContraindications(
  ' (can remove surface staining only on these)',
)

export const goldWhiteningContraindications = whiteningContraindications('.')

export const pmuBookingFeeNotice = (
  <ul className="list-disc space-y-2 pl-6">
    <li>A $50 booking fee secures your appointment</li>
    <li>Transferable to a new date, with 24 hours&apos; notice, once only</li>
    <li>No-shows forfeit the $50</li>
    <li>
      More than 15 minutes late (without prior notice) and the appointment is
      cancelled
    </li>
  </ul>
)

// Add slug and shortDescription to each service
export const lashServiceData: ServiceData = {
  slug: 'lashes/lash-lift-and-tint',
  avoidHeading: 'Who Should Avoid a Lash Lift and Tint',
  avoidService: 'a lash lift and tint',
  hubLink: { text: 'All Lash Services', href: '/lashes' },
  shortDescription:
    'Three lash lift options — Keratin, BOMB, and Korean Lash Lift and Tint — for lifted, darker lashes with no extensions.',
  title: 'Lash Lift and Tint',
  description:
    'A lash lift and tint lifts and darkens your natural lashes from root to tip, for a wide-awake look with no extensions and no daily curling. At Brows on Point, you can choose from three techniques: Keratin, BOMB, and Korean, depending on the curl and finish you want.',
  galleryImages: [
    '/services/lashes/lashes-lift-bomb-before-after-01.jpg',
    '/services/lashes/lashes-lift-keratin-before-after-01.jpg',
    '/services/lashes/lashes-lift-bomb-before-after-02.jpg',
    '/services/lashes/lashes-lift-keratin-before-after-02.jpg',
  ],
  duration: '45-60 minutes',
  results: '6-12 weeks',
  price: 'From $50',
  thumbnail: '/services/lashes/lashes-lift-bomb-before-after-03.jpg',
  about: (
    <>
      A lash lift and tint lifts and curls your lashes from the bottom up,
      giving the appearance of longer fuller lashes. Ditch the lash curler and
      mascara. It&apos;ll make you say “I woke up like this!”
      <br />
      <br />
      Brows on Point, in West Kelowna, offers 3 distinct versions of this: the
      Keratin Lash Lift and Tint, my signature BOMB Lash Lift and Tint, and the
      Korean Lash Lift and Tint.
    </>
  ),
  bookingLabel: 'Book Your Appointment',
  serviceOptionsHeading: 'Choose Your Lash Lift',
  serviceOptions: [
    {
      name: 'Keratin Lash Lift and Tint',
      price: '$80',
      description: (
        <>
          Infused with keratin protein to support healthy new lash growth. A
          natural curl and a beautiful result, with results lasting up to 12
          weeks.
        </>
      ),
    },
    {
      name: 'BOMB Lash Lift and Tint',
      price: '$70',
      description: (
        <>
          Brows on Point&apos;s signature treatment, with a biotin-infused
          formula added to the lift for extra hold and a more dramatic curl than
          the Keratin option.
        </>
      ),
    },
    {
      name: 'Korean Lash Lift and Tint',
      price: '$75',
      description: (
        <>
          A more gentle, relaxed curl than the BOMB Lift using a Korean lash
          lift technique, and specialized product, that enhances the lashes like
          no other.
        </>
      ),
    },
  ],
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Dramatically enhanced natural lashes without extensions</li>
        <li>Choice of Keratin, BOMB, or Korean Lash Lift and Tint</li>
        <li>Tint always included with every lash lift option</li>
        <li>Reduces your daily makeup routine</li>
        <li>Low maintenance, natural-looking results</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Initial consultation to choose your lash lift and confirm the result
          you want
        </li>
        <li>Thorough cleansing of the eye area</li>
        <li>Application of silicone shields to protect the lower lashes</li>
        <li>Careful separation and lifting of the lashes over the shield</li>
        <li>Application of the lifting solution, setting solution, and tint</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Arrive with completely clean lashes (no makeup)</li>
        <li>Remove contact lenses before treatment</li>
        <li>Discontinue use of lash serums 48 hours before treatment</li>
        <li>Let me know about any eye conditions or sensitivities</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Avoid water, steam, and heat for 48 hours</li>
        <li>No mascara or eye makeup for 48 hours</li>
        <li>Avoid touching or rubbing your eyes</li>
        <li>Sleep on your back for the first night if you can</li>
      </ul>
    </div>
  ),
  contraindications: (
    <div>
      <ul className="list-disc space-y-2 pl-6 sm:columns-2">
        <li>Recent eye surgery or procedures</li>
        <li>Active eye infections or conditions</li>
        <li>Severe allergies affecting the eye area</li>
        <li>First trimester pregnancy</li>
        <li>Chemotherapy treatments</li>
        <li>A previous lash lift within past 4 weeks</li>
      </ul>
    </div>
  ),
  faqs: [
    {
      question:
        "What's the difference between the Keratin, BOMB, and Korean lash lift and tint?",
      answer:
        'The Keratin Lash Lift and Tint is my base treatment, using a keratin protein solution for a natural curl. The BOMB Lash Lift and Tint adds a biotin-infused formula for extra hold and a more dramatic lift. The Korean Lash Lift and Tint uses a glueless, more gentle technique for a softer curl.',
    },
    {
      question:
        'Why is the Korean lash lift and tint more expensive than the BOMB?',
      answer:
        'The Korean technique uses a gentler, more premium lifting solution than the Keratin or BOMB treatments, along with a technique that takes more time to apply.',
    },
    {
      question: 'Can I get a lash lift without the lash tint?',
      answer:
        'Yes, Lash Lift Only is available at $50 if you just want the curl without tinting your lashes.',
    },
    {
      question: 'How long does a lash lift and tint take?',
      answer: 'Around 45-60 minutes, depending on which lash lift you choose.',
    },
    {
      question: 'How long do lash lift and tint results last?',
      answer:
        'A lash lift and tint typically lasts 6-12 weeks, depending on which technique you choose and your natural lash shed and growth cycle.',
    },
    {
      question: 'Can I wear mascara after a lash lift and tint?',
      answer:
        "Yes, once the 48-hour aftercare window has passed, though many clients find they don't need it, since the tint already does the work.",
    },
    {
      question: "Who isn't a good candidate for a lash lift and tint?",
      answer:
        'I recommend waiting, or checking with your doctor first, if you have had recent eye surgery or procedures, have an active eye infection or condition, have severe allergies affecting the eye area, are in your first trimester of pregnancy, or are going through chemotherapy.',
    },
    {
      question: 'How do I prepare for my lash lift and tint appointment?',
      answer:
        'Arrive with completely clean lashes and no makeup, and remove your contact lenses before treatment. Avoid caffeine beforehand, stop using lash serums 48 hours before, and tell me about any eye conditions or sensitivities.',
    },
    {
      question:
        'What should I avoid in the first 48 hours after a lash lift and tint?',
      answer:
        'Avoid water, steam and heat, skip mascara and eye makeup, and avoid touching or rubbing your eyes. If you can, sleep on your back the first night. This is what lets the curl and colour set properly.',
    },
  ],
}

/* Lash Growth Serum is hidden for now (no photo/brand yet); restore by uncommenting.
export const lashGrowthSerumServiceData: ServiceData = {
  slug: 'lashes/lash-growth-serum',
  hubLink: { text: 'All Lash Services', href: '/lashes' },
  shortDescription:
    'Keratin lash growth serum and tinted mascara, available in-studio at Brows on Point.',
  title: 'Lash Growth Serum',
  description:
    "Brows on Point carries a keratin lash growth serum and a tinted lash serum/mascara to help condition your natural lashes between lash lift or tint appointments. It's a retail product, available in-studio: ask about it at your next appointment.",
  duration: 'Available at your appointment',
  results: 'With consistent daily use',
  price: 'Ask in-studio',
  about: (
    <>
      A keratin-based lash enhancer, used consistently, can help support the
      condition of your natural lashes. Think of it as lash care, not a
      guaranteed change in length. My lash grower also comes in a tinted lash
      serum option, which doubles as a lightweight, everyday mascara. Ask about
      it at your next lash lift or tint appointment.
    </>
  ),
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Keratin formula to support lash condition</li>
        <li>Tinted option doubles as a lightweight everyday mascara</li>
        <li>Pairs well with regular lash lift or tint appointments</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Available for purchase in-studio</li>
        <li>Ask your lash tech which option suits your lashes</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Apply to clean lashes, free of makeup</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Use consistently, as directed on the product</li>
        <li>Avoid contact with eyes if irritation occurs</li>
      </ul>
    </div>
  ),
  faqs: [
    {
      question: 'Does the lash growth serum really grow your lashes longer?',
      answer:
        "It's a keratin-based formula intended to support the condition of your natural lashes with consistent use. I'm not able to promise a specific growth result, since that varies by person.",
    },
    {
      question: 'Can I use the tinted lash serum as mascara?',
      answer:
        'Yes. The tinted option is designed to double as a lightweight, everyday mascara as well as a lash conditioner.',
    },
    {
      question: 'Where can I buy the lash growth serum?',
      answer:
        "It's available in-studio at Brows on Point. Ask your lash tech at your next appointment.",
    },
  ],
}
*/

export const lashAndBrowTintingServiceData: ServiceData = {
  slug: 'lashes/lash-and-brow-tinting',
  avoidHeading: 'Who Should Avoid Lash Tinting',
  avoidService: 'lash tinting',
  hubLink: { text: 'All Lash Services', href: '/lashes' },
  shortDescription: 'Eyelash tinting: darker lashes without daily mascara.',
  title: 'Lash Tinting',
  description:
    'An eyelash tint uses a semi-permanent dye to darken your natural lashes, so they show up without mascara. At Brows on Point, you can book an eyelash tint on its own, or pair it with a brow tint in the same appointment.',
  galleryImages: ['/services/lashes/lashes-tinting-closeup-01.jpg'],
  thumbnail: '/services/lashes/lashes-tinting-closeup-01.jpg',
  duration: '15-30 minutes',
  results: '3-6 weeks',
  price: '$25',
  serviceOptionsHeading: 'Choose Your Tint',
  about: (
    <>
      Lash tinting is a fast, low-fuss way to darken your natural lashes without
      the daily fuss of mascara.
    </>
  ),
  bookingLabel: 'Book Your Appointment',
  serviceOptions: [
    {
      name: 'Lash Tint Only',
      price: '$25',
      description: <>Various shades to choose from</>,
    },
  ],
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Darker lashes without daily mascara</li>
        <li>Results last 3-6 weeks</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Application of silicone shields to protect the skin</li>
        <li>Tint applied to lashes</li>
        <li>Tint removed and area cleaned</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Arrive with clean lashes, no makeup</li>
        <li>Remove contact lenses before treatment</li>
        <li>Let me know about any eye conditions or sensitivities</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Avoid water, steam, and heat for 24 hours</li>
        <li>Avoid rubbing your eyes</li>
        <li>Avoid oil-based makeup removers, which fade tint faster</li>
      </ul>
    </div>
  ),
  contraindications: (
    <div>
      <ul className="list-disc space-y-2 pl-6">
        <li>Active eye infections or conditions</li>
        <li>Severe allergies affecting the eye area</li>
        <li>Recent eye surgery or procedures</li>
      </ul>
    </div>
  ),
  faqs: [
    {
      question: 'How long does a lash tint last?',
      answer:
        'A lash tint typically lasts 3-6 weeks, depending on your skin type and how quickly your hair sheds and regrows.',
    },
    {
      question: 'Is lash tinting safe if I have sensitive eyes or skin?',
      answer:
        "Tinting is suitable for most clients. For first-time clients I do a patch test, applying a small amount of tint to check for any reaction before your full appointment. Tell me about any eye conditions, allergies or skin sensitivities before we start, and I'll let you know if it's better to wait.",
    },
    {
      question: 'How do I prepare for a lash tint?',
      answer:
        'Arrive with clean lashes and no makeup, and remove your contact lenses before a lash tint. Tell me about any eye conditions or sensitivities before we start.',
    },
  ],
}

export const microbladingServiceData: ServiceData = {
  slug: 'permanent-makeup/microblading',
  avoidHeading: 'Who Should Avoid Microblading',
  avoidService: 'microblading',
  hubLink: { text: 'All Permanent Makeup', href: '/permanent-makeup' },
  shortDescription:
    'Microblading: natural-looking hair-stroke brows for sparse or over-tweezed eyebrows.',
  title: 'Microblading',
  description:
    'Microblading is a semi-permanent tattoo technique that draws individual, hair-like strokes into your brows, filling in sparse patches or reshaping a brow that over-tweezing left behind. Every microblading appointment starts with a full brow mapping session, so the shape is agreed before any pigment goes in.',
  galleryImages: [
    '/services/permanent-makeup/permanent-makeup-microblading-before-after-01.jpg',
    '/services/permanent-makeup/permanent-makeup-microblading-healed-01.jpg',
    '/services/permanent-makeup/permanent-makeup-microblading-before-after-02.jpg',
    '/services/permanent-makeup/permanent-makeup-microblading-before-after-03.jpg',
  ],
  duration: '2-2.5 hours',
  results: '1-2 years',
  price: '$275',
  thumbnail:
    '/services/permanent-makeup/permanent-makeup-microblading-before-after-01.jpg',
  about: (
    <>
      Using a fine hand tool to deposit pigment with thin, hair-like strokes
      that follow your natural hair growth pattern. The result is brows that
      give the look of real hair, not makeup. It&apos;s a good fit if your brows
      are sparse, uneven, or were over-tweezed at some point and never quite
      grew back.
    </>
  ),
  bookingLabel: 'Book Your Appointment',
  extraSections: [
    {
      heading: 'Brow Mapping: The First Step',
      content: (
        <>
          Before any pigment is applied, every microblading appointment starts
          with brow mapping: measuring your face and creating a shape that suits
          your bone structure, using your natural brow as a starting point.
          You&apos;ll see and approve the mapped shape before I begin, so there
          are no surprises partway through. Brow mapping alone typically takes
          20-30 minutes of the full appointment.
        </>
      ),
    },
  ],
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Natural-looking, hair-stroke results</li>
        <li>Fills in sparse or over-tweezed brows</li>
        <li>Low maintenance. Get up and go</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Consultation and full brow mapping</li>
        <li>Application of topical anesthetic</li>
        <li>Hair-stroke pigment application</li>
        <li>Colour saturation check and adjustments</li>
        <li>Aftercare instructions before you leave</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Avoid blood thinners for 2 weeks prior (unless prescribed)</li>
        <li>No alcohol 48 hours before your appointment</li>
        <li>Discontinue Retinol products 2 weeks prior</li>
        <li>
          No recent chemical peels or Botox in the brow area 30 days before and
          after
        </li>
        <li>No tanning or sunburn on the treatment area</li>
        <li>No caffeine on the day of your appointment</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Keep the area clean and dry for 7 days</li>
        <li>Apply the provided aftercare product as directed</li>
        <li>Avoid makeup on the brow area for 2 weeks</li>
        <li>No swimming, saunas, or excessive sweating during healing</li>
        <li>Avoid direct sunlight on the area while it heals</li>
        <li>Attend your touch-up appointment within 2 months</li>
      </ul>
    </div>
  ),
  contraindications: pmuContraindications,
  policyNotice: (
    <ul className="list-disc space-y-2 pl-6">
      <li>A $50 booking fee secures your appointment</li>
      <li>Transferable to a new date, with 24 hours notice, once only</li>
      <li>No-shows forfeit the $50</li>
      <li>
        More than 15 minutes late, without prior approval (as my appointments
        are typically back to back) and the appointment is cancelled
      </li>
    </ul>
  ),
  touchUpPricing: {
    firstAppointment: '$275',
    touchUp: '$100',
    yearOne: '$375',
  },
  faqs: [
    {
      question: 'How long does microblading last?',
      answer:
        'Microblading typically lasts 1-2 years, depending on your skin type and how well you follow the aftercare instructions.',
    },
    {
      question: 'Do I need a touch-up after my first microblading appointment?',
      answer:
        "Yes. Your first touch-up should happen within 2 months of your initial appointment, so I can fill in any spots where pigment didn't fully retain.",
    },
    {
      question: 'What is a microblading colour boost, and when do I need one?',
      answer:
        'A colour boost is a maintenance service that refreshes microblading that has started to fade, typically 12-18 months after your last appointment. The cost is $170.',
    },
    {
      question: 'Is microblading painful?',
      answer:
        'I apply a topical anesthetic before starting, so most clients describe the sensation as pressure, and “kitty scratches” rather than pain.',
    },
    {
      question: 'How long does microblading take to heal?',
      answer:
        'Initial healing takes about 7-10 days, with the colour settling into its final shade over the following few weeks.',
    },
    {
      question: "Who isn't a good candidate for microblading?",
      answer:
        "You should wait or check with your doctor first if you are pregnant or breastfeeding, have an active skin condition or an uncontrolled autoimmune condition, have lupus or rheumatoid arthritis that is not controlled and cleared with a doctor's note, have had recent chemotherapy, take blood-thinning medications, or have a history of keloid scarring.",
    },
    {
      question: 'How do I prepare for my microblading appointment?',
      answer:
        "Avoid blood thinners for 2 weeks beforehand unless they are prescribed, and stop retinol products 2 weeks before. Skip alcohol for 48 hours and caffeine on the day. Avoid tanning or sunburn on the area, and don't book if you have had a chemical peel or Botox in the brow area recently.",
    },
    {
      question: 'How do I take care of my brows after microblading?',
      answer:
        'Keep the area clean and dry for 7 days, apply the aftercare product I give you as directed, and avoid makeup on the brows for 2 weeks. Skip swimming, saunas and heavy sweating while they heal, avoid direct sunlight on the area, and attend your touch-up within 2 months.',
    },
    {
      question:
        'How long is a microblading appointment, and what happens during it?',
      answer:
        'Plan for 2-2.5 hours. It starts with a consultation and brow mapping, which you approve before anything is applied. I then numb the area, draw the hair-stroke pigment, check the colour and make adjustments, and go over your aftercare before you leave.',
    },
    {
      question: 'Is there a booking fee for microblading?',
      answer:
        "A $50 booking fee secures your appointment. It can be transferred to a new date once, with 24 hours' notice, and no-shows forfeit it.",
    },
  ],
}

export const browTintWaxShapeData: ServiceData = {
  slug: 'brows/brow-tint-and-shape',
  hubLink: { text: 'All Brow Services', href: '/brows' },
  shortDescription:
    'Eyebrow tint and shape: tinting and shaping together in one appointment.',
  title: 'Brow Tinting & Shaping',
  description:
    'An eyebrow tint darkens and defines your natural brow hair with a semi-permanent dye, and shaping cleans up the line at the same time, so your brows look fuller and more defined in one $25 appointment.',
  galleryImages: ['/services/brows/brows-tint-and-shape-closeup-01.jpg'],
  price: '$25',
  hideStats: true,
  thumbnail: '/services/brows/brows-tint-and-shape-closeup-01.jpg',
  extraSections: [
    {
      heading: 'Brow Tinting',
      content: (
        <>
          Brow tinting is just that..tints your natural brow hair, so sparse or
          light brows look fuller and more defined. Tint typically holds for 3-6
          weeks.
        </>
      ),
    },
    {
      heading: 'Brow Shaping',
      content: (
        <>Brow shaping is cleaning up stray hairs and defining the shape.</>
      ),
    },
  ],
  about: (
    <>
      Not every brow needs permanent makeup. If you&apos;re after something
      lower-commitment, brow tint is a great alternative.
    </>
  ),
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>No needles, no downtime</li>
        <li>Tint holds for 3-6 weeks</li>
        <li>A low-commitment way to try a fuller brow look</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Quick consultation on shape and tint colour</li>
        <li>Application of the tint</li>
        <li>Shaping of the Brows</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Arrive with clean skin, no brow makeup</li>
        <li>Avoid Retinol products for 48 hours before tinting</li>
        <li>Let your brows grow out a little if you want a full reshape</li>
        <li>Tell me about any skin sensitivities before I start</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Avoid water and sweat on the brow area for a few hours</li>
        <li>No makeup on freshly shaped skin for the rest of the day</li>
        <li>Avoid direct sun and tanning beds while any redness settles</li>
        <li>Avoid exfoliating products on the brow area for a few days</li>
      </ul>
    </div>
  ),
  faqs: [
    {
      question: 'How long does a brow tint last?',
      answer:
        'A brow tint typically lasts 3-6 weeks, depending on your skin type and how quickly your brow hair sheds and regrows.',
    },
    {
      question: 'How often should I book brow tinting and shape?',
      answer:
        'Most clients rebook every 3-4 weeks to keep their shape clean, though this varies with how quickly your hair grows back.',
    },
    {
      question: 'What should I do after brow tinting and shaping?',
      answer:
        "Avoid water and sweat on the brows for a few hours and don't wear makeup on the brows for the rest of the day. Avoid direct sun, tanning beds and exfoliating products on the area for a few days.",
    },
  ],
}

export const powderBrowsServiceData: ServiceData = {
  slug: 'permanent-makeup/powder-brows',
  avoidHeading: 'Who Should Avoid Powder Brows',
  avoidService: 'powder brows',
  hubLink: { text: 'All Permanent Makeup', href: '/permanent-makeup' },
  shortDescription:
    'Powder brows: a soft, filled-in brow that holds its shape day to day.',
  title: 'Powder Brows',
  description:
    'Powder brows use a shading technique to build up soft, filled-in colour across your whole brow, like brow makeup that never comes off. At Brows on Point, powder eyebrows are a good fit if you already fill your brows in daily and want that look without the routine.',
  galleryImages: [
    '/services/permanent-makeup/permanent-makeup-powder-brows-before-after-01.jpg',
    '/services/permanent-makeup/permanent-makeup-powder-brows-before-after-02.jpg',
    '/services/permanent-makeup/permanent-makeup-powder-brows-before-after-03.jpg',
    '/services/permanent-makeup/permanent-makeup-powder-brows-healed-01.jpg',
  ],
  duration: '2-2.5 hours',
  results: 'Varies by skin type — ask at your consultation',
  price: '$300',
  thumbnail:
    '/services/permanent-makeup/permanent-makeup-powder-brows-before-after-01.jpg',
  about: (
    <>
      Powder brow using a tattoo machine that is specifically designed for the
      delicate features of the face. We build colour with airy layers of
      pixelated pigment, blended into an even and filled-in finish. Similar to
      the look of a brow powder or pomade. It suits most all skin types,
      including the most oily skin. Every appointment starts with a consultation
      on shape and colour before I begin.
    </>
  ),
  bookingLabel: 'Book Your Appointment',
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Soft, natural result</li>
        <li>Works well on oily and combination skin</li>
        <li>Reduces your daily makeup routine</li>
        <li>Customized shape and colour depth</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Consultation on shape and colour depth</li>
        <li>Brow mapping to your natural shape</li>
        <li>Application of topical anesthetic</li>
        <li>Shading application, built up in layers</li>
        <li>Aftercare instructions before you leave</li>
        <li>
          Please note that fading and lightening of your new brows between
          25-50% is absolutely normal after your first session. Once you come
          back in for your 6-8 week touch up, we go over everything again and
          you will have your final result 3-4 weeks later.
        </li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Avoid blood thinners for 2 weeks prior (unless prescribed)</li>
        <li>No alcohol 48 hours before your appointment</li>
        <li>Discontinue Retinol products 2 weeks prior</li>
        <li>
          No recent chemical peels or Botox in the brow area, 30 days before and
          30 days after
        </li>
        <li>No tanning or sunburn on the treatment area</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Keep the area clean and dry for 7 days</li>
        <li>Apply the provided aftercare product as directed</li>
        <li>Avoid makeup on the brow area for 2 weeks</li>
        <li>No swimming, saunas, or excessive sweating during healing</li>
        <li>Attend your touch-up appointment within 2 months</li>
      </ul>
    </div>
  ),
  contraindications: pmuContraindications,
  policyNotice: pmuBookingFeeNotice,
  touchUpPricing: {
    firstAppointment: '$300',
    touchUp: '$125',
    yearOne: '$425',
  },
  faqs: [
    {
      question: 'How much do powder brows cost in Kelowna?',
      answer:
        'Powder brows are $300 for your first appointment. Your touch-up is $125, bringing your total first year to $425.',
    },
    {
      question: 'Are powder brows a good choice for oily skin?',
      answer:
        'Yes. Powder brows tend to hold up well on oily and combination skin.',
    },
    {
      question: 'How long do powder brows last before they need a refresh?',
      answer:
        'Powder brows typically last 2-3 years, depending on your skin type and how well you follow the aftercare.',
    },
    {
      question: "Who isn't a good candidate for powder brows?",
      answer:
        "You should wait or check with your doctor first if you are pregnant or breastfeeding, have an active skin condition or an uncontrolled autoimmune condition, have lupus or rheumatoid arthritis that is not controlled and cleared with a doctor's note, have had recent chemotherapy, take blood-thinning medications, or have a history of keloid scarring.",
    },
    {
      question: 'How do I prepare for my powder brows appointment?',
      answer:
        "Avoid blood thinners for 2 weeks beforehand unless they are prescribed, stop retinol products 2 weeks before, and skip alcohol for 48 hours. Avoid tanning or sunburn on the area, and don't book if you have had a chemical peel or Botox in the brow area recently.",
    },
    {
      question: 'How do I take care of my powder brows while they heal?',
      answer:
        'Keep the area clean and dry for 7 days, apply the aftercare product I provide as directed, and avoid makeup on the brows for 2 weeks. Skip swimming, saunas and excessive sweating while they heal, and attend your touch-up within 2 months.',
    },
    {
      question: 'How long is a powder brows appointment?',
      answer:
        'Plan for 2-2.5 hours. We map your brow shape, I numb the area, and then the powder shading is built up in layers before I go through aftercare with you.',
    },
  ],
}

export const salineRemovalServiceData: ServiceData = {
  slug: 'permanent-makeup/saline-tattoo-removal',
  avoidHeading: 'Who Should Avoid Saline Tattoo Removal',
  avoidService: 'saline tattoo removal',
  hubLink: { text: 'All Permanent Makeup', href: '/permanent-makeup' },
  shortDescription:
    'Saline tattoo and PMU removal: a gentler alternative to laser removal.',
  title: 'Saline Tattoo & PMU Removal',
  description:
    "Saline removal draws unwanted permanent makeup or a small tattoo out of the skin using a saline solution, rather than breaking it down with a laser. Brows on Point offers saline eyebrow tattoo and microblading removal. I don't offer laser removal, but I'm happy to explain how saline compares if you're deciding between the two.",
  galleryImages: [
    '/services/permanent-makeup/permanent-makeup-removal-saline-before-after-02.jpg',
  ],
  thumbnail:
    '/services/permanent-makeup/permanent-makeup-removal-saline-before-after-01.jpg',
  duration: '90 minutes',
  results:
    'Often requires more than one session (unless Emergency Removal, done less than 72 hours after fresh PMU, which can have up to 98% removal success rate after one session)',
  price: '$125',
  about: (
    <>
      If you&apos;re comparing laser eyebrow tattoo removal to other options,
      here&apos;s the upfront answer: Saline removal lifts deep, stubborn
      pigment out of the skin using a saline solution, and works well for all
      PMU and small tattoos. It&apos;s a different process than laser, which
      breaks pigment down with light energy. It&apos;s worth knowing the
      difference before you book either.
    </>
  ),
  bookingLabel: 'Book Appointment',
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>A gentler alternative to laser for PMU and small tattoos</li>
        <li>No laser equipment involved</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Consultation to assess the area and expected number of sessions</li>
        <li>Application of topical anesthetic</li>
        <li>
          Saline solution worked into the treatment area with needled machine
        </li>
        <li>Aftercare instructions before you leave</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Avoid blood thinners for 2 weeks prior (unless prescribed)</li>
        <li>No alcohol 48 hours before your appointment</li>
        <li>Let me know about any skin conditions in the treatment area</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <h4 className="font-semibold text-primary">Days 1–3</h4>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Blot the area with a clean paper towel every 30-60 minutes for the
          first few hours, to keep the scab that forms thin
        </li>
        <li>
          Keep it strictly dry — no water directly on the area, and keep shower
          spray off your face
        </li>
        <li>
          Skip ointments and creams for now; the goal is to let it dry out so a
          firm scab can form
        </li>
      </ul>
      <h4 className="mt-6 font-semibold text-primary">Days 4–14</h4>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Let the scab fall off on its own, usually within 7-14 days — picking
          can compromise results and risks scarring
        </li>
        <li>
          Avoid heavy workouts, saunas, hot tubs, and long hot showers; sweat
          and steam can soften the scab too soon
        </li>
        <li>
          Keep makeup, active skincare, and sunscreen off the area until the
          skin has fully closed over
        </li>
      </ul>
      <h4 className="mt-6 font-semibold text-primary">Weeks 2–8</h4>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Once the scab sheds naturally, apply vitamin E oil or your recommended
          healing gel to soothe the fresh skin underneath
        </li>
        <li>
          Protect the area from direct sun with a hat, sunglasses, or a mineral
          sunscreen
        </li>
        <li>
          Full healing takes 6-8 weeks — wait until then before another saline
          session or new permanent makeup work in the same area
        </li>
      </ul>
    </div>
  ),
  contraindications: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Pregnancy or breastfeeding</li>
        <li>Active skin conditions or uncontrolled autoimmune conditions</li>
        <li>
          Lupus or rheumatoid arthritis, unless controlled and cleared with a
          doctor&apos;s note
        </li>
        <li>
          Recent chemotherapy, blood-thinning medications, or a history of
          keloid scarring
        </li>

        <li>Allergy to aloe</li>
      </ul>
    </div>
  ),
  policyNotice: pmuBookingFeeNotice,
  extraSections: [
    {
      heading: 'Emergency / After-Hours Removal',
      content: (
        <>
          Emergency saline removal is available within 72 hours of your original
          PMU application, for a $200 after-hours fee.
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'How many sessions of saline tattoo removal will I need?',
      answer:
        'It varies by how much pigment is in the skin. Most clients need more than one session, and I can give you a better estimate at your consultation.',
    },
    {
      question: "Who shouldn't get saline tattoo removal?",
      answer:
        "I recommend waiting, or checking with your doctor first, if you are pregnant or breastfeeding, have an active skin condition or an uncontrolled autoimmune condition, have lupus or rheumatoid arthritis that is not controlled and cleared with a doctor's note, have had recent chemotherapy, take blood-thinning medications, have a history of keloid scarring, or have an allergy to aloe.",
    },
    {
      question: 'How do I prepare for saline tattoo removal?',
      answer:
        'Avoid blood thinners for 2 weeks beforehand unless they are prescribed, and skip alcohol for 48 hours. Tell me about any skin conditions in the treatment area.',
    },
    {
      question:
        'How long is a saline tattoo removal session, and does it hurt?',
      answer:
        'A session takes about 90 minutes. I apply a topical anesthetic before starting and then work the saline solution into the treatment area.',
    },
  ],
}

export const permanentEyelinerServiceData: ServiceData = {
  slug: 'permanent-makeup/permanent-eyeliner',
  avoidHeading: 'Who Should Avoid Permanent Eyeliner',
  avoidService: 'permanent eyeliner',
  hubLink: { text: 'All Permanent Makeup', href: '/permanent-makeup' },
  shortDescription:
    'Permanent eyeliner: upper lash line enhancement, lower eyeliner, or top and bottom together.',
  title: 'Permanent Eyeliner',
  description:
    'Brows on Point offers a subtle upper lash line enhancement, a lower eyeliner tattoo, or top and bottom together for a more defined look.',
  galleryImages: [
    '/services/permanent-makeup/permanent-makeup-eyeliner-before-after-01.jpg',
  ],
  thumbnail:
    '/services/permanent-makeup/permanent-makeup-eyeliner-closeup-01.jpg',
  duration: '1.5-2 hours',
  results: '2-3 years',
  price: '$230',
  serviceOptionsHeading: 'Choose Your Eyeliner',
  about: (
    <>
      Permanent eyeliner is a delicate lash line tattooed liner. Liner stays put
      through swimming, workouts, and every day in between. By tattooing a thin
      line in where the lashes are growing, creates a soft and subtle liner for
      everyday wear.
    </>
  ),
  bookingLabel: 'Book Appointment',
  serviceOptions: [
    {
      name: 'Upper Lash Line Enhancement',
      price: '$230',
      description: <>Subtle tattooed along the upper lash line</>,
    },
    {
      name: 'Lower Eyeliner',
      price: '$120',
      description: <>Defined liner along the lower lash line on its own.</>,
    },
    {
      name: 'Top + Bottom Eyeliner',
      price: '$319',
      description: <>Defined liner along both the top and bottom lash lines.</>,
    },
  ],
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Consultation</li>
        <li>Application of topical anesthetic</li>
        <li>Pigment implantation along the lash line</li>
        <li>Aftercare instructions before you leave</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Avoid blood thinners for 2 weeks prior (unless prescribed)</li>
        <li>No alcohol 48 hours before your appointment</li>
        <li>Remove contact lenses before treatment</li>
        <li>Let me know about any eye conditions or sensitivities</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Keep the area clean and dry for 7 days</li>
        <li>Avoid eye makeup for 2 weeks</li>
        <li>No swimming or saunas during healing</li>
        <li>Attend your touch-up appointment within 2 months</li>
      </ul>
    </div>
  ),
  contraindications: pmuContraindications,
  policyNotice: pmuBookingFeeNotice,
  faqs: [
    {
      question: 'How long does permanent eyeliner last?',
      answer:
        'Typically 2-3 years, depending on your skin and how well you follow the aftercare instructions.',
    },
    {
      question: 'How do I prepare for my permanent eyeliner appointment?',
      answer:
        'Avoid blood thinners for 2 weeks beforehand unless they are prescribed, skip alcohol for 48 hours, and remove your contact lenses before treatment. Tell me about any eye conditions or sensitivities.',
    },
    {
      question:
        'How long is a permanent eyeliner appointment, and does it hurt?',
      answer:
        'Plan for 1.5-2 hours. I apply a topical anesthetic before the pigment is deposited along the lash line. You are kept comfortable throughout the appointment.',
    },
  ],
}

export const toothGemsServiceData: ServiceData = {
  slug: 'smile/tooth-gems',
  hubLink: { text: 'All Smile Services', href: '/smile' },
  shortDescription:
    'Swarovski tooth gems: genuine crystal, professionally applied, starting at $40.',
  title: 'Swarovski Tooth Gems',
  description:
    'Tooth gems are a genuine Swarovski crystal applied directly to your tooth with dental-grade adhesive: no drilling, no damage to your enamel. At Brows on Point, a single tooth gem starts at $40, with options to add more or choose a shape like a butterfly tooth gem.',
  galleryImages: [
    '/services/smile/smile-tooth-gem-closeup-01.jpg',
    '/services/smile/smile-tooth-gem-closeup-02.jpg',
    '/services/smile/smile-tooth-gem-closeup-03.jpg',
    '/services/smile/smile-tooth-gem-closeup-04.jpg',
  ],
  duration: '15-20 minutes',
  results: '6-24 months',
  price: '$40 for the first, +$20 each for 2nd and 3rd. $5 each 4+',
  thumbnail: '/services/smile/smile-tooth-gem-closeup-01.jpg',
  about: (
    <>
      A tooth gem is a small piece of genuine Swarovski crystal bonded straight
      onto your tooth&apos;s surface with a dental-grade adhesive. It&apos;s
      fully reversible and doesn&apos;t require any drilling. Choose a classic
      round crystal (in many various colours and sizes), Iridescent or
      Opal…placed wherever you&apos;d like a bit of sparkle to your smile.
    </>
  ),
  bookingLabel: 'Book Appointment',
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Genuine Swarovski crystal</li>
        <li>No drilling, fully reversible</li>
        <li>Quick appointment, immediate results</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Quick consultation on placement and design</li>
        <li>Cleaning of the tooth surface</li>
        <li>Dental-grade adhesive applied to the crystal</li>
        <li>Gem placed and set with a curing light</li>
        <li>Final check and aftercare instructions</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Brush your teeth thoroughly before your appointment</li>
        <li>Let me know about any recent dental work</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <h4 className="font-semibold text-primary">First 1-2 Hours</h4>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Don&apos;t eat or drink anything for at least 60 minutes, so the
          adhesive fully cures
        </li>
        <li>
          Avoid touching, pressing, or picking at the gem with your fingers or
          tongue
        </li>
      </ul>
      <h4 className="mt-6 font-semibold text-primary">First 24 Hours</h4>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Stick to soft foods — yogurt, smoothies, soups — and avoid anything
          hard, sticky, or crunchy
        </li>
        <li>
          Skip brushing the treated tooth for the first 24 hours; you can still
          brush your other teeth carefully
        </li>
        <li>
          Avoid acidic and carbonated drinks, which can weaken the bond while
          it&apos;s curing
        </li>
        <li>
          Rinse gently with water or an alcohol-free mouthwash after meals
          instead of brushing
        </li>
      </ul>
      <h4 className="mt-6 font-semibold text-primary">Ongoing Care</h4>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Brush gently around the gem with a soft-bristled toothbrush to prevent
          plaque buildup at the edges
        </li>
        <li>
          Avoid electric toothbrush heads directly on the gem for the first 48
          hours
        </li>
        <li>Keep flossing daily around the adjacent teeth as normal</li>
        <li>
          If a gem comes loose, don&apos;t try to reattach it yourself — book in
          and I can replace it
        </li>
        <li>
          If you ever want a gem removed for good, have a dentist take it off so
          the remaining adhesive is polished away without damaging your enamel
        </li>
      </ul>
    </div>
  ),
  faqs: [
    {
      question: 'Do tooth gems damage your teeth or enamel?',
      answer:
        "No. I use a dental-grade adhesive that bonds to the tooth surface without drilling, and gems can be safely removed by a dental professional when you're ready.",
    },
    {
      question: 'How long do tooth gems last?',
      answer:
        'With proper care, a tooth gem typically lasts 6-24 months before it needs replacing.',
    },
    {
      question: 'Can I get more than one tooth gem at the same appointment?',
      answer: 'Yes. Many clients choose two or more.',
    },
    {
      question: 'How do I prepare for my tooth gem appointment?',
      answer:
        'Brush your teeth thoroughly beforehand and tell me about any recent dental work. The appointment takes about 15-20 minutes.',
    },
    {
      question: 'What should I do after getting a tooth gem?',
      answer:
        "Don't eat or drink for at least 60 minutes so the adhesive fully cures, and avoid touching or picking at the gem. Stick to soft foods, skip brushing that tooth for the first 24 hours, and avoid acidic and carbonated drinks while it sets.",
    },
    {
      question: 'What if my tooth gem comes loose?',
      answer:
        "Don't try to reattach it yourself. Book in and I can replace it.",
    },
    {
      question: 'How do I get a tooth gem removed?',
      answer:
        'Have a dentist take it off, so any remaining adhesive is polished away without damaging your enamel.',
    },
  ],
}

export const teethWhiteningServiceData: ServiceData = {
  slug: 'smile/teeth-whitening',
  avoidHeading: 'Who Should Avoid Professional Teeth Whitening',
  avoidService: 'professional teeth whitening',
  hubLink: { text: 'All Smile Services', href: '/smile' },
  shortDescription:
    'Professional teeth whitening: Basic and Ultra sessions, plus a 24k gold option.',
  title: 'Teeth Whitening',
  description:
    'Brows on Point offers professional, in-office teeth whitening with a Basic and an Ultra session length, plus a 24k gold option for sensitive teeth.',
  galleryImages: [
    '/services/smile/smile-teeth-whitening-basic-before-after-01.jpg',
    '/services/smile/smile-teeth-whitening-ultra-before-after-01.jpg',
    '/services/smile/smile-teeth-whitening-basic-before-after-02.jpg',
    '/services/smile/smile-teeth-whitening-ultra-before-after-02.jpg',
  ],
  thumbnail: '/services/smile/smile-teeth-whitening-basic-before-after-01.jpg',
  duration: '40-60 minutes',
  results: 'Up to 6 months',
  price: '$99',
  serviceOptionsHeading: 'Choose Your Whitening',
  about: (
    <>
      Professional, cosmetic teeth whitening uses a stronger whitening agent
      than at-home strips, so results show up in one session instead of weeks of
      daily treatments. Basic and Ultra sessions differ in treatment time, and I
      also offer a 24k gold whitening option built for the most sensitive teeth.
    </>
  ),
  bookingLabel: 'Book Appointment',
  avoidIntro: (
    <p>
      Please don&apos;t book professional teeth whitening if any of these apply
      to you. If you&apos;re not sure, ask me before booking:
    </p>
  ),
  serviceOptions: [
    {
      name: 'Basic',
      price: '$99',
      description: <>Two 20-minute whitening sessions.</>,
    },
    {
      name: 'Ultra',
      price: '$145',
      description: <>Three 20-minute whitening sessions.</>,
    },
    {
      name: '24K Gold',
      price: '$99',
      description: (
        <>
          A gentler gold-infused option, built for sensitive teeth. See my{' '}
          <Link href="/smile/sensitive-teeth-whitening" className="underline">
            sensitive teeth whitening page
          </Link>{' '}
          for details.
        </>
      ),
    },
  ],
  extraSections: [
    {
      heading: 'Basic vs. Ultra vs. 24K Gold',
      content: (
        <>
          Basic and Ultra use the same whitening gel, and differ only in how
          many 20-minute sessions you get — Ultra simply goes further for a
          brighter result. The 24k gold option uses a gentler formula, and I
          recommend it for clients with teeth or gum sensitivity.
        </>
      ),
    },
  ],
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Visible results in a single appointment</li>
        <li>Professional-grade whitening</li>
        <li>Choice of Basic, Ultra, or 24k gold sessions</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Consultation and shade check</li>
        <li>Application of whitening gel</li>
        <li>LED light treatment, in 20-minute sessions</li>
        <li>Final shade check and aftercare instructions</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Brush your teeth thoroughly before your appointment</li>
        <li>Avoid coffee or dark beverages for 2 hours prior</li>
        <li>A recent dental cleaning is recommended, though not required</li>
        <li>Let me know about any sensitivity or existing dental work</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Avoid dark coloured staining foods and drinks for 48 hours</li>
        <li>Use a whitening-safe toothpaste to maintain results</li>
        <li>Maintain your regular dental hygiene routine</li>
      </ul>
    </div>
  ),
  contraindications: teethWhiteningContraindications,
  faqs: [
    {
      question: 'How much does teeth whitening cost?',
      answer:
        'Basic whitening is $99 for two 20-minute sessions. Ultra is $145 for three sessions. 24k gold whitening, recommended for sensitive teeth, is also $99.',
    },
    {
      question: 'How long do the teeth whitening results last?',
      answer:
        'Results typically last up to 6 months, depending on your diet and oral hygiene habits afterward.',
    },
    {
      question:
        'Is Brows on Point teeth whitening better than at-home whitening strips?',
      answer:
        'Brows on Point whitening uses a stronger professional gel, so results are visible after one appointment rather than weeks of at-home use.',
    },
    {
      question: "Who shouldn't get professional teeth whitening?",
      answer:
        "I don't recommend it with active cavities or decay, periodontal disease or gum recession, exposed dentin or significant enamel erosion, or cracked teeth. It is also not suitable if you are pregnant or breastfeeding, under 18, or allergic to peroxide.",
    },
    {
      question: 'How do I prepare for my teeth whitening appointment?',
      answer:
        'Brush your teeth thoroughly beforehand and avoid coffee or dark drinks for 2 hours before. A recent dental cleaning is recommended but not required, and tell me about any sensitivity or existing dental work.',
    },
    {
      question: 'Will teeth whitening work on crowns, veneers or bonding?',
      answer:
        "No. Crowns, veneers, bonding and other restorations on front teeth won't whiten more than their original shade (on those teeth).",
    },
    {
      question: 'What should I avoid after teeth whitening?',
      answer:
        'Avoid staining foods and drinks for 48 hours, and use a whitening-safe toothpaste to maintain your results.',
    },
  ],
}

export const sensitiveTeethWhiteningServiceData: ServiceData = {
  slug: 'smile/sensitive-teeth-whitening',
  avoidHeading: 'Who Should Avoid 24K Gold Teeth Whitening',
  avoidService: '24k gold teeth whitening',
  hubLink: { text: 'All Smile Services', href: '/smile' },
  shortDescription:
    '24k gold teeth whitening, built for clients with sensitive teeth.',
  title: '24K Gold Whitening for Sensitive Teeth',
  description:
    "If regular whitening leaves your teeth feeling sensitive, Brows on Point's 24k gold whitening option is designed with sensitive teeth in mind: the same in-office professional whitening, in a gentler formula.",
  galleryImages: [
    '/services/smile/smile-teeth-whitening-before-after-01.jpg',
    '/services/smile/smile-teeth-whitening-basic-before-after-04.jpg',
    '/services/smile/smile-teeth-whitening-basic-before-after-03.jpg',
    '/services/smile/smile-teeth-whitening-ultra-before-after-03.jpg',
  ],
  thumbnail: '/services/smile/smile-teeth-whitening-before-after-01.jpg',
  duration: '40-60 minutes',
  results: 'Up to 6 months',
  price: '$99',
  about: (
    <>
      My 24k gold whitening option answers the most common question about
      sensitive-teeth whitening: it uses the same professional, in-office
      process as my Basic and Ultra sessions, formulated to be gentler on the
      most sensitive of teeth.
    </>
  ),
  bookingLabel: 'Book Appointment',
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Built for clients with sensitive teeth</li>
        <li>Visible results in a single appointment</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Consultation and shade check</li>
        <li>Application of the 24k gold whitening formula</li>
        <li>Two 20 minute sessions</li>
        <li>Final shade check and aftercare instructions</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Brush your teeth thoroughly before your appointment</li>
        <li>Let me know about your sensitivity and any existing dental work</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Avoid staining foods and drinks for 48 hours</li>
        <li>Use a sensitivity-friendly toothpaste to maintain results</li>
      </ul>
    </div>
  ),
  contraindications: goldWhiteningContraindications,
  faqs: [
    {
      question:
        'Is 24k gold teeth whitening really better for sensitive teeth?',
      answer:
        "It's formulated to be gentler than my standard whitening options, which is why I recommend it for clients who know they have sensitive teeth.",
    },
    {
      question: "Who shouldn't get 24k gold teeth whitening?",
      answer:
        'The same limits apply as for my other whitening: active cavities or decay, periodontal disease or gum recession, exposed dentin or significant enamel erosion, cracked teeth, pregnancy or breastfeeding, being under 18, or an allergy to peroxide.',
    },
    {
      question:
        'How do I prepare for my teeth whitening if my teeth are sensitive?',
      answer:
        'Brush your teeth thoroughly beforehand, and tell me about your sensitivity and any existing dental work so I can plan the session around it.',
    },
    {
      question: 'How do I look after sensitive teeth after my whitening?',
      answer:
        'Avoid staining foods and drinks for 48 hours and use a sensitivity-friendly toothpaste to maintain your results.',
    },
  ],
}

export const rfSkinTighteningData: ServiceData = {
  slug: 'skin-tightening',
  avoidHeading: 'Who Should Avoid RF Skin Tightening',
  avoidService: 'RF skin tightening',
  shortDescription:
    'RF skin tightening: a non-invasive treatment for face, neck, and body using a 40k ultrasonic machine.',
  title: 'Skin Tightening Treatment',
  description:
    'RF skin tightening uses radiofrequency energy to gently heat the deeper layers of skin, encouraging your body to produce more collagen so skin looks firmer over time. At Brows on Point in West Kelowna, treatment is done with a 40k ultrasonic RF machine that combines skin tightening with ultrasonic exfoliation in one session.',
  galleryImages: [
    '/services/skin-tightening/skin-tightening-treatment-closeup-01.jpg',
  ],
  thumbnail:
    '/services/skin-tightening/skin-tightening-treatment-closeup-01.jpg',
  duration: '45 minutes',
  results: '4-6 weeks, cumulative with a course of treatments',
  price: '$75',
  about: (
    <>
      Radio frequency skin tightening, also called an RF facial, is a
      non-invasive technique to firm and lift the skin&apos;s texture without
      any downtime.
    </>
  ),
  bookingLabel: 'Book Appointment',
  extraSections: [
    {
      heading: 'Face and Neck',
      content: (
        <>
          RF skin tightening is typically done in packages of 3-5 for best
          results. 48 to 72 hours in between sessions.
        </>
      ),
    },
    {
      heading: '3-Session Package - introductory pricing',
      content: (
        <>
          A 3-session package is $175, compared to $225 for three individual
          sessions at $75 each.
        </>
      ),
    },
  ],
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Visibly firmer-looking skin over a course of treatments</li>
        <li>Stimulates natural collagen production</li>
        <li>Deep ultrasonic exfoliation and cleansing in the same session</li>
        <li>Improves overall skin tone and texture</li>
        <li>Non-invasive, no downtime</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Initial consultation and skin assessment</li>
        <li>Thorough cleansing of the treatment area</li>
        <li>Ultrasonic exfoliation to remove dead skin cells</li>
        <li>RF skin tightening</li>
        <li>Application of a soothing, hydrating serum</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Arrive with clean, makeup-free skin</li>
        <li>Avoid sun exposure or sunburn in the days before</li>
        <li>Discontinue Retinol products 48 hours before treatment</li>
        <li>Inform me of any metal implants, pacemakers, or skin conditions</li>
      </ul>
    </div>
  ),
  aftercare: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Apply SPF daily following treatment</li>
        <li>Stay well hydrated</li>
        <li>Avoid harsh exfoliants for 48 hours</li>
        <li>Schedule follow-up sessions as recommended for best results</li>
      </ul>
    </div>
  ),
  contraindications: (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <h4 className="font-semibold text-light">Medical & Safety</h4>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            Pacemakers, defibrillators, or other implanted electronic devices
          </li>
          <li>
            Metal plates, screws, pins, or other metal implants in the treatment
            area
          </li>
          <li>Pregnancy or breastfeeding</li>
          <li>Active cancer or an undiagnosed lesion in the treatment area</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-light">Skin Conditions</h4>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            Active skin infections, cystic acne breakouts, cold sores, eczema,
            psoriasis, or rosacea flare-ups in the treatment area
          </li>
          <li>History of keloid scarring</li>
          <li>Recent tanning or a sunburn in the treatment area</li>
        </ul>
      </div>
    </div>
  ),
  faqs: [
    {
      question: 'How much does RF skin tightening cost?',
      answer:
        'A single RF neck/facial skin tightening session is $75. A 3-session package is $175 (introductory pricing).',
    },
    {
      question: 'Is RF skin tightening painful?',
      answer:
        'No, most clients describe a warm, relaxing sensation during treatment with no discomfort.',
    },
    {
      question: 'How many RF skin tightening sessions will I need?',
      answer:
        "Results build over a course of treatments. Typically 3-5. I'll recommend a personalized plan during your consultation based on your skin goals.",
    },
    {
      question: 'Is there any downtime after RF skin tightening?',
      answer:
        'None. You can return to your normal routine immediately after treatment.',
    },
    {
      question: "Who shouldn't have RF skin tightening?",
      answer:
        "I don't recommend it with a pacemaker, defibrillator or other implanted electronic device, or metal plates, screws or pins in the treatment area. It's also not suitable if you are pregnant or breastfeeding, have active cancer or an undiagnosed lesion in the area, have active skin infections or flare-ups there, have a history of keloid scarring, or have recent tanning or a sunburn in the area.",
    },
    {
      question: 'How do I prepare for my RF skin tightening appointment?',
      answer:
        'Arrive with clean, makeup-free skin, avoid sun exposure or sunburn in the days before, and stop retinol products 48 hours beforehand. Lots of hydration 24 hours prior to. Tell me about any metal implants, pacemakers or skin conditions.',
    },
    {
      question: 'What should I do after RF skin tightening?',
      answer:
        'Apply SPF daily, stay well hydrated, and avoid harsh exfoliants for 48 hours. Book follow-up sessions as recommended for the best results.',
    },
  ],
}
