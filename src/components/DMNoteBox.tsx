import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface DMNoteBoxProps {
  children: React.ReactNode
  label?: string
}

export default function DMNoteBox({
  children,
  label = 'DM Note',
}: DMNoteBoxProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="rounded p-6 my-6"
      style={{
        backgroundColor: 'var(--stone-900)',
        border: '1px solid var(--stone-700)',
        borderLeft: '4px solid var(--teal-500)',
      }}
    >
      <span
        className="inline-block text-xs font-semibold uppercase tracking-wider mb-3"
        style={{ color: 'var(--teal-500)' }}
      >
        {label}
      </span>
      <div
        className="font-sans text-base leading-relaxed"
        style={{ color: 'var(--stone-200)' }}
      >
        {children}
      </div>
    </motion.div>
  )
}
