'use client'

import { Box } from '@hanzo/ui'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Users, Shield, ArrowRight } from 'lucide-react'

const teamMembers = [
  {
    name: 'Marcus',
    role: 'Partner',
    description: 'Business development and partnerships',
    href: '/marcus',
    icon: Users,
  },
  {
    name: 'Zach',
    role: 'Partner',
    description: 'Technology and product strategy',
    href: '/zach',
    icon: Calendar,
  },
  {
    name: 'Security',
    role: 'Security Team',
    description: 'Security reviews and assessments',
    href: '/security',
    icon: Shield,
  },
]

export default function HomePage() {
  return (
    <Box tag="main" className="min-h-screen bg-black">
      {/* Header */}
      <Box tag="header" className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <Box className="max-w-7xl mx-auto px-6 py-4 grid grid-flow-col auto-cols-auto items-center justify-between">
          <Link href="/" className="row">
            <Image
              src="/logo.png"
              alt="Lux Partners"
              width={116}
              height={26}
              style={{ height: 24, width: 'auto' }}
            />
          </Link>
          <Box tag="nav" className="grid grid-flow-col auto-cols-auto items-center gap-6">
            <Box tag="a"
              href="https://lux.partners"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              About Lux
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Hero Section */}
      <Box tag="section" className="pt-32 pb-20 px-6">
        <Box className="max-w-4xl mx-auto text-center">
          <Box tag="h1" className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            Lux <Box tag="span" className="font-medium">Meet</Box>
          </Box>
          <Box tag="p" className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto mb-12">
            Schedule a meeting with the Lux Partners team.
            We&apos;re here to discuss blockchain, AI, and the future of technology.
          </Box>
          
          {/* Team Calendar Link */}
          <Link
            href="/team"
            className="pill"
          >
            <Calendar size={20} />
            Schedule with Team
            <ArrowRight size={16} />
          </Link>
        </Box>
      </Box>

      {/* Team Members Grid */}
      <Box tag="section" className="py-20 px-6 border-t border-white/10">
        <Box className="max-w-6xl mx-auto">
          <Box tag="h2" className="text-2xl font-light text-center mb-12 text-neutral-300">
            Or schedule directly with a team member
          </Box>
          
          <Box className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => {
              const Icon = member.icon
              return (
                <Link
                  key={member.name}
                  href={member.href}
                  className="card"
                >
                  <Box className="grid grid-flow-col auto-cols-auto items-center gap-4 mb-4">
                    <Box className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                      <Icon size={24} />
                    </Box>
                    <div>
                      <Box tag="h3" className="text-xl font-medium text-white">{member.name}</Box>
                      <Box tag="p" className="text-sm text-neutral-500">{member.role}</Box>
                    </div>
                  </Box>
                  <Box tag="p" className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {member.description}
                  </Box>
                  <Box className="grid grid-flow-col auto-cols-auto items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                    <Box tag="span" className="text-sm">Book a meeting</Box>
                    <ArrowRight size={16} />
                  </Box>
                </Link>
              )
            })}
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box tag="footer" className="py-12 px-6 border-t border-white/10">
        <Box className="max-w-6xl mx-auto text-center">
          <Box tag="p" className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Lux Partners Limited. All rights reserved.
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
