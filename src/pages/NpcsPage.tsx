import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import NpcCard from '@/components/NpcCard'
import DMNoteBox from '@/components/DMNoteBox'

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

interface NpcData {
  name: string
  title: string
  portrait: string
  faction: string
  factionColor: string
  factionBg: string
  wants: string
  secrets: string
}

const npcs: NpcData[] = [
  {
    name: 'Mirveth Lethis',
    title: "Soladas doyen-adjunct, the party's Library contact",
    portrait: '/images/npcs/IMG_19_mirveth_lethis.jpg',
    faction: 'Library',
    factionColor: 'var(--everbright-500)',
    factionBg: 'rgba(74, 175, 212, 0.12)',
    wants:
      "Everything the party learned and recovered at Paluur Draal, catalogued and surrendered to Soladas. In exchange: vault access. She's elderly, sharp, endlessly patient — speaks slowly because she's always three thoughts ahead.",
    secrets:
      "She suspects the Dhakaani site connects to something the Library buried on purpose centuries ago, and she's not sure she wants it dug up.",
  },
  {
    name: 'Sennika Davandis (+ Quill)',
    title: 'Trust handler, posing as a Library folklorist',
    portrait: '/images/npcs/IMG_20_sennika_quill.jpg',
    faction: 'Trust',
    factionColor: 'var(--teal-500)',
    factionBg: 'rgba(45, 156, 140, 0.12)',
    wants:
      "To know exactly what they are and what they intend, before deciding whether they're a problem. Warm, charming, relentlessly courteous. Already met the party on the road.",
    secrets:
      "The courtesy is the threat. She has not decided about them yet — and that's leverage in both directions. Quill (faerie dragon) is part of the Trust's surveillance web.",
  },
  {
    name: 'Bells (Belaluur)',
    title: 'Goblin contact, fixer. From over the Darguun border',
    portrait: '/images/npcs/IMG_21_bells.jpg',
    faction: 'Independent',
    factionColor: 'var(--stone-500)',
    factionBg: 'rgba(122, 101, 72, 0.12)',
    wants:
      "To get paid and to look useful to people more dangerous than himself. Quick, funny, never still. Waiting at the city's edge — the Salt & Cipher.",
    secrets:
      "Bells works for more than one buyer, and at least one of them is interested in the party for reasons Bells hasn't been told.",
  },
  {
    name: 'Alina Alrene ir\u2019Korran',
    title: 'High Councilor of the Library. Korran blood, lawful-evil, exquisitely composed',
    portrait: '/images/npcs/IMG_22_alina_irkorran.jpg',
    faction: 'Library',
    factionColor: 'var(--everbright-500)',
    factionBg: 'rgba(74, 175, 212, 0.12)',
    wants:
      "The Library's pre-eminence and her own, in that order. Smiles like a closing door. Climbed over her own house to hold her seat.",
    secrets:
      "She already knows the party is here and has decided not to act — yet.",
  },
  {
    name: 'Doran Sivis',
    title: 'Korranberg Chronicle field reporter',
    portrait: '/images/npcs/IMG_23_doran_sivis.jpg',
    faction: 'House Sivis',
    factionColor: 'var(--brass-500)',
    factionBg: 'rgba(184, 148, 74, 0.15)',
    wants:
      "The story of who walked out of Paluur Draal and why. Young, fast-talking, ferociously curious — treats a good story as a moral duty.",
    secrets:
      "He's right that there's a story, and chasing it could expose the party — or, handled well, become their shield.",
  },
  {
    name: 'Esmer Vexil',
    title: 'Proprietor, the Verdigris Retort. Dry, exacting, soft Library ear',
    portrait: '/images/npcs/IMG_24_esmer_vexil.jpg',
    faction: 'Independent',
    factionColor: 'var(--stone-500)',
    factionBg: 'rgba(122, 101, 72, 0.12)',
    wants:
      'To keep her shop running and her ears open. See shop entry 7.1 for full details.',
    secrets:
      'Her loyalty to the Library is quieter than her reputation suggests — she trades in more than potions.',
  },
  {
    name: '"Uncle" Orro Wist',
    title: 'Proprietor, the Quiet Drawer. Almost certainly the Trust\u2019s shopfront',
    portrait: '/images/npcs/IMG_25_orro_wist.jpg',
    faction: 'Trust',
    factionColor: 'var(--teal-500)',
    factionBg: 'rgba(45, 156, 140, 0.12)',
    wants:
      'To keep the Quiet Drawer open and its real purpose hidden. See shop entry 7.7 for full details.',
    secrets:
      'The shop is a Trust listening post. Every purchase is noted, every overheard word filed.',
  },
]

