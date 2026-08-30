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
  theme?: 'light' | 'dark'
}

export const logos = [
  {
    name: 'Swarovski',
    alt: 'Swarovski logo',
    src: '/logo-cloud/swarovski_logo.png',
  },
  {
    name: 'Kwadron',
    alt: 'Kwadron logo',
    src: '/logo-cloud/kwadron_white.png',
  },
  {
    name: 'Li Pigments',
    alt: 'Li Pigments logo',
    src: '/logo-cloud/li_pigments.png',
  },
]

const LogoGrid: React.FC<LogoGridProps> = ({ title, logos, theme = 'dark' }) => {
  const bgClass = theme === 'dark' ? 'bg-primary' : 'bg-light'
  const headingColor = theme === 'dark' ? 'text-light' : 'text-primary'

  return (
    <div className={`${bgClass} py-8 md:py-12 lg:py-20`}>
      <Container>
        <h2 className={`text-center text-3xl sm:text-5xl ${headingColor}`}>
          {title}
        </h2>
        <div className="mt-8 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-3">
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
