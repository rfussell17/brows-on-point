'use client'

import { BUSINESS_EMAIL } from '@/lib/site'
import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const fieldClass =
  'w-full border-0 border-b border-light/60 bg-transparent px-1 py-3 text-body text-light placeholder:text-light/70 focus:border-light focus:outline-none focus:ring-0'

/**
 * The "Contact Us" form. Submissions go to Netlify Forms: it posts to the
 * static public/__forms.html, where Netlify registered the "contact" form at
 * deploy time. Field names must match that file.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const body = new URLSearchParams(
        new FormData(form) as unknown as Record<string, string>,
      ).toString()
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      name="contact"
      onSubmit={onSubmit}
      className="mx-auto mt-12 grid max-w-2xl gap-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Leave this empty: <input name="bot-field" />
        </label>
      </p>

      <label className="block">
        <span className="sr-only">Name</span>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Name"
          className={fieldClass}
        />
      </label>
      <label className="block">
        <span className="sr-only">Email</span>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email"
          className={fieldClass}
        />
      </label>
      <label className="block">
        <span className="sr-only">Subject</span>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="Subject"
          className={fieldClass}
        />
      </label>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="Type your message here..."
          className={`${fieldClass} resize-y`}
        />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-md bg-light px-4 py-3 text-body font-semibold text-primary shadow-sm hover:bg-primary-50 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Submit'}
      </button>

      <p aria-live="polite" className="text-center text-body text-gray-100">
        {status === 'sent' &&
          "Thanks! Your message was sent, and I'll get back to you soon."}
        {status === 'error' &&
          `Your message didn't send. Please try again, or email me at ${BUSINESS_EMAIL}.`}
      </p>
    </form>
  )
}
