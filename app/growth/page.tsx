'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useHunterStore } from '@/lib/state/useHunterStore'
import SkillCard from '@/components/growth/SkillCard'
import StatBars from '@/components/growth/StatBars'
import StreakTracker from '@/components/growth/StreakTracker'
import WeeklyReport from '@/components/growth/WeeklyReport'

export default function GrowthPage() {
  const { skills, level, xp, xpMax, solars, goalAffirmation } = useHunterStore()

  const progress = useMemo(() => Math.round((xp / xpMax) * 100), [xp, xpMax])

  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Skills & growth</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Your path of mastery</h1>
              <p className="mt-2 text-text">Track skills, streaks, and growth rituals in one place.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] px-5 py-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-text-dim">Level</p>
                <p className="mt-2 text-3xl font-semibold text-white">{level}</p>
              </div>
              <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] px-5 py-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-text-dim">XP</p>
                <p className="mt-2 text-3xl font-semibold text-white">{progress}%</p>
              </div>
              <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] px-5 py-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-text-dim">Solars</p>
                <p className="mt-2 text-3xl font-semibold text-white">{solars}</p>
              </div>
            </div>
          </div>
          <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-text-dim">Goal affirmation</p>
            <p className="mt-3 text-xl font-semibold text-white">{goalAffirmation}</p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.85fr]">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map(skill => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <SkillCard name={skill.name} rank={skill.rank} progress={skill.progress} rarity={skill.rarity} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <StatBars />
            <StreakTracker />
            <WeeklyReport />
          </div>
        </div>
      </div>
    </main>
  )
}
