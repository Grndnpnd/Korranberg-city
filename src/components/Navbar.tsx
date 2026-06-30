import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Volume2 } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'City', href: '/city' },
  { label: 'Library', href: '/library' },
  { label: 'Districts', href: '/districts' },
  { label: 'Shops', href: '/shops' },
  { label: 'NPCs', href: '/npcs' },
  { label: 'DM Tools', href: '/dm-tools' },
  { label: 'Appendix', href: '/appendix' },
]

interface NavbarProps {
  onAudioToggle?: () => void
  audioOpen?: boolean
}

export default function Navbar({ onAudioToggle, audioOpen }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/')

  useEffect(() => {
    const handler = () => setCurrentPath(window.location.hash || '#/')
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '#/' || currentPath === ''
    return currentPath === '#/' + href.slice(1)
  }

  return (
    <motion.nav
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-4 lg:px-8"
      style={{
        backgroundColor: 'rgba(26, 19, 12, 0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Logo */}
      <a
        href="#/"
        className="font-display text-xl md:text-2xl font-medium tracking-tight mr-8"
        style={{ color: 'var(--brass-400)' }}
      >
        Korranberg
      </a>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={`#${link.href}`}
            className="px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-200 rounded"
            style={{
              color: isActive(link.href) ? 'var(--brass-400)' : 'var(--stone-200)',
              borderBottom: isActive(link.href) ? '2px solid var(--brass-500)' : '2px solid transparent',
            }}
            onMouseEnter={(e) => {
              if (!isActive(link.href)) {
                e.currentTarget.style.color = 'var(--everbright-400)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive(link.href)) {
                e.currentTarget.style.color = 'var(--stone-200)'
              }
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Audio toggle */}
        <button
          onClick={onAudioToggle}
          className="hidden md:flex w-10 h-10 items-center justify-center rounded-full transition-all duration-200"
          style={{
            backgroundColor: audioOpen ? 'var(--brass-400)' : 'transparent',
            color: audioOpen ? 'var(--stone-900)' : 'var(--stone-200)',
          }}
          title="Toggle audio player"
        >
          <Volume2 size={18} />
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10"
          style={{ color: 'var(--stone-200)' }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 p-6 pt-20 flex flex-col gap-2"
              style={{ backgroundColor: 'var(--stone-900)' }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={`#${link.href}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium uppercase tracking-wider rounded transition-colors"
                  style={{
                    color: isActive(link.href) ? 'var(--brass-400)' : 'var(--stone-200)',
                    borderLeft: isActive(link.href) ? '3px solid var(--brass-500)' : '3px solid transparent',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              {/* Mobile audio toggle */}
              <button
                onClick={() => {
                  onAudioToggle?.()
                  setMobileOpen(false)
                }}
                className="mt-4 flex items-center gap-3 px-4 py-3 text-sm font-medium uppercase tracking-wider rounded"
                style={{ color: 'var(--stone-200)', border: '1px solid var(--stone-700)' }}
              >
                <Volume2 size={18} />
                {audioOpen ? 'Close Audio' : 'Open Audio'}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
