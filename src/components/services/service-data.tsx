import Link from 'next/link'
import type { ComponentType, ReactNode } from 'react'
import TestimonialMakeup from '../media/testimonial-makeup'
import TestimonialOne from '../media/testimonial-one'
import TestimonialTeeth from '../media/testimonial-teeth'
import TestimonialTwo from '../media/testimonial-two'
export interface ServiceData {
  /** Hub/services-grid card thumbnail. Omit for services without a real photo yet. */
  thumbnail?: string
  title: string
  description: string
  /** Real photos for the page header's gallery grid, up to 4. Omit for services without real photos yet. */
  galleryImages?: string[]
  duration: string
  results: string | ReactNode
  price: string | ReactNode
  about: string | ReactNode
  benefits: ReactNode
  process: ReactNode
  preparation: ReactNode
  aftercare: ReactNode
  contraindications?: ReactNode
  /** Caption under the header's before/after photo grid, e.g. "Lash lift before & after photos coming soon". */
  /** Extra named H2 sections (e.g. a dedicated "brow mapping" section) rendered before the two-column detail grid. */
  extraSections?: Array<{ heading: string; content: ReactNode }>
  /**
   * For a page covering more than one distinct bookable service (e.g. three
   * named lash lift techniques) — renders as a named options grid with its
   * own price per option, above the shared process/preparation/aftercare.
   */
  serviceOptions?: Array<{
    name: string
    price: ReactNode
    description: ReactNode
  }>
  /** Heading above the serviceOptions grid. Defaults to "Choose Your Service". */
  serviceOptionsHeading?: string
  /** Touch-up pricing table (Q50) — first appointment / touch-up / year-one total. */
  touchUpPricing?: {
    firstAppointment: string
    touchUp: string
    yearOne: string
  }
  /** Policy notices (e.g. the booking-fee block) rendered between the header and detail sections. */
  policyNotice?: ReactNode
  /** Link back up to this spoke's hub — e.g. { text: 'All Lash Services', href: '/lashes' }. Defaults to the /services index. */
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

/**
 * Standard PMU contraindications, per BUILD-BRIEF.md §6.4 — "one wording,
 * used identically on every PMU page." Q35 corrects lupus/RA to "eligible if
 * controlled, with a doctor's note." Q36 removes celiac/Crohn's from the
 * needs-doctor's-OK list entirely, so it isn't mentioned here at all.
 */
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
        Recent chemotherapy, Blood-thinning medications, or Keloid scarring
        history
      </li>
    </ul>
  </div>
)

/**
 * Teeth whitening contraindications (Q41), used identically on
 * /smile/teeth-whitening/ and /smile/sensitive-teeth-whitening/.
 */
export const teethWhiteningContraindications = (
  <div className="mx-auto max-w-2xl px-6">
    <h4 className="font-semibold text-primary">Dental Health</h4>
    <ul className="list-disc space-y-2 pl-6">
      <li>Active cavities or tooth decay</li>
      <li>Periodontal disease or gum recession</li>
      <li>Exposed dentin or significant enamel erosion</li>
      <li>Cracked or fractured teeth</li>
    </ul>
    <h4 className="mt-6 font-semibold text-primary">Medical</h4>
    <ul className="list-disc space-y-2 pl-6">
      <li>Pregnancy or breastfeeding</li>
      <li>Under 18 years old</li>
      <li>Known allergy to peroxide</li>
    </ul>
    <h4 className="mt-6 font-semibold text-primary">Other Limitations</h4>
    <ul className="list-disc space-y-2 pl-6">
      <li>
        Crowns, veneers, bonding, or other restorations on front teeth
        won&apos;t whiten and can end up a mismatched colour next to your
        natural teeth
      </li>
      <li>
        Deep intrinsic staining, such as from tetracycline or severe fluorosis,
        may not respond to in-office whitening
      </li>
    </ul>
  </div>
)

/**
 * BUILD-BRIEF.md §6.1 — the $50 PMU booking fee, reschedule notice, and
 * transfer/no-show/late policy. Q20 (24hrs) and Q22 (48hrs) directly
 * contradicted each other; the filled-out questionnaire ticks 24 hours for
 * Q20 — the direct answer to "how much notice to move the fee" — so that
 * wins over the 48-hour wording found in Acuity's service descriptions.
 */
export const pmuBookingFeeNotice = (
  <ul className="list-disc space-y-2 pl-6">
    <li>A $50 booking fee secures your appointment</li>
    <li>Transferable to a new date, with 24 hours&apos; notice, once only</li>
    <li>No-shows forfeit the $50</li>
    <li>More than 10 minutes late and the appointment is cancelled</li>
  </ul>
)

