import type { Metadata } from 'next'
import { Hanzo } from '@hanzo/ui'

// The Hanzo theme, and the atomic rules gui compiles its style props against.
// styles.css is named here because a bundler that will not follow a CSS import
// out of node_modules drops the one <Hanzo> makes itself — leaving the theme
// with zero atomic rules behind it, which is an unstyled page and a green build.
//
// The face comes from here too. This file used to load Inter from Google Fonts;
// the theme carries Zen and ships the woff2 itself, so that is one fewer third
// party and one typeface across the estate instead of two.
import '@hanzo/ui/theme.css'
import '@hanzo/ui/styles.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lux Meet - Schedule a Meeting',
  description: 'Schedule meetings with the Lux Partners team',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // html and body stay host elements — they are the document, not components,
  // and their ground and ink are stated in globals.css from the theme's tokens.
  return (
    <html lang="en" className="dark">
      <body>
        {/* gui needs its config in context before anything mounts. */}
        <Hanzo theme="dark">{children}</Hanzo>
      </body>
    </html>
  )
}
