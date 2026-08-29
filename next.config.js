const withGui = require('@hanzo/ui/next')

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  output: 'export',
  images: {
    unoptimized: true,
  },
  

}

module.exports = withGui(nextConfig, __dirname)
