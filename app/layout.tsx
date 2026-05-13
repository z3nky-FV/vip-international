import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'VIP INTERNATIONAL',
  description: 'Роза Шотаева - Diamond Лидер',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 64px)' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
