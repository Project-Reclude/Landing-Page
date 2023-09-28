import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Landing Page for Project Reclude',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-light-accent-1000 mx-auto container">{children}</body>
    </html>
  )
}
