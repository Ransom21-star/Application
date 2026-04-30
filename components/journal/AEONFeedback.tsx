'use client'

export default function AEONFeedback({ feedback }: { feedback: string }) {
  return (
    <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">AEON feedback</p>
      <p className="mt-4 text-white">{feedback}</p>
    </div>
  )
}
