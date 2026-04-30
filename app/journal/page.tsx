'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { callAEON } from '@/lib/aeon'
import { useHunterStore } from '@/lib/state/useHunterStore'
import { useJournalStore } from '@/lib/state/useJournalStore'
import MoodSelector from '@/components/journal/MoodSelector'
import JournalPrompt from '@/components/journal/JournalPrompt'
import AEONFeedback from '@/components/journal/AEONFeedback'
import QuickLog from '@/components/journal/QuickLog'

const prompts = [
  'Daily Declaration — who are you choosing to be today?',
  'Mission Focus — the one action that moves your goal most today',
  'Inner Weather — emotional and mental state honestly',
  'Obstacle Readiness — what might stand in your way and how you\'ll meet it',
  'Evening Accounting — what did you do your future self will thank you for',
]

export default function JournalPage() {
  const { frequency } = useHunterStore()
  const { selectedMood, currentEntry, setMood, updatePromptResponse, addEntry } = useJournalStore()
  const [step, setStep] = useState(0)
  const [feedback, setFeedback] = useState('AEON is listening. Share what matters.')
  const [quickNote, setQuickNote] = useState('')
  const [loading, setLoading] = useState(false)

  const entryResponses = prompts.map((prompt, index) => ({ prompt, response: currentEntry[index] || '' }))

  async function submitJournal() {
    setLoading(true)
    const mood = selectedMood || 'Focused'
    setMood(mood)

    const content = entryResponses
      .map(item => `${item.prompt}\n${item.response || 'No answer yet.'}`)
      .join('\n\n')

    const response = await callAEON({
      system: 'You are AEON, a wise purpose coach who translates journal entries into clear guidance and next steps.',
      messages: [
        { role: 'user', content: `Journal Mood: ${mood}\nFrequency: ${frequency}\n\n${content}\n\nOffer encouragement, the next best step, and a short affirmation.` },
      ],
    })

    setFeedback(response || 'AEON is silent. Try again later.')
    addEntry({
      date: new Date().toISOString().slice(0, 10),
      mood,
      responses: entryResponses,
      frequency,
      aeonFeedback: response || 'No response available yet.',
    })
    setLoading(false)
  }

  async function submitQuickLog() {
    if (!quickNote.trim()) return
    setLoading(true)
    const response = await callAEON({
      system: 'You are AEON, a focused accountability assistant.',
      messages: [
        { role: 'user', content: `Quick log note: ${quickNote}. Provide a concise next action and encouragement.` },
      ],
    })
    setFeedback(response || 'AEON is silent. Try again later.')
    setQuickNote('')
    setLoading(false)
  }

  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Journal</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Daily entry</h1>
              <p className="mt-2 text-text">Record your inner weather and let AEON respond with guidance.</p>
            </div>
            <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] px-4 py-2 text-sm text-text">Frequency: {frequency}</div>
          </div>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <p className="text-sm uppercase tracking-[0.2em] text-text-dim">Select your current mood</p>
              <div className="mt-4">
                <MoodSelector selected={selectedMood} onSelect={setMood} />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 }}>
              <JournalPrompt
                prompt={prompts[step]}
                value={currentEntry[step] || ''}
                onChange={value => updatePromptResponse(step, value)}
              />

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={() => setStep(Math.max(step - 1, 0))}
                  className="rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[rgba(14,13,28,0.95)] px-6 py-4 text-sm text-text"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setStep(Math.min(step + 1, prompts.length - 1))}
                  className="rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[rgba(14,13,28,0.95)] px-6 py-4 text-sm text-text"
                >
                  {step < prompts.length - 1 ? 'Next prompt' : 'Review entry'}
                </button>
              </div>
            </motion.div>

            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <button
                type="button"
                onClick={submitJournal}
                disabled={loading}
                className="glow-button rounded-3xl bg-gradient-to-r from-accent to-accent2 px-6 py-4 text-sm font-semibold text-white shadow-neon disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Saving...' : 'Submit journal'}
              </button>
              <QuickLog value={quickNote} onChange={setQuickNote} onSubmit={submitQuickLog} />
            </div>
          </div>
        </div>

        <AEONFeedback feedback={feedback} />
      </div>
    </main>
  )
}
