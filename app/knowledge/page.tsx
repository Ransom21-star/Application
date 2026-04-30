'use client'

import { motion } from 'framer-motion'
import { useLearnStore } from '@/lib/state/useLearnStore'

export default function KnowledgePage() {
  const { videoRecommendations, books, markVideoWatched, finishBook } = useLearnStore()

  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Knowledge base</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Learning path</h1>
            <p className="mt-2 text-text">Live recommendations, books, and finance guidance from AEON.</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {videoRecommendations.map(video => (
              <motion.article
                key={video.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-5"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-base font-semibold text-white">{video.title}</p>
                  <span className="text-xs uppercase tracking-[0.3em] text-text-dim">{video.level}</span>
                </div>
                <p className="text-sm text-text">Channel {video.channel}</p>
                <p className="mt-3 text-sm text-text-dim">{video.reason}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-text-dim">{video.url}</span>
                  <button
                    type="button"
                    onClick={() => markVideoWatched(video.id)}
                    className="rounded-full bg-[rgba(102,68,255,0.18)] px-4 py-2 text-white"
                  >
                    {video.watched ? 'Watched' : 'Watch'}
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,7,20,0.95)] p-6 shadow-[0_0_60px_rgba(102,68,255,0.2)]">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-freqPurple">Book queue</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Reading list</h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {books.map(book => (
              <motion.article
                key={book.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-5"
              >
                <p className="text-base font-semibold text-white">{book.title}</p>
                <p className="mt-2 text-sm text-text">{book.author}</p>
                <p className="mt-3 text-sm text-text-dim">Page {book.currentPage} / {book.pages}</p>
                <button
                  type="button"
                  onClick={() => finishBook(book.id)}
                  className="mt-4 rounded-full bg-[rgba(102,68,255,0.18)] px-4 py-2 text-sm text-white"
                >
                  {book.done ? 'Completed' : 'Mark completed'}
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
