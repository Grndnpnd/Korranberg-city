import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SectionHeader from '@/components/SectionHeader'
import ReadAloudBox from '@/components/ReadAloudBox'
import DMNoteBox from '@/components/DMNoteBox'

gsap.registerPlugin(ScrollTrigger)

/* ------------------------------------------------------------------ */
/*  COLLEGE DATA                                                       */
/* ------------------------------------------------------------------ */

interface College {
  name: string
  field: string
  description: string
  hook: string
  image?: string
}

const COLLEGES: College[] = [
  {
    name: 'Soladas',
    field: 'History',
    description:
      'The oldest and most prestigious college, Soladas maintains the single largest historical archive in Khorvaire. Its scholars specialise in Dhakaani civilisation, the Age of Monsters, and pre-Galifar Zilargo. The college sponsors annual expeditions to Xen\'drik ruins and the sealed city of Paluur Draal.',
    hook:
      'Mirveth Lethis is a senior fellow here. PCs who earn her trust gain access to restricted Dhakaani archives that detail ancient tactical patterns still usable today.',
  },
  {
    name: 'Balinor\'s Horn',
    field: 'Natural Sciences',
    description:
      'Named for the Sovereign of Beast and Hunt, this college studies magebred animals, monstrous ecology, and the flora of manifest zones. Its greenhouses contain specimens from the Eldeen Reaches, Xen\'drik, and carefully quarantined samples from the Mournland border.',
    hook:
      'A Balinor researcher recently returned from the Talenta Plains with a clutch of magebred eggs that are hatching earlier than predicted. She needs help\u2014fast.',
  },
  {
    name: 'Blackdragon',
    field: 'Alchemy',
    description:
      'The alchemists of Blackdragon College produce everything from healing potions to experimental elixirs that may or may not turn the drinker slightly blue. Their laboratories occupy a subterranean complex beneath the Library proper, vented through brass chimneys that give the college its name.',
    hook:
      'Blackdragon maintains a secret testing wing where unregulated elixirs are trialled on volunteers. The pay is excellent; the side-effects are\u2026 variable.',
    image: '/images/locations/IMG_06_blackdragon_college.jpg',
  },
  {
    name: 'The Tabernacle',
    field: 'Religion & Philosophy',
    description:
      'Theological study at the Tabernacle covers every major faith in Khorvaire, from the Sovereign Host to the Blood of Vol to mystery cults most people have never heard of. Its debating halls are famous for polite but devastating rhetorical combat.',
    hook:
      'A Tabernacle scholar has compiled evidence that a nearby manifest zone is tied to a previously unknown planar connection\u2014one that might explain some of the region\'s stranger phenomena.',
  },
  {
    name: 'Morridan',
    field: 'Mathematics',
    description:
      'Morridan\'s cryptographers and mathematicians design ciphers for House Sivis, model trade forecasts for the Library Council, and occasionally predict planar conjunctions with unsettling accuracy. The Trust recruits heavily from Morridan graduates.',
    hook:
      'A Morridan student has accidentally cracked a fifty-year-old cipher used by a supposedly defunct smuggling ring. The messages are still being transmitted.',
  },
  {
    name: 'Aureon\'s Holt',
    field: 'Law & Oratory',
    description:
      'Named for the Sovereign of Law and Lore, Aureon\'s Holt trains advocates, legislators, and diplomasthe orators who argue before the Library Council and the tri-cities of Zilargo. Its graduates are found in courtrooms across the Five Nations.',
    hook:
      'A high-profile case is being argued this week: a House Cannith artificer accused of stealing Library research. Both sides are hiring investigators.',
  },
  {
    name: 'Lyrris',
    field: 'Art & Literature',
    description:
      'Lyrris is the most visually spectacular college, where illusion-craft meets fine art. Its halls are filled with moving paintings, sculptures that shift form, and theatrical productions that blur the line between stage and reality. Poetry slams here involve actual lightning.',
    hook:
      'A Lyrris thesis project\u2014an illusion intended to last one night\u2014has become permanently anchored to a classroom and is slowly expanding. The student is desperate for help from anyone with dispel magic.',
  },
  {
    name: 'Drystone',
    field: 'Engineering',
    description:
      'The artificers and engineers of Drystone design and maintain Korranberg\'s infrastructure: the lift-platforms, the everbright lantern network, the heating and water systems, and the Library\'s own defences. Every elemental-bound device in the city passed through Drystone hands at some point.',
    hook:
      'Drystone is conducting field trials of a new lift-platform design. Test pilots are needed, and the current models have a tendency to stop\u2014briefly\u2014at exactly the wrong altitude.',
  },
]

