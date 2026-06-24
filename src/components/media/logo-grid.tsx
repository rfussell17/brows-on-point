import Image, { type StaticImageData } from 'next/image'

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
    name: 'Derol',
    alt: 'Derol logo',
    src: '/logo-cloud/derol_logo.png',
  },
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

const LogoGrid: React.FC<LogoGridProps> = ({
  title,
  logos,
  theme = 'light',
}) => {
  const bgClass = theme === 'dark' ? 'bg-primary' : 'bg-white'
  const titleColor = theme === 'dark' ? 'text-white' : 'text-primary-light'

  return (
    <div className={`${bgClass} py-8 md:py-12 lg:py-20`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className={`leading-12 text-center text-6xl ${titleColor}`}>
          {title}
        </h2>
        <div className="mt-8 flow-root">
          <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex w-full max-w-40 items-center justify-center lg:max-w-none"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={300}
                  height={10}
                  className="h-12 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoGrid
