import { BlogPostLayout } from '@/components/blog/blog-post-layout'
import { Link } from '@/components/link'
import { createPostMetadata } from '@/lib/blog-metadata'
import { blogPosts } from '@/lib/blog-posts'

const slug = 'lash-lift-aftercare-tips'
const postMeta = blogPosts[slug]

export const metadata = createPostMetadata(slug, postMeta)

const faqs = [
  {
    question: 'How long does a lash lift and tint last?',
    answer:
      'A lash lift and tint typically lasts 6-12 weeks, depending on which technique you choose and your natural lash growth cycle.',
  },
  {
    question: 'Can I wear mascara after a lash lift?',
    answer:
      "Yes, once the 48-hour aftercare window has passed, though many clients find they don't need it, since the lift and tint already do the work.",
  },
]

export default function LashLiftAftercareTipsPage() {
  return (
    <BlogPostLayout
      slug={slug}
      postMeta={postMeta}
      tldr={{
        summary:
          'The first two days after a lash lift and tint set how long the curl and colour hold. Keep the lashes dry, leave them alone, and the rest takes care of itself.',
        points: [
          'Avoid water, steam, and heat for 48 hours',
          'Skip mascara and eye makeup for 48 hours',
          'Avoid touching or rubbing your eyes',
          'Sleep on your back the first night, if you can',
        ],
      }}
      faqs={faqs}
    >
      <p>
        A lash lift and tint reshapes your natural lashes around a small
        silicone rod and darkens them with a semi-permanent tint, so you wake
        up with definition and no mascara required. But the result you leave
        the studio with isn&apos;t the final one — how you treat your lashes
        in the first two days determines how well the curl and colour hold
        over the following weeks.
      </p>

      <h2>The first 48 hours matter most</h2>
      <p>
        The lifting and tinting solutions are still settling into the lash
        for the first two days after your appointment. During that window:
      </p>
      <ul>
        <li>Avoid water, steam, and heat, including hot showers and saunas</li>
        <li>Skip mascara and eye makeup entirely</li>
        <li>Avoid touching or rubbing your eyes</li>
        <li>Sleep on your back for the first night if you can manage it</li>
      </ul>
      <p>
        Water and heat can soften the lift before it&apos;s fully set,
        relaxing the curl early. Rubbing or sleeping face-down does the same
        thing mechanically, by pressing the lashes out of shape while they&apos;re
        still vulnerable.
      </p>

      <h2>After the first two days</h2>
      <p>
        Once the 48-hour window passes, your lashes are fully set and you can
        go back to your normal routine, mascara included. Most clients find
        they don&apos;t reach for it as often though, since the lift and tint
        already do the definition work mascara used to.
      </p>

      <h2>How long the results actually last</h2>
      <p>
        A lash lift and tint typically lasts 6-12 weeks. Where you land in
        that range depends on which technique you chose and your own natural
        lash growth cycle — lashes shed and regrow on a cycle of their own, so
        the lift grows out as each lash is naturally replaced, the same way a
        haircut grows out.
      </p>
      <p>
        Curious which lash lift technique is right for you? See the full
        breakdown on the{' '}
        <Link href="/lashes/lash-lift-and-tint">Lash Lift and Tint</Link>{' '}
        page, including pricing for the Keratin, BOMB, and Korean options.
      </p>
    </BlogPostLayout>
  )
}
