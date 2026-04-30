'use client'

import { useMissionStore } from '@/lib/state/useMissionStore'

export default function SideQuests() {
  const { sideQuests, acceptSideQuest, completeSideQuest } = useMissionStore()

  return (
    <section className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Side Quests</p>
      <div className="mt-6 space-y-4">
        {sideQuests.length === 0 ? (
          <p className="text-sm text-text">AEON has no optional quests for you yet.</p>
        ) : (
          sideQuests.map(quest => (
            <div key={quest.id} className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-white">{quest.title}</p>
                  <p className="mt-1 text-sm text-text">{quest.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => acceptSideQuest(quest.id)}
                    className="rounded-full bg-[rgba(102,68,255,0.16)] px-4 py-2 text-sm text-white"
                  >
                    {quest.accepted ? 'Accepted' : 'Accept'}
                  </button>
                  <button
                    type="button"
                    onClick={() => completeSideQuest(quest.id)}
                    className="rounded-full bg-[rgba(255,255,255,0.08)] px-4 py-2 text-sm text-text"
                  >
                    {quest.done ? 'Done' : 'Complete'}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
