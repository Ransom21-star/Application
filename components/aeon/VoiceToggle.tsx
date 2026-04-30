'use client'

interface VoiceToggleProps {
  enabled: boolean
  onToggle: () => void
}

export default function VoiceToggle({ enabled, onToggle }: VoiceToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`rounded-3xl border px-4 py-3 text-sm transition ${enabled ? 'border-accent bg-[rgba(102,68,255,0.16)] text-white' : 'border-[rgba(255,255,255,0.12)] bg-[rgba(14,13,28,0.95)] text-text'}`}
    >
      Voice {enabled ? 'On' : 'Off'}
    </button>
  )
}
