/** @type {import('next').NextConfig} */
const nextConfig = {
  // BUILD-BRIEF.md §4.2 writes the route tree with trailing slashes, but
  // trailingSlash: true makes Next redirect bare paths to their slashed form
  // BEFORE checking redirects() below — old paths would 308 twice (once to
  // add the slash, once to the real destination) instead of once. Matching
  // this repo's existing no-trailing-slash convention avoids that.
  async redirects() {
    return [
      { source: '/brow-services', destination: '/services', permanent: true },
      {
        source: '/lash-lift',
        destination: '/lash-lift-and-tint',
        permanent: true,
      },
      {
        source: '/teeth-services',
        destination: '/teeth-whitening',
        permanent: true,
      },
      {
        source: '/rf-skin-tightening',
        destination: '/skin-tightening',
        permanent: true,
      },
      // Old-site pages Google still knows about (from the Search Console
      // indexed-pages export).
      { source: '/about-4', destination: '/about', permanent: true },
      { source: '/about-1', destination: '/about', permanent: true },
      { source: '/about-2', destination: '/about', permanent: true },
      { source: '/about-3', destination: '/about', permanent: true },
      // Old-site nested service URLs (CONTENT-AUDIT.md Search Console pages).
      // Services now live at flat routes, and the category hubs are gone, so
      // hubs go to All Services.
      { source: '/brows', destination: '/services', permanent: true },
      {
        source: '/brows/brow-tint-and-shape',
        destination: '/brow-tint-and-shape',
        permanent: true,
      },
      {
        source: '/brows/brow-tint-wax-shape',
        destination: '/brow-tint-and-shape',
        permanent: true,
      },
      { source: '/lashes', destination: '/services', permanent: true },
      {
        source: '/lashes/lash-lift-and-tint',
        destination: '/lash-lift-and-tint',
        permanent: true,
      },
      {
        source: '/lashes/lash-and-brow-tinting',
        destination: '/lash-tinting',
        permanent: true,
      },
      {
        source: '/lashes/lash-growth-serum',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/permanent-makeup',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/permanent-makeup/microblading',
        destination: '/microblading',
        permanent: true,
      },
      {
        source: '/permanent-makeup/powder-brows',
        destination: '/powder-brows',
        permanent: true,
      },
      {
        source: '/permanent-makeup/permanent-eyeliner',
        destination: '/permanent-eyeliner',
        permanent: true,
      },
      {
        source: '/permanent-makeup/saline-tattoo-removal',
        destination: '/saline-tattoo-removal',
        permanent: true,
      },
      { source: '/smile', destination: '/services', permanent: true },
      {
        source: '/smile/teeth-whitening',
        destination: '/teeth-whitening',
        permanent: true,
      },
      {
        source: '/smile/sensitive-teeth-whitening',
        destination: '/sensitive-teeth-whitening',
        permanent: true,
      },
      {
        source: '/smile/tooth-gems',
        destination: '/tooth-gems',
        permanent: true,
      },
      // /services is left alone pending traffic data — see BUILD-BRIEF.md §4.1.
    ]
  },
  images: {
    remotePatterns: [
      { hostname: 'brows-clone.local/graphql' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'app.netlify.com' },
      { hostname: '0.gravatar.com' },
      { hostname: '1.gravatar.com' },
      { hostname: '2.gravatar.com' },
      { hostname: 'secure.gravatar.com' },
      { hostname: 'nextjs-wordpress.local' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'plus.unsplash.com' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'brows-clone.local' },
      { hostname: 'img.youtube.com' },
      { hostname: 'lh7-us.googleusercontent.com' },
      { hostname: 'tailwindui.com' },
    ],
  },
}

export default nextConfig
