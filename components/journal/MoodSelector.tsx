'use client'

const moods = [
  { label: 'Sovereign', emoji: '👑' },
  { label: 'Focused', emoji: '⚡' },
  { label: 'Grateful', emoji: '🙏' },
  { label: 'Anxious', emoji: '😰' },
  { label: 'Heavy', emoji: '😔' },
  { label: 'Angry', emoji: '🔥' },
  { label: 'Numb', emoji: '😶' },
  { label: 'Hopeful', emoji: '🌱' },
  { label: 'Peaceful', emoji: '🌊' },
  { label: 'Unstoppable', emoji: '🦅' },
]

export default function MoodSelector({ selected, onSelect }: { selected: string | null; onSelect: (mood: string) => void }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {moods.map(mood => (
        <button
          key={mood.label}
          type="button"
          onClick={() => onSelect(mood.label)}
          className={`rounded-3xl border px-4 py-4 text-left transition ${selected === mood.label ? 'border-accent bg-[rgba(102,68,255,0.16)] text-white' : 'border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-text'}`}
        >
          <span className="text-2xl">{mood.emoji}</span>
          <p className="mt-3 font-semibold">{mood.label}</p>
        </button>
      ))}
    </div>
  )
}
