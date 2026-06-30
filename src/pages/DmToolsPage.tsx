import { useState, useRef, useCallback, memo } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, Shield, Scroll, Sword, Sparkles } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import DMNoteBox from '@/components/DMNoteBox'

/* ──────────────────────── local dice button ──────────────────────── */
interface DiceButtonProps {
  sides: number
  onRoll?: (result: number) => void
}

const DiceButton = memo(function DiceButton({ sides, onRoll }: DiceButtonProps) {
  const [result, setResult] = useState<number | null>(null)
  const [rolling, setRolling] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const roll = useCallback(() => {
    if (rolling) return
    setRolling(true)
    setShowTooltip(false)
    let count = 0
    const interval = setInterval(() => {
      setResult(Math.floor(Math.random() * sides) + 1)
      count++
      if (count >= 10) {
        clearInterval(interval)
        const final = Math.floor(Math.random() * sides) + 1
        setResult(final)
        setRolling(false)
        setShowTooltip(true)
        onRoll?.(final)
        setTimeout(() => setShowTooltip(false), 2500)
      }
    }, 80)
  }, [rolling, sides, onRoll])

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
        title={`Roll d${sides}`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--stone-900)' }}>
          <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="8.5" x2="22" y2="8.5" />
          <line x1="2" y1="15.5" x2="22" y2="15.5" />
          <line x1="12" y1="8.5" x2="22" y2="8.5" />
          <line x1="12" y1="8.5" x2="2" y2="8.5" />
        </svg>
      </motion.button>
      {showTooltip && result !== null && (
        <motion.div
          initial={{ opacity: 0, y: 5, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded text-xs font-bold font-mono whitespace-nowrap z-20"
          style={{ backgroundColor: 'var(--stone-900)', color: 'var(--brass-400)' }}
        >
          d{sides}: {result}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45" style={{ backgroundColor: 'var(--stone-900)' }} />
        </motion.div>
      )}
    </div>
  )
})

/* ──────────────────────── FadeIn wrapper ──────────────────────── */
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ──────────────────────── Section wrapper ──────────────────────── */
function Section({ children, bg, id }: { children: React.ReactNode; bg: string; id: string }) {
  return (
    <section id={id} className="py-16 lg:py-24 px-4 lg:px-8" style={{ backgroundColor: bg }}>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  )
}

/* ═══════════════════════════ DATA ═══════════════════════════ */

const factionsData = [
  {
    name: 'The Library/Soladas',
    presence: 'Mirveth, Alina',
    wants: "The party's Paluur Draal knowledge",
    color: '#B8944A',
  },
  {
    name: 'The Trust',
    presence: 'Sennika & Quill, Orro Wist',
    wants: 'To classify: asset or threat',
    color: '#2D9C8C',
  },
  {
    name: 'House Sivis',
    presence: 'The enclave, the Labyrinth',
    wants: 'Order, contracts, information control',
    color: '#4AAFD4',
  },
  {
    name: 'House Tharashk',
    presence: 'Breck Solvar (incoming)',
    wants: 'To find the party for Dresh Vane',
    color: '#7A6548',
  },
  {
    name: 'House Cannith',
    presence: 'Hunters (incoming)',
    wants: 'Clank and Cyre vault-lore',
    color: '#D4934A',
  },
  {
    name: 'House Orien',
    presence: 'Rail terminus, Chronicle',
    wants: 'Trade, watchful eye',
    color: '#9E8766',
  },
  {
    name: 'The Feral Heart',
    presence: "Theron's patron",
    wants: 'Pre-ban splicer texts',
    color: '#8B3A3A',
  },
]

interface Rumor {
  id: number
  text: string
  truth: 'true' | 'false' | 'dm'
  truthText: string
}

const rumorsData: Rumor[] = [
  {
    id: 1,
    text: "High Councilor hasn't been seen outside Library in a season.",
    truth: 'dm',
    truthText: 'DM decides — perhaps ill, perhaps replaced, perhaps researching something that cannot be interrupted.',
  },
  {
    id: 2,
    text: 'Soladas expedition went south, never came back.',
    truth: 'true',
    truthText: 'TRUE — The expedition to Xen\'drik ruins reached the site but found something that pursued them. Survivors scattered. One reached Stormreach alive.',
  },
  {
    id: 3,
    text: 'Faerie dragons unusually social in the garden districts.',
    truth: 'true',
    truthText: 'TRUE — Quill (or a cousin) is watching the party from a distance. The faerie dragons are Trust familiars, and their interest is not coincidence.',
  },
  {
    id: 4,
    text: 'Cannith man asking about a warforged, paid in old Galifar crowns.',
    truth: 'true',
    truthText: 'TRUE — A House Cannith agent seeks Clank specifically. The pre-Mourning currency suggests someone with old Cyre connections is funding the search.',
  },
  {
    id: 5,
    text: 'Door in deep vaults needs three seals to open.',
    truth: 'dm',
    truthText: 'DM decides — there are sealed doors in the vaults, but what lies beyond them is for the DM to determine.',
  },
  {
    id: 6,
    text: "Quiet Drawer's price is always a secret, not coin.",
    truth: 'true',
    truthText: 'TRUE — The Quiet Drawer at the Vault of Whispers trades in secrets. Every transaction costs information, never gold.',
  },
  {
    id: 7,
    text: "Chronicle about to run something big about Paluur Draal.",
    truth: 'true',
    truthText: 'TRUE — The Korranberg Chronicle has pieced together enough to run a story. Publication could bring unwanted attention to the party.',
  },
  {
    id: 8,
    text: 'Labyrinth keeps a copy of every broken contract.',
    truth: 'dm',
    truthText: 'DM decides — the Labyrinth beneath House Sivis is vast and strange. What it keeps is known only to the gnomes who tend it.',
  },
]

interface StreetEncounter {
  id: number
  title: string
  description: string
}

const encountersData: StreetEncounter[] = [
  {
    id: 1,
    title: 'College Rivalry Duel',
    description: 'Students from Blackdragon College and Drystone College settle a grudge with a (mostly) non-lethal arcane duel in a public square. Crowds gather. Warded College enforcers watch from a distance, ready to intervene if it escalates.',
  },
  {
    id: 2,
    title: 'Sivis Notary Demands Notarization',
    description: "A Sivis notary flags the party for 'unnotarized adventurer activity' — technically any mercenary work requires registration. A 25 gp fee and a thumbprint (which Sivis keeps) 'solves' the problem. Refusing draws attention from the Trust.",
  },
  {
    id: 3,
    title: 'Faerie Dragon Watches and Leaves',
    description: "A tiny faerie dragon flits between buildings, watching the party with intelligent eyes. If approached, it chirps and vanishes. If Quill has met the party, it's likely her; otherwise, it's a Trust familiar making a report.",
  },
  {
    id: 4,
    title: 'Chronicle Crier Headline',
    description: "A crier shouts today's headline: something uncomfortably close to the party's business — a mention of 'southern treasure hunters,' a reference to Cyre, or a reward posted by a name they recognize.",
  },
  {
    id: 5,
    title: 'Lift-Platform Malfunction',
    description: "A public lift-platform between tiers shudders and stops. Orro Wist is trapped aboard with a party member or two. Fixing it requires a DC 14 Arcana or Thieves' Tools check — or waiting an hour for city maintenance.",
  },
  {
    id: 6,
    title: 'Shrine-keeper Invitation',
    description: "A shrine-keeper on the Street of a Hundred Temples approaches a specific party member — their deity has a message, or a relevant service is about to begin, or the shrine-keeper had a dream about them last night.",
  },
]

interface PlotThread {
  id: number
  title: string
  hook: string
  dmNote: string
  type: string
  typeColor: string
}

const plotThreadsData: PlotThread[] = [
  {
    id: 1,
    title: 'The Vault Negotiation',
    hook: "Mirveth Lethis wants what the party knows about Paluur Draal — and she's willing to trade restricted archive access for it. The negotiation is slow, scholarly, and every concession she makes reveals how much she already knows.",
    dmNote: "Mirveth never gives more than she gets. The archive access is real but monitored. What the party finds in the restricted stacks may raise more questions than it answers.",
    type: 'Social',
    typeColor: '#2D9C8C',
  },
  {
    id: 2,
    title: 'The Map Sale',
    hook: "Pell, a nervous ex-Soladas field agent, offers an unmapped route into Paluur Draal for 500 gp. The map is genuine but incomplete — it shows a way in, not the way out. Pell is selling because he knows what waits inside and wants no part of it.",
    dmNote: "The map leads through manifest zones and Trust patrol routes. Pell disappears within a week of selling it — arrested, recruited, or fleeing is up to the DM.",
    type: 'Heist',
    typeColor: '#D4934A',
  },
  {
    id: 3,
    title: 'The Classification',
    hook: "Sennika Davandis has been asked — politely, by a gnome she doesn't know — to assess the party. The Trust wants to know: are they guests, problems, or assets? Her interactions with them determine the answer, and the consequences follow them for the rest of their time in Zilargo.",
    dmNote: 'The Trust does not announce itself. Classifications happen invisibly. Guests are watched. Problems are managed. Assets are used.',
    type: 'Mystery',
    typeColor: '#4AAFD4',
  },
  {
    id: 4,
    title: 'The Incoming Hunters',
    hook: 'Breck Solvar (House Tharashk) and a pair of House Cannith artificers arrive in Korranberg within days of each other. Both are looking for the party, but neither is foolish enough to move openly in Zilargo. Their methods — Solvar with scrying and contacts, the Cannith agents with quiet investigation — bring them close without confrontation.',
    dmNote: 'Let the party feel the pressure of being hunted in a city where they cannot simply fight their way out. The Trust is also watching the hunters.',
    type: 'Intrigue',
    typeColor: '#8B3A3A',
  },
  {
    id: 5,
    title: "Theron's Restricted Vault",
    hook: "Theron's patron — the Feral Heart — wants pre-ban splicer texts believed held in the Library's deepest vaults. The request comes through dreams, growing more insistent. The texts exist, but they are restricted for reasons Theron's patron has not explained. Reading them changes the reader.",
    dmNote: 'The player does not know the trap: the texts bind the reader to the Feral Heart more deeply. Each volume read grants power at a cost the DM should reveal slowly.',
    type: 'Horror',
    typeColor: '#2A2015',
  },
]

/* ═══════════════════════════ PAGE ═══════════════════════════ */

export default function DmToolsPage() {
  const [revealedRumors, setRevealedRumors] = useState<Set<number>>(new Set())
  const [rolledEncounter, setRolledEncounter] = useState<number | null>(null)
  const [rolledRumor, setRolledRumor] = useState<number | null>(null)

  const toggleRumor = (id: number) => {
    setRevealedRumors((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleRumorRoll = (result: number) => {
    setRolledRumor(result)
    setTimeout(() => setRolledRumor(null), 3000)
  }

  const handleEncounterRoll = (result: number) => {
    setRolledEncounter(result)
    setTimeout(() => setRolledEncounter(null), 3000)
  }

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center px-4 lg:px-8"
        style={{
          minHeight: '60vh',
          backgroundColor: 'var(--stone-900)',
          backgroundImage: 'linear-gradient(rgba(58,48,32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(58,48,32,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      >
        <div className="text-center max-w-3xl mx-auto pt-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
            style={{ color: 'var(--brass-400)' }}
          >
            For the Dungeon Master
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="font-display font-light mb-4"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.015em',
              color: 'var(--stone-50)',
            }}
          >
            DM Tools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="font-sans font-light text-lg leading-relaxed mb-8"
            style={{ color: 'var(--stone-300)', maxWidth: '600px', margin: '0 auto 2rem' }}
          >
            Everything you need to run Korranberg at the table — factions, rumors, encounters, and plot threads.
          </motion.p>

          {/* Nav pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { label: 'The Trust', href: '#trust', icon: Shield },
              { label: 'Factions', href: '#factions', icon: Sword },
              { label: 'Rumors', href: '#rumors', icon: Scroll },
              { label: 'Encounters', href: '#encounters', icon: Sparkles },
              { label: 'Plot Threads', href: '#plot-threads', icon: Scroll },
            ].map((pill) => (
              <a
                key={pill.href}
                href={pill.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200"
                style={{
                  backgroundColor: 'rgba(184, 148, 74, 0.2)',
                  color: 'var(--brass-400)',
                  border: '1px solid rgba(184, 148, 74, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--brass-500)'
                  e.currentTarget.style.color = 'var(--stone-900)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(184, 148, 74, 0.2)'
                  e.currentTarget.style.color = 'var(--brass-400)'
                }}
              >
                <pill.icon size={14} />
                {pill.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 9.1 The Trust ── */}
      <Section bg="var(--stone-50)" id="trust">
        <SectionHeader
          eyebrow="Surveillance"
          title="The Trust"
          subtitle="How Zilargo's secret police operates in Korranberg"
        />
        <div className="mt-12">
          <FadeIn>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--stone-600)' }}>
              Zilargo's national intelligence service — the Trust — does not officially exist. There are no uniforms, no headquarters you can point to, no chain of command anyone will acknowledge. And yet every gnome in a position of power either works for the Trust or is watched by them. In Korranberg, they operate through informants and agents embedded in every district, every college, every tavern.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--stone-600)' }}>
              Violence is <strong style={{ color: 'var(--deep-crimson)' }}>off the table</strong> in the open. The Trust does not arrest people in the street. They do not kick down doors. They collect information — exhaustively, patiently, and with a thoroughness that makes their eventual moves inevitable.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <DMNoteBox label="DM Note — Institutional Courtesy as Menace">
              <p className="mb-4">The Trust's power is most effective when it feels like good manners. Use these moments at the table:</p>
              <ul className="space-y-3">
                <li>• A door held open a little <em>too</em> long — someone knew which way the party was heading.</li>
                <li>• A street folklorist who greets a PC by name, though they were never introduced.</li>
                <li>• A curio-dealer who has exactly what a character came looking for, at exactly the right price.</li>
              </ul>
              <p className="mt-4">The threat is <strong>information, not violence</strong>. Let your players wonder how much the Trust knows before they realize the answer is: everything.</p>
            </DMNoteBox>
          </FadeIn>
        </div>
      </Section>

      {/* ── 9.2 Factions in Play ── */}
      <Section bg="var(--stone-100)" id="factions">
        <SectionHeader
          eyebrow="Power &amp; Politics"
          title="Factions in Play"
          subtitle="Who's watching, what they want, and where to find them"
        />
        <div className="mt-12">
          <FadeIn>
            {/* Factions Table */}
            <div className="overflow-x-auto rounded-lg border" style={{ borderColor: 'var(--stone-200)' }}>
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--stone-800)' }}>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--stone-100)' }}>Faction</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--stone-100)' }}>Presence</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--stone-100)' }}>What They Want</th>
                  </tr>
                </thead>
                <tbody>
                  {factionsData.map((f, i) => (
                    <tr
                      key={f.name}
                      style={{
                        backgroundColor: i % 2 === 0 ? 'var(--stone-50)' : 'var(--stone-100)',
                        borderBottom: '1px solid var(--stone-200)',
                      }}
                      className="transition-colors duration-150 hover:!bg-[var(--stone-200)]"
                    >
                      <td className="px-5 py-4 font-medium" style={{ color: 'var(--stone-800)' }}>
                        <div className="flex items-center gap-3">
                          <span
                            className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: f.color }}
                          />
                          {f.name}
                        </div>
                      </td>
                      <td className="px-5 py-4" style={{ color: 'var(--stone-600)' }}>{f.presence}</td>
                      <td className="px-5 py-4" style={{ color: 'var(--stone-600)' }}>{f.wants}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <DMNoteBox label="DM Note — Faction Interplay">
              <p>
                These factions are not static. House Tharashk and House Cannith are both incoming — their timelines should overlap with the party's activities. The Trust is always watching. The Feral Heart operates through Theron's patron, invisible to everyone except the player (and maybe not even them). Let these threads tangle.
              </p>
            </DMNoteBox>
          </FadeIn>
        </div>
      </Section>

      {/* ── 9.3 Rumor Table (d8) ── */}
      <Section bg="var(--stone-50)" id="rumors">
        <div className="flex items-start justify-between mb-4">
          <SectionHeader
            eyebrow="Whispers"
            title="Rumor Table"
            subtitle="Roll d8 or choose — what are people talking about?"
          />
          <div className="flex-shrink-0 pt-8 flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-wider hidden sm:inline" style={{ color: 'var(--stone-400)' }}>Roll d8</span>
            <DiceButton sides={8} onRoll={handleRumorRoll} />
          </div>
        </div>

        {/* Rolled highlight */}
        <AnimatePresence>
          {rolledRumor !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-6 p-4 rounded-lg text-center text-sm font-medium"
              style={{
                backgroundColor: 'var(--brass-500)',
                color: 'var(--stone-900)',
              }}
            >
              Rolled: <strong>{rolledRumor}</strong> — {rumorsData[rolledRumor - 1]?.text}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 space-y-3">
          {rumorsData.map((rumor, i) => {
            const isRevealed = revealedRumors.has(rumor.id)
            return (
              <FadeIn key={rumor.id} delay={i * 0.05}>
                <motion.div
                  className="rounded-lg border overflow-hidden transition-all duration-200"
                  style={{
                    borderColor: rolledRumor === rumor.id ? 'var(--brass-500)' : 'var(--stone-200)',
                    backgroundColor: 'var(--stone-100)',
                  }}
                  whileHover={{ y: -2, boxShadow: '0 8px 30px rgba(74, 175, 212, 0.1)' }}
                >
                  {/* Rumor row header */}
                  <div
                    className="flex items-center justify-between px-5 py-4 cursor-pointer"
                    onClick={() => toggleRumor(rumor.id)}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="font-mono text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: 'var(--stone-800)',
                          color: 'var(--stone-100)',
                        }}
                      >
                        {rumor.id}
                      </span>
                      <p className="text-base" style={{ color: 'var(--stone-700)' }}>{rumor.text}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                      {/* Truth badge */}
                      <span
                        className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded"
                        style={{
                          backgroundColor: rumor.truth === 'true' ? 'rgba(45, 156, 140, 0.15)' : rumor.truth === 'false' ? 'rgba(139, 58, 58, 0.15)' : 'rgba(212, 147, 74, 0.15)',
                          color: rumor.truth === 'true' ? 'var(--teal-600)' : rumor.truth === 'false' ? 'var(--deep-crimson)' : 'var(--warm-amber)',
                        }}
                      >
                        {rumor.truth === 'true' ? 'True' : rumor.truth === 'false' ? 'False' : 'DM Decides'}
                      </span>
                      <motion.div
                        animate={{ rotate: isRevealed ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} style={{ color: 'var(--stone-400)' }} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expanded truth */}
                  <AnimatePresence>
                    {isRevealed && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          className="px-5 pb-4 pt-1 ml-10 text-sm leading-relaxed"
                          style={{ color: 'var(--stone-600)', borderTop: '1px dashed var(--stone-200)' }}
                        >
                          <span className="text-xs font-semibold uppercase tracking-wider mr-2" style={{ color: 'var(--teal-500)' }}>Truth:</span>
                          {rumor.truthText}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-6 text-xs text-center" style={{ color: 'var(--stone-400)' }}>
            Click any rumor to reveal the DM truth. Half are true — the rest are for you to decide.
          </div>
        </FadeIn>
      </Section>

      {/* ── 9.4 Street Encounters (d6) ── */}
      <Section bg="var(--stone-100)" id="encounters">
        <div className="flex items-start justify-between mb-4">
          <SectionHeader
            eyebrow="Random Encounters"
            title="Street Encounters"
            subtitle="Roll d6 for a random event while traveling through Korranberg"
          />
          <div className="flex-shrink-0 pt-8 flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-wider hidden sm:inline" style={{ color: 'var(--stone-400)' }}>Roll d6</span>
            <DiceButton sides={6} onRoll={handleEncounterRoll} />
          </div>
        </div>

        {/* Rolled highlight */}
        <AnimatePresence>
          {rolledEncounter !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-6 p-4 rounded-lg text-center text-sm font-medium"
              style={{ backgroundColor: 'var(--brass-500)', color: 'var(--stone-900)' }}
            >
              Rolled: <strong>{rolledEncounter}</strong> — {encountersData[rolledEncounter - 1]?.title}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 space-y-4">
          {encountersData.map((enc, i) => (
            <FadeIn key={enc.id} delay={i * 0.05}>
              <motion.div
                className="rounded-lg border p-5 transition-all duration-200"
                style={{
                  borderColor: rolledEncounter === enc.id ? 'var(--brass-500)' : 'var(--stone-200)',
                  backgroundColor: 'var(--stone-50)',
                }}
                whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(74, 175, 212, 0.12)' }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="font-mono text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'var(--stone-800)', color: 'var(--stone-100)' }}
                  >
                    {enc.id}
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--stone-800)' }}>
                      {enc.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--stone-600)' }}>
                      {enc.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── 9.5 Plot Threads to Seed ── */}
      <Section bg="var(--stone-50)" id="plot-threads">
        <SectionHeader
          eyebrow="Campaign Seeds"
          title="Plot Threads to Seed"
          subtitle="Ready-to-run adventure hooks for the Lost Vaults of Cyre campaign"
        />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {plotThreadsData.map((thread, i) => (
            <FadeIn key={thread.id} delay={i * 0.1}>
              <motion.div
                className="rounded-lg border p-6 h-full flex flex-col"
                style={{
                  backgroundColor: 'var(--stone-100)',
                  borderColor: 'var(--stone-200)',
                }}
                whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(74, 175, 212, 0.12)', borderColor: 'var(--brass-300)' }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{ backgroundColor: thread.typeColor + '22', color: thread.typeColor }}
                  >
                    {thread.type}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--stone-800)' }}>
                  {thread.title}
                </h4>

                {/* Hook */}
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--stone-600)' }}>
                  {thread.hook}
                </p>

                {/* Divider */}
                <div className="w-full mb-4" style={{ height: '1px', backgroundColor: 'var(--stone-200)' }} />

                {/* DM Note */}
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider flex-shrink-0 mt-0.5" style={{ color: 'var(--teal-500)' }}>DM:</span>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--stone-500)' }}>
                    {thread.dmNote}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  )
}
