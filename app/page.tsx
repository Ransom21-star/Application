'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8 text-white">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="mx-auto max-w-3xl rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-8 shadow-[0_0_60px_rgba(102,68,255,0.2)]"
      >
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Sovereign</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">AEON life RPG</h1>
            <p className="max-w-2xl text-base text-text">A mobile-first life operating system that turns progress into an RPG journey. Enter your world, unlock ranks, log missions, and let AEON guide you.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/boot" className="glow-button rounded-3xl bg-gradient-to-r from-accent to-accent2 px-5 py-4 text-center font-semibold text-white shadow-neon">
              Start boot sequence
            </Link>
            <Link href="/dashboard" className="rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[rgba(14,13,28,0.92)] px-5 py-4 text-center font-semibold text-text hover:bg-[rgba(14,13,28,1)]">
              Open dashboard
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