// Add slug and shortDescription to each service
export const lashServiceData: ServiceData = {
  slug: 'lashes/lash-lift-and-tint',
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
  price: 'From $70',
  testimonial: {
    component: TestimonialOne,
  },
  thumbnail: '/services/lashes/lashes-lift-bomb-before-after-03.jpg',
  about: (
    <>
      A lash lift and tint (also called a lash perm or lash lamination) reshapes
      your natural lashes around a small silicone rod, then tints them a darker
      shade, so you wake up in the morning with definition and no mascara
      required. Brows on Point, in West Kelowna, offers three distinct versions
      of this: the Keratin Lash Lift and Tint, my signature BOMB Lash Lift and
      Tint, and the Korean Lash Lift and Tint. They&apos;re genuinely different
      treatments, not just different names for the same thing, so the sections
      below cover each one on its own: what it is, what it costs, and who it
      tends to suit.
    </>
  ),
  serviceOptionsHeading: 'Choose Your Lash Lift',
  serviceOptions: [
    {
      name: 'Keratin Lash Lift and Tint',
      price: '$80',
      description: (
        <>
          Infused with keratin protein to support healthy new lash growth. A
          natural curl and a healthy-lash finish, with results lasting up to 12
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
      price: 'Ask at your consultation',
      description: (
        <>
          A gentler, more relaxed curl pattern than the BOMB Lift, using a
          Korean lash lift technique that follows the natural line of the lash
          for a softer everyday look.
        </>
      ),
    },
  ],
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Dramatically enhanced natural lashes without extensions</li>
        <li>Choice of Keratin, BOMB, or Korean Lash Lift and Tint</li>
        <li>Korean technique offers a softer, more natural curl pattern</li>
        <li>Tint included with every lash lift option</li>
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
        <li>Avoid caffeine before your appointment</li>
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
      question: 'How much does a lash lift and tint cost in Kelowna?',
      answer:
        'It depends which lash lift you choose. My BOMB Lash Lift and Tint is $70, and my Keratin Lash Lift and Tint is $80. Ask about Korean Lash Lift and Tint pricing at your consultation.',
    },
    {
      question:
        "What's the difference between the Keratin, BOMB, and Korean lash lift and tint?",
      answer:
        'The Keratin Lash Lift and Tint is my base treatment, using a keratin protein solution for a natural curl. The BOMB Lash Lift and Tint adds a biotin-infused formula for extra hold and a more dramatic lift. The Korean Lash Lift and Tint uses a gentler technique for a softer, more relaxed curl.',
    },
    {
      question:
        'Why does the Korean lash lift and tint cost more than Keratin or BOMB?',
      answer:
        'The Korean technique uses a gentler, more premium lifting solution than the Keratin or BOMB treatments, along with a technique that takes more time to apply. Ask about pricing at your consultation.',
    },
    {
      question: 'Is a lash lift the same as a lash perm or lash lamination?',
      answer:
        'Yes. Lash lift, lash perm, and lash lamination all describe the same style of treatment: lifting and setting your natural lashes around a small rod, rather than adding extensions. I tint the lashes as part of the treatment too.',
    },
    {
      question: 'Can I get a lash lift without the lash tint?',
      answer:
        'Yes, Lash Lift Only is available at $50 if you just want the curl without darkening your lashes. Most clients choose lift and tint together, since the tint is what removes the need for mascara.',
    },
    {
      question: 'How long does a lash lift and tint take?',
      answer:
        'Around 45-60 minutes, depending on which lash lift you choose and how many lashes you have.',
    },
    {
      question: 'Is a lash lift and tint painful?',
      answer:
        "No. You'll relax with your eyes closed for the whole appointment, and most clients describe it as comfortable, not painful.",
    },
    {
      question: 'How long do lash lift and tint results last?',
      answer:
        'A lash lift and tint typically lasts 6-12 weeks, depending on which technique you choose and your natural lash growth cycle.',
    },
    {
      question: 'Can I wear mascara after a lash lift and tint?',
      answer:
        "Yes, once the 48-hour aftercare window has passed, though many clients find they don't need it, since the lift and tint already do the work.",
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
      question: 'What happens during a lash lift and tint appointment?',
      answer:
        'We start with a consultation to choose your lash lift and confirm the result you want. I then cleanse the eye area, protect your lower lashes with silicone shields, lift your lashes over the shield, and apply the lifting solution, setting solution and tint.',
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
  hubLink: { text: 'All Lash Services', href: '/lashes' },
  shortDescription:
    'Eyelash tinting: darker lashes and brows without daily mascara.',
  title: 'Lash & Brow Tinting',
  description:
    'An eyelash tint uses a semi-permanent dye to darken your natural lashes, so they show up without mascara. At Brows on Point, you can book an eyelash tint on its own, or pair it with a brow tint in the same appointment.',
  duration: '15-30 minutes, depending on whether you add brow tint',
  results: '3-6 weeks',
  price: '$25',
  serviceOptionsHeading: 'Choose Your Tint',
  about: (
    <>
      Eyelash tinting (sometimes called eyelash dye) is a fast, low-fuss way to
      darken your natural lash line without a lash lift. It&apos;s a separate
      service from a lash lift: tinting only changes colour, while a lift also
      changes the curl. If you&apos;re after lash tinting, you can book lash
      tint alone, or add a brow tint and shape to the same appointment.
    </>
  ),
  serviceOptions: [
    {
      name: 'Lash Tint Only',
      price: '$25',
      description: <>Darkens your natural lashes. No brow work included.</>,
    },
    {
      name: 'Brow Tint & Shape + Lash Tint',
      price: '$40',
      description: (
        <>
          Adds a lash tint onto a brow tint and shape appointment, booked
          together.
        </>
      ),
    },
  ],
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Darker lashes and brows without daily mascara or brow pencil</li>
        <li>Fast appointment, no downtime</li>
        <li>Book lash tint, brow tint, or both together</li>
        <li>Results last 3-6 weeks</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Patch test if this is your first tint with me</li>
        <li>Application of silicone shields to protect the skin</li>
        <li>Tint applied to lashes and/or brows</li>
        <li>Tint removed and area cleaned</li>
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Arrive with clean lashes and brows, no makeup</li>
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
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Active eye infections or conditions</li>
        <li>Severe allergies affecting the eye area</li>
        <li>Recent eye surgery or procedures</li>
      </ul>
    </div>
  ),
  faqs: [
    {
      question:
        'How much does a lash tint or lash and brow tint cost in Kelowna?',
      answer:
        'Lash Tint Only is $25. Adding a lash tint onto a Brow Tint & Shape appointment is $40 total for both.',
    },
    {
      question: 'How long does a lash or brow tint last?',
      answer:
        'A lash or brow tint typically lasts 3-6 weeks, depending on your skin type and how quickly your hair sheds and regrows.',
    },
    {
      question:
        'Can I get a lash tint and a brow tint at the same appointment?',
      answer:
        "Yes. Adding a lash tint onto a Brow Tint & Shape appointment is $40 total, and it's one of my most popular quick appointments.",
    },
    {
      question:
        'Is lash or brow tinting safe if I have sensitive eyes or skin?',
      answer:
        "Tinting is suitable for most clients. For first-time clients I do a patch test, applying a small amount of tint to check for any reaction before your full appointment. Tell me about any eye conditions, allergies or skin sensitivities before we start, and I'll let you know if it's better to wait.",
    },
    {
      question: 'How do I prepare for a lash tint or brow tint?',
      answer:
        'Arrive with clean lashes and brows and no makeup, and remove your contact lenses before a lash tint. Tell me about any eye conditions or sensitivities before we start.',
    },
    {
      question:
        'What should I do after a lash or brow tint, and what makes it fade faster?',
      answer:
        'Avoid water, steam and heat for 24 hours and avoid rubbing your eyes. Oil-based makeup removers fade tint faster, so avoid them.',
    },
    {
      question: "Who shouldn't get a lash or brow tint?",
      answer:
        'I recommend waiting if you have an active eye infection or condition, severe allergies affecting the eye area, or have had recent eye surgery or procedures.',
    },
  ],
}

