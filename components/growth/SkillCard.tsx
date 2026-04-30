'use client'

interface SkillCardProps {
  name: string
  rank: string
  progress: number
  rarity: string
}

export default function SkillCard({ name, rank, progress, rarity }: SkillCardProps) {
  return (
    <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-white">{name}</p>
          <p className="mt-2 text-sm text-text">Rank {rank} · {rarity}</p>
        </div>
        <span className="rounded-full bg-[rgba(102,68,255,0.16)] px-3 py-1 text-sm text-white">{rank}</span>
      </div>
      <div className="mt-5 h-3 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
        <div className="h-3 rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-3 text-sm text-text">Progress {progress}%</p>
    </div>
  )
}
