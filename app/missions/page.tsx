'use client'

import { motion } from 'framer-motion'

const missions = [
  { name: 'Write the morning declaration', difficulty: 'easy', done: false },
  { name: 'Walk 30 minutes with focus', difficulty: 'normal', done: true },
  { name: 'Mirror truth session', difficulty: 'hard', done: false },
]

export default function MissionsPage() {
  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Mission hub</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Daily quests</h1>
          <p className="mt-2 text-text">Complete missions, protect your streak, and earn Solars.</p>
        </div>

        <div className="grid gap-4">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex flex-col gap-3 rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-white">{mission.name}</p>
                  <p className="mt-2 text-sm text-text">Difficulty: {mission.difficulty}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs uppercase ${mission.done ? 'bg-green-500/15 text-green-300' : 'bg-[rgba(255,255,255,0.08)] text-text'}`}>
                  {mission.done ? 'Complete' : 'Active'}
                </span>
              </div>
              <button className="self-start rounded-3xl bg-gradient-to-r from-accent to-accent2 px-4 py-2 text-sm font-semibold text-white shadow-neon">
                {mission.done ? 'View reward' : 'Mark complete'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