export const microbladingServiceData: ServiceData = {
  slug: 'permanent-makeup/microblading',
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
  testimonial: {
    component: TestimonialTwo,
  },
  thumbnail:
    '/services/permanent-makeup/permanent-makeup-microblading-before-after-01.jpg',
  about: (
    <>
      Here&apos;s what makes microblading different from other brow treatments:
      instead of filling brows in with powder or product, it uses a fine hand
      tool to deposit pigment in thin, hair-like strokes that follow your
      natural growth pattern. The result is microbladed eyebrows that look like
      real hair, not makeup. At Brows on Point in West Kelowna, it&apos;s a good
      fit if your brows are sparse, uneven, or were over-tweezed at some point
      and never quite grew back.
    </>
  ),
  extraSections: [
    {
      heading: 'Brow Mapping: The First Step',
      content: (
        <>
          Before any pigment is applied, every microblading appointment starts
          with eyebrow mapping: measuring your face and marking out a shape that
          suits your bone structure, using your natural brow as a starting
          point. You&apos;ll see and approve the mapped shape before I begin, so
          there are no surprises partway through. Brow mapping alone typically
          takes 20-30 minutes of the full appointment.
        </>
      ),
    },
  ],
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Natural-looking, hair-stroke results</li>
        <li>Brow mapping included, so you approve the shape first</li>
        <li>Fills in sparse or over-tweezed brows</li>
        <li>Reduces your daily makeup routine</li>
        <li>Water-resistant, smudge-proof results</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Consultation and full brow mapping</li>
        <li>Application of topical anesthetic</li>
        <li>Hand-drawn, hair-stroke pigment application</li>
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
        <li>No recent chemical peels or Botox in the brow area</li>
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
  policyNotice: pmuBookingFeeNotice,
  touchUpPricing: {
    firstAppointment: '$275',
    touchUp: '$100',
    yearOne: '$375',
  },
  faqs: [
    {
      question: 'How much does microblading cost in Kelowna?',
      answer:
        'Microblading is $275 for your first appointment, which includes brow mapping and the full procedure. A touch-up is $100, bringing your total first year to $375.',
    },
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
        'A colour boost refreshes microblading that has started to fade, typically 9-18 months after your last appointment. It costs $170.',
    },
    {
      question: 'Is microblading painful?',
      answer:
        'I apply a topical anesthetic before starting, so most clients describe the sensation as pressure rather than pain.',
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
        "A $50 booking fee secures your appointment. It can be transferred to a new date once, with 24 hours' notice, and no-shows forfeit it. If you arrive more than 10 minutes late, the appointment is cancelled.",
    },
  ],
}

