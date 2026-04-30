'use client'

import { useMissionStore } from '@/lib/state/useMissionStore'

export default function GoalsTab() {
  const { goals } = useMissionStore()

  return (
    <section className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Goals</p>
      <div className="mt-6 space-y-4">
        {goals?.categories?.map(category => (
          <div key={category.id} className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-4">
            <p className="font-semibold text-white">{category.name}</p>
            <p className="mt-2 text-sm text-text">{category.specificTarget}</p>
            <div className="mt-3 grid gap-2 text-xs text-text-dim sm:grid-cols-3">
              <span>{category.keyMetric}</span>
              <span>{category.plan.phase1}</span>
              <span>{category.plan.phase2}</span>
            </div>
          </div>
        )) || <p className="text-sm text-text">AEON has not generated goal categories yet.</p>}
      </div>
    </section>
  )
}
