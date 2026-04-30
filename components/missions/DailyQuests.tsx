'use client'

import { useMissionStore } from '@/lib/state/useMissionStore'

export default function DailyQuests() {
  const { missions, toggleMission } = useMissionStore()

  return (
    <section className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Daily Quests</p>
      <div className="mt-6 space-y-4">
        {missions.map(mission => (
          <div key={mission.id} className="flex flex-col gap-3 rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-white">{mission.name}</p>
              <p className="mt-2 text-sm text-text">{mission.reason}</p>
            </div>
            <button
              type="button"
              onClick={() => toggleMission(mission.id)}
              className={`rounded-full px-5 py-3 text-sm font-semibold ${mission.done ? 'bg-green-500/15 text-green-200' : 'bg-[rgba(102,68,255,0.16)] text-white'}`}
            >
              {mission.done ? 'Complete' : 'Mark done'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
