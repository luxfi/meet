'use client'

import { Box } from '@hanzo/ui'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { ArrowLeft } from 'lucide-react'

export default function ZachPage() {
  return (
    <Box tag="main" className="min-h-screen bg-black">
      {/* Header */}
      <Box tag="header" className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <Box className="max-w-7xl mx-auto px-6 py-4 grid grid-flow-col auto-cols-auto items-center justify-between">
          <Box className="grid grid-flow-col auto-cols-auto items-center gap-6">
            <Link href="/" className="back">
              <ArrowLeft size={16} />
              <Box tag="span" className="text-sm">Back</Box>
            </Link>
            <Link href="/" className="row">
              <Image
                src="/logo.png"
                alt="Lux Partners"
                width={116}
                height={26}
                style={{ height: 24, width: 'auto' }}
              />
            </Link>
          </Box>
          <Box className="text-sm text-neutral-400">
            Zach
          </Box>
        </Box>
      </Box>

      {/* Calendly Widget */}
      <Box className="pt-16">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/luxzach?hide_gdpr_banner=1&background_color=000000&text_color=cccccc&primary_color=ffffff"
          style={{ minWidth: '320px', height: '100vh' }}
        />
      </Box>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </Box>
  )
}
