import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import ReadAloudBox from '@/components/ReadAloudBox'
import DMNoteBox from '@/components/DMNoteBox'
import InventoryTable from '@/components/InventoryTable'

/* ═══════════════════════════════════════════════════════ */
/*  Shared Shopkeeper Badge Component                     */
/* ═══════════════════════════════════════════════════════ */
function ShopkeeperBadge({
  portrait,
  name,
  title,
}: {
  portrait: string
  name: string
  title: string
}) {
  return (
    <div
      className="flex items-center gap-3 mb-4 p-3 rounded-lg"
      style={{
        backgroundColor: 'var(--stone-100)',
        border: '1px solid var(--stone-200)',
      }}
    >
      <img
        src={portrait}
        alt={name}
        className="w-[72px] h-[72px] rounded-full object-cover flex-shrink-0"
        style={{ border: '2px solid var(--brass-400)' }}
      />
      <div>
        <div
          className="font-display font-semibold text-sm"
          style={{ color: 'var(--stone-800)' }}
        >
          {name}
        </div>
        <div className="text-xs italic" style={{ color: 'var(--stone-500)' }}>
          {title}
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════ */
/*  Shop 7.1 — The Verdigris Retort   */
/* ═══════════════════════════════════ */
function ShopVerdigrisRetort() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const inventory = [
    { name: "Alchemist's Fire", type: 'Alchemical', rarity: 'Common' as const, price: '50 gp', source: 'PHB' },
    { name: 'Acid (vial)', type: 'Alchemical', rarity: 'Common' as const, price: '25 gp', source: 'PHB' },
    { name: 'Antitoxin (vial)', type: 'Alchemical', rarity: 'Common' as const, price: '50 gp', source: 'PHB' },
    { name: "Healer's Kit", type: 'Equipment', rarity: 'Common' as const, price: '5 gp', source: 'PHB' },
    { name: 'Potion of Healing', type: 'Potion', rarity: 'Common' as const, price: '50 gp', source: 'DMG' },
    { name: 'Potion of Greater Healing', type: 'Potion', rarity: 'Uncommon' as const, price: '150 gp', source: 'DMG' },
    { name: 'Potion of Climbing', type: 'Potion', rarity: 'Common' as const, price: '75 gp', source: 'DMG' },
    { name: 'Alchemy Jug', type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '200 gp', source: 'DMG' },
    { name: "Keoghtom's Ointment", type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '250 gp', source: 'DMG' },
    { name: 'Oil of Slipperiness', type: 'Potion', rarity: 'Uncommon' as const, price: '240 gp', source: 'DMG' },
    { name: 'Bead of Nourishment', type: 'Wondrous Item', rarity: 'Common' as const, price: '25 gp', source: 'XGtE' },
  ]

  return (
    <section ref={ref} className="py-12 lg:py-16" style={{ backgroundColor: 'var(--stone-50)' }}>
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
                src="/images/locations/IMG_11_alchemist_shop.jpg"
                alt="The Verdigris Retort alchemist shop"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--brass-500)' }}
            >
              7.1 — Glitterway
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-3xl lg:text-4xl mb-2"
              style={{ color: 'var(--stone-800)', lineHeight: 1.15 }}
            >
              The Verdigris Retort
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base italic mb-4"
              style={{ color: 'var(--stone-500)' }}
            >
              Proprietor: Esmer Vexil — Gnome alchemist, Blackdragon-trained, with a gift for mixing the volatile and the valuable
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ReadAloudBox>
                The Verdigris Retort occupies a narrow storefront on the Glitterway, marked by a copper sign turned green with age and etched with alchemical symbols. Inside, the air is sharp with the scent of reagents — sulfur, dragonblood resin, distilled quicksilver. Glass-fronted cabinets display potions in neatly labeled rows, each color-coded by effect and potency. Behind the counter, Esmer Vexil, a gnome with singed eyebrows and permanently stained fingers, looks up from a bubbling retort. &apos;Healing or hurting? I do both, and I don&apos;t judge. Well, I judge a little.&apos;
              </ReadAloudBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                Esmer Vexil trained at the Blackdragon College of Alchemy — a fact she mentions with pride and then immediately warns you not to ask about. Her shop supplies adventurers, locals, and a steady clientele of Korranberg scholars who need everything from experimental reagents to hangover cures. Esmer is pragmatic, sharp-tongued, and genuinely skilled; her potions are reliable, if occasionally brewed with more enthusiasm than precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <DMNoteBox>
                Esmer extends credit to adventurers who can provide interesting favors — samples from Mournland beasts, rare herbs from Xen&apos;drik, notes on unusual alchemical reactions. She&apos;s also a good source of information about who&apos;s buying dangerous substances in the city. If the party needs a contact in the alchemy community or help identifying an unknown substance, Esmer can assist for a modest fee.
              </DMNoteBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6"
            >
              <h4 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--stone-700)' }}>Inventory</h4>
              <InventoryTable items={inventory} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════ */
/*  Shop 7.2 — Ink of the Ages        */
/* ═══════════════════════════════════ */
function ShopInkOfTheAges() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const inventory = [
    { name: 'Spellbook (blank, 100 pages)', type: 'Equipment', rarity: 'Common' as const, price: '50 gp', source: 'PHB' },
    { name: 'Map case', type: 'Equipment', rarity: 'Common' as const, price: '1 gp', source: 'PHB' },
    { name: 'Ink (1 oz bottle)', type: 'Equipment', rarity: 'Common' as const, price: '10 gp', source: 'PHB' },
    { name: 'Maps (local, regional, or continental)', type: 'Equipment', rarity: 'Common' as const, price: '5-25 gp', source: 'PHB' },
    { name: 'Enduring Spellbook', type: 'Wondrous Item', rarity: 'Common' as const, price: '75 gp', source: 'XGtE' },
    { name: 'Spell Scroll (cantrip)', type: 'Scroll', rarity: 'Common' as const, price: '25 gp', source: 'XGtE' },
    { name: 'Spell Scroll (1st-level)', type: 'Scroll', rarity: 'Common' as const, price: '75 gp', source: 'XGtE' },
    { name: 'Spell Scroll (2nd-level)', type: 'Scroll', rarity: 'Uncommon' as const, price: '150 gp', source: 'XGtE' },
    { name: 'Spell Scroll (3rd-level)', type: 'Scroll', rarity: 'Uncommon' as const, price: '300 gp', source: 'XGtE' },
    { name: 'Pot of Awakening', type: 'Wondrous Item', rarity: 'Common' as const, price: '50 gp', source: 'XGtE' },
    { name: "Heward's Handy Spice Pouch", type: 'Wondrous Item', rarity: 'Common' as const, price: '50 gp', source: 'XGtE' },
  ]

  return (
    <section ref={ref} className="py-12 lg:py-16" style={{ backgroundColor: 'var(--stone-100)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: content (reversed) */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--everbright-500)' }}
            >
              7.2 — Bookbinder&apos;s Quarter
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-3xl lg:text-4xl mb-2"
              style={{ color: 'var(--stone-800)', lineHeight: 1.15 }}
            >
              Ink of the Ages
            </motion.h3>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <ShopkeeperBadge
                portrait="/images/npcs/IMG_57_pell_daggadon.jpg"
                name="Pell Daggadon"
                title="Gnome scrivener &amp; map-dealer, proprietor of Ink of the Ages"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base italic mb-4"
              style={{ color: 'var(--stone-500)' }}
            >
              Proprietor: Pell Daggadon — Gnome scrivener &amp; map-dealer, with contacts across every cartographer&apos;s guild in Khorvaire
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ReadAloudBox>
                Ink of the Ages is a long, narrow shop that feels more like a library than a store. Scrolls and maps hang from ceiling racks, slowly rotating in the draft from the door. The scent of fresh ink and old parchment fills the air. At the back, Pell Daggadon works at a massive drafting table, copying a map by hand with painstaking precision. He looks up as you enter, squinting through a magnifying lens. &apos;Looking for a way to get somewhere, or a way to know where you are? I sell both.&apos;
              </ReadAloudBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                Pell Daggadon is a master scribe and cartographer who supplies spellbooks, maps, and writing supplies to Korranberg&apos;s academic community. His maps are considered some of the most accurate in Zilargo — he maintains correspondences with explorers across Khorvaire and updates his stock regularly. He also sells spell scrolls copied from verified sources, though he keeps his more dangerous stock behind a locked cabinet.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6"
            >
              <h4 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--stone-700)' }}>Inventory</h4>
              <InventoryTable items={inventory} />
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
                src="/images/locations/IMG_12_scriptorium.jpg"
                alt="Ink of the Ages scriptorium"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
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
/*  Shop 7.3 — Mirage & Hemline       */
/* ═══════════════════════════════════ */
function ShopMirageHemline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const inventory = [
    { name: 'Glamerweave (assorted styles)', type: 'Clothing', rarity: 'Common' as const, price: '75-100 gp', source: 'ERLW' },
    { name: 'Shiftweave', type: 'Clothing', rarity: 'Common' as const, price: '100 gp', source: 'ERLW' },
    { name: 'Cloak of Billowing', type: 'Wondrous Item', rarity: 'Common' as const, price: '50 gp', source: 'XGtE' },
    { name: 'Cloak of Many Fashions', type: 'Wondrous Item', rarity: 'Common' as const, price: '50 gp', source: 'XGtE' },
    { name: 'Cleansing Stone', type: 'Wondrous Item', rarity: 'Common' as const, price: '50 gp', source: 'ERLW' },
    { name: 'Instrument of Illusions', type: 'Wondrous Item', rarity: 'Common' as const, price: '50 gp', source: 'XGtE' },
    { name: 'Hat of Disguise', type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '250 gp', source: 'DMG' },
  ]

  return (
    <section ref={ref} className="py-12 lg:py-16" style={{ backgroundColor: 'var(--stone-50)' }}>
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
                src="/images/locations/IMG_13_glamerweave.jpg"
                alt="Mirage & Hemline glamerweave boutique"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--brass-500)' }}
            >
              7.3 — Glitterway
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-3xl lg:text-4xl mb-2"
              style={{ color: 'var(--stone-800)', lineHeight: 1.15 }}
            >
              Mirage &amp; Hemline
            </motion.h3>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <ShopkeeperBadge
                portrait="/images/npcs/IMG_58_lysa_torann.jpg"
                name="Lysa Torann"
                title="Gnome illusion-tailor, proprietor of Mirage &amp; Hemline, Lyrris-trained"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base italic mb-4"
              style={{ color: 'var(--stone-500)' }}
            >
              Proprietor: Lysa Torann — Gnome illusion-tailor, trained at the Lyrris Academy of Glamour, with an eye for fashion that flatters and disguises in equal measure
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ReadAloudBox>
                Mirage &amp; Hemline looks like a fashion boutique that happens to sell magic items, or perhaps the other way around. Mannequins in the window wear cloaks that billow dramatically without any wind, and a dress that shifts color to match the time of day. Inside, Lysa Torann moves between racks of glamerweave with the practiced ease of someone who has spent years in high fashion. She looks you up and down with a critical eye. &apos;Your current look says &apos;we camp in ditches.&apos; I can work with that, or we can start over.&apos;
              </ReadAloudBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                Lysa Torann trained at the prestigious Lyrris Academy of Glamour in Aundair before settling in Korranberg to open her boutique. She specializes in glamerweave — clothing infused with minor illusion magic — and other wearable magical items. Her clientele includes Korranberg nobles, visiting diplomats, and adventurers who want to look good while being practical. Lysa can also create custom-fitted clothing that incorporates minor magical effects, though commissions take 1-2 weeks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6"
            >
              <h4 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--stone-700)' }}>Inventory</h4>
              <InventoryTable items={inventory} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════ */
