'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    id: '01',
    emoji: '🛒',
    name: 'E-Commerce Platform',
    desc: 'A full-stack e-commerce app with product management, cart, payments via Stripe, and admin dashboard.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
    gradient: 'linear-gradient(135deg, #0d1f3c, #1a3a5c)',
    demo: '#',
    github: '#',
  },
  {
    id: '02',
    emoji: '📊',
    name: 'Analytics Dashboard',
    desc: 'Real-time analytics dashboard with interactive charts, user management, and role-based access control.',
    stack: ['React', 'Express', 'PostgreSQL', 'Chart.js'],
    gradient: 'linear-gradient(135deg, #1a0d3c, #3a1a5c)',
    demo: '#',
    github: '#',
  },
  {
    id: '03',
    emoji: '💬',
    name: 'Real-Time Chat App',
    desc: 'WebSocket-powered chat application with rooms, direct messages, media sharing, and user presence.',
    stack: ['Next.js', 'Socket.io', 'MongoDB', 'JWT'],
    gradient: 'linear-gradient(135deg, #0d2e1a, #1a5c30)',
    demo: '#',
    github: '#',
  },
]

export default function Projects() {
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
    <section id="projects" ref={sectionRef} style={{ position: 'relative', zIndex: 2, background: '#080c10' }}>
      <div className="max-w-6xl mx-auto px-14 py-32">
        <div className="reveal flex items-center gap-3 mb-5"
          style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.15em', color: '#00e5c0', textTransform: 'uppercase' }}>
          Featured Work
          <span style={{ width: 60, height: 1, background: 'rgba(255,255,255,0.07)', display: 'inline-block' }} />
        </div>
        <h2 className="reveal mb-16"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
          Projects I've built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={p.id}
              className={`project-card reveal ${i > 0 ? `reveal-delay-${i}` : ''} transition-all duration-300`}
              style={{ background: '#111820', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
              {/* Thumb */}
              <div className="flex items-center justify-center text-6xl relative"
                style={{ height: 200, background: p.gradient }}>
                {p.emoji}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, #111820)' }} />
              </div>
              {/* Body */}
              <div className="p-7">
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: '#00e5c0', letterSpacing: '0.1em', marginBottom: 12 }}>
                  {p.id} / Project
                </div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.3rem', letterSpacing: '-0.01em', marginBottom: 10 }}>
                  {p.name}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#6b7a8a', lineHeight: 1.65, marginBottom: 20 }}>
                  {p.desc}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.stack.map(t => (
                    <span key={t} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.63rem', letterSpacing: '0.06em', padding: '4px 10px', background: 'rgba(0,229,192,0.08)', color: '#00e5c0', border: '1px solid rgba(0,229,192,0.2)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5">
                  <a href={p.demo} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.08em', color: '#6b7a8a', textDecoration: 'none', textTransform: 'uppercase' }}
                    className="hover:text-[#00e5c0] transition-colors">↗ Live Demo</a>
                  <a href={p.github} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.08em', color: '#6b7a8a', textDecoration: 'none', textTransform: 'uppercase' }}
                    className="hover:text-[#00e5c0] transition-colors">⌥ GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
