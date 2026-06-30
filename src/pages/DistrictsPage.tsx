import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import ReadAloudBox from '@/components/ReadAloudBox'
import DMNoteBox from '@/components/DMNoteBox'

/* ───────── District 6.1 ───────── */
function BookbindersQuarter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 lg:py-24" style={{ backgroundColor: 'var(--stone-50)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: image + quick info */}
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={isInView ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' } : {}}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src="/images/locations/IMG_07_chronicle_offices.jpg"
                alt="The Bookbinder's Quarter and Korranberg Chronicle offices"
                className="w-full object-cover"
                style={{ aspectRatio: '4/3' }}
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              <span className="text-sm" style={{ color: 'var(--stone-500)' }}>Tier: Lower-Mid</span>
              <span className="text-sm" style={{ color: 'var(--stone-500)' }}>Vibe: Scholarly, Bustling</span>
              <span className="text-sm" style={{ color: 'var(--teal-500)' }}>Danger: Low</span>
            </div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--brass-500)' }}
            >
              District I
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-3xl lg:text-4xl mb-6"
              style={{ color: 'var(--stone-800)', lineHeight: 1.15 }}
            >
              The Bookbinder's Quarter &amp; the Korranberg Chronicle
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ReadAloudBox>
                The street narrows as you enter the Bookbinder's Quarter, and the air fills with the scent of fresh ink, hot metal, and paper dust. Through open workshop windows you see printing presses clanking and turning, while gnome compositors shout corrections to one another. Broadsheets fresh off the presses are pinned to notice boards outside every shop — headlines about airship arrivals, council edicts, and the latest serial adventure. Reporters in waistcoats and ink-stained aprons push past with purpose, clutching notebooks. Every few minutes a copy-boy sprints past with a bundle of fresh broadsheets, yelling the day's headline.
              </ReadAloudBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                The Bookbinder's Quarter is the publishing heart of Korranberg — and, by extension, of Zilargo. Dozens of printing houses, binderies, and scribe-shops line the winding streets, producing everything from scholarly monographs to scandalous broadsheets. The Quarter never truly sleeps; the presses run from dawn until long after midnight, their rhythm providing a steady percussive backdrop to the district's constant bustle.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                At the Quarter's center stands the Korranberg Chronicle — the most influential newspaper in Zilargo and one of the most respected in all Khorvaire. The Chronicle's offices occupy a sprawling complex of honey-stone buildings where reporters, editors, and press-gnomes work in organized chaos. The paper covers politics, arcane discovery, international affairs, and serialized fiction with equal enthusiasm. A subscription costs 5 sp per month and is delivered by courier each morning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-4"
            >
              <h4 className="font-display font-semibold text-xl mb-3" style={{ color: 'var(--stone-700)' }}>Landmarks</h4>
              <ul className="space-y-2">
                {[
                  'The Korranberg Chronicle Offices — the city\'s largest newspaper',
                  'The Gilded Quill — fine scribe\'s shop and legal document service',
                  "Tometh's Tomes — used and rare books",
                  'The Brass Owl — magical curios and books',
                  'Korranberg Bindery Guildhall — union hall for bookbinders',
                  'The Paper Market — open-air raw materials exchange',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base" style={{ color: 'var(--stone-600)' }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--brass-400)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <DMNoteBox>
                <p className="mb-2">
                  <strong className="font-semibold">The Chronicle as Rumor Engine:</strong> The Korranberg Chronicle is one of the best ways to feed plot information to players. Headlines can foreshadow encounters, reveal political developments, or hint at secret activities. The paper employs a full network of reporters — including Doran Sivis (see NPCs) — who gather information across the city.
                </p>
                <p>
                  <strong className="font-semibold">Doran Sivis:</strong> The party may encounter Doran while he's investigating a story. He can be a source of information, an ally, or a complication — depending on whether the players' activities become newsworthy. He pays well for tips and eyewitness accounts.
                </p>
              </DMNoteBox>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── District 6.2 ───────── */
function SivisEnclave() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 lg:py-24" style={{ backgroundColor: 'var(--stone-100)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: content (reversed) */}
          <div className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--everbright-500)' }}
            >
              District II
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-3xl lg:text-4xl mb-6"
              style={{ color: 'var(--stone-800)', lineHeight: 1.15 }}
            >
              The House Sivis Enclave &amp; the Labyrinth
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ReadAloudBox>
                The architecture shifts abruptly as you approach the House Sivis headquarters — gnome-sized proportions dominate, with doorways at half-height and ceilings that force taller visitors to stoop. Yet the compound radiates wealth: brass fittings gleam, sending stones glow in elegant displays, and everywhere, the blue sigil of House Sivis marks this as sovereign territory. The air hums with the faint vibration of active message stations. This is the Labyrinth — ancestral citadel of House Sivis, public-facing message station and diplomatic hub, and within its deeper levels, the vault where secrets older than the Five Nations are stored.
              </ReadAloudBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                The Labyrinth is the headquarters of House Sivis in Korranberg — extraterritorial dragonmarked House territory, not technically part of the city. It is the ancestral citadel of House Sivis, a structure of gnomish architecture whose multiple levels are connected by narrow staircases and speaking-tube networks that whistle constantly with message traffic. City laws don&rsquo;t fully apply here; the House handles its own security and justice.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                The Labyrinth was originally <strong>Raat Tohesh</strong>, the subterranean facility that had once been the college of the Duur&rsquo;kala — the goblin word-binders of the Dhakaani Empire. The vaults within held countless precious secrets, but all were warped by the shifting script of Belashyrra. Today, the Labyrinth serves as both the public-facing Sivis citadel — offering standard House services like document certification, translation, and long-distance messaging — and the internal warren of private archives and intelligence sorting-rooms where the House&rsquo;s information network is managed. The deepest levels contain centuries of message logs, notarized contracts, and House secrets that have never been successfully stolen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-4"
            >
              <h4 className="font-display font-semibold text-xl mb-3" style={{ color: 'var(--stone-700)' }}>Sivis Services</h4>
              <div className="rounded p-5 mb-4" style={{ backgroundColor: 'var(--stone-50)', border: '1px solid var(--stone-200)' }}>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-base" style={{ color: 'var(--stone-600)' }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--everbright-500)' }} />
                    <span><strong className="font-semibold" style={{ color: 'var(--stone-700)' }}>Certified Translation</strong> — Official document translation between any of 20+ languages, with House seal of authenticity. Costs vary by length and language rarity (typically 1-10 gp per page).</span>
                  </li>
                  <li className="flex items-start gap-3 text-base" style={{ color: 'var(--stone-600)' }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--everbright-500)' }} />
                    <span><strong className="font-semibold" style={{ color: 'var(--stone-700)' }}>Sending-Stone Message Relay</strong> — For those without their own sending stones, Sivis operators can relay a 25-word message to any receiving station in Khorvaire for 20 gp. Delivery within minutes to hours depending on distance.</span>
                  </li>
                  <li className="flex items-start gap-3 text-base" style={{ color: 'var(--stone-600)' }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--everbright-500)' }} />
                    <span><strong className="font-semibold" style={{ color: 'var(--stone-700)' }}>Notarized Contracts</strong> — Magically binding contracts that enforce themselves through House Sivis enchantments. Cost 10 gp base + 1% of contract value. Breaking a notarized contract causes the signer's mark to visibly blacken.</span>
                  </li>
                </ul>
              </div>
              <div className="rounded p-4" style={{ backgroundColor: 'var(--stone-50)', border: '1px solid var(--stone-200)' }}>
                <p className="text-sm" style={{ color: 'var(--stone-500)' }}>
                  <strong className="font-semibold" style={{ color: 'var(--stone-700)' }}>Sending Stones</strong> (DMG, Uncommon) can be rented from House Sivis for 100 gp per month (plus 500 gp security deposit) or purchased outright for 2,000 gp per pair. The Enclave maintains a registry of all sending stone pairs sold in Zilargo.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <DMNoteBox>
                <p className="mb-2">
                  The Labyrinth is simultaneously a public citadel and a fortress of secrets — PCs conducting legitimate House Sivis business may walk its upper halls without suspicion, while the deeper vaults remain as inaccessible as ever. The legendary &ldquo;never robbed&rdquo; claim applies specifically to the vault levels. The Labyrinth&rsquo;s defenses include magical traps, animated constructs, confusion enchantments on the corridors, and a team of gnomish security experts who know every shortcut. If players get ideas about infiltrating the vaults, make clear this is a legendary-tier heist, not a casual B&amp;E.
                </p>
                <p className="mb-2">
                  <strong>The Duur&rsquo;kala Connection:</strong> The Labyrinth&rsquo;s origins as Raat Tohesh, the college of the Dhakaani word-binders, are not widely known. A successful DC 20 History check (or research in the Library&rsquo;s Soladas College) reveals this history. Some scholars whisper that Belashyrra&rsquo;s influence on the vaults&rsquo; contents may not be entirely a thing of the past.
                </p>
                <p>
                  Also: every message sent through Sivis stations is logged. For the right price (or the right blackmail), someone might share those logs.
                </p>
              </DMNoteBox>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={isInView ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' } : {}}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src="/images/locations/IMG_08_sivis_enclave.jpg"
                alt="House Sivis Enclave"
                className="w-full object-cover"
                style={{ aspectRatio: '4/3' }}
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ───────── District 6.3 ───────── */
function TempleStreet() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 lg:py-24" style={{ backgroundColor: 'var(--stone-900)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={isInView ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' } : {}}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src="/images/locations/IMG_09_temple_street.jpg"
                alt="Street of a Hundred Temples"
                className="w-full object-cover"
                style={{ aspectRatio: '4/3' }}
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--warm-amber)' }}
            >
              District III
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-3xl lg:text-4xl mb-6"
              style={{ color: 'var(--stone-50)', lineHeight: 1.15 }}
            >
              The Street of a Hundred Temples
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                className="rounded p-6 my-6"
                style={{
                  backgroundColor: 'var(--stone-800)',
                  border: '1px solid var(--stone-600)',
                  borderLeft: '4px solid var(--brass-500)',
                }}
              >
                <span
                  className="inline-block text-xs font-medium uppercase tracking-wider mb-3"
                  style={{ color: 'var(--brass-400)' }}
                >
                  Read Aloud
                </span>
                <div
                  className="font-display italic text-lg leading-relaxed"
                  style={{ color: 'var(--stone-200)' }}
                >
                  The Street of a Hundred Temples defies Korranberg's usual order. The street twists unpredictably, and everywhere shrines, temples, and altars compete for attention — the silver flame of the Purified burns bright three doors down from a Sovereign Host temple with all nine faces carved above its door. A sign painted in fresh blood points to a Cult of the Dragon Below meeting. Incense from a dozen sources creates a haze that makes the whole street feel like a dream half-remembered.
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-300)' }}>
                The Street of a Hundred Temples contains dozens of shrines to every faith known in Khorvaire and several that aren't. The Sovereign Host, the Silver Flame, the Blood of Vol, Cults of the Dragon Below, druidic circles, mystery cults, and foreign faiths all maintain temples here — sometimes literally side by side. This extraordinary religious diversity is made possible by Zilargo's legendary tolerance: the Zil believe that every philosophy contains some fragment of truth, and suppressing any faith only drives it underground where it becomes dangerous.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-300)' }}>
                An unspoken truce prevails among all the temples, enforced by a mysterious neutral council of religious leaders who meet in secret. Open conflict between faiths is vanishingly rare — anyone who disrupts the peace finds themselves answerable to all of them. The result is a district where a Purified paladin and a Blood of Vol necromancer can pass each other on the street with nothing more than a wary nod.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-4"
            >
              <h4 className="font-display font-semibold text-xl mb-3" style={{ color: 'var(--stone-100)' }}>Landmarks</h4>
              <ul className="space-y-2">
                {[
                  'Temple of the Nine — Sovereign Host (largest temple)',
                  'The Silver Hearth — Church of the Silver Flame',
                  'The Crimson Font — Blood of Vol shrine',
                  'Shrine to the Mockery (disguised as a tailor shop)',
                  'The Open Circle — Druidic gathering space',
                  'The Unnamed Door — nobody knows what\'s inside',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base" style={{ color: 'var(--stone-300)' }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--brass-400)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                className="rounded p-6 my-6"
                style={{
                  backgroundColor: 'var(--stone-800)',
                  border: '1px solid var(--stone-600)',
                  borderLeft: '4px solid var(--teal-500)',
                }}
              >
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: 'var(--teal-500)' }}
                >
                  DM Note
                </span>
                <div className="font-sans text-base leading-relaxed" style={{ color: 'var(--stone-200)' }}>
                  <p className="mb-2">
                    The Street of a Hundred Temples is your wildcard district. Need a cult? It's here. Need divine intervention? Pick a temple. Need a clandestine meeting spot? The incense-filled interior of any minor shrine provides perfect cover.
                  </p>
                  <p>
                    This is a good place for Reeks to find a Traveler shrine — look for the shop that changes location every time you visit. The clandestine meeting between the party and a secret contact can happen inside any temple's private meditation chamber, rented for a "donation."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── District 6.4 ───────── */