/*  Shop 7.4 — Cogturn & Ember        */
/* ═══════════════════════════════════ */
function ShopCogturnEmber() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const inventory = [
    { name: 'Driftglobe', type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '200 gp', source: 'DMG' },
    { name: 'Lantern of Revealing', type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '250 gp', source: 'DMG' },
    { name: 'Decanter of Endless Water', type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '300 gp', source: 'DMG' },
    { name: 'Immovable Rod', type: 'Rod', rarity: 'Uncommon' as const, price: '350 gp', source: 'DMG' },
    { name: 'Horn of Silent Alarm', type: 'Wondrous Item', rarity: 'Common' as const, price: '50 gp', source: 'XGtE' },
    { name: 'Pole of Collapsing', type: 'Wondrous Item', rarity: 'Common' as const, price: '50 gp', source: 'XGtE' },
    { name: 'Clockwork Amulet', type: 'Wondrous Item', rarity: 'Common' as const, price: '50 gp', source: 'XGtE' },
  ]

  return (
    <section ref={ref} className="py-12 lg:py-16" style={{ backgroundColor: 'var(--stone-100)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: content (reversed) */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--everbright-500)' }}
            >
              7.4 — Glitterway, Drystone end
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-3xl lg:text-4xl mb-2"
              style={{ color: 'var(--stone-800)', lineHeight: 1.15 }}
            >
              Cogturn &amp; Ember
            </motion.h3>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <ShopkeeperBadge
                portrait="/images/npcs/IMG_59_wist_cogturn.jpg"
                name="Wist Cogturn"
                title="Gnome artificer, proprietor of Cogturn &amp; Ember, Drystone-trained"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base italic mb-4"
              style={{ color: 'var(--stone-500)' }}
            >
              Proprietor: Wist Cogturn — Gnome artificer, Drystone-trained, with a workshop that produces practical magical devices for everyday problems
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ReadAloudBox>
                Cogturn &amp; Ember is a workshop that smells of hot metal, ozone, and magical residues. Every surface holds some half-finished device — a wand being recharged, a clockwork mechanism being adjusted, an elemental binding being tested. Wist Cogturn, a gnome with oil-stained overalls and magnifying goggles pushed up on her forehead, waves you in without looking up from the glowing rune she&apos;s engraving. &apos;Don&apos;t touch the bronze thing, the silver thing, or the thing that&apos;s humming. Everything else is for sale. Probably.&apos;
              </ReadAloudBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                Wist Cogturn is a practical artificer who believes magic should solve everyday problems, not just slay dragons. Her shop produces and sells utilitarian magical items — things that light the dark, find water, hold doors shut, and reveal hidden threats. She&apos;s always working on new designs in her back workshop, and adventurers who bring her interesting materials or elemental components may find her willing to trade or craft custom items.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6"
            >
              <h4 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--stone-700)' }}>Inventory</h4>
              <InventoryTable items={inventory} />
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
                src="/images/locations/IMG_14_elemental_workshop.jpg"
                alt="Cogturn & Ember elemental workshop"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
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
/*  Shop 7.5 — The Glittering Khyber  */
/* ═══════════════════════════════════ */
function ShopGlitteringKhyber() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const inventory = [
    { name: 'Eberron Dragonshard (small, raw)', type: 'Gemstone', rarity: 'Common' as const, price: '50 gp+', source: 'ERLW' },
    { name: 'Siberys Dragonshard (tiny fragment)', type: 'Gemstone', rarity: 'Uncommon' as const, price: '500 gp+', source: 'ERLW' },
    { name: 'Khyber Dragonshard (small, raw)', type: 'Gemstone', rarity: 'Uncommon' as const, price: '200 gp+', source: 'ERLW' },
    { name: 'Cut Gemstones (assorted)', type: 'Gemstone', rarity: 'Common' as const, price: '10-5,000 gp', source: 'PHB' },
    { name: 'Gem of Brightness', type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '480 gp', source: 'DMG' },
    { name: 'Pearl of Power', type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '500 gp', source: 'DMG' },
    { name: 'Periapt of Health', type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '200 gp', source: 'DMG' },
  ]

  return (
    <section ref={ref} className="py-12 lg:py-16" style={{ backgroundColor: 'var(--stone-50)' }}>
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
                src="/images/locations/IMG_15_dragonshard_dealer.jpg"
                alt="The Glittering Khyber dragonshard dealer"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--brass-500)' }}
            >
              7.5 — Glitterway
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-3xl lg:text-4xl mb-2"
              style={{ color: 'var(--stone-800)', lineHeight: 1.15 }}
            >
              The Glittering Khyber
            </motion.h3>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <ShopkeeperBadge
                portrait="/images/npcs/IMG_61_davra_mirr.jpg"
                name="Davra Mirr"
                title="Gnome gem &amp; dragonshard dealer, proprietor of Glittering Khyber"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base italic mb-4"
              style={{ color: 'var(--stone-500)' }}
            >
              Proprietor: Davra Mirr — Gnome gem &amp; dragonshard dealer, with connections to House Tharashk prospectors across Khorvaire
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ReadAloudBox>
                The Glittering Khyber&apos;s window display catches your eye before you&apos;ve even turned the corner — dragonshards of all three types catch the light and throw prismatic patterns across the cobblestones. Inside, Davra Mirr stands behind a counter covered in jeweler&apos;s tools and uncut stones. She holds a loupe to one eye and a Siberys shard to the other, examining its internal structure. She lowers both and gives you a professional smile — warm, but evaluating. &apos;Buying or selling? I do both, and I pay fair. Fair for me, that is. Still fair for you. Let&apos;s talk.&apos;
              </ReadAloudBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                Davra Mirr deals in dragonshards — the magical gemstones that power much of Eberron&apos;s arcane industry — along with fine cut gemstones and a selection of magic items that utilize their properties. Her connections to House Tharashk prospectors give her access to newly discovered shards before they reach the wider market. She can identify unknown gemstones, appraise magical gem-based items, and arrange bulk purchases for artificers or spellcasters who need specific shard types for crafting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6"
            >
              <h4 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--stone-700)' }}>Inventory</h4>
              <InventoryTable items={inventory} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════ */
