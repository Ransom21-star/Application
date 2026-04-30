'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const prompts = [
  'Daily Declaration — who are you choosing to be today?',
  'Mission Focus — the one action that moves your goal most today',
  'Inner Weather — emotional and mental state honestly',
  'Obstacle Readiness — what might stand in your way and how you\'ll meet it',
  'Evening Accounting — what did you do your future self will thank you for',
]

export default function JournalPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(prompts.length).fill(''))

  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Journal</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Daily entry</h1>
            <p className="mt-2 text-text">Record your inner weather and let AEON respond with guidance.</p>
          </div>
          <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] px-4 py-2 text-sm text-text">Mood: Focused ⚡</div>
        </div>

        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="text-sm uppercase tracking-[0.2em] text-text-dim">{prompts[step]}</p>
          <textarea
            value={answers[step]}
            onChange={e => setAnswers(prev => {
              const next = [...prev]
              next[step] = e.target.value
              return next
            })}
            className="mt-4 min-h-[220px] w-full rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[rgba(14,13,28,0.95)] p-4 text-white outline-none focus:border-accent"
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
              className="glow-button rounded-3xl bg-gradient-to-r from-accent to-accent2 px-6 py-4 text-sm font-semibold text-white shadow-neon"
            >
              {step < prompts.length - 1 ? 'Next prompt' : 'Submit journal'}
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