export const browTintWaxShapeData: ServiceData = {
  slug: 'brows/brow-tint-and-shape',
  hubLink: { text: 'All Brow Services', href: '/brows' },
  shortDescription:
    'Eyebrow tint and shape: tinting and hot-wax shaping together in one appointment.',
  title: 'Eyebrow Tinting & Shaping',
  description:
    'An eyebrow tint darkens and defines your natural brow hair with a semi-permanent dye, and hot-wax shaping cleans up the line at the same time, so your brows look fuller and more defined in one $25 appointment.',
  galleryImages: ['/services/brows/brows-tint-and-shape-closeup-01.jpg'],
  duration: '30 minutes',
  results: '3-6 weeks for tint, ongoing for shape',
  price: '$25',
  testimonial: {
    component: TestimonialMakeup,
  },
  thumbnail: '/services/brows/brows-tint-and-shape-closeup-01.jpg',
  extraSections: [
    {
      heading: 'Brow Tinting in Kelowna',
      content: (
        <>
          Brow tinting colours your natural brow hair with a semi-permanent dye,
          so sparse or light brows look fuller and more defined. It is painless,
          and a tint typically holds for 3-6 weeks. If this is your first tint
          with me, I&apos;ll do a patch test first.
        </>
      ),
    },
    {
      heading: 'Eyebrow Shaping in Kelowna',
      content: (
        <>
          Eyebrow shaping uses precise hot-wax hair removal to clean up stray
          hairs and define the line. Your shape is mapped to your face rather
          than a generic arch, and most clients rebook every 3-4 weeks to keep
          it clean. Tinting and shaping are booked together for $25.
        </>
      ),
    },
  ],
  about: (
    <>
      Not every brow needs permanent makeup. If you&apos;re after something
      lower-commitment, Brow Tint &amp; Shape in West Kelowna covers eyebrow
      tinting, eyebrow waxing, and brow shaping, all in one $25 appointment.
      Tint adds colour with a semi-permanent dye, and shape uses precise hot-wax
      hair removal to clean up stray hairs and define the line, mapped to your
      face rather than a generic arch.
    </>
  ),
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>No needles, no downtime</li>
        <li>Tint and shape together in one appointment</li>
        <li>Tint holds for 3-6 weeks</li>
        <li>Shape mapped to your face, not a generic arch</li>
        <li>A low-commitment way to try a fuller brow look</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Quick consultation on shape and tint colour</li>
        <li>Patch test if this is your first tint with me</li>
        <li>Application of the tint</li>
        <li>Precise hot-wax removal and shape check</li>
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
        <li>No makeup on freshly waxed skin for the rest of the day</li>
        <li>Avoid direct sun and tanning beds while any redness settles</li>
        <li>Avoid exfoliating products on the brow area for a few days</li>
      </ul>
    </div>
  ),
  faqs: [
    {
      question: 'How much does eyebrow tinting and shaping cost in Kelowna?',
      answer:
        'Brow Tint & Shape is $25, and includes both the tint and the hot-wax shaping in one appointment.',
    },
    {
      question:
        'Can I get my eyebrows tinted and waxed at the same appointment?',
      answer:
        'Yes. Tint and shape are booked together as one appointment, sometimes called a hybrid brow tint and shape.',
    },
    {
      question: 'How long does an eyebrow tint last?',
      answer:
        'A brow tint typically lasts 3-6 weeks, depending on your skin type and how quickly your brow hair sheds and regrows.',
    },
    {
      question: 'Does eyebrow tinting or hot-wax shaping hurt?',
      answer:
        'No. Tinting is painless. The shaping step involves brief, mild discomfort as the wax is removed, similar to any hot-wax hair removal.',
    },
    {
      question: 'How often should I book eyebrow tinting and shaping?',
      answer:
        'Most clients rebook every 3-4 weeks to keep their shape clean, though this varies with how quickly your hair grows back.',
    },
    {
      question: 'Do I need a patch test before my first eyebrow tint?',
      answer:
        'Yes, if this is your first tint with me, I do a patch test first to check for any reaction before the full tint is applied.',
    },
    {
      question: 'How do I prepare for eyebrow tinting and shaping?',
      answer:
        'Arrive with clean skin and no brow makeup, and avoid retinol products for 48 hours beforehand. If you want a full reshape, let your brows grow out a little first, and tell me about any skin sensitivities before I start.',
    },
    {
      question: 'What should I do after eyebrow tinting and hot-wax shaping?',
      answer:
        "Avoid water and sweat on the brows for a few hours and don't wear makeup on the freshly waxed skin for the rest of the day. Avoid direct sun, tanning beds and exfoliating products on the area for a few days while any redness settles.",
    },
    {
      question: 'How long does an eyebrow tint and shape appointment take?',
      answer:
        'About 30 minutes. We start with a quick consultation on shape and tint colour, then I apply the tint and finish with precise hot-wax shaping and a shape check.',
    },
  ],
}

