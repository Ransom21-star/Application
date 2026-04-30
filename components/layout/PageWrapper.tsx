import type { ReactNode } from 'react'

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent pt-[92px] text-text">
      {children}
    </div>
  )
}
