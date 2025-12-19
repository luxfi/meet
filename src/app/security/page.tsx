'use client'

import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { ArrowLeft } from 'lucide-react'

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </Link>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Lux Partners"
                width={116}
                height={26}
                className="h-6 w-auto"
              />
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            Security
          </div>
        </div>
      </header>

      {/* Calendly Widget */}
      <div className="pt-16">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/luxzach?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=cccccc"
          style={{ minWidth: '320px', height: '100vh' }}
        />
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </main>
  )
}
