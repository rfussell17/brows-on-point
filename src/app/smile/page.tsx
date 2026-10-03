import HubPage from '@/components/services/hub-page'
import { ogMeta } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smile Services in Kelowna',
  description:
    'Teeth whitening and Swarovski tooth gems in Kelowna at Brows on Point in West Kelowna. Explore my smile services and book your appointment online today.',
  openGraph: ogMeta('/og/smile-services-og_brows-on-point.jpg', 'Smile Services'),
}

export default function SmileHubPage() {
  return (
    <HubPage
      title="Smile Services"
      path="/smile"
      intro={
        <>
          Brows on Point offers professional teeth whitening and Swarovski tooth
          gems in West Kelowna, alongside my lash, brow, and permanent makeup
          services.
        </>
      }
      spokes={[
        {
          title: 'Teeth Whitening',
          description:
            'Professional in-studio teeth whitening, with a 24k gold option for sensitive teeth.',
          href: '/smile/teeth-whitening',
          image: '/services/smile/smile-teeth-whitening-basic-before-after-01.jpg',
        },
        {
          title: '24K Gold Whitening for Sensitive Teeth',
          description:
            'A gentler whitening option built for clients with sensitive teeth.',
          href: '/smile/sensitive-teeth-whitening',
          image: '/services/smile/smile-teeth-whitening-before-after-01.jpg',
        },
        {
          title: 'Swarovski Tooth Gems',
          description:
            'Genuine Swarovski crystal tooth gems, professionally applied.',
          href: '/smile/tooth-gems',
          image: '/services/smile/smile-tooth-gem-closeup-01.jpg',
        },
      ]}
    />
  )
}
