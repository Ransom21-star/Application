'use client'

interface JournalPromptProps {
  prompt: string
  value: string
  onChange: (value: string) => void
}

export default function JournalPrompt({ prompt, value, onChange }: JournalPromptProps) {
  return (
    <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Journal prompt</p>
      <p className="mt-4 text-xl font-semibold text-white">{prompt}</p>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={5}
        className="mt-4 w-full rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[rgba(14,13,28,0.95)] p-4 text-white outline-none focus:border-accent"
        placeholder="Write your answer here"
      />
    </div>
  )
}
