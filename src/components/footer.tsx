import { Container } from '@/components/container'
import { Link } from '@/components/link'
import { ACUITY_URL } from '@/lib/site'
import Image from 'next/image'

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold uppercase tracking-wider text-light/70">
      {children}
    </h3>
  )
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-4 space-y-3 text-sm">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="text-light/80 transition-colors hover:text-light"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Services</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/lashes">Lashes</SitemapLink>
          <SitemapLink href="/brows">Brows</SitemapLink>
          <SitemapLink href="/permanent-makeup">Permanent Makeup</SitemapLink>
          <SitemapLink href="/smile">Smile Services</SitemapLink>
          <SitemapLink href="/skin-tightening">Skin Tightening</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Company</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/about">About</SitemapLink>
          <SitemapLink href="/training">Training</SitemapLink>
          <SitemapLink href="/contact">Contact</SitemapLink>
          <SitemapLink href="/services">All Services</SitemapLink>
          <SitemapLink href="/blog">Blog</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Help</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href={ACUITY_URL}>
            Book Appointment
          </SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconFacebook(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-primary">
      {/* Links area — the border-t gives a safe seam against whatever the page put directly above the footer (the combined reviews/CTA/map banner on every page now), regardless of its colour. */}
      <div className="border-t border-light/10 bg-primary-950">
        <Container>
          <div className="py-12">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
              {/* Logo + social */}
              <div className="lg:col-span-2">
                <Link href="/" title="Home">
                  <Image
                    src="/logo_white.png"
                    alt="Brows on Point"
                    width={160}
                    height={64}
                  />
                </Link>
                <div className="mt-6 flex gap-5">
                  <Link
                    href="https://www.facebook.com/Browsonpointkelowna"
                    target="_blank"
                    aria-label="Visit my Facebook"
                    className="text-light/70 transition-colors hover:text-secondary-300"
                  >
                    <SocialIconFacebook className="size-5" />
                  </Link>
                </div>
              </div>

              {/* Sitemap columns */}
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
                <Sitemap />
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 border-t border-light/10 pt-8 text-center">
              <p className="text-sm text-light/50">
                &copy; {new Date().getFullYear()} Brows on Point. All rights
                reserved.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
