/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: [
    '@hanzo/ui',
    '@luxfi/ui',
  ],
}

module.exports = nextConfig
