import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SectionHeader from '@/components/SectionHeader'
import DMNoteBox from '@/components/DMNoteBox'

gsap.registerPlugin(ScrollTrigger)

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

interface Tier {
  name: string
  description: string
  dmNote: string
  travelNote: string
  image?: string
  imageAlt?: string
}

const TIERS: Tier[] = [
  {
    name: 'The Sky Docks \u2013 Rail Terminus',
    description:
      'The lowest tier of Korranberg is a marvel of gnomish engineering \u2014 soaring mooring towers for elemental airships, lightning-rail platforms that hum with bound electrical energy, and customs houses that process goods from across Khorvaire. The air here always smells of ozone and hot brass. Passengers disembark onto broad plazas of pale stone, where everbright lanterns burn day and night to guide pilots in.',
    travelNote:
      'From the Sky Docks up to the Bookbinder\'s Quarter: 10 minutes on foot, or 3 gp via lift-platform.',
    dmNote:
      'The Sky Docks are the perfect entry point for out-of-town PCs. Customs inspections are thorough but polite \u2014 unless someone is carrying obvious magical contraband, in which case House Sivis observers take note.',
  },
  {
    name: 'The Bookbinder\'s Quarter',
    description:
      'Narrow cobblestone streets lined with print-houses, paper merchants, and binderies fill this lower-middle tier. The scent of glue, ink, and fresh leather hangs in the air. Gnomish journeymen haul stacks of folios between workshops, while couriers from House Sivis weave through the crowds with sealed satchels. The Chronicler\'s offices here maintain public record-halls where citizens can request copies of most non-restricted documents for a modest fee.',
    travelNote:
      'From the Bookbinder\'s Quarter to the Glitterway: 5\u20137 minutes along stepped Switchback Lane.',
    dmNote:
      'Forgery is a quiet industry here. A DC 18 Investigation check while browsing a particular alley near Wax-Seal Bridge reveals a shop that produces very convincing counterfeit noble seals \u2014 for academic purposes only, of course.',
    image: '/images/locations/IMG_07_chronicle_offices.jpg',
    imageAlt: 'The Bookbinder\'s Quarter \u2014 narrow streets of print-houses and binderies',
  },
  {
    name: 'The Glitterway',
    description:
      'The central market spine of Korranberg, climbing the mountainside in a series of broad terraces packed with stalls, food-vendors, and buskers. By day the Glitterway is a river of color and noise; by night the everbright lanterns turn it into a ribbon of blue-white light visible from the harbour below. Here you can buy anything from a meat pie to a minor enchanted trinket, and information changes hands as easily as coins.',
    travelNote:
      'The Glitterway runs the full length of the mid-city; walking its entire span takes roughly 15 minutes.',
    dmNote:
      'The Glitterway is the best place in the city for rumour-gathering. A DC 14 Persuasion (Gather Information) check spent here for an hour yields 1d4 reliable leads; on a natural 20, the PCs also hear something House Sivis would rather they didn\'t.',
  },
  {
    name: 'The Street of a Hundred Temples',
    description:
      'A winding district where shrines to every known faith crowd together along steep lanes. A modest Sovereign Host chapel might share a wall with a Shrine to the Silver Flame; across the street, a mystery cult\'s sigil glows faintly behind shuttered windows. Incense smoke coils upward through the everbright-lit alleys, and temple bells create a constant, overlapping carillon. Pilgrims, beggars, and philosophers mingle on the same flagstones.',
    travelNote:
      'The Street is notoriously labyrinthine; navigation checks made here without a local guide are at disadvantage.',
    dmNote:
      'Several temples maintain hidden crypts and underground sanctuaries used as safe-houses by various factions. The Library Council officially disapproves, but turns a blind eye so long as no open violence occurs on temple grounds.',
    image: '/images/locations/IMG_09_temple_street.jpg',
    imageAlt: 'The Street of a Hundred Temples \u2014 shrines and temples crowding a winding lane',
  },
  {
    name: 'The Labyrinth (House Sivis)',
    description:
      'The Labyrinth is the headquarters of House Sivis in Korranberg \u2014 an ancestral citadel of gnomish architecture near the mid-city, its towers bristling with sending-stone arrays and message-station equipment. The upper halls offer standard Sivis services \u2014 document certification, translation, long-distance messaging \u2014 but the true power lies in the deeper vaults, the warren of private archives and intelligence sorting-rooms where the house\'s information network is managed. The Labyrinth was originally Raat Tohesh, the Dhakaani college of the Duur\'kala goblin word-binders, and some of its oldest secrets still bear the warping mark of Belashyrra.',
    travelNote:
      'The Enclave sits adjacent to the College District; the two areas are connected by the Promenade of Quills, a covered walkway lined with scribe-stalls.',
    dmNote:
      'Getting into the deepest vaults of the Labyrinth requires either a Sivis seal or a very good forgery (DC 22). The house employs trained mimics as living security systems in its lowest levels \u2014 yes, actual mimics, bred for loyalty and fed on a diet of unwanted spies. The upper halls are open to legitimate business; the vaults beneath are legendary-tier inaccessible.',
    image: '/images/locations/IMG_08_sivis_enclave.jpg',
    imageAlt: 'The Labyrinth \u2014 ancestral citadel of House Sivis with sending-stone arrays',
  },
  {
    name: 'The College District',
    description:
      'The upper-middle tier is home to the largest concentration of Library of Korranberg colleges \u2014 honey-coloured stone buildings, brass-inlaid doors, and everbright orbs scattered across the mountainside. The Library is not a single building but an institution; its eight Colleges each maintain their own wings, towers, or annexes here and throughout the city, and the streets are filled with scholars in robes of a dozen colours, golems hauling book-carts, and the ever-present scent of old paper and binding glue.',
    travelNote:
      'From the College District up to the Terraces: 8\u201310 minutes via the Grand Stair or 5 gp by lift-platform.',
    dmNote:
      'The Library\'s security is formidable \u2014 magical wards, trained librarians who are also spellcasters, and the mysterious agents of the Seventh College. The District is considered neutral ground by all major factions, and open violence here is vanishingly rare. Remember: the Library exists partially in extradimensional space, so the buildings hold far more on the inside than they appear to from the street.',
    image: '/images/locations/IMG_03_library_facade.jpg',
    imageAlt: 'The College District \u2014 Library of Korranberg buildings across the tier',
  },
  {
    name: 'The Terraces',
    description:
      'The highest tier of Korranberg, where wealthy estates, private gardens, and the most exclusive colleges overlook the entire city. The air is thinner and colder here, and on clear days you can see all the way to the harbour. At night the Terraces become a sea of everbright lantern-light, the city spreading out below like a glowing map. The Library Council\'s private chambers and the most restricted College facilities are located here.',
    travelNote:
      'The Terraces are accessible only by the Grand Stair, lift-platform (10 gp), or private airship. Climbing on foot from the College District takes roughly 10 minutes.',
    dmNote:
      'The Terraces are home to the Library Council\'s closed sessions, where policy that affects all Zilargo is decided. A character with a familiar or scrying capability positioned cleverly might overhear something valuable \u2014 or something dangerous.',
    image: '/images/locations/IMG_01_city_skyline.jpg',
    imageAlt: 'The Terraces at night \u2014 the highest tier overlooking the glowing city',
  },
]

