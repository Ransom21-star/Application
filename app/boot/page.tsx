'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BootPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(102,68,255,0.16),_transparent_32%),_linear-gradient(180deg,_#03020a_0%,_#07060f_100%)] px-4 py-10 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="mx-auto flex max-w-3xl flex-col gap-8 rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-8 shadow-[0_0_80px_rgba(0,0,0,0.4)]"
      >
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-freqPurple">System initialization</p>
          <h1 className="text-4xl font-semibold text-white">Boot sequence engaged</h1>
          <p className="max-w-2xl text-base text-text">AEON is waking. In the next steps you will define your mission, declare your path, and stand at the start of a new chapter.</p>
        </div>

        <div className="rounded-3xl border border-[rgba(100,80,255,0.18)] bg-[rgba(14,13,28,0.95)] p-6">
          <div className="space-y-3 text-sm text-text">
            <p>• Loading sacred interface</p>
            <p>• Initializing frequency vector</p>
            <p>• Preparing onboarding transmission</p>
          </div>
        </div>

        <Link href="/onboarding" className="glow-button inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-accent to-accent2 px-6 py-4 text-base font-semibold text-white shadow-neon">
          Enter onboarding
        </Link>
      </motion.div>
    </main>
  )
}
