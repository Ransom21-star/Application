'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'Focus Mastery', rank: 'B', progress: 62 },
  { name: 'Manifestation Ritual', rank: 'C', progress: 44 },
  { name: 'Resilience Field', rank: 'D', progress: 29 },
]

export default function GrowthPage() {
  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Skills & growth</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Your path of mastery</h1>
          <p className="mt-2 text-text">Track skills, streaks, and growth rituals in one place.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {skills.map(skill => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-white">{skill.name}</p>
                  <p className="mt-2 text-sm text-text">Rank {skill.rank}</p>
                </div>
                <span className="rounded-full bg-[rgba(102,68,255,0.18)] px-3 py-1 text-xs text-accent">Skill card</span>
              </div>
              <div className="mt-5 h-3 rounded-full bg-[rgba(255,255,255,0.08)]">
                <div className="h-3 rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: `${skill.progress}%` }} />
              </div>
              <p className="mt-3 text-sm text-text">Progress {skill.progress}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
