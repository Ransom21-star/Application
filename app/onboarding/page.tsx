'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const questions = [
  { label: 'Your name', type: 'text', key: 'name' },
  { label: 'The life you are building', type: 'textarea', key: 'vision' },
  { label: 'Why it matters deeply', type: 'textarea', key: 'why' },
  { label: 'Current state honestly', type: 'options', key: 'state', options: ['Starting from zero', 'Moving but scattered', 'Consistent but stuck', 'Already advancing'] },
  { label: 'Current mental and emotional state', type: 'textarea', key: 'mindset' },
  { label: 'Where you feel blocked', type: 'multi', key: 'blocks', options: ['Money & Financial Abundance', 'Self-Worth & Confidence', 'Romantic & Deep Relationships', 'Health & Physical Vitality', 'Spiritual Connection & Purpose', 'Career & Professional Mastery', 'Social Life & Belonging', 'Mental Clarity & Focus', 'Family Dynamics', 'Creative Expression & Voice'] },
  { label: 'Which life domains AEON should develop', type: 'multi', key: 'domains', options: ['Health & Fitness', 'Mental Discipline', 'Finances & Career', 'Relationships', 'Spirituality', 'Education & Skills', 'Creativity', 'Emotional Mastery'] },
  { label: 'Current daily habits', type: 'textarea', key: 'habits' },
  { label: 'Single pattern costing the most', type: 'options', key: 'pattern', options: ['Consistency — I begin strong then abandon', 'Fear & paralysis', 'Comfort over discipline', 'Self-sabotage', 'Clarity — I don\'t know who I am yet', 'Environment pulls me off course'] },
  { label: 'Spiritual orientation', type: 'options', key: 'spirituality', options: ['Deeply spiritual — my foundation', 'I believe but practice inconsistently', 'Open but undeveloped', 'Not spiritual but open', 'Not relevant to my path'] },
  { label: 'Realistic daily hours available', type: 'options', key: 'hours', options: ['1–2 hours', '2–4 hours', '4–6 hours', '6+ hours'] },
  { label: 'Country + Declaration', type: 'textarea', key: 'declaration' },
]

export default function OnboardingPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})

  const current = questions[step]
  const progress = useMemo(() => Math.round(((step + 1) / questions.length) * 100), [step])

  function handleChange(value: string | string[]) {
    setAnswers(prev => ({ ...prev, [current.key]: value }))
  }

  function toggleOption(option: string) {
    const currentValue = answers[current.key] as string[] | undefined
    const next = currentValue?.includes(option)
      ? currentValue.filter(item => item !== option)
      : [...(currentValue || []), option]
    handleChange(next)
  }

  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-8 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Onboarding / {step + 1} of {questions.length}</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Declare your path</h1>
          </div>
          <p className="text-sm text-text">Progress {progress}%</p>
        </div>

        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <p className="text-sm uppercase tracking-[0.2em] text-text-dim">{current.label}</p>
            {current.type === 'text' && (
              <input
                value={(answers[current.key] as string) || ''}
                onChange={e => handleChange(e.target.value)}
                className="mt-4 w-full rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[rgba(14,13,28,0.95)] p-4 text-white outline-none focus:border-accent"
                placeholder="Answer here"
              />
            )}
            {current.type === 'textarea' && (
              <textarea
                value={(answers[current.key] as string) || ''}
                onChange={e => handleChange(e.target.value)}
                className="mt-4 min-h-[180px] w-full rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[rgba(14,13,28,0.95)] p-4 text-white outline-none focus:border-accent"
                placeholder="Answer here"
              />
            )}
            {current.type === 'options' && (
              <div className="mt-4 grid gap-3">
                {current.options?.map(option => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleChange(option)}
                    className={`rounded-3xl border px-4 py-4 text-left transition ${answers[current.key] === option ? 'border-accent bg-[rgba(102,68,255,0.16)]' : 'border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]'}`}>
                    {option}
                  </button>
                ))}
              </div>
            )}
            {current.type === 'multi' && (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {current.options?.map(option => {
                  const selected = (answers[current.key] as string[] | undefined)?.includes(option)
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleOption(option)}
                      className={`rounded-3xl border px-4 py-4 text-left transition ${selected ? 'border-accent bg-[rgba(102,68,255,0.16)]' : 'border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]'}`}>
                      {option}
                    </button>
                  )
                })}
              </div>
            )}
          </motion.div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={() => setStep(step > 0 ? step - 1 : 0)}
              className="rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[rgba(14,13,28,0.95)] px-6 py-4 text-sm text-text transition hover:border-accent"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(step < questions.length - 1 ? step + 1 : step)}
              className="glow-button rounded-3xl bg-gradient-to-r from-accent to-accent2 px-6 py-4 text-sm font-semibold text-white shadow-neon"
            >
              {step < questions.length - 1 ? 'Next question' : 'Finish onboarding'}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
