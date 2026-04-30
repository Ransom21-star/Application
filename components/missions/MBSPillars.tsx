'use client'

import { useHunterStore } from '@/lib/state/useHunterStore'

export default function MBSPillars() {
  const { mentalPillar, physicalPillar, spiritualPillar } = useHunterStore()

  const pillars = [
    { label: 'Mind', status: mentalPillar, focus: 'Clarity and planning' },
    { label: 'Body', status: physicalPillar, focus: 'Recovery and movement' },
    { label: 'Spirit', status: spiritualPillar, focus: 'Stillness and meaning' },
  ]

  return (
    <section className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">M·B·S Pillars</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {pillars.map(pillar => (
          <div key={pillar.label} className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-5">
            <p className="text-sm uppercase tracking-[0.28em] text-text-dim">{pillar.label}</p>
            <p className="mt-3 text-xl font-semibold text-white">{pillar.status}</p>
            <p className="mt-3 text-sm text-text">{pillar.focus}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