function SkyDocks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 lg:py-24" style={{ backgroundColor: 'var(--stone-50)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--everbright-500)' }}
            >
              District IV
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-3xl lg:text-4xl mb-6"
              style={{ color: 'var(--stone-800)', lineHeight: 1.15 }}
            >
              The Sky Docks &amp; Rail Terminus
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ReadAloudBox>
                The noise hits you first — elemental rings humming, lightning rail cars clattering to a stop, dockworkers shouting, and the ever-present wind at this altitude that whips cloaks and snatches papers from unwary hands. The Lightning Rail station is a cathedral of brass and stone, its platforms extending like fingers toward the waiting rail cars. Above, airships of a dozen nations moor at the Sky Docks, their elemental rings casting shifting shadows across the platforms below.
              </ReadAloudBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                The Sky Docks and Lightning Rail Terminus form Korranberg's gateway to the wider world of Khorvaire. Perched at the highest tier of the city, the district is a constant whirlwind of arriving and departing travelers, loaded cargo, and shouted announcements in half a dozen languages. The Lightning Rail connects Korranberg to the Five Nations — Sharn, Starilaskur, Wroat, Flamekeep, and beyond — while the Sky Docks serve airship routes operated by House Lyrandar and a handful of independent captains.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                Customs and immigration checks are thorough but efficient; House Orien handles freight logistics with clockwork precision. The Departures Hall offers amenities for travelers of every class, from modest waiting rooms with bench seating to a private lounge for dragonmarked House members and nobility. The Cargo Warehouses bustle with dockworkers loading and unloading crates marked for destinations across the continent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-4"
            >
              <h4 className="font-display font-semibold text-xl mb-3" style={{ color: 'var(--stone-700)' }}>Landmarks</h4>
              <ul className="space-y-2">
                {[
                  'Lightning Rail Station — main platform and ticketing',
                  'Sky Dock Towers — airship mooring (4 towers)',
                  'Customs House — immigration and tariffs',
                  'The Departures Hall — waiting area and amenities',
                  'Cargo Warehouses — House Orien freight handling',
                  'The Gilded Anchor — upscale inn for travelers',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base" style={{ color: 'var(--stone-600)' }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--brass-400)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <DMNoteBox>
                <p className="mb-2">
                  <strong className="font-semibold">Pursuers Arrive Here:</strong> If the party is being pursued, their hunters will arrive at the Sky Docks or Rail Terminus. This is also where Breck Solvar and the Cannith agents begin their investigation — establishing a presence here early lets them intercept arriving travelers.
                </p>
                <p>
                  <strong className="font-semibold">Gnogin's Lyrandar Grudge:</strong> House Lyrandar operates the Sky Docks airship moorings. Any Lyrandar official will be hostile to Gnogin ir'Wynarn — the Wynarn family's historical treatment of House Lyrandar during the Last War is not forgotten. Lyrandar dockworkers may refuse service, overcharge, or "accidentally" delay his travel arrangements.
                </p>
              </DMNoteBox>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={isInView ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' } : {}}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src="/images/locations/IMG_10_sky_docks.jpg"
                alt="Sky Docks and Rail Terminus"
                className="w-full object-cover"
                style={{ aspectRatio: '4/3' }}
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════ */
export default function DistrictsPage() {
  return (
    <div style={{ backgroundColor: 'var(--stone-50)' }}>
      {/* ── Section Header ── */}
      <div className="pt-24 pb-12 px-4 lg:px-8">
        <SectionHeader
          eyebrow="DISTRICTS"
          title="Districts &amp; Sites"
          subtitle="Four key districts of Korranberg — where books, faith, commerce, and sky-travel converge."
        />
      </div>

      {/* ── District Sections ── */}
      <BookbindersQuarter />
      <SivisEnclave />
      <TempleStreet />
      <SkyDocks />
    </div>
  )
}
