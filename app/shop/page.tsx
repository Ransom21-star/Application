'use client'

import { motion } from 'framer-motion'

const shopItems = [
  { name: 'Fresh Juice', price: 120, rarity: 'common' },
  { name: 'Movie Night', price: 420, rarity: 'uncommon' },
  { name: 'Premium Coffee', price: 280, rarity: 'rare' },
  { name: 'Spa Evening', price: 860, rarity: 'legendary' },
]

export default function ShopPage() {
  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Solar exchange</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Shop</h1>
          <p className="mt-2 text-text">Spend Solars on rewards and personalised tools.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shopItems.map(item => (
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
                <button className="rounded-3xl bg-gradient-to-r from-accent to-accent2 px-4 py-2 text-sm font-semibold text-white shadow-neon">
                  Claim
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
