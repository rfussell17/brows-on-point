// DRAFT: written from the facts on the Microblading service page. Jamie should
// review the health, healing and safety wording before this goes live.
import { BlogPostLayout } from '@/components/blog/blog-post-layout'
import { Link } from '@/components/link'
import { createPostMetadata } from '@/lib/blog-metadata'
import { blogPosts } from '@/lib/blog-posts'

const slug = 'what-is-microblading'
const postMeta = blogPosts[slug]

export const metadata = createPostMetadata(slug, postMeta)

const faqs = [
  {
    question: 'What is microblading?',
    answer:
      'Microblading is a semi-permanent tattoo technique that uses a fine hand tool to deposit pigment in thin, hair-like strokes in the eyebrow area. It fills in sparse patches or reshapes brows, and typically lasts 1-2 years.',
  },
  {
    question: 'Is microblading permanent?',
    answer:
      'No. Microblading is semi-permanent. The pigment fades gradually and typically lasts 1-2 years, depending on your skin type and how well you follow the aftercare.',
  },
  {
    question: 'Does microblading hurt?',
    answer:
      'A topical anesthetic is applied before the procedure begins, so most clients describe the sensation as pressure rather than pain.',
  },
  {
    question: 'What does the microblading healing process look like?',
    answer:
      'Initial healing takes about 7-10 days, and the colour settles into its final shade over the following few weeks.',
  },
  {
    question: 'How much does microblading cost at Brows on Point?',
    answer:
      'At Brows on Point, microblading is $275 for your first appointment, which includes brow mapping and the full procedure. A touch-up is $100, bringing your first year to $375.',
  },
]

