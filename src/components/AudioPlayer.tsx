import { useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, X, Music } from 'lucide-react'

const TRACKS = [
  {
    id: 'city',
    label: 'City Hustle',
    src: '/audio/AUDIO_A_city_of_knowledge.mp3',
  },
  {
    id: 'library',
    label: 'Library Silence',
    src: '/audio/AUDIO_B_polite_menace.mp3',
  },
  {
    id: 'skydock',
    label: 'Sky Dock Winds',
    src: '/audio/AUDIO_C_deep_vaults.mp3',
  },
]

interface AudioPlayerProps {
  open: boolean
  onToggle: () => void
}

export default function AudioPlayer({ open, onToggle }: AudioPlayerProps) {
  const [playingId, setPlayingId] = useState<string | null>(null)
  const [volume, setVolume] = useState(0.5)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const currentSrcRef = useRef('')

  const playTrack = useCallback(
    (trackId: string) => {
      const track = TRACKS.find((t) => t.id === trackId)
      if (!track) return

      if (playingId === trackId) {
        // Pause current
        audioRef.current?.pause()
        setPlayingId(null)
      } else {
        // Switch tracks
        if (audioRef.current) {
          audioRef.current.pause()
        }
        const audio = new Audio(track.src)
        audio.loop = true
        audio.volume = volume
        audio.play().catch(() => {
          // Autoplay blocked
        })
        audioRef.current = audio
        currentSrcRef.current = track.src
        setPlayingId(trackId)
      }
    },
    [playingId, volume]
  )

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value)
    setVolume(v)
    if (audioRef.current) {
      audioRef.current.volume = v
    }
  }

  const handleClose = () => {
    onToggle()
  }

  return (
    <>
      {/* Floating toggle button */}
      {!open && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: 'var(--brass-500)' }}
          onClick={onToggle}
        >
          {playingId ? (
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 8px rgba(74,175,212,0.3)',
                  '0 0 20px rgba(74,175,212,0.6)',
                  '0 0 8px rgba(74,175,212,0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full"
            />
          ) : null}
          <Music size={20} style={{ color: 'var(--stone-900)' }} />
        </motion.button>
      )}

      {/* Expanded panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-6 right-6 z-40 w-72 rounded-xl shadow-2xl p-5 origin-bottom-right"
            style={{
              backgroundColor: 'var(--stone-900)',
              border: '1px solid var(--stone-700)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--brass-400)' }}
              >
                Ambience
              </span>
              <button
                onClick={handleClose}
                className="w-6 h-6 flex items-center justify-center rounded"
                style={{ color: 'var(--stone-400)' }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Tracks */}
            <div className="flex flex-col gap-2 mb-4">
              {TRACKS.map((track) => (
                <button
                  key={track.id}
                  onClick={() => playTrack(track.id)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left"
                  style={{
                    backgroundColor:
                      playingId === track.id
                        ? 'rgba(184,148,74,0.2)'
                        : 'rgba(255,255,255,0.05)',
                    border:
                      playingId === track.id
                        ? '1px solid var(--brass-600)'
                        : '1px solid transparent',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor:
                        playingId === track.id
                          ? 'var(--brass-500)'
                          : 'var(--stone-700)',
                    }}
                  >
                    {playingId === track.id ? (
                      <Pause size={14} style={{ color: 'var(--stone-900)' }} />
                    ) : (
                      <Play size={14} style={{ color: 'var(--stone-200)' }} className="ml-0.5" />
                    )}
                  </div>
                  <span
                    className="text-sm font-medium flex-1"
                    style={{
                      color:
                        playingId === track.id
                          ? 'var(--brass-400)'
                          : 'var(--stone-200)',
                    }}
                  >
                    {track.label}
                  </span>
                  {playingId === track.id && (
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 4px rgba(126,200,227,0.4)',
                          '0 0 10px rgba(126,200,227,0.8)',
                          '0 0 4px rgba(126,200,227,0.4)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--everbright-400)' }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Volume */}
            <div className="flex items-center gap-3">
              <Volume2 size={14} style={{ color: 'var(--stone-400)' }} />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-1 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--brass-500) ${volume * 100}%, var(--stone-700) ${volume * 100}%)`,
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