export const powderBrowsServiceData: ServiceData = {
  slug: 'permanent-makeup/powder-brows',
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
  testimonial: {
    component: TestimonialMakeup,
  },
  thumbnail:
    '/services/permanent-makeup/permanent-makeup-powder-brows-before-after-01.jpg',
  about: (
    <>
      Where microblading draws individual hair strokes, powder brows (also
      called eyebrow shading or soft powder brows) build colour with tiny dots
      of pigment, blended into an even, filled-in finish, similar to the look of
      powder brow makeup, but semi-permanent. It suits most skin types,
      including oily skin, where fine hair-stroke work tends to blur over time.
      Every appointment starts with a consultation on shape and depth of colour
      before I begin.
    </>
  ),
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Soft, filled-in look that holds its shape</li>
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
      </ul>
    </div>
  ),
  preparation: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Avoid blood thinners for 2 weeks prior (unless prescribed)</li>
        <li>No alcohol 48 hours before your appointment</li>
        <li>Discontinue Retinol products 2 weeks prior</li>
        <li>No recent chemical peels or Botox in the brow area</li>
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
        'Powder brows are $300 for your first appointment. A touch-up is $125, bringing your total first year to $425.',
    },
    {
      question: 'Are powder brows a good choice for oily skin?',
      answer:
        'Yes. Powder brows tend to hold up well on oily and combination skin, where fine hair-stroke techniques can blur more quickly.',
    },
    {
      question: 'How long do powder brows last before they need a refresh?',
      answer:
        'Powder brows typically last 1-2 years, depending on your skin type and how well you follow the aftercare. Ask me at your consultation for a more specific estimate.',
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
    {
      question: 'Is there a booking fee for powder brows?',
      answer:
        "A $50 booking fee secures your appointment. It can be transferred to a new date once, with 24 hours' notice, and no-shows forfeit it. If you arrive more than 10 minutes late, the appointment is cancelled.",
    },
  ],
}