/*  Shop 7.6 — The Wandwright's Sleeve*/
/* ═══════════════════════════════════ */
function ShopWandwrightsSleeve() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const inventory = [
    { name: 'Wand Sheath', type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '300 gp', source: 'ERLW' },
    { name: 'Imbued Wood Focus', type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '250 gp', source: 'ERLW' },
    { name: 'Orb of Shielding', type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '250 gp', source: 'ERLW' },
    { name: 'Wand of Magic Detection', type: 'Wand', rarity: 'Uncommon' as const, price: '350 gp', source: 'DMG' },
    { name: 'Wand of Secrets', type: 'Wand', rarity: 'Uncommon' as const, price: '300 gp', source: 'DMG' },
    { name: 'Wand of Pyrotechnics', type: 'Wand', rarity: 'Common' as const, price: '75 gp', source: 'XGtE' },
    { name: 'Arcane Focus (crystal, orb, rod, staff, wand)', type: 'Focus', rarity: 'Common' as const, price: '5-20 gp', source: 'PHB' },
  ]

  return (
    <section ref={ref} className="py-12 lg:py-16" style={{ backgroundColor: 'var(--stone-100)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: content (reversed) */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--everbright-500)' }}
            >
              7.6 — Glitterway
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-3xl lg:text-4xl mb-2"
              style={{ color: 'var(--stone-800)', lineHeight: 1.15 }}
            >
              The Wandwright&apos;s Sleeve
            </motion.h3>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <ShopkeeperBadge
                portrait="/images/npcs/IMG_62_bann_lyrriman.jpg"
                name="Bann Lyrriman"
                title="Gnome focus-maker, proprietor of Wandwright&apos;s Sleeve, Sivis cousin-line"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base italic mb-4"
              style={{ color: 'var(--stone-500)' }}
            >
              Proprietor: Bann Lyrriman — Gnome focus-maker, Sivis cousin-line, with a reputation for precision-crafted magical implements
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ReadAloudBox>
                The Wandwright&apos;s Sleeve is a narrow, elegant shop where hundreds of wands, rods, and arcane foci hang from velvet-lined racks like instruments in a music shop. Each piece is tagged with its properties, origin, and price in neat script. Bann Lyrriman, a gnome with ink-stained cuffs and perpetually furrowed brows, inspects a wand through a jeweler&apos;s loupe before setting it aside. &apos;Quality matters. A wand is an extension of the caster&apos;s will — a poorly made focus is an insult to the Art. Everything here is tested. Everything here works. Choose carefully; a wand is a commitment.&apos;
              </ReadAloudBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                Bann Lyrriman is a specialist in wands, rods, and arcane foci — the tools that channel and shape magical energy. He sources implements from across Khorvaire, tests each one personally, and refuses to sell anything that doesn&apos;t meet his exacting standards. He can also repair damaged wands (for 25% of the wand&apos;s value), recharge expended wands (when possible), and craft custom foci for specific magical traditions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6"
            >
              <h4 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--stone-700)' }}>Inventory</h4>
              <InventoryTable items={inventory} />
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
                src="/images/locations/IMG_16_wand_shop.jpg"
                alt="The Wandwright's Sleeve wand shop"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
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
/*  Shop 7.7 — The Quiet Drawer       */
/* ═══════════════════════════════════ */
function ShopQuietDrawer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const inventory = [
    { name: 'Mystery Key', type: 'Wondrous Item', rarity: 'Common' as const, price: '50 gp', source: 'XGtE' },
    { name: "Charlatan's Die", type: 'Wondrous Item', rarity: 'Common' as const, price: '50 gp', source: 'XGtE' },
    { name: 'Orb of Time', type: 'Wondrous Item', rarity: 'Common' as const, price: '50 gp', source: 'XGtE' },
    { name: 'Talking Doll', type: 'Wondrous Item', rarity: 'Common' as const, price: '50 gp', source: 'XGtE' },
    { name: 'Ring of Mind Shielding', type: 'Ring', rarity: 'Uncommon' as const, price: '400 gp', source: 'DMG' },
    { name: 'Helm of Comprehending Languages', type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '150 gp', source: 'DMG' },
    { name: 'Eyes of the Eagle', type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '250 gp', source: 'DMG' },
    { name: 'Bag of Holding', type: 'Wondrous Item', rarity: 'Uncommon' as const, price: '500 gp', source: 'DMG' },
  ]

  return (
    <section ref={ref} className="py-12 lg:py-16" style={{ backgroundColor: 'var(--stone-50)' }}>
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
                src="/images/locations/IMG_17_curio_shop.jpg"
                alt="The Quiet Drawer curio shop"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--brass-500)' }}
            >
              7.7 — Bookbinder&apos;s Quarter, side alley
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-3xl lg:text-4xl mb-2"
              style={{ color: 'var(--stone-800)', lineHeight: 1.15 }}
            >
              The Quiet Drawer
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base italic mb-4"
              style={{ color: 'var(--stone-500)' }}
            >
              Proprietor: &quot;Uncle&quot; Orro Wist — Gnome curio dealer, with a shop full of oddities and a smile that doesn&apos;t reach his eyes
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ReadAloudBox>
                The Quiet Drawer has no sign — just a small brass knocker on an unmarked door in a side alley off the Bookbinder&apos;s Quarter. Inside, the shop is cramped and dim, every shelf crammed with curios, oddities, and items that resist easy categorization. &apos;Uncle&apos; Orro Wist, a gnome with an expansive smile and watchful eyes, spreads his hands to encompass the chaos. &apos;Welcome, welcome! Everything here has a story. Some of them are even true. Browse, browse — I only bite if you break something. And even then, only metaphorically. Usually.&apos;
              </ReadAloudBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                The Quiet Drawer sells curios, minor magical items, and the occasional genuinely useful piece of adventuring gear. Orro Wist is gregarious and seemingly harmless, a kindly old gnome uncle figure who loves to chat and tell stories. His prices are fair, his merchandise eclectic, and his shop a delight to browse. He seems to know a little bit about everything happening in the city — always happy to share a rumor or point a customer toward a particular shop or service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <DMNoteBox>
                <p className="mb-2">
                  <strong className="font-semibold" style={{ color: 'var(--teal-500)' }}>THIS IS THE TRUST SHOPFRONT.</strong> &quot;Uncle&quot; Orro Wist is a Trust informant — one of many. The Quiet Drawer exists primarily as a place where the Trust can interact with foreigners, gather intelligence, and keep an eye on unusual activity in the Bookbinder&apos;s Quarter.
                </p>
                <p className="mb-2">
                  Orro is charming, helpful, and genuinely seems to like his customers — but every conversation is reported. Every purchase is noted. Every offhand comment about plans, destinations, or associates goes into a file. Orro is not hostile; he is a professional doing his job with genuine warmth. The Trust prefers it this way — people tell charming uncle figures things they&apos;d never tell a spy.
                </p>
                <p>
                  If the party visits the Quiet Drawer, Orro will be <em>very</em> interested in them. He&apos;ll ask friendly questions, offer helpful advice, and make sure the Trust knows everything about their activities in Korranberg. He may also pass along carefully curated &quot;rumors&quot; that steer the party in directions the Trust finds useful.
                </p>
              </DMNoteBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6"
            >
              <h4 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--stone-700)' }}>Inventory</h4>
              <InventoryTable items={inventory} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════ */
