'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'AEON', href: '/aeon' },
  { label: 'Journal', href: '/journal' },
  { label: 'Missions', href: '/missions' },
  { label: 'Growth', href: '/growth' },
  { label: 'Knowledge', href: '/knowledge' },
  { label: 'Shop', href: '/shop' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col border-r border-[rgba(255,255,255,0.08)] bg-[rgba(3,2,10,0.95)] px-6 py-8 text-text lg:flex">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-freqPurple">System</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Sovereign</h2>
        <p className="mt-2 text-sm text-text-dim">AEON's living life RPG.</p>
      </div>

      <nav className="flex flex-col gap-2">
        {links.map(link => {
          const active = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-3xl px-4 py-3 text-sm transition ${active ? 'bg-[rgba(102,68,255,0.18)] text-white shadow-neon' : 'text-text hover:bg-[rgba(255,255,255,0.04)] hover:text-white'}`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(14,13,28,0.95)] p-4 text-sm text-text">
        <p className="uppercase tracking-[0.25em] text-[10px] text-text-dim">Mission uptime</p>
        <p className="mt-3 text-base font-semibold text-white">19.2 hrs</p>
        <p className="mt-2 text-xs leading-5 text-text-dim">AEON is watching your frequency and reward balance.</p>
      </div>
    </aside>
  )
}
