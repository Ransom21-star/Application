'use client'

import { useHunterStore } from '@/lib/state/useHunterStore'

export default function StreakTracker() {
  const { streakData } = useHunterStore()
  const streaks = Object.values(streakData)

  return (
    <section className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Streaks</p>
      {streaks.length === 0 ? (
        <p className="mt-6 text-sm text-text">No streaks recorded yet.</p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {streaks.map(streak => (
            <div key={streak.name} className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-4">
              <p className="font-semibold text-white">{streak.name}</p>
              <p className="mt-2 text-sm text-text">Count {streak.count}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
