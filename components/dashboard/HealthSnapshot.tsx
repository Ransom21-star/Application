'use client'

import { useHealthStore } from '@/lib/state/useHealthStore'

export default function HealthSnapshot() {
  const { sleepLog, steps, waterIntake, caloriesLog } = useHealthStore()
  const todayCalories = caloriesLog.reduce((total, item) => total + item.calories, 0)

  if (sleepLog.length === 0 && steps === 0 && waterIntake === 0 && todayCalories === 0) {
    return null
  }

  return (
    <section className="glass-panel rounded-[32px] border border-[rgba(255,255,255,0.08)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
      <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Health snapshot</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-[rgba(14,13,28,0.95)] p-5 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-text-dim">Sleep</p>
          <p className="mt-3 text-3xl font-semibold text-white">{sleepLog.slice(-1)[0]?.duration ?? '--'}h</p>
          <p className="mt-2 text-sm text-text">Last night</p>
        </div>
        <div className="rounded-3xl bg-[rgba(14,13,28,0.95)] p-5 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-text-dim">Steps</p>
          <p className="mt-3 text-3xl font-semibold text-white">{steps}</p>
          <p className="mt-2 text-sm text-text">Today</p>
        </div>
        <div className="rounded-3xl bg-[rgba(14,13,28,0.95)] p-5 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-text-dim">Water</p>
          <p className="mt-3 text-3xl font-semibold text-white">{waterIntake}/8</p>
          <p className="mt-2 text-sm text-text">Glasses</p>
        </div>
        <div className="rounded-3xl bg-[rgba(14,13,28,0.95)] p-5 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-text-dim">Calories</p>
          <p className="mt-3 text-3xl font-semibold text-white">{todayCalories}</p>
          <p className="mt-2 text-sm text-text">Today</p>
        </div>
      </div>
    </section>
  )
}
