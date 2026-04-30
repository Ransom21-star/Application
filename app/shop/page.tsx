'use client'

import { motion } from 'framer-motion'
import { useHunterStore } from '@/lib/state/useHunterStore'

const shopItems = [
  { name: 'Fresh Juice', price: 120, rarity: 'common' },
  { name: 'Movie Night', price: 420, rarity: 'uncommon' },
  { name: 'Premium Coffee', price: 280, rarity: 'rare' },
  { name: 'Spa Evening', price: 860, rarity: 'legendary' },
]

export default function ShopPage() {
  const { solars, addSolars } = useHunterStore()

  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Solar exchange</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Shop</h1>
              <p className="mt-2 text-text">Spend Solars on rewards and personalised tools.</p>
            </div>
            <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] px-5 py-4 text-center text-sm text-text">
              <p className="uppercase tracking-[0.3em] text-text-dim">Balance</p>
              <p className="mt-2 text-3xl font-semibold text-white">{solars} Solars</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {shopItems.map(item => {
              const affordable = solars >= item.price
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-5"
                >
                  <p className="text-lg font-semibold text-white">{item.name}</p>
                  <p className="mt-2 text-sm text-text">Rarity: {item.rarity}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xl font-semibold text-accent">{item.price} Solars</span>
                    <button
                      type="button"
                      onClick={() => affordable && addSolars(-item.price)}
                      disabled={!affordable}
                      className={`rounded-3xl px-4 py-2 text-sm font-semibold text-white ${affordable ? 'bg-gradient-to-r from-accent to-accent2 shadow-neon' : 'bg-[rgba(255,255,255,0.08)] text-text'}`}
                    >
                      {affordable ? 'Claim' : 'Insufficient'}
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