export const salineRemovalServiceData: ServiceData = {
  slug: 'permanent-makeup/saline-tattoo-removal',
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
  results: 'Often requires more than one session',
  price: '$125',
  about: (
    <>
      If you&apos;re comparing laser eyebrow tattoo removal to other options,
      here&apos;s the upfront answer: Brows on Point in West Kelowna offers
      saline removal, not laser. Saline removal draws pigment out of the skin
      using a saline solution and works well for microblading removal and small
      tattoos. It&apos;s a different mechanism than laser, which breaks pigment
      down with light energy, and it&apos;s worth knowing the difference before
      you book either.
    </>
  ),
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>A gentler alternative to laser for PMU and small tattoos</li>
        <li>Well suited to microblading removal specifically</li>
        <li>No laser equipment involved</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Consultation to assess the area and expected number of sessions</li>
        <li>Application of topical anesthetic</li>
        <li>Saline solution worked into the treatment area</li>
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
          it off early strips out lifted pigment and risks scarring
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
          Recent chemotherapy, Blood-thinning medications, or Keloid scarring
          history
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
          Emergency saline removal is available within 24 hours of your original
          appointment, for a $200 after-hours fee.
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'How much does saline tattoo removal cost in Kelowna?',
      answer:
        'Saline tattoo and PMU removal is $125. Most clients need more than one session, so ask about your specific case at a free consultation.',
    },
    {
      question: 'Does Brows on Point offer laser tattoo removal?',
      answer:
        'No. Brows on Point offers saline removal, which uses a saline solution rather than laser energy. If you specifically need laser removal, that would be a different provider.',
    },
    {
      question: 'How many sessions of saline tattoo removal will I need?',
      answer:
        'It varies by how much pigment is in the skin. Most clients need more than one session, and I can give you a better estimate at your consultation.',
    },
    {
      question: 'Can saline removal remove or lighten microblading?',
      answer:
        'Yes. Saline removal is a common choice for removing or lightening microblading, since it works gently on the fine strokes typical of that technique.',
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
      question: 'How do I care for my skin after saline tattoo removal?',
      answer:
        "Keep the area strictly dry and let a thin scab form, blotting it every 30-60 minutes for the first few hours. Don't pick the scab; it usually falls off on its own within 7-14 days. Full healing takes 6-8 weeks, and you should wait until then before another saline session or new permanent makeup in the same area.",
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
  price: '$199',
  serviceOptionsHeading: 'Choose Your Eyeliner',
  testimonial: {
    component: TestimonialMakeup,
  },
  about: (
    <>
      Permanent eyeliner (also called an eyeliner tattoo) implants pigment along
      the lash line, so definition stays put through swimming, workouts, and
      every day in between. The subtle version, often called lash line
      enhancement or lash enhancement tattoo, fills in the gaps between your
      lashes for a fuller-looking lash line without a visible liner. A more
      defined top-and-bottom eyeliner tattoo is also available for clients who
      want more visible definition.
    </>
  ),
  serviceOptions: [
    {
      name: 'Upper / Lash Line Enhancement',
      price: '$199',
      description: (
        <>
          Subtle pigment along the upper lash line for fuller-looking lashes
          without a visible liner line. Touch-up $135, year-one total $334.
        </>
      ),
    },
    {
      name: 'Lower Eyeliner',
      price: '$120',
      description: (
        <>
          Defined liner along the lower lash line on its own. Touch-up is $100
          for returning clients.
        </>
      ),
    },
    {
      name: 'Top + Bottom Eyeliner',
      price: '$319',
      description: (
        <>
          Defined liner along both the top and bottom lash lines. The touch-up
          is $180 for existing clients.
        </>
      ),
    },
  ],
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Smudge-proof, swim-proof definition</li>
        <li>Subtle lash enhancement or a fully defined liner look</li>
        <li>Saves time on your daily makeup routine</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Consultation on the look you want</li>
        <li>Application of topical anesthetic</li>
        <li>Precise pigment implantation along the lash line</li>
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
      question: 'How much does permanent eyeliner cost in Kelowna?',
      answer:
        'Upper lash line enhancement is $199, with a $135 touch-up. Lower eyeliner on its own is $120. Top and bottom together is $319, with a $180 touch-up.',
    },
    {
      question:
        "What's the difference between permanent lash line enhancement and full top-and-bottom permanent eyeliner?",
      answer:
        'Lash enhancement is subtle: pigment fills the gaps between your lashes so the line barely shows on its own. A full top-and-bottom eyeliner tattoo is more visibly defined.',
    },
    {
      question: 'How long does permanent eyeliner last?',
      answer:
        'Typically 2-3 years, depending on your skin and how well you follow the aftercare instructions.',
    },
    {
      question: "Who isn't a good candidate for permanent eyeliner?",
      answer:
        "You should wait or check with your doctor first if you are pregnant or breastfeeding, have an active skin condition or an uncontrolled autoimmune condition, have lupus or rheumatoid arthritis that is not controlled and cleared with a doctor's note, have had recent chemotherapy, take blood-thinning medications, or have a history of keloid scarring.",
    },
    {
      question: 'How do I prepare for my permanent eyeliner appointment?',
      answer:
        'Avoid blood thinners for 2 weeks beforehand unless they are prescribed, skip alcohol for 48 hours, and remove your contact lenses before treatment. Tell me about any eye conditions or sensitivities.',
    },
    {
      question: 'How do I take care of permanent eyeliner while it heals?',
      answer:
        'Keep the area clean and dry for 7 days, avoid eye makeup for 2 weeks, and skip swimming and saunas while it heals. Attend your touch-up appointment within 2 months.',
    },
    {
      question:
        'How long is a permanent eyeliner appointment, and does it hurt?',
      answer:
        'Plan for 1.5-2 hours. I apply a topical anesthetic before the pigment is placed along the lash line, and we start with a consultation about the look you want.',
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
  price: '$40',
  thumbnail: '/services/smile/smile-tooth-gem-closeup-01.jpg',
  about: (
    <>
      A tooth gem, sometimes searched as a teeth gem, teeth jewel, or teeth
      jewelry, is a small piece of genuine Swarovski crystal bonded straight
      onto your tooth&apos;s surface with a dental-grade adhesive. It&apos;s
      fully reversible and doesn&apos;t require any drilling. Choose a classic
      round crystal or a shaped design like a butterfly tooth gem, placed
      wherever you&apos;d like a bit of sparkle when you smile.
    </>
  ),
  extraSections: [
    {
      heading: 'Multiple Gems',
      content: <>Ask about multi-gem pricing at your consultation.</>,
    },
  ],
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Genuine Swarovski crystal</li>
        <li>Dental-grade adhesive, safe for your enamel</li>
        <li>No drilling, fully reversible</li>
        <li>Classic or shaped designs, like a butterfly tooth gem</li>
        <li>Quick appointment, immediate results</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Quick consultation on placement and design</li>
        <li>Professional cleaning of the tooth surface</li>
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
      question: 'How much does a Swarovski tooth gem cost in Kelowna?',
      answer:
        'A single Swarovski tooth gem is $40. Ask about multi-gem pricing at your appointment.',
    },
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
      answer:
        'Yes. Many clients choose two or more. Ask about multi-gem pricing at your appointment.',
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
  testimonial: {
    component: TestimonialTeeth,
  },
  about: (
    <>
      Professional, cosmetic teeth whitening uses a stronger whitening gel and
      an LED light than at-home strips, so results show up in one in-office
      session instead of weeks of daily treatments. At Brows on Point in West
      Kelowna, Basic and Ultra sessions differ in treatment time, and I also
      offer a 24k gold whitening option built for sensitive teeth.
    </>
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
        <li>Professional-grade whitening gel and LED light</li>
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
        <li>Avoid staining foods and drinks for 48 hours</li>
        <li>Use a whitening-safe toothpaste to maintain results</li>
        <li>Maintain your regular dental hygiene routine</li>
      </ul>
    </div>
  ),
  contraindications: teethWhiteningContraindications,
  faqs: [
    {
      question: 'How much does teeth whitening cost in Kelowna?',
      answer:
        'Basic whitening is $99 for two 20-minute sessions. Ultra is $145 for three sessions. 24k gold whitening, recommended for sensitive teeth, is also $99.',
    },
    {
      question: 'Where does Brows on Point offer teeth whitening?',
      answer:
        'Yes. Brows on Point is based in West Kelowna and offers professional, in-office teeth whitening by appointment.',
    },
    {
      question: 'How long do professional teeth whitening results last?',
      answer:
        'Results typically last up to 6 months, depending on your diet and oral hygiene habits afterward.',
    },
    {
      question:
        'Is in-office teeth whitening better than at-home whitening strips?',
      answer:
        'In-office whitening uses a stronger professional gel with an LED light, so results are visible after one appointment rather than weeks of at-home use.',
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
        "No. Crowns, veneers, bonding and other restorations on front teeth won't whiten, and can end up a mismatched colour next to your natural teeth.",
    },
    {
      question: 'What should I avoid after teeth whitening?',
      answer:
        'Avoid staining foods and drinks for 48 hours, and use a whitening-safe toothpaste to maintain your results.',
    },
    {
      question:
        "What's the difference between Basic, Ultra and 24k gold teeth whitening?",
      answer:
        'Basic and Ultra use the same whitening gel and differ in how many 20-minute sessions you get, so Ultra goes further for a brighter result. The 24k gold option uses a gentler formula and is what I recommend if your teeth or gums are sensitive.',
    },
  ],
}

