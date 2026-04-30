'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { callAEON } from '@/lib/aeon'

export default function AeonPage() {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: 'AEON awaits. Ask what you need, hunter.' },
  ])
  const [draft, setDraft] = useState('')
  const [loading, setLoading] = useState(false)

  async function sendMessage() {
    if (!draft.trim()) return
    const nextMessages: { role: 'user' | 'assistant'; content: string }[] = [...messages, { role: 'user', content: draft }]
    setMessages(nextMessages)
    setDraft('')
    setLoading(true)
    const response = await callAEON({ messages: nextMessages })
    setLoading(false)
    setMessages(prev => [...prev, { role: 'assistant' as const, content: response || 'AEON is silent.' }])
  }

  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">AEON chat</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Speak to your sage</h1>
          </div>
          <span className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] px-4 py-2 text-sm text-text">Voice output off</span>
        </div>

        <div className="space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={`${message.content}-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-3xl p-4 ${message.role === 'assistant' ? 'bg-[rgba(51,170,255,0.08)] text-white' : 'bg-[rgba(255,255,255,0.06)] text-text'}`}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-text-dim">{message.role}</p>
              <p className="mt-2 whitespace-pre-line">{message.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            value={draft}
            onChange={e => setDraft(e.target.value)}
            placeholder="Ask AEON anything..."
            className="min-h-[54px] flex-1 rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[rgba(14,13,28,0.95)] px-4 text-white outline-none focus:border-accent"
          />
          <button
            type="button"
            onClick={sendMessage}
            disabled={loading}
            className="glow-button rounded-3xl bg-gradient-to-r from-accent to-accent2 px-6 py-4 text-sm font-semibold text-white shadow-neon disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Listening...' : 'Send'}
          </button>
        </div>
      </div>
    </main>
  )
}
