import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vikas Shukla — Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Vikas Shukla'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&family=Outfit:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
