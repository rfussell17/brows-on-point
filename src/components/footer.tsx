import { Container } from '@/components/container'
import { Link } from '@/components/link'
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
          <SitemapLink href="/smile">Smile</SitemapLink>
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
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Help</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="https://app.acuityscheduling.com/schedule.php?owner=15235407">
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

function SocialIconInstagram(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

interface FooterProps {
  /** Colour of the section immediately above the footer varies per page — this lets the CTA strip pick the opposite tone instead of always clashing as bg-primary. The links area below it stays bg-primary-950 regardless; that transition always reads fine. */
  ctaBgVariant?: 'primary' | 'primary-950'
}

export function Footer({ ctaBgVariant = 'primary' }: FooterProps) {
  const ctaBgClass =
    ctaBgVariant === 'primary-950'
      ? 'bg-primary-950 ring-1 ring-inset ring-secondary-700'
      : 'bg-primary'

  return (
    <footer className="bg-primary">
      {/* CTA strip */}
      <div
        className={`${ctaBgClass} border-b border-light/10 py-16 text-center`}
      >
        <Container>
          <h2 className="text-3xl text-light sm:text-5xl">
            Book your appointment today
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-light/70">
            West Kelowna&apos;s trusted studio for lash lifts, brow
            enhancements, and permanent makeup.
          </p>
          <div className="mt-8">
            <Link
              href="https://app.acuityscheduling.com/schedule.php?owner=15235407"
              className="inline-block rounded-md bg-light px-5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-primary-50"
            >
              Reserve Appointment
            </Link>
          </div>
        </Container>
      </div>

      {/* Links area */}
      <div className="bg-primary-950">
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
                    href="https://facebook.com"
                    target="_blank"
                    aria-label="Visit my Facebook"
                    className="text-light/70 transition-colors hover:text-secondary-300"
                  >
                    <SocialIconFacebook className="size-5" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    aria-label="Visit my Instagram"
                    className="text-light/70 transition-colors hover:text-secondary-300"
                  >
                    <SocialIconInstagram className="size-5" />
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
