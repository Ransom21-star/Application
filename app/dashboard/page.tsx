'use client'

import { motion } from 'framer-motion'

const sampleStats = [
  { label: 'Discipline', value: 76 },
  { label: 'Mindset', value: 82 },
  { label: 'Vitality', value: 64 },
  { label: 'Ambition', value: 71 },
  { label: 'Adaptability', value: 68 },
  { label: 'Focus', value: 79 },
  { label: 'Spiritual', value: 58 },
  { label: 'Emotional', value: 72 },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.25fr_0.85fr]">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-[32px] p-6"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Dashboard</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Your living RPG HUD</h1>
              <p className="mt-2 text-text">A real-time command center for your rank, missions, frequency, and growth.</p>
            </div>
            <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-4 text-sm text-text">
              Rank S · Level 4 · Solars 198
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-text-dim">Frequency</p>
              <p className="mt-2 text-2xl font-semibold text-freqGreen">ALIGNED</p>
              <p className="mt-2 text-sm text-text">You are on the path. Keep walking.</p>
            </div>
            <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-text-dim">Goal</p>
              <p className="mt-2 text-lg font-semibold text-white">Build consistent momentum with discipline and aligned energy.</p>
            </div>
            <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-text-dim">Daily missions</p>
              <p className="mt-2 text-xl font-semibold text-white">4 active</p>
            </div>
            <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-text-dim">Health snapshot</p>
              <p className="mt-2 text-lg font-semibold text-white">Sleep 7h · Steps 6,300 · Water 5/8</p>
            </div>
          </div>
        </motion.section>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="glass-panel rounded-[32px] p-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Stats grid</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {sampleStats.map(stat => (
              <div key={stat.label} className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-4">
                <div className="flex items-center justify-between text-sm text-text-dim">
                  <span>{stat.label}</span>
                  <span>{stat.value}%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-[rgba(255,255,255,0.08)]">
                  <div className="h-2 rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: `${stat.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </main>
  )
}
