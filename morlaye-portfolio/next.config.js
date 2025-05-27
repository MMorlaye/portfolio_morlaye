/** @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Si vous utilisez des liens internes
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
}

module.exports = nextConfig
