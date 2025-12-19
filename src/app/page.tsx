'use client'

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
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Lux Partners"
              width={116}
              height={26}
              className="h-6 w-auto"
            />
          </Link>
          <nav className="flex items-center gap-6">
            <a
              href="https://lux.partners"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              About Lux
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            Lux <span className="font-medium">Meet</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-12">
            Schedule a meeting with the Lux Partners team.
            We&apos;re here to discuss blockchain, AI, and the future of technology.
          </p>
          
          {/* Team Calendar Link */}
          <Link
            href="/team"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors group"
          >
            <Calendar className="w-5 h-5" />
            Schedule with Team
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-light text-center mb-12 text-gray-300">
            Or schedule directly with a team member
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => {
              const Icon = member.icon
              return (
                <Link
                  key={member.name}
                  href={member.href}
                  className="group p-8 rounded-2xl border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                    <span className="text-sm">Book a meeting</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Lux Partners Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
