'use client'

import { useHunterStore } from '@/lib/state/useHunterStore'

export default function CharacterHUD() {
  const { hunterName, rank, level, title, xp, xpMax, solars, frequency } = useHunterStore()
  const progress = Math.min(100, Math.round((xp / xpMax) * 100))

  return (
    <section className="glass-panel rounded-[32px] border border-[rgba(255,255,255,0.08)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Character HUD</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">{hunterName}</h2>
          <p className="text-sm text-text-dim">{title}</p>
        </div>

        <div className="rounded-3xl border border-[rgba(255,255,255,0.1)] bg-[rgba(14,13,28,0.95)] px-4 py-3 text-sm text-white">
          <p className="font-semibold">Rank {rank}</p>
          <p className="mt-1 text-text-dim">Frequency {frequency}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-[rgba(255,255,255,0.04)] p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-text-dim">Experience</p>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
            <div className="h-3 rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-3 text-sm text-text">{xp} / {xpMax} XP</p>
        </div>

        <div className="rounded-3xl bg-[rgba(255,255,255,0.04)] p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-text-dim">Solars</p>
          <p className="mt-3 text-3xl font-semibold text-white">{solars}</p>
          <p className="mt-2 text-sm text-text">Spend your currency on system rewards.</p>
        </div>
      </div>
    </section>
  )
}
