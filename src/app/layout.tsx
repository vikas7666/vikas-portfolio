import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vikas Shukla — Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Vikas Shukla'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
