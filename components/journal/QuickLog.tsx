'use client'

interface QuickLogProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
}

export default function QuickLog({ value, onChange, onSubmit }: QuickLogProps) {
  return (
    <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Quick log</p>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={5}
        className="mt-4 w-full rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[rgba(14,13,28,0.95)] p-4 text-white outline-none focus:border-accent"
        placeholder="Capture what matters in a few sentences"
      />
      <button
        type="button"
        onClick={onSubmit}
        className="mt-4 rounded-3xl bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-white shadow-neon"
      >
        Send to AEON
      </button>
    </div>
  )
}