/* ------------------------------------------------------------------ */
/*  SUB-COMPONENTS                                                     */
/* ------------------------------------------------------------------ */

function TierCard({ tier, index }: { tier: Tier; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!cardRef.current) return
      gsap.from(cardRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        delay: (index % 2) * 0.1,
      })
    },
    { scope: cardRef },
  )

  const isEven = index % 2 === 0

  return (
    <div
      ref={cardRef}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-10 items-start`}
    >
      {/* Image */}
      {tier.image && (
        <div className="w-full lg:w-[45%] flex-shrink-0">
          <div className="overflow-hidden rounded-lg" style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
            <img
              src={tier.image}
              alt={tier.imageAlt || tier.name}
              className="w-full h-64 lg:h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`flex-1 ${!tier.image ? 'max-w-3xl mx-auto w-full' : ''}`}>
        {/* Tier number badge */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: 'var(--brass-500)',
              color: 'var(--stone-900)',
            }}
          >
            {index + 1}
          </span>
          <h3
            className="font-display font-semibold"
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              color: 'var(--stone-800)',
            }}
          >
            {tier.name}
          </h3>
        </div>

        <p
          className="font-sans text-base leading-relaxed mb-4"
          style={{ color: 'var(--stone-600)' }}
        >
          {tier.description}
        </p>

        {/* Travel note */}
        <div
          className="rounded p-4 mb-4"
          style={{
            backgroundColor: 'var(--stone-100)',
            border: '1px solid var(--stone-200)',
            borderLeft: '3px solid var(--everbright-500)',
          }}
        >
          <span
            className="inline-block text-xs font-medium uppercase tracking-wider mb-1"
            style={{ color: 'var(--everbright-600)' }}
          >
            Travel
          </span>
          <p className="font-sans text-sm" style={{ color: 'var(--stone-600)' }}>
            {tier.travelNote}
          </p>
        </div>

        {/* DM Note */}
        <DMNoteBox>{tier.dmNote}</DMNoteBox>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE                                                          */
/* ------------------------------------------------------------------ */

export default function CityLayoutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const mapSectionRef = useRef<HTMLDivElement>(null)
  const tiersContainerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Hero content entrance
      if (heroContentRef.current) {
        const children = heroContentRef.current.children
        gsap.from(children, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          delay: 0.3,
        })
      }

      // Hero parallax
      if (heroRef.current) {
        gsap.to(heroRef.current.querySelector('.hero-bg'), {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // Map section fade-in
      if (mapSectionRef.current) {
        gsap.from(mapSectionRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mapSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }
    },
    { scope: heroRef },
  )

  return (
    <div>
      {/* ============================================================ */}
      {/* SECTION 1: Hero                                              */}
      {/* ============================================================ */}
      <section
        ref={heroRef}
        className="relative min-h-[85dvh] flex items-end overflow-hidden"
      >
        {/* Background */}
        <div className="hero-bg absolute inset-0 z-0">
          <img
            src="/images/locations/IMG_01_city_skyline.jpg"
            alt="Bird\'s-eye view of Korranberg\'s tiered cityscape"
            className="w-full h-full object-cover object-center"
            style={{ transform: 'scale(1.1)' }}
          />
          {/* Vignette overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 40%, rgba(26,19,12,0.55) 100%)',
            }}
          />
          {/* Bottom gradient for readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(26,19,12,0.7) 0%, rgba(26,19,12,0.2) 40%, transparent 70%)',
            }}
          />
        </div>

        {/* Hero content */}
        <div
          ref={heroContentRef}
          className="relative z-10 w-full px-6 lg:px-12 pb-16 pt-32 max-w-7xl mx-auto"
        >
          <span
            className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
            style={{ color: 'var(--brass-400)' }}
          >
            Zilargo &middot; Eberron
          </span>
          <h1
            className="font-display font-light mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.015em',
              color: 'var(--stone-50)',
              textShadow: '0 2px 20px rgba(0,0,0,0.6)',
            }}
          >
            City Layout
          </h1>
          <p
            className="font-sans font-light text-lg lg:text-xl max-w-xl mb-8"
            style={{ color: 'var(--stone-200)' }}
          >
            Seven districts stacked across tiered terrain, from the Sky Docks at the harbour to the Terraces overlooking the mountain peaks.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('districts')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: 'var(--brass-500)',
              color: 'var(--stone-900)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brass-400)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(184,148,74,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brass-500)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Explore Districts
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: Section Header + City Map                         */}
      {/* ============================================================ */}
      <section
        id="districts"
        className="px-4 lg:px-8 pt-20 lg:pt-28"
        style={{ backgroundColor: 'var(--stone-50)' }}
      >
        <SectionHeader
          eyebrow="GEOGRAPHY"
          title="City Layout"
          subtitle="Korranberg is built into the mountainside in seven distinct tiers, each with its own character, commerce, and secrets."
        />

        {/* Prominent city map */}
        <div
          ref={mapSectionRef}
          className="max-w-6xl mx-auto mt-12 lg:mt-16"
        >
          <div
            className="relative overflow-hidden rounded-xl"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
          >
            <img
              src="/images/locations/IMG_01_city_skyline.jpg"
              alt="Bird\'s-eye illustrated map of Korranberg showing all seven tiers"
              className="w-full h-auto object-cover"
              style={{ maxHeight: '70vh' }}
            />
            {/* Subtle overlay with caption */}
            <div
              className="absolute bottom-0 left-0 right-0 px-6 py-4"
              style={{
                background:
                  'linear-gradient(to top, rgba(26,19,12,0.8) 0%, transparent 100%)',
              }}
            >
              <p
                className="font-sans text-sm"
                style={{ color: 'var(--stone-200)' }}
              >
                <span className="font-medium" style={{ color: 'var(--brass-400)' }}>
                  Korranberg &mdash; The Seven Tiers
                </span>{' '}
                (Illustrated bird\'s-eye view, north at top)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: The Seven Tiers                                   */}
      {/* ============================================================ */}
      <section
        ref={tiersContainerRef}
        className="px-4 lg:px-8 py-16 lg:py-24"
        style={{ backgroundColor: 'var(--stone-50)' }}
      >
        <div className="max-w-6xl mx-auto space-y-20 lg:space-y-28">
          {TIERS.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: Travel Mechanics Block                            */}
      {/* ============================================================ */}
      <section
        className="px-4 lg:px-8 py-12 lg:py-16"
        style={{ backgroundColor: 'var(--stone-100)' }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-lg p-6 lg:p-8"
            style={{
              backgroundColor: 'var(--stone-50)',
              border: '1px solid var(--stone-200)',
              borderLeft: '4px solid var(--brass-500)',
            }}
          >
            <h3
              className="font-display font-semibold text-xl mb-3"
              style={{ color: 'var(--stone-800)' }}
            >
              Getting Around
            </h3>
            <p
              className="font-sans text-base leading-relaxed mb-4"
              style={{ color: 'var(--stone-600)' }}
            >
              Travel across the city on foot, tier to tier, is roughly 30&ndash;45 minutes. The steep stepped streets favour small folk and have public lift-platforms (elemental-bound) at the major junctions. A ride costs 2&ndash;5 gp depending on distance and time of day; after midnight the lifts shut down and the city becomes noticeably quieter.
            </p>
            <p
              className="font-sans text-base leading-relaxed"
              style={{ color: 'var(--stone-600)' }}
            >
              The Lightning Rail connects Korranberg to the rest of Zilargo and beyond, while airship mooring towers at the Sky Docks offer the fastest (and most expensive) travel to distant cities. Within the city, most locals walk; the fit climb the Grand Stair, while the wealthy hire porters or take the lifts.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: DM Navigation Tips                                */}
      {/* ============================================================ */}
      <section
        className="px-4 lg:px-8 py-12 lg:py-16"
        style={{ backgroundColor: 'var(--stone-50)' }}
      >
        <div className="max-w-3xl mx-auto">
          <DMNoteBox>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Use the verticality &mdash; chases up the stairs between tiers make for memorable encounters, and the lift-platforms can be sabotaged or commandeered.
              </li>
              <li>
                The Lightning Rail and airships mean players can arrive from anywhere in Khorvaire; use the Sky Docks as a natural session opener.
              </li>
              <li>
                Each tier has its own encounter table and social dynamics &mdash; what works in the Glitterway might get you arrested in the College District.
              </li>
              <li>
                The Library&rsquo;s influence extends into every district &mdash; scholars, informants, and Seventh College observers are everywhere.
              </li>
            </ul>
          </DMNoteBox>
        </div>
      </section>
    </div>
  )
}
