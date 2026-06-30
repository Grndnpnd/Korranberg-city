import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div
      ref={ref}
      className={centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}
    >
      {/* Eyebrow */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
        style={{ color: 'var(--brass-500)' }}
      >
        {eyebrow}
      </motion.span>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-light mb-4"
        style={{
          fontSize: 'clamp(2rem, 5vw, 4.5rem)',
          lineHeight: 1.0,
          letterSpacing: '-0.015em',
          color: 'var(--stone-800)',
        }}
      >
        {title}
      </motion.h2>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={centered ? 'mx-auto mb-5' : 'mb-5'}
        style={{
          width: '60px',
          height: '2px',
          backgroundColor: 'var(--brass-400)',
          transformOrigin: 'center',
        }}
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="font-sans font-light text-lg leading-relaxed"
          style={{
            color: 'var(--stone-500)',
            maxWidth: '600px',
            ...(centered ? { margin: '0 auto' } : {}),
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
