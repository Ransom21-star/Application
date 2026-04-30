'use client'

import { statMeta } from '@/lib/constants/statMeta'
import { useHunterStore } from '@/lib/state/useHunterStore'

export default function StatBars() {
  const { stats } = useHunterStore()

  return (
    <section className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Stat bars</p>
      <div className="mt-6 space-y-4">
        {statMeta.map(item => (
          <div key={item.name}>
            <div className="flex items-center justify-between text-sm text-text-dim">
              <span>{item.name}</span>
              <span>{stats[item.name] ?? 0}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
              <div className="h-2 rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: `${stats[item.name] ?? 0}%` }} />
            </div>
            <p className="mt-2 text-xs text-text">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
