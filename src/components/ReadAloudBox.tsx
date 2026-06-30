import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ReadAloudBoxProps {
  children: React.ReactNode
  label?: string
}

export default function ReadAloudBox({
  children,
  label = 'Read Aloud',
}: ReadAloudBoxProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="rounded p-6 my-6"
      style={{
        backgroundColor: 'var(--scroll-parchment)',
        border: '1px solid var(--brass-400)',
        borderLeft: '4px solid var(--brass-500)',
      }}
    >
      <span
        className="inline-block text-xs font-medium uppercase tracking-wider mb-3"
        style={{ color: 'var(--brass-600)' }}
      >
        {label}
      </span>
      <div
        className="font-display italic text-lg leading-relaxed"
        style={{ color: 'var(--stone-700)' }}
      >
        {children}
      </div>
    </motion.div>
  )
}