/* ------------------------------------------------------------------ */
/*  COLLEGE CARD                                                       */
/* ------------------------------------------------------------------ */

function CollegeCard({ college }: { college: College }) {
  return (
    <div
      className="group flex flex-col sm:flex-row overflow-hidden rounded-lg transition-all duration-300"
      style={{
        backgroundColor: 'var(--stone-100)',
        border: '1px solid var(--stone-200)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)'
        e.currentTarget.style.borderColor = 'var(--brass-300)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'var(--stone-200)'
      }}
    >
      {/* Image */}
      {college.image ? (
        <div className="sm:w-48 md:w-56 flex-shrink-0 overflow-hidden">
          <img
            src={college.image}
            alt={college.name}
            className="w-full h-48 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        <div
          className="sm:w-48 md:w-56 flex-shrink-0 flex items-center justify-center h-48 sm:h-auto"
          style={{ backgroundColor: 'var(--stone-200)' }}
        >
          <span
            className="font-display text-5xl font-light"
            style={{ color: 'var(--stone-400)' }}
          >
            {college.name.charAt(0)}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 p-5 lg:p-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3
            className="font-display font-semibold text-lg"
            style={{ color: 'var(--stone-800)' }}
          >
            {college.name}
          </h3>
          <span
            className="text-xs font-medium uppercase tracking-wider px-2 py-0.5 rounded"
            style={{
              backgroundColor: 'var(--brass-500)',
              color: 'var(--stone-900)',
            }}
          >
            {college.field}
          </span>
        </div>
        <p
          className="font-sans text-sm leading-relaxed mb-3"
          style={{ color: 'var(--stone-600)' }}
        >
          {college.description}
        </p>
        <p
          className="font-sans text-sm leading-relaxed italic"
          style={{ color: 'var(--stone-500)' }}
        >
          {college.hook}
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE                                                          */
/* ------------------------------------------------------------------ */

export default function LibraryPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const catalogStonesRef = useRef<HTMLElement>(null)
  const readingHallRef = useRef<HTMLElement>(null)
  const archiveVaultsRef = useRef<HTMLElement>(null)
  const collegesRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Hero entrance
      if (heroContentRef.current) {
        const els = heroContentRef.current.querySelectorAll('.hero-anim')
        gsap.from(els, {
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
          yPercent: 25,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // Catalog Stones reveal
      if (catalogStonesRef.current) {
        const text = catalogStonesRef.current.querySelector('.cs-text')
        if (text) {
          gsap.from(text, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: catalogStonesRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          })
        }
      }

      // Reading Hall reveal
      if (readingHallRef.current) {
        const img = readingHallRef.current.querySelector('.rh-image')
        const text = readingHallRef.current.querySelector('.rh-text')
        if (img) {
          gsap.from(img, {
            x: -40,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: readingHallRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          })
        }
        if (text) {
          gsap.from(text, {
            x: 40,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: readingHallRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          })
        }
      }

      // Archive Vaults reveal
      if (archiveVaultsRef.current) {
        const text = archiveVaultsRef.current.querySelector('.av-text')
        const img = archiveVaultsRef.current.querySelector('.av-image')
        if (text) {
          gsap.from(text, {
            x: -40,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: archiveVaultsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          })
        }
        if (img) {
          gsap.from(img, {
            x: 40,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: archiveVaultsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          })
        }
      }

      // Colleges stagger
      if (collegesRef.current) {
        const cards = collegesRef.current.querySelectorAll('.college-card')
        gsap.from(cards, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: collegesRef.current,
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
        className="relative min-h-[90dvh] flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="hero-bg absolute inset-0 z-0">
          <img
            src="/images/locations/IMG_03_library_facade.jpg"
            alt="Grand exterior of the Library of Korranberg"
            className="w-full h-full object-cover"
            style={{ transform: 'scale(1.1)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(26,19,12,0.75) 0%, rgba(26,19,12,0.35) 50%, rgba(26,19,12,0.15) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div
          ref={heroContentRef}
          className="relative z-10 w-full px-6 lg:px-12 pt-24 pb-16 max-w-2xl"
        >
          <span
            className="hero-anim inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
            style={{ color: 'var(--brass-400)' }}
          >
            The Heart of the City
          </span>

          <h1
            className="hero-anim font-display font-light mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.015em',
              color: 'var(--stone-50)',
            }}
          >
            The Library of Korranberg
          </h1>

          <p
            className="hero-anim font-sans font-light text-lg lg:text-xl mb-8"
            style={{ color: 'var(--stone-200)' }}
          >
            Where knowledge is guarded, traded, and occasionally stolen.
          </p>

          {/* Stats row */}
          <div className="hero-anim flex flex-wrap gap-6 mb-8">
            {[
              { label: '8 Colleges', value: '8' },
              { label: '300,000+ Volumes', value: '300K+' },
              { label: 'Founded 2,400 YK', value: '2,400 YK' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-display text-xl font-medium"
                  style={{ color: 'var(--brass-400)' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: 'var(--stone-300)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll CTA */}
          <button
            className="hero-anim font-sans text-sm font-medium transition-colors duration-200 hover:underline"
            style={{ color: 'var(--everbright-400)' }}
            onClick={() => {
              const el = document.getElementById('library-overview')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Enter the Library &darr;
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: Overview                                          */}
      {/* ============================================================ */}
      <section
        id="library-overview"
        className="px-4 lg:px-8 py-16 lg:py-24"
        style={{ backgroundColor: 'var(--stone-50)' }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="THE LIBRARY"
            title="The Library of Korranberg"
            subtitle="The greatest repository of knowledge in Khorvaire \u2014 an institution of eight colleges, not merely a single building."
          />

          <div className="mt-10 lg:mt-14 space-y-6">
            <ReadAloudBox>
              Before you rises one of the eight Colleges of the Library of Korranberg &mdash; honey-coloured stone and brass-inlaid doors, flanked by everbright lanterns that cast a steady blue-white glow. Scholars in robes of a dozen colours hurry between buildings, and from within, you catch the scent of old paper and binding glue mixed with something faintly magical. The Library is everywhere in this city &mdash; towers, wings, and annexes spread across the mountainside, connected by covered walkways and scribe-stalls.
            </ReadAloudBox>

            <p
              className="font-sans text-base leading-relaxed"
              style={{ color: 'var(--stone-600)' }}
            >
              The Library of Korranberg is far more than a repository of books &mdash; and it is not a single building. It is an <strong>institution and an organisation</strong>, comprised of eight separate colleges, a corps of sages, librarians, and active agents across Khorvaire. The colleges are spread throughout the city rather than contained in one complex. It is the seat of government for the city \u2014 the Library Council rules Korranberg and exerts significant influence across all of Zilargo. It functions as a university, training the next generation of scholars, artificers, and mages across eight distinct Colleges. It serves as a bank of knowledge, trading information as other institutions trade gold. And for those who know where to look, it is a fortress of secrets, guarding truths that many would kill to obtain or bury.
            </p>

            <p
              className="font-sans text-base leading-relaxed"
              style={{ color: 'var(--stone-600)' }}
            >
              The Library maintains a complex relationship with the dragonmarked houses. House Sivis is its closest partner \u2014 the two institutions share information freely and collaborate on indexing and cryptography. House Cannith exchanges magical research for access to restricted engineering texts. Other houses maintain more distant but respectful relationships, recognising that the Library\'s knowledge network rivals their own.
            </p>

            <p
              className="font-sans text-base leading-relaxed"
              style={{ color: 'var(--stone-600)' }}
            >
              At the heart of the Library\'s identity is a tension: between open scholarship, which is its public mission, and restricted archives, which contain dangerous magical knowledge, sensitive historical documents, and research that could destabilise nations if released. Navigating this tension is the central challenge for every Dean, every librarian, and every scholar who walks its halls.
            </p>

            <DMNoteBox>
              <p className="mb-3">
                The Library&rsquo;s security is formidable &mdash; magical wards, trained librarians who are also spellcasters, and the mysterious agents of the Seventh College (whatever that really is). Getting into the Archive Vaults should be a major accomplishment requiring planning, connections, or both. Make it feel earned.
              </p>
              <p className="mb-3">
                <strong>Safe Houses:</strong> The Library maintains safe houses in the capital cities of every nation in Khorvaire for its research teams. These provide secure lodging, private research facilities, and discreet communication channels back to Korranberg. A PC with strong Library connections could gain access to these facilities across the continent.
              </p>
              <p>
                <strong>The Codex Vault:</strong> Korranberg is also home to the Codex Vault &mdash; Khorvaire&rsquo;s largest shrine to Aureon, the Sovereign of Law and Lore. While not part of the Library proper, the Codex Vault and the Library maintain close ties, and many Tabernacle scholars split their time between both institutions.
              </p>
            </DMNoteBox>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: The Catalog Stone System                          */}
      {/* ============================================================ */}
      <section
        ref={catalogStonesRef}
        className="px-4 lg:px-8 py-16 lg:py-24"
        style={{ backgroundColor: 'var(--stone-100)' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="cs-text">
            <span
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--brass-500)' }}
            >
              Extradimensional Storage
            </span>

            <h2
              className="font-display font-semibold mb-4"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                color: 'var(--stone-800)',
              }}
            >
              The Catalog Stone System
            </h2>

            <p
              className="font-sans text-base leading-relaxed mb-4"
              style={{ color: 'var(--stone-600)' }}
            >
              The Library&rsquo;s greatest secret is not in its books &mdash; it is in its <strong>space</strong>. The Library of Korranberg exists partially in <strong>extradimensional space</strong>, making it significantly larger on the inside than its exterior would suggest. What scholars see from the street is only the entrance to something far vaster.
            </p>

            <p
              className="font-sans text-base leading-relaxed mb-6"
              style={{ color: 'var(--stone-600)' }}
            >
              When a researcher begins their study, they are issued a <strong>catalog stone</strong> &mdash; an orange-coloured crystal keyed to their topic of research. They are guided to a small pedestal chamber where they place the stone. In response, alcoves of shelves full of books and scrolls rush out of the darkness to form the walls of a private study cell. The researcher stands in a <strong>pool of light within a vast, open darkness</strong>, surrounded by everything the Library holds on their subject. When they finish, removing the stone causes the shelves to fall away, releasing them back into normal space.
            </p>

            <ReadAloudBox>
              A librarian hands you a warm, orange crystal &mdash; faintly glowing, humming with a sound below hearing. &ldquo;Your topic,&rdquo; she says. You follow her through a narrow door into a small, plain chamber with a stone pedestal at its centre. She gestures: place the crystal. You do. The moment it touches the surface, the world around you <em>rushes</em> outward. Bookshelves explode out of the darkness &mdash; hundreds of them, thousands of volumes, scrolls, folios, all arranged in a perfect circle of light surrounding your desk. Beyond that circle: nothing. An endless, open void. You are alone with your research in a pocket dimension built just for you.
            </ReadAloudBox>

            <DMNoteBox>
              <p className="mb-2">
                <strong>Impact on Party Access:</strong> The catalog stone system means that simply &ldquo;walking into the Library and looking around&rdquo; is impossible for research purposes. The vast majority of the collection exists in extradimensional space &mdash; a PC cannot casually browse the shelves. They need a catalog stone, which requires a Library card (5 gp/month for citizens, 15 gp/month for foreigners) and a stated research topic.
              </p>
              <p className="mb-2">
                A PC without a Library card might bluff their way to a stone (DC 16 Deception), sneak into a vacated chamber (DC 18 Stealth), or convince a sympathetic librarian to bend the rules. But the extradimensional nature of the stacks means that even if they break <em>in</em>, they cannot access materials without a properly keyed stone.
              </p>
              <p>
                This is a fantastic opportunity for heist-style tension: a PC places a stolen stone on the pedestal, watches the shelves assemble, grabs what they need &mdash; and then must escape before the stone&rsquo;s true owner reports it missing or the chamber&rsquo;s timer expires.
              </p>
            </DMNoteBox>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: Great Reading Hall                                */}
      {/* ============================================================ */}
      <section
        ref={readingHallRef}
        className="px-4 lg:px-8 py-16 lg:py-24"
        style={{ backgroundColor: 'var(--stone-50)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Image */}
            <div className="rh-image w-full lg:w-[55%] flex-shrink-0">
              <div
                className="overflow-hidden rounded-lg"
                style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
              >
                <img
                  src="/images/locations/IMG_04_reading_hall.jpg"
                  alt="The Great Reading Hall \u2014 soaring vaulted ceilings with everbright orbs"
                  className="w-full h-72 lg:h-[28rem] object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="rh-text flex-1 lg:pt-4">
              <span
                className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
                style={{ color: 'var(--brass-500)' }}
              >
                Interior
              </span>

              <h2
                className="font-display font-semibold mb-4"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                  color: 'var(--stone-800)',
                }}
              >
                The Great Reading Hall
              </h2>

              <p
                className="font-sans text-base leading-relaxed mb-4"
                style={{ color: 'var(--stone-600)' }}
              >
                The Great Reading Hall is the spiritual centre of the Library \u2014 a vast chamber with soaring vaulted ceilings supported by honey-stone columns that seem to grow upward like trees. Hundreds of everbright orbs drift lazily overhead, casting warm golden light across rows of polished reading desks. The Hall operates in enforced silence; any noise above a whisper draws immediate attention from the librarians stationed at the central podium.
              </p>

              <p
                className="font-sans text-base leading-relaxed mb-6"
                style={{ color: 'var(--stone-600)' }}
              >
                Scholars are assigned desks by seniority and subject; the most coveted spots are near the windows, where natural light supplements the everbright glow. Reference materials can be requested via brass tubes that connect to the lower stacks, and documents are delivered by small clockwork constructs that scuttle along the floor.
              </p>

              <ReadAloudBox>
                You step into a chamber so vast the far wall disappears into shadow. Hundreds of floating everbright orbs drift lazily overhead, casting warm golden light across rows of polished reading desks. The only sounds are the whisper of turning pages and the occasional cough muffled by a thousand tons of paper. A stern-looking librarian at a central podium watches you with the intensity of a hawk.
              </ReadAloudBox>

              <DMNoteBox>
                Silence is magically enforced in the Reading Hall &mdash; any noise above a whisper triggers a soft chime and draws librarian attention. Repeated violations result in ejection. However, certain private study rooms (20 gp/day) are sound-shielded and can accommodate small groups who need to discuss sensitive material.
              </DMNoteBox>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: Archive Vaults (Dark Theme)                       */}
      {/* ============================================================ */}
      <section
        ref={archiveVaultsRef}
        className="px-4 lg:px-8 py-16 lg:py-24"
        style={{ backgroundColor: 'var(--stone-900)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-start">
            {/* Image */}
            <div className="av-image w-full lg:w-[55%] flex-shrink-0">
              <div
                className="overflow-hidden rounded-lg"
                style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.35)' }}
              >
                <img
                  src="/images/locations/IMG_05_archive_descent.jpg"
                  alt="The Archive Vaults \u2014 dimly lit underground chamber with glowing wards"
                  className="w-full h-72 lg:h-[28rem] object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="av-text flex-1 lg:pt-4">
              <span
                className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
                style={{ color: 'var(--deep-crimson)' }}
              >
                Restricted
              </span>

              <h2
                className="font-display font-semibold mb-4"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                  color: 'var(--stone-50)',
                }}
              >
                The Archive Vaults
              </h2>

              <p
                className="font-sans text-base leading-relaxed mb-4"
                style={{ color: 'var(--stone-300)' }}
              >
                Beneath the Library&rsquo;s various colleges, accessed by a series of ever-narrowing staircases, lie the Archive Vaults \u2014 the restricted collection. Here are kept tomes on forbidden magic, historical documents the Library does not want public, research on the Mourning, planar studies that touch on dangerous truths, and fragments of dragon prophecy that have been judged too volatile for general access.
              </p>

              <p
                className="font-sans text-base leading-relaxed mb-6"
                style={{ color: 'var(--stone-300)' }}
              >
                The Vaults are cold, lit only by the glow of containment fields around the most dangerous volumes. Brass-reinforced stone walls bear wards that pulse with faint magical energy. The most restricted archives are <strong>heavily defended and shielded against scrying</strong> &mdash; divination magic fails within the Vaults, and any attempted scrying is detected by the Library&rsquo;s ward-masters. Senior librarians \u2014 many of them powerful spellcasters \u2014 patrol the corridors, and rumour speaks of bound constructs in the deepest levels that even the archivists fear to name.
              </p>

              {/* Read-Aloud Dark Variant */}
              <div
                className="rounded p-6 my-6"
                style={{
                  backgroundColor: '#2A2015',
                  border: '1px solid var(--stone-700)',
                  borderLeft: '4px solid var(--deep-crimson)',
                }}
              >
                <span
                  className="inline-block text-xs font-medium uppercase tracking-wider mb-3"
                  style={{ color: 'var(--deep-crimson)' }}
                >
                  Read Aloud
                </span>
                <div
                  className="font-display italic text-lg leading-relaxed"
                  style={{ color: 'var(--stone-200)' }}
                >
                  The air grows colder as you descend. Brass-reinforced stone walls bear glowing wards that pulse with faint magical energy. Behind containment fields, you glimpse books bound in materials that make your skin crawl &mdash; leather that might not be leather, covers that seem to shift when you\'re not looking directly at them. A ladder disappears into shadowed heights where the most restricted volumes wait.
                </div>
              </div>

              {/* DM Note Dark Variant */}
              <div
                className="rounded p-6 my-6"
                style={{
                  backgroundColor: '#2A2015',
                  border: '1px solid var(--stone-700)',
                  borderLeft: '4px solid var(--teal-500)',
                }}
              >
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: '#4DD4B0' }}
                >
                  DM Note
                </span>
                <div
                  className="font-sans text-base leading-relaxed"
                  style={{ color: 'var(--stone-200)' }}
                >
                  Access to the Vaults requires either: (1) a Library Council seal, (2) sponsorship from a College Dean, or (3) a heist. The Vaults are guarded by abjuration wards, <strong>scrying shields that block all divination magic</strong>, two librarians who are 9th-level wizards, and at least one bound construct of unknown capabilities. The Mirveth Lethis connection: as a senior Soladas fellow, Mirveth can sponsor limited vault access for researchers she deems trustworthy &mdash; a powerful social reward for PCs who befriend her.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: The Eight Colleges                                */}
      {/* ============================================================ */}
      <section
        className="px-4 lg:px-8 py-16 lg:py-24"
        style={{ backgroundColor: 'var(--stone-50)' }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="SCHOOLS OF THOUGHT"
            title="The Eight Colleges"
            subtitle="Each college represents a field of study &mdash; and a political faction within the Library."
          />

          {/* DM Note about rivalries */}
          <div className="max-w-3xl mx-auto mt-8 mb-12">
            <DMNoteBox>
              The eight colleges are in constant, polite competition for funding, prestige, and access to restricted materials. Blackdragon and Drystone feud over whether alchemy or engineering produces more practical results; Morridan and Aureon&rsquo;s Holt argue endlessly about whether logic or rhetoric is the superior tool; and every college secretly suspects Soladas of hoarding the best archives. These rivalries are a great source of quest hooks and social encounters.
            </DMNoteBox>
          </div>

          {/* College Grid */}
          <div
            ref={collegesRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {COLLEGES.map((college) => (
              <div key={college.name} className="college-card">
                <CollegeCard college={college} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7: Access Rules                                      */}
      {/* ============================================================ */}
      <section
        className="px-4 lg:px-8 py-12 lg:py-16"
        style={{ backgroundColor: 'var(--stone-100)' }}
      >
        <div className="max-w-3xl mx-auto">
          <h3
            className="font-display font-semibold text-xl mb-4 text-center"
            style={{ color: 'var(--stone-800)' }}
          >
            Library Access Rules
          </h3>

          <div
            className="rounded-lg p-6 lg:p-8"
            style={{
              backgroundColor: 'var(--stone-50)',
              border: '1px solid var(--stone-200)',
              borderLeft: '4px solid var(--everbright-500)',
            }}
          >
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5"
                  style={{
                    backgroundColor: 'var(--everbright-500)',
                    color: 'var(--stone-900)',
                  }}
                >
                  1
                </span>
                <div>
                  <p
                    className="font-sans text-sm font-medium mb-1"
                    style={{ color: 'var(--stone-700)' }}
                  >
                    Public Stacks
                  </p>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'var(--stone-500)' }}
                  >
                    Open to all. General history, geography, popular literature, and standard arcane theory. No appointment needed.
                  </p>
                </div>
              </div>

              <div
                className="w-full"
                style={{ height: '1px', backgroundColor: 'var(--stone-200)' }}
              />

              <div className="flex gap-4 items-start">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5"
                  style={{
                    backgroundColor: 'var(--brass-500)',
                    color: 'var(--stone-900)',
                  }}
                >
                  2
                </span>
                <div>
                  <p
                    className="font-sans text-sm font-medium mb-1"
                    style={{ color: 'var(--stone-700)' }}
                  >
                    College Wings
                  </p>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'var(--stone-500)' }}
                  >
                    Require college membership or faculty sponsorship. Specialised texts, research notes, and active projects. Visitors must register at the College porter&rsquo;s desk.
                  </p>
                </div>
              </div>

              <div
                className="w-full"
                style={{ height: '1px', backgroundColor: 'var(--stone-200)' }}
              />

              <div className="flex gap-4 items-start">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5"
                  style={{
                    backgroundColor: 'var(--warm-amber)',
                    color: 'var(--stone-900)',
                  }}
                >
                  3
                </span>
                <div>
                  <p
                    className="font-sans text-sm font-medium mb-1"
                    style={{ color: 'var(--stone-700)' }}
                  >
                    Restricted Archives
                  </p>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'var(--stone-500)' }}
                  >
                    Require Library Council seal OR Dean sponsorship. Dangerous magic, sensitive history, and planar research. Mirveth Lethis can sponsor limited access for trusted researchers.
                  </p>
                </div>
              </div>

              <div
                className="w-full"
                style={{ height: '1px', backgroundColor: 'var(--stone-200)' }}
              />

              <div className="flex gap-4 items-start">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5"
                  style={{
                    backgroundColor: 'var(--deep-crimson)',
                    color: 'var(--stone-50)',
                  }}
                >
                  4
                </span>
                <div>
                  <p
                    className="font-sans text-sm font-medium mb-1"
                    style={{ color: 'var(--stone-700)' }}
                  >
                    The Vaults
                  </p>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'var(--stone-500)' }}
                  >
                    Impossible without Council seal. Contains forbidden prophecy fragments, Mourning research, and texts that are actively dangerous to read. Attempted unauthorised entry is treated as treason against Zilargo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8: DM Tips                                           */}
      {/* ============================================================ */}
      <section
        className="px-4 lg:px-8 py-12 lg:py-16"
        style={{ backgroundColor: 'var(--stone-50)' }}
      >
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="FOR THE DM"
            title="The Library at Your Table"
            subtitle="Running sessions set in the Library of Korranberg"
          />

          <div className="mt-8 space-y-4">
            <DMNoteBox>
              <ul className="space-y-3 list-disc list-inside">
                <li>
                  The Library works best as a quest hub &mdash; send players here to research, seek experts, or gain access to restricted knowledge. Every visit should advance at least one plot thread.
                </li>
                <li>
                  Each college can offer unique side-quests: Soladas wants Dhakaani artifacts, Balinor&rsquo;s Horn needs rare specimens, Blackdragon pays well for exotic reagents, and Drystone always needs test subjects for new devices.
                </li>
                <li>
                  The Reading Hall is a fantastic setting for social encounters &mdash; rival scholars, coded messages passed in books, eavesdropping on important conversations. The enforced silence makes every whisper significant.
                </li>
                <li>
                  The Archive Vaults should feel dangerous to access &mdash; build tension with near-discoveries, tense librarian encounters, and the weight of forbidden knowledge. Make the players earn every secret.
                </li>
                <li>
                  The Seventh College is a slow-burn mystery. Drop hints across multiple sessions: a reference in an old text, a nervous scholar who won&rsquo;t meet your eyes, a door that shouldn&rsquo;t exist. The mystery is more compelling than the reveal.
                </li>
              </ul>
            </DMNoteBox>
          </div>
        </div>
      </section>
    </div>
  )
}
