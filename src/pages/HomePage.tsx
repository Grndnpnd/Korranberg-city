import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Map,
  BookOpen,
  Building2,
  Store,
  Users,
  Sword,
  FileText,
  ChevronDown,
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import ReadAloudBox from '@/components/ReadAloudBox'

gsap.registerPlugin(ScrollTrigger)

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const eyebrowRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const taglineRef = useRef<HTMLSpanElement>(null)
  const chevronRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ken Burns on background
      gsap.fromTo(
        imgRef.current,
        { scale: 1.05 },
        { scale: 1, duration: 2, ease: 'power2.out' }
      )

      // Eyebrow fade in
      gsap.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: 'power2.out' }
      )

      // Title word-reveal
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.word')
        gsap.fromTo(
          words,
          { opacity: 0, y: 60, rotateX: 15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.0,
            stagger: 0.08,
            delay: 0.7,
            ease: 'power3.out',
          }
        )
      }

      // Subtitle fade-up
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.4, ease: 'power2.out' }
      )

      // Tagline fade-in
      gsap.fromTo(
        taglineRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 1.8, ease: 'power2.out' }
      )

      // Scroll indicator
      gsap.fromTo(
        chevronRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 2.2, ease: 'power2.out' }
      )

      // Parallax scroll
      gsap.to(imgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const titleWords = 'Korranberg'.split(' ')

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: '100dvh' }}
    >
      {/* Background image */}
      <img
        ref={imgRef}
        src="/images/locations/IMG_01_city_skyline.jpg"
        alt="Korranberg Skyline"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(to bottom, rgba(26,19,12,0.3) 0%, rgba(26,19,12,0.1) 40%, rgba(26,19,12,0.6) 80%, rgba(26,19,12,0.95) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="relative text-center px-4 max-w-4xl mx-auto"
        style={{ zIndex: 2 }}
      >
        <span
          ref={eyebrowRef}
          className="inline-block text-xs font-medium uppercase tracking-[0.15em] mb-4"
          style={{ color: 'var(--brass-400)', opacity: 0 }}
        >
          A Dungeon Master's Guide to
        </span>

        <h1
          ref={titleRef}
          className="font-display font-light mb-4"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: 'var(--stone-50)',
            textShadow: '0 2px 40px rgba(0,0,0,0.5)',
            perspective: '400px',
          }}
        >
          {titleWords.map((word, i) => (
            <span
              key={i}
              className="word inline-block"
              style={{ opacity: 0, transformOrigin: 'center bottom' }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p
          ref={subtitleRef}
          className="font-sans font-light text-lg md:text-xl mb-4 max-w-xl mx-auto"
          style={{
            color: 'var(--stone-200)',
            lineHeight: 1.7,
            opacity: 0,
          }}
        >
          The City of Towers, Tomes, and Forbidden Knowledge
        </p>

        <span
          ref={taglineRef}
          className="inline-block text-sm font-normal uppercase tracking-[0.1em]"
          style={{ color: 'var(--brass-400)', opacity: 0 }}
        >
          Zilargo &middot; Eberron
        </span>
      </div>

      {/* Scroll indicator */}
      <div
        ref={chevronRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ zIndex: 2, opacity: 0 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} style={{ color: 'var(--stone-200)' }} />
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Introduction                                                       */
/* ------------------------------------------------------------------ */
function IntroSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })

  const stats = [
    { label: 'Population', value: '17,000–17,500' },
    { label: 'Government', value: 'Council of Nine' },
    { label: 'Location', value: 'Zilargo, Khorvaire' },
    { label: 'Industry', value: 'Knowledge & Trade' },
  ]

  return (
    <section
      ref={sectionRef}
      className="px-4 lg:px-8 py-24"
      style={{ backgroundColor: 'var(--stone-50)' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Opening paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ReadAloudBox>
            "Nestled into the tiered slopes of the Seawall Mountains, Korranberg
            rises from the harbor like a promise made in stone and starlight. The
            city breathes with the rhythm of turning pages — scholars hurry down
            cobblestone streets clutching forbidden tomes, airships drift between
            lightning-caught towers, and in the heart of it all, the Library of
            Korranberg holds secrets that could reshape the Five Nations."
          </ReadAloudBox>
        </motion.div>

        {/* Body paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-sans text-base leading-relaxed mb-6"
          style={{ color: 'var(--stone-600)' }}
        >
          Korranberg is the capital of Zilargo and the seat of House Sivis's
          administrative power. It is a city where knowledge is traded as freely
          as gold, where gnomish ingenuity has built wonders that rival the
          magic of the dragonmarked houses, and where every cobblestone street
          holds a thousand years of secrets. For Dungeon Masters, it offers an
          unparalleled setting — a city of politics, mystery, and adventure that
          can serve as the heart of an entire campaign.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-sans text-base leading-relaxed mb-6"
          style={{ color: 'var(--stone-600)' }}
        >
          This guide provides everything you need to run campaigns set in
          Korranberg: detailed district maps, fully stocked shops with
          proprietors and prices, NPCs with wants and secrets, random encounter
          tables, plot hooks, and DM tools to keep your sessions running
          smoothly. Whether your players are scholars seeking forbidden lore,
          spies navigating the Trust's watchful eye, or adventurers drawn by
          the promise of dragonshards and ancient magic, Korranberg has
          something for everyone.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-sans text-base leading-relaxed mb-10"
          style={{ color: 'var(--stone-600)' }}
        >
          Use the navigation above or the portal grid below to explore each
          section. Every location includes read-aloud text for your players,
          DM notes with hidden details, and mechanical information for D&D 5E.
          The audio player in the corner can set the ambience for your
          session — from bustling city streets to the quiet hush of the Library's
          deepest vaults.
        </motion.p>

        {/* Stat block */}
        <motion.div
          ref={statsRef}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mt-10"
          initial="hidden"
          animate={statsInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              <div
                className="text-xs font-medium uppercase tracking-wider mb-1"
                style={{ color: 'var(--stone-400)' }}
              >
                {stat.label}
              </div>
              <div
                className="font-display text-2xl font-medium"
                style={{ color: 'var(--brass-600)' }}
              >
                {stat.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Quick-Nav Portal Grid                                              */
/* ------------------------------------------------------------------ */
const portalCards = [
  {
    title: 'City Layout',
    subtitle: '7 Districts, Tiered Terrain',
    icon: Map,
    href: '/city',
    accent: 'var(--brass-500)',
  },
  {
    title: 'The Library',
    subtitle: 'Exterior, Halls, Vaults, 8 Colleges',
    icon: BookOpen,
    href: '/library',
    accent: 'var(--everbright-500)',
  },
  {
    title: 'Districts',
    subtitle: "Bookbinders, Sivis, Temples, Sky Docks",
    icon: Building2,
    href: '/districts',
    accent: 'var(--teal-500)',
  },
  {
    title: 'Shops & Merchants',
    subtitle: '8 Shops, Proprietors, Inventory',
    icon: Store,
    href: '/shops',
    accent: 'var(--warm-amber)',
  },
  {
    title: 'Characters',
    subtitle: '7 NPCs, Wants & Secrets',
    icon: Users,
    href: '/npcs',
    accent: 'var(--deep-crimson)',
  },
  {
    title: 'DM Tools',
    subtitle: 'Factions, Rumors, Encounters, Plots',
    icon: Sword,
    href: '/dm-tools',
    accent: 'var(--everbright-500)',
  },
  {
    title: 'Appendix',
    subtitle: 'Source & Canon Key',
    icon: FileText,
    href: '/appendix',
    accent: 'var(--stone-500)',
  },
]

function PortalCard({
  card,
  index,
}: {
  card: (typeof portalCards)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)
  const Icon = card.icon

  return (
    <motion.a
      ref={ref}
      href={`#${card.href}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block rounded-lg p-6 transition-all duration-300"
      style={{
        backgroundColor: 'var(--stone-50)',
        border: hovered
          ? `1px solid ${card.accent}80`
          : '1px solid var(--stone-200)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 12px 40px rgba(0,0,0,0.1)'
          : '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      {/* Icon circle */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: `${card.accent}26` }}
      >
        <Icon size={20} style={{ color: card.accent }} />
      </div>

      <h3
        className="font-display text-lg font-medium mb-1"
        style={{ color: 'var(--stone-800)' }}
      >
        {card.title}
      </h3>
      <p className="text-sm" style={{ color: 'var(--stone-400)' }}>
        {card.subtitle}
      </p>
    </motion.a>
  )
}

function PortalSection() {
  return (
    <section
      className="px-4 lg:px-8 py-16"
      style={{ backgroundColor: 'var(--stone-100)' }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Explore the City"
          title="The Guide"
          subtitle="Navigate every district, shop, NPC, and secret of Korranberg"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {portalCards.map((card, i) => (
            <PortalCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Atmosphere Quote                                                   */
/* ------------------------------------------------------------------ */
function QuoteSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative px-4 lg:px-8 py-20 overflow-hidden"
      style={{ backgroundColor: 'var(--stone-900)' }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF6A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Decorative quote mark */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.3 } : {}}
          transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 font-display font-light select-none pointer-events-none"
          style={{
            fontSize: '8rem',
            lineHeight: 1,
            color: 'var(--brass-400)',
          }}
        >
          "
        </motion.span>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 font-display italic font-light leading-snug"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            color: 'var(--stone-100)',
            lineHeight: 1.4,
          }}
        >
          In Korranberg, knowledge is not just power — it is currency, weapon,
          and faith all bound between leather covers. Every street corner has a
          story. Every shadow has a price.
        </motion.blockquote>

        <motion.cite
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="block mt-6 text-sm not-italic"
          style={{ color: 'var(--brass-400)' }}
        >
          — Introductory text, <em>The Library of Korranberg</em>
        </motion.cite>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Home Page                                                          */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <PortalSection />
      <QuoteSection />
    </div>
  )
}
