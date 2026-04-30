import type { Metadata } from 'next'
import '../styles/globals.css'
import Sidebar from '@/components/layout/Sidebar'
import TopBar from '@/components/layout/TopBar'
import PageWrapper from '@/components/layout/PageWrapper'

export const metadata: Metadata = {
  title: 'Sovereign',
  description: 'Sovereign: AEON-powered life RPG operating system',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-text">
        <div className="min-h-screen">
          <Sidebar />
          <TopBar />
          <PageWrapper>{children}</PageWrapper>
        </div>
      </body>
    </html>
  )
}
