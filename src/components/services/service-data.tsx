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
  hubLink?: { text: string; href: string }
  /** Group label shown above the page title and used to order the All Services cards. */
  category?: string
  /** Card text on All Services and in the menu (the approved hub card copy). */
  cardDescription?: string
  /** Card title when it differs from the page title. */
  cardTitle?: string
  /** One client quote for this service, by author name in src/lib/testimonials.ts. */
  testimonialName?: string
  /** The "What is X" post this page links to once it's published. */
  blogSlug?: string
  testimonial?: {
    component: ComponentType<any>
    props?: Record<string, any>
  }
  faqs?: Array<{
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
  category: 'Lash Services',
  cardDescription:
    'Keratin, BOMB, or Korean lash lift and tint: lifted, darker lashes with no extensions.',
  testimonialName: 'Kassandra D',
  blogSlug: 'what-is-a-lash-lift-and-tint',
  slug: 'lash-lift-and-tint',
  avoidHeading: 'Who Should Avoid a Lash Lift and Tint',
  avoidService: 'a lash lift and tint',
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
  price: 'From $70',
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
}

/* Lash Growth Serum is hidden for now (no photo/brand yet); restore by uncommenting.
export const lashGrowthSerumServiceData: ServiceData = {
  slug: 'lashes/lash-growth-serum',
  hubLink: { text: 'All Lash Services', href: '/services' },
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
  category: 'Lash Services',
  cardDescription:
    'Semi-permanent tint for lashes, brows, or both: a fast way to skip the daily mascara.',
  testimonialName: 'Janine D',
  blogSlug: 'what-is-lash-tinting',
  cardTitle: 'Lash & Brow Tinting',
  slug: 'lash-tinting',
  avoidHeading: 'Who Should Avoid Lash Tinting',
  avoidService: 'lash tinting',
  shortDescription: 'Eyelash tinting: darker lashes without daily mascara.',
  title: 'Lash Tinting',
  description:
    'An eyelash tint uses a semi-permanent dye to darken your natural lashes, so they show up without mascara. At Brows on Point, you can book an eyelash tint on its own, or pair it with a brow tint in the same appointment.',
  galleryImages: [],
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
}

export const microbladingServiceData: ServiceData = {
  category: 'Permanent Makeup',
  cardDescription:
    'Natural, hair-stroke semi-permanent brows for sparse or over-tweezed eyebrows.',
  testimonialName: 'Delanie C',
  blogSlug: 'what-is-microblading',
  slug: 'microblading',
  avoidHeading: 'Who Should Avoid Microblading',
  avoidService: 'microblading',
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
}

export const browTintWaxShapeData: ServiceData = {
  category: 'Brow Services',
  cardDescription: 'Semi-permanent tint and shape.',
  testimonialName: 'Elyse L',
  blogSlug: 'what-is-brow-tinting-and-shaping',
  cardTitle: 'Eyebrow Tinting & Shaping',
  slug: 'brow-tint-and-shape',
  shortDescription:
    'Eyebrow tint and shape: tinting and shaping together in one appointment.',
  title: 'Brow Tinting & Shaping',
  description:
    'An eyebrow tint darkens and defines your natural brow hair with a semi-permanent dye, and shaping cleans up the line at the same time, so your brows look fuller and more defined in one $25 appointment.',
  galleryImages: ['/services/brows/brows-tint-and-shape-closeup-01.jpg'],
  price: '$25',
  hideStats: true,
  thumbnail: '/services/brows/brows-tint-and-shape-closeup-01.jpg',
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
}

export const powderBrowsServiceData: ServiceData = {
  category: 'Permanent Makeup',
  cardDescription:
    "A soft, pixelated brow…or more defined and fuller result…I've got what you're after! With results lasting for 2-3 years.",
  testimonialName: 'Y. Tobar',
  blogSlug: 'what-are-powder-brows',
  slug: 'powder-brows',
  avoidHeading: 'Who Should Avoid Powder Brows',
  avoidService: 'powder brows',
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
  results: '2-3 years',
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
}

export const salineRemovalServiceData: ServiceData = {
  category: 'Permanent Makeup',
  cardDescription:
    'A gentler, saline-based alternative to laser removal for PMU.\n\nI also offer Emergency PMU Removal (for permanent makeup that you want removed asap, that was done less than 72 hours ago) 98-99% success rate of full removal if done within 24 hours.',
  testimonialName: 'Nicola G',
  blogSlug: 'what-is-saline-tattoo-removal',
  cardTitle: 'Saline Tattoo & PMU Removal',
  slug: 'saline-tattoo-removal',
  avoidHeading: 'Who Should Avoid Saline Tattoo Removal',
  avoidService: 'saline tattoo removal',
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
}

export const permanentEyelinerServiceData: ServiceData = {
  category: 'Permanent Makeup',
  cardDescription:
    'Subtle lash line enhancement tattooed eyeliner. Make those eyes pop!',
  testimonialName: 'Jenny K',
  blogSlug: 'what-is-permanent-eyeliner',
  slug: 'permanent-eyeliner',
  avoidHeading: 'Who Should Avoid Permanent Eyeliner',
  avoidService: 'permanent eyeliner',
  shortDescription:
    'Permanent eyeliner: upper lash line enhancement or lower eyeliner.',
  title: 'Permanent Eyeliner',
  description:
    'Brows on Point offers a subtle upper lash line enhancement or a lower eyeliner tattoo.',
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
}

export const toothGemsServiceData: ServiceData = {
  category: 'Smile Services',
  cardDescription:
    'Genuine Swarovski crystal tooth gems, professionally applied. Lasting 6-24 months with proper care.',
  testimonialName: 'Cheryl T',
  blogSlug: 'what-are-tooth-gems',
  slug: 'tooth-gems',
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
}

export const teethWhiteningServiceData: ServiceData = {
  category: 'Smile Services',
  cardDescription:
    'Professional in-studio teeth whitening, plus hybrid options for those slightly sensitive.',
  testimonialName: 'Tina H',
  blogSlug: 'what-is-professional-teeth-whitening',
  slug: 'teeth-whitening',
  avoidHeading: 'Who Should Avoid Professional Teeth Whitening',
  avoidService: 'professional teeth whitening',
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
          <Link href="/sensitive-teeth-whitening" className="underline">
            sensitive teeth whitening page
          </Link>{' '}
          for details.
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
}

export const sensitiveTeethWhiteningServiceData: ServiceData = {
  category: 'Smile Services',
  cardDescription:
    'A gentler whitening option built for clients with the most sensitive teeth.',
  testimonialName: 'Shanise S',
  blogSlug: 'what-is-24k-gold-teeth-whitening',
  cardTitle: '24K Gold Whitening',
  slug: 'sensitive-teeth-whitening',
  avoidHeading: 'Who Should Avoid 24K Gold Teeth Whitening',
  avoidService: '24k gold teeth whitening',
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
}

export const rfSkinTighteningData: ServiceData = {
  cardDescription:
    'Non-invasive radiofrequency skin tightening for the face, neck, and jowls — a single session or a 3-session package, depending on your goals.',
  testimonialName: 'Carly M',
  blogSlug: 'what-is-rf-skin-tightening',
  slug: 'skin-tightening',
  avoidHeading: 'Who Should Avoid RF Skin Tightening',
  avoidService: 'RF skin tightening',
  shortDescription:
    'RF skin tightening: a non-invasive treatment for face, neck, and body using a 40k ultrasonic machine.',
  cardTitle: 'Skin Tightening',
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
}

/** Every bookable service, in menu and All Services order. */
export const ALL_SERVICES: ServiceData[] = [
  browTintWaxShapeData,
  lashServiceData,
  lashAndBrowTintingServiceData,
  microbladingServiceData,
  powderBrowsServiceData,
  permanentEyelinerServiceData,
  salineRemovalServiceData,
  teethWhiteningServiceData,
  sensitiveTeethWhiteningServiceData,
  toothGemsServiceData,
  rfSkinTighteningData,
]
