import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'City Layout', href: '/city' },
  { label: 'The Library', href: '/library' },
  { label: 'Districts', href: '/districts' },
  { label: 'Shops', href: '/shops' },
  { label: 'NPCs', href: '/npcs' },
  { label: 'DM Tools', href: '/dm-tools' },
  { label: 'Appendix', href: '/appendix' },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <footer
      ref={ref}
      style={{ backgroundColor: 'var(--stone-900)' }}
      className="pt-12 pb-8 px-4 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Left: Site name + tagline */}
          <div>
            <h3
              className="font-display text-2xl font-semibold mb-2"
              style={{ color: 'var(--brass-400)' }}
            >
              Korranberg: The DM's Guide
            </h3>
            <p className="text-sm" style={{ color: 'var(--stone-300)' }}>
              A Living Campaign Guide for Eberron
            </p>
          </div>

          {/* Center: Quick links */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--stone-400)' }}
            >
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  className="text-sm transition-colors duration-200 hover:underline"
                  style={{ color: 'var(--stone-300)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--everbright-400)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--stone-300)'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Disclaimer */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--stone-400)' }}
            >
              Disclaimer
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--stone-500)' }}>
              Eberron is a trademark of Wizards of the Coast. This is a fan-made
              guide for Dungeons & Dragons 5th Edition. All official content
              belongs to Wizards of the Coast.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full mb-6"
          style={{ height: '1px', backgroundColor: 'var(--stone-700)' }}
        />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs" style={{ color: 'var(--stone-500)' }}>
            Built with care for Dungeon Masters everywhere. No rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
