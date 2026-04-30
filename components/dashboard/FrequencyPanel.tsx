'use client'

import { frequencyMap } from '@/lib/constants/frequencyMap'
import { useHunterStore } from '@/lib/state/useHunterStore'

export default function FrequencyPanel() {
  const { frequency } = useHunterStore()
  const status = frequencyMap[frequency]

  return (
    <section className="glass-panel rounded-[32px] border border-[rgba(255,255,255,0.08)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
      <div className="flex items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-3xl" style={{ color: status.color }}>
          {status.orb}
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-text-dim">Frequency</p>
          <p className="mt-2 text-2xl font-semibold" style={{ color: status.color }}>{status.label}</p>
          <p className="mt-2 text-sm text-text">{status.desc}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-[rgba(255,255,255,0.04)] p-4">
          <p className="text-xs uppercase tracking-[0.28em] text-text-dim">Emotional state</p>
          <p className="mt-3 text-lg font-semibold" style={{ color: status.emotional.color }}>{status.emotional.label}</p>
        </div>
        <div className="rounded-3xl bg-[rgba(255,255,255,0.04)] p-4">
          <p className="text-xs uppercase tracking-[0.28em] text-text-dim">Mental state</p>
          <p className="mt-3 text-lg font-semibold" style={{ color: status.mental.color }}>{status.mental.label}</p>
        </div>
      </div>
    </section>
  )
}
