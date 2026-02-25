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
        <div className="reveal flex items-center justify-center gap-3 mb-5"
          style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.15em', color: '#00e5c0', textTransform: 'uppercase' }}>
          Contact
        </div>
        <h2 className="reveal mb-3"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Let's build something<br />great together
        </h2>

        <a href="mailto:vikas.shukla966@gmail.com"
          className="reveal block my-8 transition-all hover:opacity-70"
          style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(1.5rem, 4vw, 4rem)', letterSpacing: '-0.02em',
            color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.2)',
            textDecoration: 'none',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.WebkitTextStroke = '1px #00e5c0'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.WebkitTextStroke = '1px rgba(255,255,255,0.2)'}>
          vikas.shukla966@gmail.com
        </a>

        <div className="reveal flex gap-5 justify-center flex-wrap mb-12">
          <a href="mailto:vikas.shukla966@gmail.com"
            className="btn-clip inline-flex items-center gap-2 px-8 py-3 transition-all hover:-translate-y-0.5 hover:bg-white"
            style={{ background: '#00e5c0', color: '#000', fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Send Me an Email
          </a>
          <a href="#"
            className="inline-flex items-center gap-2 px-8 py-3 transition-all hover:-translate-y-0.5"
            style={{ background: 'transparent', color: '#e8edf2', fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.07)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#00e5c0'; (e.currentTarget as HTMLElement).style.color = '#00e5c0'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.color = '#e8edf2'; }}>
            Download Resume
          </a>
        </div>

        <div className="reveal flex justify-center gap-8">
          {[['⌬ GitHub', '#'], ['⌥ LinkedIn', '#'], ['◆ Twitter', '#']].map(([label, href]) => (
            <a key={label} href={href}
              style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b7a8a', textDecoration: 'none' }}
              className="hover:text-[#00e5c0] transition-colors flex items-center gap-2">
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
