'use client'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  loading: boolean
}

export default function ChatInput({ value, onChange, onSend, loading }: ChatInputProps) {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Ask AEON anything..."
        className="min-h-[54px] flex-1 rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[rgba(14,13,28,0.95)] px-4 text-white outline-none focus:border-accent"
      />
      <button
        type="button"
        onClick={onSend}
        disabled={loading}
        className="glow-button rounded-3xl bg-gradient-to-r from-accent to-accent2 px-6 py-4 text-sm font-semibold text-white shadow-neon disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Listening...' : 'Send'}
      </button>
    </div>
  )
}