export const sensitiveTeethWhiteningServiceData: ServiceData = {
  slug: 'smile/sensitive-teeth-whitening',
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
      process as my Basic and Ultra sessions, formulated to be gentler on
      sensitive teeth. This page covers my in-studio option. For at-home
      whitening strips or products, that&apos;s a different category of product
      I don&apos;t sell here.
    </>
  ),
  benefits: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Built for clients with sensitive teeth</li>
        <li>Same professional, in-office whitening process</li>
        <li>Visible results in a single appointment</li>
      </ul>
    </div>
  ),
  process: (
    <div className="mx-auto max-w-2xl px-6">
      <ul className="list-disc space-y-2 pl-6">
        <li>Consultation and shade check</li>
        <li>Application of the 24k gold whitening formula</li>
        <li>LED light treatment</li>
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
  contraindications: teethWhiteningContraindications,
  faqs: [
    {
      question:
        'Is 24k gold teeth whitening really better for sensitive teeth?',
      answer:
        "It's formulated to be gentler than my standard whitening options, which is why I recommend it for clients who know they have sensitive teeth.",
    },
    {
      question:
        'How much does 24k gold teeth whitening for sensitive teeth cost?',
      answer: '24k gold whitening is $99, the same price as Basic whitening.',
    },
    {
      question: "Who shouldn't get 24k gold teeth whitening?",
      answer:
        'The same limits apply as for my other whitening: active cavities or decay, periodontal disease or gum recession, exposed dentin or significant enamel erosion, cracked teeth, pregnancy or breastfeeding, being under 18, or an allergy to peroxide.',
    },
    {
      question:
        'How do I prepare for 24k gold teeth whitening if my teeth are sensitive?',
      answer:
        'Brush your teeth thoroughly beforehand, and tell me about your sensitivity and any existing dental work so I can plan the session around it.',
    },
    {
      question: 'How do I look after sensitive teeth after 24k gold whitening?',
      answer:
        'Avoid staining foods and drinks for 48 hours and use a sensitivity-friendly toothpaste to maintain your results.',
    },
    {
      question: 'What happens during a 24k gold teeth whitening session?',
      answer:
        'After a consultation and shade check, I apply the 24k gold whitening formula and do an LED light treatment. We finish with a final shade check and aftercare instructions, and the visit takes 40-60 minutes.',
    },
  ],
}