export default function WhatIsMicrobladingPage() {
  return (
    <BlogPostLayout
      slug={slug}
      postMeta={postMeta}
      tldr={{
        summary:
          'Microblading is a semi-permanent way to draw natural-looking, hair-like strokes into your eyebrows. It suits sparse or over-tweezed brows, lasts about 1-2 years, and needs a touch-up within two months.',
        points: [
          'A fine hand tool deposits pigment in hair-like strokes',
          'Brow mapping happens first, and you approve the shape',
          'Healing takes about 7-10 days; the colour settles over a few weeks',
          'Results last about 1-2 years, with a touch-up within 2 months',
          'Not suitable during pregnancy or breastfeeding, among other conditions',
        ],
      }}
      faqs={faqs}
      relatedPosts={[
        {
          title: 'Microblading in Kelowna',
          href: '/permanent-makeup/microblading',
        },
        {
          title: 'Powder Brows in Kelowna',
          href: '/permanent-makeup/powder-brows',
        },
        { title: 'Permanent Makeup in Kelowna', href: '/permanent-makeup' },
      ]}
    >
      <p>
        If your eyebrows are sparse, uneven, or never quite grew back after
        years of tweezing, you have probably come across microblading. It is one
        of the most popular eyebrow treatments, and also one of the most
        misunderstood. This guide explains what microblading is, how it works,
        what to expect at each stage, and who it suits.
      </p>

      <h3 id="in-this-guide">In this guide</h3>
      <ul>
        <li>
          <a href="#what-is-microblading">What microblading is</a>
        </li>
        <li>
          <a href="#how-it-works">How a microblading appointment works</a>
        </li>
        <li>
          <a href="#vs-other-options">
            Microblading vs brow makeup, tinting and a regular tattoo
          </a>
        </li>
        <li>
          <a href="#does-it-hurt">Does microblading hurt?</a>
        </li>
        <li>
          <a href="#healing">What healing looks like</a>
        </li>
        <li>
          <a href="#how-long-it-lasts">How long microblading lasts</a>
        </li>
        <li>
          <a href="#cost">How much microblading costs</a>
        </li>
        <li>
          <a href="#who-its-for">
            Who microblading is for, and who should wait
          </a>
        </li>
        <li>
          <a href="#vs-powder-brows">Microblading vs powder brows</a>
        </li>
        <li>
          <a href="#questions-to-ask">
            Questions to ask any microblading artist
          </a>
        </li>
        <li>
          <a href="#preparing">Preparing for your appointment</a>
        </li>
      </ul>

      <h2 id="what-is-microblading">What is microblading?</h2>
      <p>
        Microblading is a semi-permanent tattoo technique. Instead of a tattoo
        machine, the artist uses a fine hand tool to deposit pigment in thin,
        hair-like strokes that follow the direction of your natural brow hair.
        The goal is eyebrows that look like real hair, not makeup. It fills in
        sparse patches, adds shape where hair is missing, and can reshape a brow
        that over-tweezing left behind.
      </p>
      <p>
        You may hear it called eyebrow microblading, brow embroidery or a
        &ldquo;brow tattoo&rdquo;. It belongs to the wider family of{' '}
        <Link href="/permanent-makeup">permanent makeup</Link>, also called
        cosmetic tattooing or micropigmentation. The pigment is placed in the
        upper layers of the skin rather than deeper, which is why it fades
        gradually over time instead of staying forever.
      </p>

      <h2 id="how-it-works">How a microblading appointment works</h2>
      <p>
        A full microblading appointment at Brows on Point takes about two to two
        and a half hours. The steps are:
      </p>
      <ol>
        <li>
          <strong>Consultation and brow mapping.</strong> Before any pigment is
          applied, your face is measured and a shape is marked out to suit your
          bone structure, using your natural brow as the starting point. You see
          and approve the mapped shape before the procedure begins. Mapping
          alone typically takes 20-30 minutes of the appointment.
        </li>
        <li>
          <strong>Numbing.</strong> A topical anesthetic is applied to the area.
        </li>
        <li>
          <strong>Hair-stroke pigment application.</strong> Using the hand tool,
          pigment is deposited in fine strokes that mimic your natural hair
          pattern.
        </li>
        <li>
          <strong>Colour check and adjustments.</strong> The saturation is
          checked and any adjustments are made.
        </li>
        <li>
          <strong>Aftercare instructions.</strong> You leave with clear
          instructions for the healing period.
        </li>
      </ol>

      <h2 id="vs-other-options">
        Microblading vs brow makeup, tinting and a regular tattoo
      </h2>
      <p>
        Microblading sits between everyday brow makeup and a permanent tattoo,
        and it helps to see how the options compare:
      </p>
      <ul>
        <li>
          <strong>Brow makeup</strong> (pencil, powder or gel) is temporary and
          needs to be redone every day.
        </li>
        <li>
          <strong>Brow tinting</strong> colours your existing hair with a
          semi-permanent dye and typically holds for 3-6 weeks. It is a good
          low-commitment option if your brows already have enough hair, and it
          is $25 together with{' '}
          <Link href="/brows/brow-tint-and-shape">eyebrow shaping</Link>.
        </li>
        <li>
          <strong>Microblading</strong> places pigment in the skin, so it can
          fill in areas where hair is missing. It typically lasts 1-2 years.
        </li>
        <li>
          <strong>A regular tattoo</strong> is designed to stay for life.
          Microblading is not: the pigment is placed in the upper layers of the
          skin and fades gradually, which is why it needs refreshing.
        </li>
      </ul>

      <h2 id="does-it-hurt">Does microblading hurt?</h2>
      <p>
        Most clients describe the sensation as pressure rather than pain,
        because a topical anesthetic is applied before the procedure starts.
        Everyone&apos;s tolerance is different, so if you are nervous, tell your
        artist at the consultation.
      </p>

      <h2 id="what-it-looks-like">What will my microblading look like?</h2>
      <p>
        Done well, microblading looks like fine, individual brow hairs that
        follow your natural growth pattern, not a solid block of colour. The
        shape is planned during brow mapping, using your own brow as the
        starting point and your face as the guide, so it should look like a
        better version of your brows rather than a different pair. Because you
        approve the mapped shape before any pigment goes in, there should be no
        surprises.
      </p>
      <p>
        Remember that your brows will look different while they heal. Judge the
        result after the colour has settled and your touch-up is done, not on
        day one.
      </p>

      <h2 id="healing">What microblading healing looks like</h2>
      <p>
        Initial healing takes about 7-10 days, and the colour settles into its
        final shade over the following few weeks. During that time, your brows
        will not look like the finished result, and that is normal. Healing well
        depends on following the aftercare instructions:
      </p>
      <ul>
        <li>Keep the area clean and dry for 7 days</li>
        <li>Apply the aftercare product you were given, as directed</li>
        <li>Avoid makeup on the brows for 2 weeks</li>
        <li>No swimming, saunas or heavy sweating while healing</li>
        <li>Keep the area out of direct sunlight while it heals</li>
      </ul>

      <h2 id="how-long-it-lasts">How long does microblading last?</h2>
      <p>
        Microblading typically lasts 1-2 years, depending on your skin type and
        how well you follow the aftercare. Two follow-ups matter:
      </p>
      <ul>
        <li>
          <strong>The first touch-up</strong>, within 2 months of your first
          appointment. This fills in any spots where the pigment did not fully
          retain, which is normal and expected.
        </li>
        <li>
          <strong>A colour boost</strong>, typically 9-18 months after your last
          appointment, to refresh brows that have started to fade.
        </li>
      </ul>

      <h2 id="cost">How much does microblading cost?</h2>
      <p>
        At Brows on Point in West Kelowna, microblading is $275 for your first
        appointment, which includes brow mapping and the full procedure. The
        touch-up is $100, bringing your total for the first year to $375. A
        colour boost later on is $170. See the{' '}
        <Link href="/permanent-makeup/microblading">microblading page</Link> for
        the full details.
      </p>

      <h2 id="who-its-for">Who microblading is for, and who should wait</h2>
      <p>
        Microblading is a good fit if your brows are sparse, uneven, or were
        over-tweezed and never grew back, or if you simply want to cut down on
        your daily brow routine. Because it is water-resistant and smudge-proof,
        it holds up through workouts, swimming and sleep.
      </p>
      <p>
        It is not for everyone. You will need to wait or check with your doctor
        first if you have:
      </p>
      <ul>
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
      </ul>

      <h2 id="vs-powder-brows">Microblading vs powder brows</h2>
      <p>
        Microblading draws individual hair-like strokes for a natural, textured
        look. <Link href="/permanent-makeup/powder-brows">Powder brows</Link>{' '}
        use a shading technique with tiny dots of pigment for a softer, more
        filled-in finish, similar to brow makeup. Which one suits you depends on
        your skin and the look you want, and your artist can advise at your
        consultation.
      </p>

      <h2 id="questions-to-ask">Questions to ask any microblading artist</h2>
      <p>Whoever you choose, a good artist will be happy to answer these:</p>
      <ul>
        <li>Will you map my brows first, and can I approve the shape?</li>
        <li>Can I see photos of fully healed results, not just fresh ones?</li>
        <li>Is the touch-up included or priced separately, and when is it?</li>
        <li>
          What does the aftercare involve, and what is the booking policy?
        </li>
        <li>
          Who is a poor candidate, and what will you check at consultation?
        </li>
      </ul>
      <p>
        At Brows on Point, a $50 booking fee secures your appointment. It is
        transferable to a new date once, with 24 hours&apos; notice, and
        no-shows forfeit it.
      </p>

      <h2 id="preparing">Preparing for your appointment</h2>
      <ul>
        <li>Avoid blood thinners for 2 weeks beforehand, unless prescribed</li>
        <li>No alcohol for 48 hours before</li>
        <li>Stop retinol products 2 weeks before</li>
        <li>No recent chemical peels or Botox in the brow area</li>
        <li>No tanning or sunburn on the treatment area</li>
        <li>No caffeine on the day of your appointment</li>
      </ul>
      <p>
        Ready to talk through your brows? You can read about{' '}
        <Link href="/permanent-makeup/microblading">
          microblading in Kelowna
        </Link>{' '}
        at Brows on Point, or book a consultation online.
      </p>
    </BlogPostLayout>
  )
}
