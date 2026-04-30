'use client'

export default function WeeklyReport() {
  return (
    <section className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Weekly report</p>
      <div className="mt-6 space-y-4 text-sm text-text">
        <p><span className="font-semibold text-white">Week Summary:</span> Momentum has stabilized and AEON is bringing sharper focus.</p>
        <p><span className="font-semibold text-white">What Worked:</span> Daily consistency and higher energy patterns.</p>
        <p><span className="font-semibold text-white">What Must Change:</span> Add clearer boundaries to avoid drift.</p>
        <p><span className="font-semibold text-white">Next Week Focus:</span> Deep work blocks and rest alignment.</p>
        <p><span className="font-semibold text-white">AEON's Word:</span> The system is your ally when you show up for yourself.</p>
      </div>
    </section>
  )
}
