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
  webpack: (config) => {
    // @hanzo/ui renders through @hanzo/gui, whose substrate is react-native
    // primitives — react-native-web on the web. Unmapped, the build reaches
    // Flow-typed source and stops at "Expected 'from', got 'typeof'".
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
      'react-native': 'react-native-web',
      '@react-native/assets-registry/registry':
        'react-native-web/dist/modules/AssetRegistry',
    }
    config.resolve.extensions = [
      '.web.js', '.web.jsx', '.web.ts', '.web.tsx',
      ...config.resolve.extensions,
    ]
    return config
  },

}

module.exports = nextConfig