const secondaryShopkeepers: NpcData[] = [
  {
    name: 'Pell Daggadon',
    title: 'Gnome scrivener & map-dealer, proprietor of Ink of the Ages',
    portrait: '/images/npcs/IMG_57_pell_daggadon.jpg',
    faction: 'Independent',
    factionColor: 'var(--stone-500)',
    factionBg: 'rgba(122, 101, 72, 0.12)',
    wants: 'Route knowledge — the party\'s unmapped Paluur Draal route is valuable.',
    secrets: 'He\'s the best cartographer in a city of great cartographers and knows it.',
  },
  {
    name: 'Lysa Torann',
    title: 'Gnome illusion-tailor, proprietor of Mirage & Hemline, Lyrris-trained',
    portrait: '/images/npcs/IMG_58_lysa_torann.jpg',
    faction: 'Independent',
    factionColor: 'var(--stone-500)',
    factionBg: 'rgba(122, 101, 72, 0.12)',
    wants: 'To dress interesting people and learn their secrets.',
    secrets: 'She sees everyone of consequence — everyone needs clothes.',
  },
  {
    name: 'Wist Cogturn',
    title: 'Gnome artificer, proprietor of Cogturn & Ember, Drystone-trained',
    portrait: '/images/npcs/IMG_59_wist_cogturn.jpg',
    faction: 'Independent',
    factionColor: 'var(--stone-500)',
    factionBg: 'rgba(122, 101, 72, 0.12)',
    wants: 'To keep the city\'s infrastructure running and be left alone.',
    secrets: 'Indifferent to intrigue, which makes her the most trustworthy contact in a city of liars.',
  },
  {
    name: 'Davra Mirr',
    title: 'Gnome gem & dragonshard dealer, proprietor of Glittering Khyber',
    portrait: '/images/npcs/IMG_61_davra_mirr.jpg',
    faction: 'Independent',
    factionColor: 'var(--stone-500)',
    factionBg: 'rgba(122, 101, 72, 0.12)',
    wants: 'Unusual shards, no questions asked.',
    secrets: 'Almost certainly fencing for someone larger.',
  },
  {
    name: 'Bann Lyrriman',
    title: 'Gnome focus-maker, proprietor of Wandwright\'s Sleeve, Sivis cousin-line',
    portrait: '/images/npcs/IMG_62_bann_lyrriman.jpg',
    faction: 'House Sivis',
    factionColor: 'var(--brass-500)',
    factionBg: 'rgba(184, 148, 74, 0.15)',
    wants: 'To study interesting weapons and foci.',
    secrets: 'Curious about Cyrus\'s gun and would love to "study" it.',
  },
  {
    name: 'Hadda Pol',
    title: 'Half-gnome innkeeper, proprietor of Salt & Cipher',
    portrait: '/images/npcs/IMG_63_hadda_pol.jpg',
    faction: 'Independent',
    factionColor: 'var(--stone-500)',
    factionBg: 'rgba(122, 101, 72, 0.12)',
    wants: 'To keep the peace and sell what she sees.',
    secrets: 'Asks no questions, remembers everything, sells modestly to whoever asks.',
  },
  {
    name: 'Thedda Quillon',
    title: 'Gnome scrivener-artisan, proprietor of Quillon\'s, Sivis cousin-line',
    portrait: '/images/npcs/IMG_60_thedda_quillon.jpg',
    faction: 'House Sivis',
    factionColor: 'var(--brass-500)',
    factionBg: 'rgba(184, 148, 74, 0.15)',
    wants: 'To match the perfect instrument to the perfect hand.',
    secrets: 'The pen chooses the writer — and she chooses who learns that.',
  },
  {
    name: 'Puff Dewbottom',
    title: 'Gnome larkleaf merchant, proprietor of The Dulcet Leaf',
    portrait: '/images/npcs/IMG_64_puff_dewbottom.jpg',
    faction: 'Independent',
    factionColor: 'var(--stone-500)',
    factionBg: 'rgba(122, 101, 72, 0.12)',
    wants: 'To keep The Dulcet Leaf open, the tea hot, and the Trust happy.',
    secrets: 'He files every purchase with the Trust but genuinely believes the tea really does bring people together.',
  },
]

