'use client'

import { motion } from 'framer-motion'

const videos = [
  { title: 'The Discipline Mindset', channel: 'Wisdom Path', duration: '12:45' },
  { title: 'Manifestation Through Action', channel: 'Inner Alchemy', duration: '18:02' },
]

export default function KnowledgePage() {
  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Knowledge base</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Learning path</h1>
          <p className="mt-2 text-text">Live recommendations, books, and finance guidance from AEON.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {videos.map(video => (
            <motion.article
              key={video.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-5"
            >
              <p className="text-base font-semibold text-white">{video.title}</p>
              <p className="mt-2 text-sm text-text">Channel {video.channel}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-text-dim">
                <span>{video.duration}</span>
                <button className="rounded-full bg-[rgba(102,68,255,0.18)] px-4 py-2 text-white">Watch</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}
