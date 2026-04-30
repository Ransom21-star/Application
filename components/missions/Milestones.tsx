'use client'

import { useMissionStore } from '@/lib/state/useMissionStore'

export default function Milestones() {
  const { milestones, unlockMilestone } = useMissionStore()

  return (
    <section className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Milestones</p>
      <div className="mt-6 space-y-4">
        {milestones.map(item => (
          <div key={item.id} className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-text">{item.description}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.28em] text-text-dim">{item.status} · {item.checkType}</p>
              </div>
              {item.status === 'locked' && (
                <button
                  type="button"
                  onClick={() => unlockMilestone(item.id, 'Unlocked by AEON review.')}
                  className="rounded-full bg-[rgba(102,68,255,0.16)] px-4 py-2 text-sm text-white"
                >
                  Unlock
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