/*  Shop 7.8 — The Salt & Cipher      */
/* ═══════════════════════════════════ */
function ShopSaltAndCipher() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-12 lg:py-16" style={{ backgroundColor: 'var(--stone-100)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: content (reversed) */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--everbright-500)' }}
            >
              7.8 — Sky Docks tier
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-3xl lg:text-4xl mb-2"
              style={{ color: 'var(--stone-800)', lineHeight: 1.15 }}
            >
              The Salt &amp; Cipher
            </motion.h3>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <ShopkeeperBadge
                portrait="/images/npcs/IMG_63_hadda_pol.jpg"
                name="Hadda Pol"
                title="Half-gnome innkeeper, proprietor of Salt &amp; Cipher"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base italic mb-4"
              style={{ color: 'var(--stone-500)' }}
            >
              Proprietor: Hadda Pol — Half-gnome innkeeper, with a warm hearth and a policy of never asking why you need a room without windows
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ReadAloudBox>
                The Salt &amp; Cipher sits on the Sky Docks tier, its weathered sign depicting a compass rose half-covered in salt. Inside, the common room is warm, loud, and filled with the kind of crowd that comes from everywhere and belongs nowhere in particular — sailors, dockworkers, travelers between ships, and locals who like their taverns anonymous. Hadda Pol, a half-gnome with an impressive beard and a voice that carries over any crowd, looks up from the bar and nods. &apos;Rooms upstairs, ale&apos;s fresh, stew&apos;s edible, and I don&apos;t ask questions. Unless you want to answer them. Then I&apos;m all ears.&apos;
              </ReadAloudBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                The Salt &amp; Cipher is an inn and taproom on the Sky Docks tier, catering to travelers, sailors, and anyone who needs a place to stay near the airship towers or lightning rail station. It&apos;s clean enough, warm, and above all — neutral. Hadda Pol enforces a strict no-violence policy with the help of two half-orc bouncers who are very good at their jobs. Factions, houses, and nations check their grievances at the door, and everyone can drink in peace.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                The rooms are modest but secure, the food is simple but filling, and the ale is better than you&apos;d expect. The Cipher&apos;s location makes it a natural meeting point for people arriving in or departing from Korranberg — and Hadda has a gift for being helpful without being nosy, present without being intrusive.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-4"
            >
              <h4 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--stone-700)' }}>Services</h4>
              <div className="rounded p-5" style={{ backgroundColor: 'var(--stone-50)', border: '1px solid var(--stone-200)' }}>
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: 'var(--stone-800)' }}>
                      <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--stone-100)' }}>Service</th>
                      <th className="px-4 py-2 text-right text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--stone-100)' }}>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { service: 'Lodging (per night)', price: '8 sp' },
                      { service: 'Meals (per day)', price: '3 sp' },
                      { service: 'Ale (mug)', price: '4 cp' },
                      { service: 'Private room (no windows)', price: '1 gp' },
                      { service: 'Stabling (per night)', price: '5 sp' },
                      { service: 'Hot bath', price: '3 cp' },
                    ].map((row, i) => (
                      <tr
                        key={row.service}
                        style={{
                          backgroundColor: i % 2 === 0 ? 'var(--stone-50)' : 'var(--stone-100)',
                          borderBottom: '1px solid var(--stone-200)',
                        }}
                      >
                        <td className="px-4 py-2 text-sm" style={{ color: 'var(--stone-600)' }}>{row.service}</td>
                        <td className="px-4 py-2 text-sm font-mono text-right" style={{ color: 'var(--stone-700)' }}>{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <DMNoteBox>
                <p className="mb-2">
                  <strong className="font-semibold">Party&apos;s Landing Pad:</strong> The Salt &amp; Cipher is the party&apos;s natural &quot;home base&quot; in Korranberg — the place they return to between adventures, the address they give contacts, the room they keep paid for even when they&apos;re out of town. Hadda can hold messages, store small items, and direct visitors to the party&apos;s rooms.
                </p>
                <p className="mb-2">
                  <strong className="font-semibold">Bells Meeting Spot:</strong> Bells (see NPCs) prefers to meet the party at the Cipher — public enough to be safe, familiar enough to be comfortable, and run by someone who doesn&apos;t ask why a warforged needs a private room. Bells will often leave messages for the party with Hadda.
                </p>
                <p>
                  <strong className="font-semibold">Neutral Ground:</strong> The Salt &amp; Cipher is neutral ground by custom and by Hadda&apos;s enforcement. If the party needs a place to negotiate with rivals, meet a contact they don&apos;t fully trust, or lie low without being found, this is the place. Hadda&apos;s no-questions policy is absolute — though that doesn&apos;t mean he doesn&apos;t notice things.
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
                src="/images/locations/IMG_18_inn_taproom.jpg"
                alt="The Salt & Cipher inn and taproom"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </motion.div>
        </div>

        {/* Battle Map — The Party's Suite */}
        <motion.div
          className="max-w-5xl mx-auto px-4 lg:px-8 mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h4
            className="font-display font-semibold text-xl mb-1"
            style={{ color: 'var(--stone-700)' }}
          >
            The Large Suite — Battle Map
          </h4>
          <p
            className="text-sm mb-4"
            style={{ color: 'var(--stone-500)' }}
          >
            Gridless VTT map of the party&apos;s rooms at the Salt &amp; Cipher. Common room, private nook, sleeping area, wash area, and dual-scale entryway.
          </p>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/maps/IMG_65_inn_suite_battlemap.jpg"
              alt="Top-down battle map of the party's suite at the Salt & Cipher inn — common room, private nook, sleeping area, wash area, and entryway"
              className="w-full object-cover"
              style={{ aspectRatio: '1/1' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}


/* ═══════════════════════════════════ */
/*  Shop 7.9 — Quillon's              */
/* ═══════════════════════════════════ */
function ShopQuillons() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-12 lg:py-16" style={{ backgroundColor: 'var(--stone-50)' }}>
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
                src="/images/locations/IMG_52_quillons_shop.jpg"
                alt="Quillon&apos;s fine writing instruments"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--brass-500)' }}
            >
              7.9 — The Terraces, boutique row
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-3xl lg:text-4xl mb-2"
              style={{ color: 'var(--stone-800)', lineHeight: 1.15 }}
            >
              Quillon&apos;s
            </motion.h3>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <ShopkeeperBadge
                portrait="/images/npcs/IMG_60_thedda_quillon.jpg"
                name="Thedda Quillon"
                title="Gnome scrivener-artisan, proprietor of Quillon&apos;s, Sivis cousin-line"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base italic mb-4"
              style={{ color: 'var(--stone-500)' }}
            >
              Proprietor: Thedda Quillon — Gnome scrivener-artisan, Sivis cousin-line, who believes the pen chooses the writer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ReadAloudBox>
                Quillon&apos;s sits on boutique row in the Terraces, its window display sparse and elegant — a single velvet cushion holding a pen that seems to glow faintly in the afternoon light. Inside, the shop is small and hushed, the walls lined with brass racks of writing instruments: quills of every feather, metal nibs in a dozen alloys, and behind the counter, locked in a glass case, the pieces Thedda calls her &quot;choosing pens.&quot; Thedda Quillon herself looks up from a jeweler&apos;s loupe, her eyes sharp and warm at once. &apos;You&apos;re here for a pen,&apos; she says. Not a question. &apos;Sit. Let me see how you hold your hand.&apos;
              </ReadAloudBox>
            </motion.div>

            {/* Quill images gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="overflow-hidden rounded-lg mb-2" style={{ border: '1px solid var(--stone-200)' }}>
                    <img
                      src="/images/props/IMG_54_self_inking_pen.jpg"
                      alt="The self-inking pen"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <p className="text-xs italic" style={{ color: 'var(--stone-500)' }}>
                    The self-inking pen — arcane enchantment keeps the nib forever wet
                  </p>
                </div>
                <div className="text-center">
                  <div className="overflow-hidden rounded-lg mb-2" style={{ border: '1px solid var(--stone-200)' }}>
                    <img
                      src="/images/props/IMG_55_owl_feather_quill.jpg"
                      alt="The owl-feather quill"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <p className="text-xs italic" style={{ color: 'var(--stone-500)' }}>
                    The owl-feather quill — Gnoggin&apos;s component, barred silver-edged plumage
                  </p>
                </div>
                <div className="text-center">
                  <div className="overflow-hidden rounded-lg mb-2" style={{ border: '1px solid var(--stone-200)' }}>
                    <img
                      src="/images/props/IMG_56_fancy_pen_box.jpg"
                      alt="The presentation box"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <p className="text-xs italic" style={{ color: 'var(--stone-500)' }}>
                    The presentation box — the moment the pen chooses the writer
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                Thedda Quillon is the city&apos;s finest scrivener-artisan — a member of a minor Sivis cousin-line who rejected the message-station life to make pens that matter. She sells everything from humble reed pens for students to elaborate arcane foci for bibliomancers, but her true passion is matching the right instrument to the right hand. Thedda claims she can read a person&apos;s character by the way they hold a pen. She&apos;s usually right.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                Quillon&apos;s does not sell weapons or armor, but for any party member who writes spells, sends messages, or keeps a journal, Thedda offers something invaluable: a tool that makes the work better. Her &quot;choosing pens&quot; are lightly enchanted — they adapt to their owner&apos;s grip over time, and some say they occasionally offer suggestions about what to write next.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <DMNoteBox>
                <p className="mb-2">
                  <strong className="font-semibold">The Choosing:</strong> Thedda watches how customers pick up test pens — grip, angle, hesitation or confidence. She uses this to assess character. A party member who handles a pen thoughtfully may earn a discount; one who fidgets or grips too hard may be quietly assessed as dangerous or dishonest.
                </p>
                <p className="mb-2">
                  <strong className="font-semibold">Trust Connection:</strong> As a Sivis cousin, Thedda has access to the message station network. She can pass along short messages discreetly, though she charges 5 gp for the service. She also knows who in Korranberg is receiving unusual correspondence — she won&apos;t volunteer this, but clever PCs might notice which message tubes sit on her back shelf.
                </p>
                <p>
                  <strong className="font-semibold">The Secret:</strong> The pen chooses the writer — and Thedda chooses who learns that. Her &quot;choosing pens&quot; are more than tools; they are minor intelligent items that bond with their owners. She only offers these to people she trusts, and she has only ever given one to a non-gnome: Gnoggin&apos;s owl-feather quill, which he earned by demonstrating genuine reverence for the written word.
                </p>
              </DMNoteBox>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


/* ════════════════════════════════════════════ */
/*  Shop 7.10 — The Dulcet Leaf (Larkleaf)     */
/* ════════════════════════════════════════════ */
function ShopDulcetLeaf() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const inventory = [
    { name: 'Larkleaf, dried (1 oz)', type: 'Herb', rarity: 'Common' as const, price: '5 gp', source: 'DM' },
    { name: 'Larkleaf tea blend (20 cups)', type: 'Herb', rarity: 'Common' as const, price: '8 gp', source: 'DM' },
    { name: 'Larkleaf pipe (brass, ornate)', type: 'Item', rarity: 'Common' as const, price: '25 gp', source: 'DM' },
    { name: 'Larkleaf pre-rolled (5)', type: 'Herb', rarity: 'Common' as const, price: '10 gp', source: 'DM' },
    { name: 'Larkleaf-infused honey (jar)', type: 'Herb', rarity: 'Common' as const, price: '12 gp', source: 'DM' },
    { name: 'Larkleaf edibles (6)', type: 'Herb', rarity: 'Common' as const, price: '15 gp', source: 'DM' },
    { name: 'Larkleaf incense sticks (20)', type: 'Herb', rarity: 'Common' as const, price: '3 gp', source: 'DM' },
  ]

  return (
    <section ref={ref} className="py-12 lg:py-16" style={{ backgroundColor: 'var(--stone-100)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: content (reversed) */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--everbright-500)' }}
            >
              7.10 — The Terraces
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-3xl lg:text-4xl mb-2"
              style={{ color: 'var(--stone-800)', lineHeight: 1.15 }}
            >
              The Dulcet Leaf
            </motion.h3>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <ShopkeeperBadge
                portrait="/images/npcs/IMG_64_puff_dewbottom.jpg"
                name="Puff Dewbottom"
                title="Gnome larkleaf merchant, proprietor of The Dulcet Leaf"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base italic mb-4"
              style={{ color: 'var(--stone-500)' }}
            >
              Proprietor: Puff Dewbottom — Gnome larkleaf merchant, cheerful, perpetually slightly floaty, knows everyone&apos;s business because everyone talks at his shop
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ReadAloudBox>
                A warm, aromatic haze greets you at the door — not smoke, exactly, but the scent of dried herbs and honeyed tea. Low cushions and small round tables fill the front room, where patrons of all sizes lounge comfortably, some with brass pipes, some with teacups. Glass jars of dried green-gold leaves line shelves behind a polished brass counter. A cheerful gnome behind the counter hovers an inch off his stool, smiling like he knows something you don&apos;t. &apos;First time? Try the tea. The tea&apos;s honest.&apos;
              </ReadAloudBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                The Dulcet Leaf is a larkleaf dispensary — legal, licensed, and cheerfully open for business. Puff Dewbottom runs the place with the relaxed air of a gnome who has never worried about the law a day in his life. The shop offers a variety of larkleaf products, from simple dried leaf to infused edibles, and the front room is as much a social space as a retail outlet. Customers come to buy, to chat, to linger over tea, and to enjoy one of the few places in Korranberg where no one is trying to extract information from anyone.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--stone-600)' }}>
                Or so it seems. The truth, as with everything in Zilargo, is more complicated — and Puff wouldn&apos;t have it any other way.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <DMNoteBox>
                <p className="mb-2">
                  <strong className="font-semibold" style={{ color: 'var(--teal-500)' }}>LEGAL IN ZILARGO.</strong> Larkleaf is legal in Zilargo — the gnomes happily accept it. The Trust tolerates (and quietly encourages) The Dulcet Leaf because relaxed people talk freely, and every purchase is logged. Puff pays his taxes, files his reports, and the Trust gets a feed on who buys what.
                </p>
                <p className="mb-2">
                  The party can use this as a meeting spot, but know that whatever they say here is likely being overheard. Puff is not a spy — he&apos;s a cooperative business owner who understands that his license depends on the Trust&apos;s goodwill.
                </p>
                <p className="mb-2">
                  <strong className="font-semibold">Mechanics:</strong> Larkleaf induces a mellow, relaxing state. Users may hover a few inches off the ground (harmless). Small races report minor &quot;suspiciously pleasant&quot; hallucinations. It can be brewed as tea (most common), smoked in a pipe, baked into edibles, or infused into honey. Non-addictive in moderation.
                </p>
                <p>
                  <strong className="font-semibold">DM Option:</strong> A character under the effects of larkleaf has advantage on Charisma (Persuasion) checks to get others to open up, but disadvantage on Wisdom (Insight) checks to detect lies. The effect lasts 1 hour.
                </p>
              </DMNoteBox>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6"
            >
              <h4 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--stone-700)' }}>Inventory</h4>
              <InventoryTable items={inventory} />
            </motion.div>
          </div>

          {/* Right: images */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={isInView ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' } : {}}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="overflow-hidden rounded-lg mb-6">
              <motion.img
                src="/images/locations/IMG_50_dulcet_leaf_interior.jpg"
                alt="The Dulcet Leaf interior"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src="/images/locations/IMG_51_dulcet_leaf_products.jpg"
                alt="The Dulcet Leaf products display"
                className="w-full object-cover"
                style={{ aspectRatio: '16/9' }}
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
/*  MAIN PAGE                          */
/* ═══════════════════════════════════ */
export default function ShopsPage() {
  return (
    <div style={{ backgroundColor: 'var(--stone-50)' }}>
      {/* ── Section Header ── */}
      <div className="pt-24 pb-12 px-4 lg:px-8">
        <SectionHeader
          eyebrow="SHOPS"
          title="Shops, Goods &amp; Proprietors"
          subtitle="Ten establishments where adventurers spend their gold — and where Zil shopkeepers trade in information as readily as goods."
        />
      </div>

      {/* ── Intro DM Note ── */}
      <div className="max-w-4xl mx-auto px-4 lg:px-8 pb-8">
        <DMNoteBox>
          <p className="mb-3">
            <strong className="font-semibold">Haggling:</strong> Most shopkeepers in Korranberg expect a little negotiation. A successful DC 13-15 Persuasion or Deception check can reduce prices by 10-20%, depending on the shopkeeper&apos;s mood and the party&apos;s approach. Critical failures may result in insulted proprietors who refuse service or quietly mark the party as troublemakers.
          </p>
          <p>
            <strong className="font-semibold">Trust Informants:</strong> At least one shopkeeper per district is a Trust informant. The Trust collects information about everyone — purchases, questions, travel plans, associates. Shopkeepers who seem unusually friendly or ask too many personal questions may be reporting to the Trust. This is normal in Zilargo and not inherently hostile — but adventurers should be aware that their shopping habits are not private.
          </p>
        </DMNoteBox>
      </div>

      {/* ── Shop Sections ── */}
      <ShopVerdigrisRetort />
      <ShopInkOfTheAges />
      <ShopMirageHemline />
      <ShopCogturnEmber />
      <ShopGlitteringKhyber />
      <ShopWandwrightsSleeve />
      <ShopQuietDrawer />
      <ShopSaltAndCipher />
      <ShopQuillons />
      <ShopDulcetLeaf />
    </div>
  )
}
