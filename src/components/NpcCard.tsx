import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface NpcCardProps {
  name: string
  title: string
  portrait: string
  wants: string
  secrets: string
}

export default function NpcCard({
  name,
  title,
  portrait,
  wants,
  secrets,
}: NpcCardProps) {
  const [flipped, setFlipped] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="rounded-lg overflow-hidden"
      style={{
        backgroundColor: 'var(--stone-100)',
        border: '1px solid var(--stone-200)',
        perspective: '1000px',
      }}
    >
      <div
        className="flex flex-col md:flex-row cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        {/* Portrait */}
        <div className="relative w-full md:w-[200px] h-[240px] flex-shrink-0 overflow-hidden">
          <motion.img
            initial={{ clipPath: 'inset(100% 0 0 0)', scale: 1.1 }}
            animate={
              isInView
                ? { clipPath: 'inset(0 0 0 0)', scale: 1 }
                : {}
            }
            transition={{
              duration: 1.2,
              ease: [0.65, 0, 0.35, 1],
            }}
            src={portrait}
            alt={name}
            className="w-full h-full object-cover"
            style={{ borderRadius: '4px' }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              border: '2px solid var(--brass-400)',
              borderRadius: '4px',
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 md:p-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="font-display text-2xl font-semibold mb-1"
              style={{ color: 'var(--stone-800)' }}
            >
              {name}
            </h3>
            <p
              className="text-sm italic mb-4"
              style={{ color: 'var(--stone-500)' }}
            >
              {title}
            </p>
          </motion.div>

          {/* Front: Wants */}
          {!flipped && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-wider mb-2 block"
                style={{ color: 'var(--brass-500)' }}
              >
                Wants
              </span>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--stone-600)' }}
              >
                {wants}
              </p>
              <p
                className="text-xs mt-3 italic"
                style={{ color: 'var(--stone-400)' }}
              >
                Click to reveal secrets
              </p>
            </motion.div>
          )}

          {/* Back: Secrets */}
          {flipped && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-wider mb-2 block"
                style={{ color: 'var(--deep-crimson)' }}
              >
                Secrets
              </span>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--stone-600)' }}
              >
                {secrets}
              </p>
              <p
                className="text-xs mt-3 italic"
                style={{ color: 'var(--stone-400)' }}
              >
                Click to hide secrets
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
