'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'AEON', href: '/aeon' },
  { label: 'Journal', href: '/journal' },
  { label: 'Missions', href: '/missions' },
]

export default function TopBar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(3,2,10,0.92)] backdrop-blur-xl lg:left-72 lg:right-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setOpen(prev => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] text-text hover:border-accent"
          >
            <span className="text-xl">☰</span>
          </button>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-freqPurple">AEON Interface</p>
            <p className="text-lg font-semibold text-white">Your system control</p>
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-3xl px-4 py-3 text-sm transition ${pathname === item.href ? 'bg-[rgba(102,68,255,0.18)] text-white' : 'text-text hover:bg-[rgba(255,255,255,0.06)] hover:text-white'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] px-4 py-2 text-sm text-text">
            Rank S
          </div>
          <button className="rounded-3xl bg-gradient-to-r from-accent to-accent2 px-4 py-2 text-sm font-semibold text-white shadow-neon">New quest</button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[rgba(255,255,255,0.08)] bg-[rgba(3,2,10,0.95)] px-4 py-4">
          <div className="grid gap-3">
            {nav.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-3xl px-4 py-3 text-sm transition ${pathname === item.href ? 'bg-[rgba(102,68,255,0.18)] text-white' : 'text-text hover:bg-[rgba(255,255,255,0.06)] hover:text-white'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
