import HubPage from '@/components/services/hub-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smile Services',
  description:
    'Teeth whitening and Swarovski tooth gems from Brows on Point in West Kelowna. Explore my smile services and book your appointment online.',
}

export default function SmileHubPage() {
  return (
    <HubPage
      title="Smile Services"
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
          image: '/services/thumbnail_teeth_brows_on_point.png',
        },
        {
          title: '24K Gold Whitening for Sensitive Teeth',
          description:
            'A gentler whitening option built for clients with sensitive teeth.',
          href: '/smile/sensitive-teeth-whitening',
          image: '/services/thumbnail_teeth_brows_on_point.png',
        },
        {
          title: 'Swarovski Tooth Gems',
          description:
            'Genuine Swarovski crystal tooth gems, professionally applied.',
          href: '/smile/tooth-gems',
          image: '/services/swarovski_crystal_gem.jpg',
        },
      ]}
    />
  )
}
