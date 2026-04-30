'use client'

import { motion } from 'framer-motion'
import DailyQuests from '@/components/missions/DailyQuests'
import NonNegotiables from '@/components/missions/NonNegotiables'
import SideQuests from '@/components/missions/SideQuests'
import Milestones from '@/components/missions/Milestones'
import GoalsTab from '@/components/missions/GoalsTab'
import MBSPillars from '@/components/missions/MBSPillars'
import { useMissionStore } from '@/lib/state/useMissionStore'

export default function MissionsPage() {
  const { missions, nonNeg, sideQuests, milestones } = useMissionStore()
  const activeCount = missions.filter(item => !item.done).length
  const completedCount = missions.filter(item => item.done).length

  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Mission hub</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Daily quests</h1>
              <p className="mt-2 text-text">Complete missions, protect your streak, and earn Solars.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] px-5 py-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-text-dim">Active</p>
                <p className="mt-2 text-3xl font-semibold text-white">{activeCount}</p>
              </div>
              <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] px-5 py-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-text-dim">Complete</p>
                <p className="mt-2 text-3xl font-semibold text-white">{completedCount}</p>
              </div>
              <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] px-5 py-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-text-dim">Side quests</p>
                <p className="mt-2 text-3xl font-semibold text-white">{sideQuests.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <DailyQuests />
            <GoalsTab />
            <Milestones />
          </div>
          <div className="space-y-6">
            <NonNegotiables />
            <SideQuests />
            <MBSPillars />
          </div>
        </div>
      </div>
    </main>
  )
}
