interface InventoryItem {
  name: string
  type: string
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Very Rare' | 'Legendary'
  price: string
  source?: string
}

interface InventoryTableProps {
  items: InventoryItem[]
}

const rarityColorMap: Record<string, string> = {
  Common: 'var(--stone-500)',
  Uncommon: 'var(--teal-500)',
  Rare: 'var(--everbright-500)',
  'Very Rare': 'var(--warm-amber)',
  Legendary: 'var(--deep-crimson)',
}

export default function InventoryTable({ items }: InventoryTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ backgroundColor: 'var(--stone-800)' }}>
            <th
              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--stone-100)' }}
            >
              Item
            </th>
            <th
              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--stone-100)' }}
            >
              Type
            </th>
            <th
              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--stone-100)' }}
            >
              Rarity
            </th>
            <th
              className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--stone-100)' }}
            >
              Price
            </th>
            {items.some((i) => i.source) && (
              <th
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                style={{ color: 'var(--stone-100)' }}
              >
                Source
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.name + index}
              className="transition-colors duration-150"
              style={{
                backgroundColor:
                  index % 2 === 0 ? 'var(--stone-50)' : 'var(--stone-100)',
                borderBottom: '1px solid var(--stone-200)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--stone-200)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  index % 2 === 0 ? 'var(--stone-50)' : 'var(--stone-100)'
              }}
            >
              <td
                className="px-4 py-3 text-sm font-medium"
                style={{ color: 'var(--stone-700)' }}
              >
                {item.name}
              </td>
              <td
                className="px-4 py-3 text-sm"
                style={{ color: 'var(--stone-500)' }}
              >
                {item.type}
              </td>
              <td className="px-4 py-3 text-sm font-medium" style={{ color: rarityColorMap[item.rarity] || 'var(--stone-500)' }}>
                {item.rarity}
              </td>
              <td
                className="px-4 py-3 text-sm font-mono text-right"
                style={{ color: 'var(--stone-700)' }}
              >
                {item.price}
              </td>
              {items.some((i) => i.source) && (
                <td
                  className="px-4 py-3 text-xs font-mono"
                  style={{ color: 'var(--stone-400)' }}
                >
                  {item.source}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
