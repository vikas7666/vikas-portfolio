'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const highlights = [
  { title: 'Frontend Expertise', desc: 'React, Next.js, Tailwind CSS — building interfaces users love to interact with.' },
  { title: 'Backend Systems', desc: 'Node.js + Express APIs, database design, authentication, and scalable architecture.' },
  { title: 'Full Product Ownership', desc: 'From wireframe to deployment — comfortable working across the full stack independently.' },
  { title: 'Team Collaboration', desc: 'Git workflows, code reviews, agile practices, and clear communication.' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} style={{ background: '#0e1318', position: 'relative', zIndex: 2 }}>
      <div className="max-w-6xl mx-auto px-14 py-32">
        <div className="reveal flex items-center gap-3 mb-5"
          style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.15em', color: '#00e5c0', textTransform: 'uppercase' }}>
          About Me
          <span style={{ width: 60, height: 1, background: 'rgba(255,255,255,0.07)', display: 'inline-block' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div className="reveal">
            <h2 className="mb-8" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              I build things<br />for the web.
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#6b7a8a', marginBottom: 20 }}>
              I'm <strong style={{ color: '#e8edf2', fontWeight: 500 }}>Vikas Shukla</strong>, a full-stack developer passionate about creating elegant, high-performance digital products. I specialize in the React and Node.js ecosystem, building everything from interactive frontends to robust backend APIs.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#6b7a8a', marginBottom: 20 }}>
              My approach combines <strong style={{ color: '#e8edf2', fontWeight: 500 }}>clean code</strong>, modern UI/UX sensibilities, and engineering best practices. I thrive in fast-paced environments where quality and speed both matter.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#6b7a8a', marginBottom: 36 }}>
              When I'm not shipping features, I'm exploring new technologies, contributing to open-source, or improving my craft.
            </p>
            <Link href="#contact"
              className="btn-clip inline-flex items-center gap-2 px-8 py-3 transition-all hover:-translate-y-0.5 hover:bg-white"
              style={{ background: '#00e5c0', color: '#000', fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Start a Project
            </Link>
          </div>

          {/* Right */}
          <div className="reveal reveal-delay-1 flex flex-col gap-px" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)' }}>
            {highlights.map(h => (
              <div key={h.title} className="flex gap-4 items-start p-7 transition-colors"
                style={{ background: '#111820' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#161e28'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#111820'}>
                <span style={{ color: '#00e5c0', fontSize: '1.2rem', marginTop: 2 }}>◈</span>
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.95rem', marginBottom: 4 }}>{h.title}</div>
                  <div style={{ fontSize: '0.84rem', color: '#6b7a8a', lineHeight: 1.5 }}>{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
