import { useState, useCallback, memo } from 'react'
import { motion } from 'framer-motion'

const DiceRoller = memo(function DiceRoller() {
  const [result, setResult] = useState<number | null>(null)
  const [rolling, setRolling] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const roll = useCallback(() => {
    if (rolling) return
    setRolling(true)
    setShowTooltip(false)

    // Animate through numbers
    let count = 0
    const interval = setInterval(() => {
      setResult(Math.floor(Math.random() * 20) + 1)
      count++
      if (count >= 10) {
        clearInterval(interval)
        const final = Math.floor(Math.random() * 20) + 1
        setResult(final)
        setRolling(false)
        setShowTooltip(true)
        setTimeout(() => setShowTooltip(false), 2000)
      }
    }, 80)
  }, [rolling])

  return (
    <div className="relative inline-block">
      <motion.button
        onClick={roll}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={rolling ? { rotate: [0, -15, 15, -10, 10, 0] } : {}}
        transition={rolling ? { duration: 0.4, repeat: 2 } : {}}
        className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200"
        style={{ backgroundColor: 'var(--brass-500)' }}
        onMouseEnter={(e) => {
          if (!rolling) e.currentTarget.style.backgroundColor = 'var(--brass-400)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--brass-500)'
        }}
        title="Roll d20"
      >
        {/* D20 outline icon */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: 'var(--stone-900)' }}
        >
          <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="8.5" x2="22" y2="8.5" />
          <line x1="2" y1="15.5" x2="22" y2="15.5" />
          <line x1="12" y1="8.5" x2="22" y2="8.5" />
          <line x1="12" y1="8.5" x2="2" y2="8.5" />
        </svg>
      </motion.button>

      {/* Result tooltip */}
      {showTooltip && result !== null && (
        <motion.div
          initial={{ opacity: 0, y: 5, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded text-xs font-bold font-mono whitespace-nowrap"
          style={{
            backgroundColor: 'var(--stone-900)',
            color: result >= 15 ? 'var(--brass-400)' : result <= 5 ? 'var(--deep-crimson)' : 'var(--stone-100)',
          }}
        >
          {result}
          <div
            className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45"
            style={{ backgroundColor: 'var(--stone-900)' }}
          />
        </motion.div>
      )}
    </div>
  )
})

export default DiceRoller
