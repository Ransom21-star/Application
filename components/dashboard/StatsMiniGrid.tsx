'use client'

import { useHunterStore } from '@/lib/state/useHunterStore'

export default function StatsMiniGrid() {
  const { stats } = useHunterStore()
  const entries = Object.entries(stats)

  return (
    <section className="glass-panel rounded-[32px] border border-[rgba(255,255,255,0.08)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
      <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Stats Matrix</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {entries.map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm uppercase tracking-[0.2em] text-text-dim">{label}</p>
              <p className="text-lg font-semibold text-white">{value}</p>
            </div>
            <div className="mt-4 h-2 rounded-full bg-[rgba(255,255,255,0.08)]">
              <div className="h-2 rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
