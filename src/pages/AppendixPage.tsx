import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { BookOpen, Package, Users, Feather } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

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
function Section({ children, bg, className = '' }: { children: React.ReactNode; bg: string; className?: string }) {
  return (
    <section className={`py-16 lg:py-24 px-4 lg:px-8 ${className}`} style={{ backgroundColor: bg }}>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  )
}

/* ──────────────────────── Accordion card ──────────────────────── */
interface AccordionCardProps {
  title: string
  accentColor: string
  children: React.ReactNode
  defaultOpen?: boolean
}

function AccordionCard({ title, accentColor, children, defaultOpen = false }: AccordionCardProps) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <motion.div
      className="rounded-lg border overflow-hidden mb-4"
      style={{
        borderColor: 'var(--stone-200)',
        backgroundColor: 'var(--stone-50)',
        borderLeftWidth: '4px',
        borderLeftColor: accentColor,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
      >
        <span className="font-display text-lg font-semibold" style={{ color: 'var(--stone-800)' }}>
          {title}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--stone-400)' }}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ═══════════════════════════ DATA ═══════════════════════════ */

const sourceBooks = [
  { abbr: 'PHB', book: "Player's Handbook", edition: '5e — mundane gear, equipment prices' },
  { abbr: 'DMG', book: "Dungeon Master's Guide", edition: '5e — magic items, rarity pricing' },
  { abbr: 'XGtE', book: "Xanathar's Guide to Everything", edition: '5e — common magic items' },
  { abbr: 'TCoE', book: "Tasha's Cauldron of Everything", edition: '5e — artificer, items' },
  { abbr: 'ERLW', book: 'Eberron: Rising from the Last War', edition: '5e — Zilargo gazetteer' },
  { abbr: 'WGtE', book: "Wayfinder's Guide to Eberron", edition: '5e — Eberron setting' },
  { abbr: 'EE', book: 'Exploring Eberron (Keith Baker)', edition: "5e/DMs Guild — Zilargo deep lore" },
  { abbr: 'ECS', book: 'Eberron Campaign Setting', edition: "3.5e — Korranberg, Library, colleges" },
  { abbr: '5N', book: 'Five Nations', edition: '3.5e — Zilargo gazetteer' },
]

const timelineEvents = [
  { year: '-10,000 YK', label: 'Age of Giants', desc: 'Giant civilizations thrive in Xen\'drik. Seeds of modern magic are planted.' },
  { year: '-3,000 YK', label: 'Age of Demons', desc: 'Daelkyr and Overlords are bound. The dragons begin studying the Draconic Prophecy in earnest.' },
  { year: '-1,500 YK', label: 'Gnomish Settlement', desc: 'Gnomes settle in the region that will become Zilargo.' },
  { year: '1 YK', label: 'Galifar Founded', desc: 'Kingdom of Galifar founded. Zilargo negotiates semi-autonomous status.' },
  { year: '498 YK', label: 'Library Established', desc: "The Library of Korranberg formally established by the ir'Korran family." },
  { year: '894 YK', label: 'Sivis Enclave', desc: 'House Sivis establishes permanent enclave in Korranberg.' },
  { year: '956 YK', label: 'Lightning Rail', desc: 'The Lightning Rail connects Korranberg to the broader network.' },
  { year: '962 YK', label: 'First Airship', desc: 'First airship docks at Korranberg Sky Docks (House Lyrandar).' },
  { year: '994 YK', label: 'Day of Mourning', desc: 'The nation of Cyre is destroyed. The Last War effectively ends.' },
  { year: '996 YK', label: 'Treaty of Thronehold', desc: 'The Treaty of Thronehold officially ends the Last War.' },
  { year: '998 YK', label: 'Current Year', desc: 'Standard Eberron 5E setting. Tensions remain high. Korranberg thrives as a neutral center of knowledge.', isCurrent: true },
]

/* ═══════════════════════════ PAGE ═══════════════════════════ */

export default function AppendixPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center px-4 lg:px-8"
        style={{
          minHeight: '50vh',
          backgroundColor: 'var(--stone-900)',
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
            Reference
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
            Appendix
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="font-sans font-light text-lg leading-relaxed mb-4"
            style={{ color: 'var(--stone-300)', maxWidth: '600px', margin: '0 auto 1rem' }}
          >
            Sources, canon key, and acknowledgments
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-sm"
            style={{ color: 'var(--stone-500)' }}
          >
            Korranberg: The DM's Guide v1.0 — Eberron 5th Edition
          </motion.p>
        </div>
      </section>

      {/* ── Source & Canon Key ── */}
      <Section bg="var(--stone-50)">
        <SectionHeader
          eyebrow="Sources"
          title="Source &amp; Canon Key"
          subtitle="Abbreviations used throughout this guide and their corresponding books"
        />

        <div className="mt-12">
          {/* Source table */}
          <FadeIn>
            <div className="overflow-x-auto rounded-lg border mb-12" style={{ borderColor: 'var(--stone-200)' }}>
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--stone-800)' }}>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--stone-100)' }}>Abbr.</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--stone-100)' }}>Book</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--stone-100)' }}>Edition / Use</th>
                  </tr>
                </thead>
                <tbody>
                  {sourceBooks.map((src, i) => (
                    <tr
                      key={src.abbr}
                      style={{
                        backgroundColor: i % 2 === 0 ? 'var(--stone-50)' : 'var(--stone-100)',
                        borderBottom: '1px solid var(--stone-200)',
                      }}
                      className="transition-colors duration-150 hover:!bg-[var(--stone-200)]"
                    >
                      <td className="px-5 py-3.5">
                        <span
                          className="inline-block font-mono text-xs font-semibold px-2 py-1 rounded"
                          style={{ backgroundColor: 'var(--stone-800)', color: 'var(--stone-100)' }}
                        >
                          {src.abbr}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 font-medium" style={{ color: 'var(--stone-700)' }}>
                        <em>{src.book}</em>
                      </td>
                      <td className="px-5 py-3.5 text-sm" style={{ color: 'var(--stone-500)' }}>
                        {src.edition}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── Pricing Convention ── */}
      <Section bg="var(--stone-100)">
        <SectionHeader
          eyebrow="Economy"
          title="Pricing Convention"
          subtitle="How item values are determined throughout this guide"
        />
        <div className="mt-12">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Rarity cards */}
              {[
                { rarity: 'Common', range: '50–100 gp', color: 'var(--stone-500)', bg: 'var(--stone-50)' },
                { rarity: 'Uncommon', range: '101–500 gp', color: 'var(--teal-500)', bg: 'rgba(45, 156, 140, 0.08)' },
                { rarity: 'Rare', range: '501–5,000 gp', color: 'var(--everbright-500)', bg: 'rgba(74, 175, 212, 0.08)' },
              ].map((item) => (
                <motion.div
                  key={item.rarity}
                  className="rounded-lg border p-5"
                  style={{ backgroundColor: item.bg, borderColor: 'var(--stone-200)' }}
                  whileHover={{ y: -2, boxShadow: '0 8px 30px rgba(74, 175, 212, 0.1)' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-display text-lg font-semibold" style={{ color: 'var(--stone-800)' }}>
                      {item.rarity}
                    </span>
                  </div>
                  <span className="font-mono text-base" style={{ color: item.color }}>
                    {item.range}
                  </span>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div
              className="rounded-lg p-5"
              style={{
                backgroundColor: 'var(--stone-50)',
                border: '1px solid var(--stone-200)',
              }}
            >
              <h4 className="font-display text-base font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--stone-700)' }}>
                <Package size={16} style={{ color: 'var(--brass-500)' }} />
                Additional Notes
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--stone-600)' }}>
                <li>• Consumables (potions, scrolls, etc.) at roughly half the listed price</li>
                <li>• All prices are <strong>asking prices</strong> — the DM may adjust based on availability, seller, and party reputation</li>
                <li>• Mundane gear (rope, torches, backpacks, etc.) uses standard PHB list prices</li>
                <li>• Homebrew items are priced to match the nearest official equivalent</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── Campaign Context ── */}
      <Section bg="var(--stone-50)">
        <SectionHeader
          eyebrow="Setting"
          title="Campaign Context"
          subtitle="The frame for this guide"
        />
        <div className="mt-12 space-y-6">
          <FadeIn>
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: 'var(--stone-100)',
                border: '1px solid var(--stone-200)',
                borderLeft: '4px solid var(--everbright-500)',
              }}
            >
              <h4 className="font-display text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--stone-800)' }}>
                <Users size={18} style={{ color: 'var(--everbright-500)' }} />
                The Party
              </h4>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                <strong style={{ color: 'var(--stone-700)' }}>"The Lost"</strong> — a party of six adventurers (levels 3–4) arriving in Korranberg from the south. They carry knowledge of Paluur Draal, and the city has noticed.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Gnogin (goblin bard)',
                  'Reeks (changeling cleric)',
                  'Clank (warforged fighter)',
                  'Cyrus (tiefling gunslinger)',
                  'Clitari (kalashtar warlock)',
                  'Theron (halfling splicer)',
                ].map((name) => (
                  <span
                    key={name}
                    className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--stone-200)', color: 'var(--stone-700)' }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: 'var(--stone-100)',
                border: '1px solid var(--stone-200)',
                borderLeft: '4px solid var(--brass-500)',
              }}
            >
              <h4 className="font-display text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--stone-800)' }}>
                <BookOpen size={18} style={{ color: 'var(--brass-500)' }} />
                Key Contacts
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--stone-600)' }}>
                <strong style={{ color: 'var(--stone-700)' }}>Bells</strong> — warforged with a brass finish, stationed at the city edge, watches arrivals. 
                Knows more than a simple gate-guard should.
              </p>
              <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--stone-600)' }}>
                <strong style={{ color: 'var(--stone-700)' }}>Mirveth Lethis</strong> — half-elf senior librarian at the Library of Korranberg. 
                Wants what the party knows. Willing to trade restricted archive access for it.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── Canon vs Homebreak ── */}
      <Section bg="var(--stone-100)">
        <SectionHeader
          eyebrow="Content Map"
          title="What's Canon, What's Homebrew"
          subtitle="A guide to which parts of this guide come from official sources"
        />
        <div className="mt-12">
          <FadeIn>
            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                { color: 'var(--teal-500)', label: 'Canon' },
                { color: 'var(--everbright-500)', label: 'Adapted' },
                { color: 'var(--warm-amber)', label: 'Homebrew' },
                { color: 'var(--deep-crimson)', label: 'Speculation' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--stone-600)' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Accordion categories */}
          <FadeIn delay={0.1}>
            <AccordionCard title="Canon Content" accentColor="var(--teal-500)" defaultOpen>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--stone-600)' }}>
                <li>• <strong style={{ color: 'var(--stone-700)' }}>The Library of Korranberg</strong> — Its status as the greatest repository of knowledge in Khorvaire, the Library Council government, and its role in Zilargo — from <em>Exploring Eberron</em></li>
                <li>• <strong style={{ color: 'var(--stone-700)' }}>House Sivis</strong> — Their enclave in Korranberg, the Speaking Tower, Notaries' Guild, message services — from <em>ERLW</em> and <em>Exploring Eberron</em></li>
                <li>• <strong style={{ color: 'var(--stone-700)' }}>Zilargo and The Trust</strong> — National identity, gnomish culture, the Trust's omnipresent surveillance — from <em>Exploring Eberron</em></li>
                <li>• <strong style={{ color: 'var(--stone-700)' }}>Dragonmarked Houses</strong> — General house structures, abilities, enclave systems — from <em>ERLW</em></li>
                <li>• <strong style={{ color: 'var(--stone-700)' }}>The Last War &amp; The Mourning</strong> — Historical context, timeline, effects on present-day Khorvaire — from <em>ERLW</em></li>
                <li>• <strong style={{ color: 'var(--stone-700)' }}>Lightning Rail &amp; Airships</strong> — Transportation systems, House Orien and House Lyrandar roles — from <em>ERLW</em></li>
              </ul>
            </AccordionCard>
          </FadeIn>

          <FadeIn delay={0.15}>
            <AccordionCard title="Adapted Content" accentColor="var(--everbright-500)">
              <ul className="space-y-2 text-sm" style={{ color: 'var(--stone-600)' }}>
                <li>• <strong style={{ color: 'var(--stone-700)' }}>The Eight Colleges</strong> — Based on the Library's role as a university; specific college names, focuses, and deans are adapted from academic institution tropes and Morgrave University references</li>
                <li>• <strong style={{ color: 'var(--stone-700)' }}>District Layout</strong> — Korranberg's tiered structure is canon; specific district names and character are adapted from Zilargo's cultural traits</li>
                <li>• <strong style={{ color: 'var(--stone-700)' }}>NPC Personalities</strong> — Character concepts tied to canon organizations (House Sivis, Library Council, Trust) but individual personalities are developed for this guide</li>
                <li>• <strong style={{ color: 'var(--stone-700)' }}>Shop Concepts</strong> — Business types appropriate to a scholarly city; specific names and proprietors are original</li>
              </ul>
            </AccordionCard>
          </FadeIn>

          <FadeIn delay={0.2}>
            <AccordionCard title="Homebrew Content" accentColor="var(--warm-amber)">
              <ul className="space-y-2 text-sm" style={{ color: 'var(--stone-600)' }}>
                <li>• All <strong style={{ color: 'var(--stone-700)' }}>8 shops</strong> — original establishments with original proprietors, inventories, and read-aloud text</li>
                <li>• All <strong style={{ color: 'var(--stone-700)' }}>7 NPCs</strong> — original characters with original backstories, wants, and secrets</li>
                <li>• All <strong style={{ color: 'var(--stone-700)' }}>5 plot threads</strong> — original adventure hooks</li>
                <li>• All <strong style={{ color: 'var(--stone-700)' }}>encounter tables</strong> — original random encounters</li>
                <li>• The <strong style={{ color: 'var(--stone-700)' }}>rumor table</strong> — original rumors (some inspired by canon lore)</li>
                <li>• <strong style={{ color: 'var(--stone-700)' }}>The Vault of Whispers</strong> — original information broker concept</li>
              </ul>
            </AccordionCard>
          </FadeIn>

          <FadeIn delay={0.25}>
            <AccordionCard title="Speculation" accentColor="var(--deep-crimson)">
              <ul className="space-y-2 text-sm" style={{ color: 'var(--stone-600)' }}>
                <li>• <strong style={{ color: 'var(--stone-700)' }}>Specific Trust Operations</strong> — The Trust is canon; specific operations in Korranberg are speculated</li>
                <li>• <strong style={{ color: 'var(--stone-700)' }}>Mournland Details</strong> — Canon is intentionally vague; specific discoveries and contents are speculative</li>
                <li>• <strong style={{ color: 'var(--stone-700)' }}>Dragon Prophecy Fragments</strong> — Intentionally mysterious in canon; specific references here are speculative</li>
              </ul>
            </AccordionCard>
          </FadeIn>
        </div>
      </Section>

      {/* ── Eberron Timeline ── */}
      <Section bg="var(--stone-50)">
        <SectionHeader
          eyebrow="Lore"
          title="Korranberg in Eberron's Timeline"
          subtitle="Key dates for contextualizing the city"
        />
        <div className="mt-12 relative pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-[15px] top-0 bottom-0"
            style={{ width: '2px', backgroundColor: 'var(--brass-400)' }}
          />

          {timelineEvents.map((event, i) => (
            <FadeIn key={event.year} delay={i * 0.08}>
              <div className="relative mb-8 last:mb-0">
                {/* Node dot */}
                <div
                  className="absolute -left-[23px] top-1 w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: event.isCurrent ? 'var(--everbright-500)' : 'var(--brass-500)',
                    boxShadow: event.isCurrent ? '0 0 12px rgba(126, 200, 227, 0.6)' : 'none',
                  }}
                />

                <div>
                  <span
                    className="font-mono text-sm font-semibold"
                    style={{ color: event.isCurrent ? 'var(--everbright-600)' : 'var(--brass-600)' }}
                  >
                    {event.year}
                  </span>
                  {event.isCurrent && (
                    <span
                      className="ml-2 text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{ backgroundColor: 'var(--everbright-500)', color: 'var(--stone-50)' }}
                    >
                      Current
                    </span>
                  )}
                  <h4 className="font-display text-base font-semibold mt-1 mb-1" style={{ color: 'var(--stone-800)' }}>
                    {event.label}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--stone-600)' }}>
                    {event.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── How to Use This Guide ── */}
      <Section bg="var(--stone-100)">
        <SectionHeader
          eyebrow="Advice"
          title="How to Use This Guide"
          subtitle="Tips for integrating Korranberg into your campaign"
        />
        <div className="mt-12">
          <FadeIn>
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: 'var(--stone-900)',
                border: '1px solid var(--stone-700)',
                borderLeft: '4px solid var(--teal-500)',
              }}
            >
              <span
                className="inline-block text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ color: 'var(--teal-500)' }}
              >
                DM Note
              </span>
              <ul className="space-y-4" style={{ color: 'var(--stone-200)' }}>
                {[
                  { bold: 'Start small', text: ': Use The Last Page as a home base and let players explore one district at a time' },
                  { bold: 'Steal shamelessly', text: ': Take any NPC, shop, or plot thread and drop it into your existing campaign' },
                  { bold: 'The Library is a quest engine', text: ': Need a reason to go somewhere? The Library needs something researched, retrieved, or investigated' },
                  { bold: 'Use the NPC web', text: ': Every NPC connects to at least two others — leverage these relationships for emergent storytelling' },
                  { bold: 'Adapt the canon', text: ": Eberron is designed to be customized. If something here contradicts your version of Eberron, your version wins" },
                  { bold: 'The Trust is your wildcard', text: ": Any gnome NPC might be Trust. Any rumor might be planted. Any 'coincidence' might be surveillance" },
                  { bold: 'Scale the threats', text: ': The encounters and plot threads suggest level ranges, but adjust to your party' },
                  { bold: 'Make it yours', text: ': Add your own shops, NPCs, and secrets. Korranberg is a living city — it should grow with your campaign' },
                ].map((item, idx) => (
                  <li key={idx} className="text-sm leading-relaxed">
                    <strong style={{ color: 'var(--stone-100)' }}>{item.bold}</strong>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── Credits & Acknowledgments ── */}
      <Section bg="var(--stone-50)">
        <SectionHeader
          eyebrow="Credits"
          title="Acknowledgments"
        />
        <div className="mt-12 space-y-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <Feather size={32} className="mx-auto mb-4" style={{ color: 'var(--brass-500)' }} />
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--stone-600)' }}>
                <strong style={{ color: 'var(--stone-700)' }}>Keith Baker</strong> — for creating one of the richest, most inventive fantasy settings ever published. 
                His work on <em>Exploring Eberron</em> in particular provided the foundation for this guide's Zilargo content.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--stone-500)' }}>
                <strong style={{ color: 'var(--stone-700)' }}>Wizards of the Coast</strong> for <em>Eberron: Rising from the Last War</em>,{' '}
                <em>Wayfinder's Guide to Eberron</em>, and all previous edition Eberron material that built this world.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--stone-500)' }}>
                <strong style={{ color: 'var(--stone-700)' }}>The Eberron community</strong> — Reddit's r/Eberron, the Discord servers, 
                and countless DMs who have run campaigns in this setting and shared their creativity.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div
              className="max-w-2xl mx-auto p-6 rounded-lg"
              style={{ backgroundColor: 'var(--stone-100)', border: '1px solid var(--stone-200)' }}
            >
              <h4 className="font-display text-base font-semibold mb-3 text-center" style={{ color: 'var(--stone-800)' }}>
                Disclaimer
              </h4>
              <p className="text-xs leading-relaxed text-center" style={{ color: 'var(--stone-500)' }}>
                This is a fan-made guide for use with <strong>Dungeons &amp; Dragons 5th Edition</strong> and the{' '}
                <strong>Eberron</strong> campaign setting. Eberron is the intellectual property of Wizards of the Coast 
                and Keith Baker. This guide is not officially affiliated with or endorsed by Wizards of the Coast.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div
              className="max-w-2xl mx-auto p-4 rounded-lg text-center"
              style={{ backgroundColor: 'var(--stone-900)', border: '1px solid var(--stone-700)' }}
            >
              <p className="text-xs" style={{ color: 'var(--stone-400)' }}>
                Built for the <strong style={{ color: 'var(--brass-400)' }}>Lost Vaults of Cyre</strong> campaign.
                All goods, items, and rules trace to published D&amp;D books.
                All lore traces to published Eberron sourcebooks.
                All homebrew content is released for personal use in your D&amp;D campaigns.
                Commercial use is not permitted.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  )
}
