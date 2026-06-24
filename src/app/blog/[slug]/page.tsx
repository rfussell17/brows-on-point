import parse, { type DOMNode } from 'html-react-parser'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import sanitizeHtml from 'sanitize-html'
import { getWpPost } from '../../lib/wordpress'

export const metadata: Metadata = {
  description: '',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getWpPost(params.slug)

  if (!post) notFound()

  // Custom transform for parsing HTML
  const transform = (domNode: DOMNode) => {
    if (domNode.type === 'tag' && domNode.name === 'img' && domNode.attribs) {
      const { src, alt } = domNode.attribs
      return (
        <Image
          src={src || '/default-image.jpg'}
          alt={alt || 'Blog image'}
          width={768}
          height={450}
          className="my-4 rounded-lg object-cover"
        />
      )
    }

    return undefined
  }

  const sanitizedContent = sanitizeHtml(post.content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      iframe: ['src', 'allow', 'allowfullscreen', 'frameborder', 'scrolling'],
      img: ['src', 'alt', 'title', 'width', 'height'],
    },
  })

  return (
    <div className="bg-white px-6 py-16 lg:px-8">
      <article className="prose prose-lg mx-auto max-w-none">
        <h1 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {post.title}
        </h1>
        {parse(sanitizedContent, { replace: transform })}
      </article>
    </div>
  )
}
