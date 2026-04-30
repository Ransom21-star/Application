'use client'

import CharacterHUD from '@/components/dashboard/CharacterHUD'
import FrequencyPanel from '@/components/dashboard/FrequencyPanel'
import GoalAffirmation from '@/components/dashboard/GoalAffirmation'
import StatsMiniGrid from '@/components/dashboard/StatsMiniGrid'
import HealthSnapshot from '@/components/dashboard/HealthSnapshot'

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.25fr_0.85fr]">
        <div className="space-y-6">
          <CharacterHUD />
          <FrequencyPanel />
          <GoalAffirmation />
          <StatsMiniGrid />
          <HealthSnapshot />
        </div>
      </div>
    </main>
  )
}
