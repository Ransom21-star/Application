'use client'

import { useHunterStore } from '@/lib/state/useHunterStore'

export default function GoalAffirmation() {
  const { goalAffirmation } = useHunterStore()

  return (
    <section className="glass-panel rounded-[32px] border border-[rgba(255,255,255,0.08)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
      <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Goal affirmation</p>
      <p className="mt-4 text-xl font-semibold text-white">{goalAffirmation || 'I move with purpose and rise each day.'}</p>
      <p className="mt-3 text-sm text-text">AEON holds this as your living declaration.</p>
    </section>
  )
}
