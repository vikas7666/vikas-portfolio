'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Contact() {
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
    <section id="contact" ref={sectionRef} style={{ position: 'relative', zIndex: 2, background: '#080c10' }}>
      <div className="max-w-6xl mx-auto px-14 py-32 text-center">
        <div className="reveal flex items-center justify-center gap-3 mb-4"
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.12em', color: '#00e5c0', textTransform: 'uppercase' }}>
          Contact
        </div>
        <h2 className="reveal mb-3"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
          Let's build something<br /><em style={{ fontStyle: 'italic', color: '#00e5c0' }}>great together</em>
        </h2>

        <a href="mailto:vikas.shukla966@gmail.com"
          className="reveal block my-10 transition-all"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: 'clamp(1.4rem, 3.5vw, 3.5rem)',
            letterSpacing: '-0.01em',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.2)',
            textDecoration: 'none',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.webkitTextStroke = '1px #00e5c0'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.webkitTextStroke = '1px rgba(255,255,255,0.2)'}>
          vikas.shukla966@gmail.com
        </a>

        <div className="reveal flex gap-5 justify-center flex-wrap mb-14">
          <a href="mailto:vikas.shukla966@gmail.com"
            className="btn-clip inline-flex items-center gap-2 px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:bg-white"
            style={{ background: '#00e5c0', color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Send Me an Email
          </a>
          <a href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:border-[#00e5c0] hover:text-[#00e5c0]"
            style={{ background: 'transparent', color: '#e8edf2', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)' }}>
            Download Resume
          </a>
        </div>

        <div className="reveal flex justify-center gap-10">
          {[['GitHub', '#'], ['LinkedIn', '#'], ['Twitter', '#']].map(([label, href]) => (
            <a key={label} href={href}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6b7a8a', textDecoration: 'none' }}
              className="hover:text-[#00e5c0] transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
