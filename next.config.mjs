/** @type {import('next').NextConfig} */
const nextConfig = {
  // BUILD-BRIEF.md §4.2 writes the route tree with trailing slashes, but
  // trailingSlash: true makes Next redirect bare paths to their slashed form
  // BEFORE checking redirects() below — old paths would 308 twice (once to
  // add the slash, once to the real destination) instead of once. Matching
  // this repo's existing no-trailing-slash convention avoids that.
  async redirects() {
    return [
      { source: '/brow-services', destination: '/brows', permanent: true },
      {
        source: '/lash-lift',
        destination: '/lashes/lash-lift-and-tint',
        permanent: true,
      },
      { source: '/teeth-services', destination: '/smile', permanent: true },
      {
        source: '/rf-skin-tightening',
        destination: '/skin-tightening',
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