export const rfSkinTighteningData: ServiceData = {
  slug: 'skin-tightening',
  shortDescription:
    'RF skin tightening: a non-invasive treatment for face, neck, and body using a 40k ultrasonic machine.',
  title: 'Skin Tightening Treatment',
  description:
    'RF skin tightening uses radiofrequency energy to gently heat the deeper layers of skin, encouraging your body to produce more collagen so skin looks firmer over time. At Brows on Point in West Kelowna, treatment is done with a 40k ultrasonic RF machine that combines skin tightening with ultrasonic exfoliation in one session.',
  duration: '45 minutes',
  results: '4-6 weeks, cumulative with a course of treatments',
  price: '$75',
  about: (
    <>
      Radio frequency skin tightening, also called an RF facial, is a
      non-invasive way to firm and refresh the skin&apos;s texture without any
      downtime. It&apos;s a skin-quality treatment: it works on tone, texture,
      and firmness, not on reducing fat or changing body shape.
    </>
  ),
  extraSections: [
    {
      heading: 'Face, Neck & Body',
      content: (
        <>
          RF skin tightening can be used on the face for a radio frequency
          facial, on the neck for face and neck tightening together, or on the
          body for general skin firmness, always as a skin-quality treatment,
          not a fat-loss or body-contouring service. If you&apos;re asking about
          fat reduction specifically, that&apos;s a different treatment I
          don&apos;t currently offer.
        </>
      ),
    },
    {
      heading: '3-Session Package',
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
        <li>RF skin tightening passes with the 40k ultrasonic machine</li>
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
    <div className="mx-auto max-w-2xl px-6">
      <h4 className="font-semibold text-primary">Medical & Safety</h4>
      <ul className="list-disc space-y-2 pl-6">
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
      <h4 className="mt-6 font-semibold text-primary">Skin Conditions</h4>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Active skin infections, cystic acne breakouts, cold sores, eczema,
          psoriasis, or rosacea flare-ups in the treatment area
        </li>
        <li>History of keloid scarring</li>
        <li>Recent tanning or a sunburn in the treatment area</li>
      </ul>
    </div>
  ),
  faqs: [
    {
      question: 'How much does RF skin tightening cost in Kelowna?',
      answer:
        'A single RF neck/facial skin tightening session is $75. A 3-session package is $175.',
    },
    {
      question:
        'What is the 40k ultrasonic machine used for RF skin tightening?',
      answer:
        "It's a facial device that combines radiofrequency (RF) energy with 40kHz ultrasonic vibration to tighten skin, boost collagen, and deeply exfoliate in a single treatment.",
    },
    {
      question: 'Is RF skin tightening painful?',
      answer:
        'No, most clients describe a warm, relaxing sensation during treatment with no discomfort.',
    },
    {
      question: 'How many RF skin tightening sessions will I need?',
      answer:
        "Results build over a course of treatments. I'll recommend a personalized plan during your consultation based on your skin goals.",
    },
    {
      question: 'Is there any downtime after RF skin tightening?',
      answer:
        'None. You can return to your normal routine immediately after treatment.',
    },
    {
      question: 'Does RF skin tightening reduce fat or change body shape?',
      answer:
        'No. This is a skin-tightening and texture treatment, not a fat-reduction or body-contouring service.',
    },
    {
      question: "Who shouldn't have RF skin tightening?",
      answer:
        "I don't recommend it with a pacemaker, defibrillator or other implanted electronic device, or metal plates, screws or pins in the treatment area. It's also not suitable if you are pregnant or breastfeeding, have active cancer or an undiagnosed lesion in the area, have active skin infections or flare-ups there, have a history of keloid scarring, or have recent tanning or a sunburn in the area.",
    },
    {
      question: 'How do I prepare for my RF skin tightening appointment?',
      answer:
        'Arrive with clean, makeup-free skin, avoid sun exposure or sunburn in the days before, and stop retinol products 48 hours beforehand. Tell me about any metal implants, pacemakers or skin conditions.',
    },
    {
      question: 'What happens during an RF skin tightening treatment?',
      answer:
        'We start with a skin assessment and cleansing, then I use ultrasonic exfoliation to remove dead skin cells. I then do the RF tightening passes with the 40k ultrasonic machine and finish with a soothing, hydrating serum. A session takes about 45 minutes.',
    },
    {
      question: 'What should I do after RF skin tightening?',
      answer:
        'Apply SPF daily, stay well hydrated, and avoid harsh exfoliants for 48 hours. Book follow-up sessions as recommended for the best results.',
    },
  ],
}