/* ------------------------------------------------------------------ */
/*  ANIMATION VARIANTS                                                 */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

/* ------------------------------------------------------------------ */
/*  FACTION BADGE                                                      */
/* ------------------------------------------------------------------ */

function FactionBadge({
  faction,
  color,
  bg,
}: {
  faction: string
  color: string
  bg: string
}) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
      style={{
        color,
        backgroundColor: bg,
        border: `1px solid ${color}`,
      }}
    >
      {faction}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  NPC WRAPPER CARD — faction badge + scroll animation                */
/* ------------------------------------------------------------------ */

function NpcCardWrapper({
  npc,
}: {
  npc: NpcData
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="relative"
    >
      {/* Faction badge — positioned top-right */}
      <div className="absolute top-3 right-3 z-10">
        <FactionBadge
          faction={npc.faction}
          color={npc.factionColor}
          bg={npc.factionBg}
        />
      </div>
      <NpcCard
        name={npc.name}
        title={npc.title}
        portrait={npc.portrait}
        wants={npc.wants}
        secrets={npc.secrets}
      />
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE                                                          */
/* ------------------------------------------------------------------ */

export default function NpcsPage() {
  const gridRef = useRef(null)
  const isGridInView = useInView(gridRef, { once: true, margin: '-60px' })
  const secondaryGridRef = useRef(null)
  const isSecondaryInView = useInView(secondaryGridRef, { once: true, margin: '-60px' })

  return (
    <div className="min-h-[100dvh]">
      {/* ---------- Section Header ---------- */}
      <section className="pt-24 pb-8 px-4 lg:px-8">
        <SectionHeader
          eyebrow="NPCS"
          title="NPC Roster"
          subtitle="Portraits, voices, wants, and a secret each."
        />
      </section>

      {/* ---------- Intro DM Note ---------- */}
      <section className="px-4 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <DMNoteBox>
            Portraits flagged for generation. Gnomes unless noted.
          </DMNoteBox>
        </div>
      </section>

      {/* ---------- NPC Grid ---------- */}
      <section className="px-4 lg:px-8 pb-16" ref={gridRef}>
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isGridInView ? 'show' : 'hidden'}
        >
          {npcs.map((npc) => (
            <NpcCardWrapper key={npc.name} npc={npc} />
          ))}
        </motion.div>
      </section>

      {/* ---------- Secondary Shopkeepers Divider ---------- */}
      <section className="px-4 lg:px-8 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--stone-300)' }} />
            <span
              className="text-xs font-medium uppercase tracking-[0.12em]"
              style={{ color: 'var(--brass-500)' }}
            >
              Secondary Shopkeepers
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--stone-300)' }} />
          </div>
        </div>
      </section>

      {/* ---------- Secondary Shopkeepers Note ---------- */}
      <section className="px-4 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <DMNoteBox>
            These shopkeepers are detailed in their shop entries above. Brief portraits and hooks are provided here for quick reference.
          </DMNoteBox>
        </div>
      </section>

      {/* ---------- Secondary Shopkeepers Grid ---------- */}
      <section className="px-4 lg:px-8 pb-16" ref={secondaryGridRef}>
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isSecondaryInView ? 'show' : 'hidden'}
        >
          {secondaryShopkeepers.map((npc) => (
            <NpcCardWrapper key={npc.name} npc={npc} />
          ))}
        </motion.div>
      </section>

      {/* ---------- Bottom DM Note ---------- */}
      <section className="px-4 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <DMNoteBox>
            Secondary shopkeepers (Pell, Lysa, Wist Cogturn, Davra, Bann,
            Hadda, Thedda, Puff) now have portraits and hooks above. Full details remain in their shop entries.
          </DMNoteBox>
        </div>
      </section>
    </div>
  )
}
