import Image, { type StaticImageData } from 'next/image'
import { Container } from '../container'

interface Logo {
  alt: string
  src: StaticImageData | string
  href?: string
}

interface LogoGridProps {
  title: string
  logos: Logo[]
  bgVariant?: 'light' | 'primary' | 'primary-950'
}

export const logos = [
  {
    name: 'Swarovski',
    alt: 'Swarovski logo',
    src: '/partners/partners-swarovski-logo-01.png',
  },
  {
    name: 'Kwadron',
    alt: 'Kwadron logo',
    src: '/partners/partners-kwadron-logo-white-01.png',
  },
  {
    name: 'Brow Daddy',
    alt: 'Brow Daddy logo',
    src: '/partners/partners-brow-daddy-logo-01.png',
  },
  {
    name: 'Vertix',
    alt: 'Vertix logo',
    src: '/partners/partners-vertix-logo-01.png',
  },
  {
    name: 'Inlei',
    alt: 'Inlei logo',
    src: '/partners/partners-inlei-logo-01.png',
  },
]

const LogoGrid: React.FC<LogoGridProps> = ({
  title,
  logos,
  bgVariant = 'primary',
}) => {
  const isDark = bgVariant !== 'light'
  const bgClass =
    bgVariant === 'primary-950'
      ? 'bg-primary-950 ring-1 ring-inset ring-secondary-700'
      : bgVariant === 'primary'
        ? 'bg-primary'
        : 'bg-light'
  const headingColor = isDark ? 'text-light' : 'text-primary'

  return (
    <div className={`${bgClass} py-8 md:py-12 lg:py-20`}>
      <Container>
        <h2 className={`text-center text-heading ${headingColor}`}>{title}</h2>
        <div className="mt-8 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-5">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex w-full max-w-40 items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={300}
                height={10}
                className="h-12 w-full object-contain"
                sizes="160px"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default LogoGrid
