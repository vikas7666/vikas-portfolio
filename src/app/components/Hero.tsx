'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center" style={{ zIndex: 2 }}>
      {/* Orbs */}
      <div className="absolute rounded-full pointer-events-none" style={{ width: 400, height: 400, background: 'rgba(0,229,192,0.06)', filter: 'blur(100px)', top: '10%', right: '20%', zIndex: 1 }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 300, height: 300, background: 'rgba(124,107,255,0.06)', filter: 'blur(100px)', bottom: '20%', left: '10%', zIndex: 1 }} />

      <div className="relative max-w-6xl mx-auto px-14 py-40" style={{ zIndex: 2 }}>
        {/* Tag */}
        <div className="animate-fade-up-1 flex items-center gap-3 mb-8"
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00e5c0', fontWeight: 400 }}>
          <span style={{ width: 32, height: 1, background: '#00e5c0', display: 'inline-block' }} />
          Available for work
        </div>

        {/* Headline — Playfair Display for elegance */}
        <h1 className="animate-fade-up-2 mb-6"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(3.5rem, 8vw, 7.5rem)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
          Full Stack<br />
          <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.25)', fontStyle: 'italic' }}>Developer</span><br />
          <span style={{ color: '#00e5c0' }}>&amp; Builder</span>
        </h1>

        {/* Description — Inter for readability */}
        <p className="animate-fade-up-3 mb-14 max-w-xl"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', lineHeight: 1.75, color: '#6b7a8a', fontWeight: 400 }}>
          Crafting seamless digital experiences from pixel to server. Specialized in React, Next.js, and Node.js ecosystems — turning ideas into production-ready products.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4 flex gap-5 flex-wrap">
          <Link href="#projects"
            className="btn-clip inline-flex items-center gap-2 px-8 py-3.5 font-medium transition-all hover:-translate-y-0.5 hover:bg-white"
            style={{ background: '#00e5c0', color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none' }}>
            View My Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:border-[#00e5c0] hover:text-[#00e5c0]"
            style={{ background: 'transparent', color: '#e8edf2', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)' }}>
            Get In Touch
          </Link>
        </div>

        {/* Stats */}
        <div className="animate-fade-up-5 hidden lg:flex absolute right-14 bottom-20 flex-col gap-0.5">
          {[['3+', 'Years Exp'], ['20+', 'Projects'], ['10+', 'Happy Clients']].map(([num, label]) => (
            <div key={label} className="flex items-baseline gap-3 px-6 py-4"
              style={{ border: '1px solid rgba(255,255,255,0.07)', background: '#111820' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', color: '#00e5c0' }}>{num}</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.1em', color: '#6b7a8a', textTransform: 'uppercase' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="animate-fade-up-6 absolute bottom-10 left-14 flex items-center gap-3"
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#6b7a8a', textTransform: 'uppercase' }}>
          <span className="scroll-line" style={{ width: 40, height: 1, background: '#6b7a8a', display: 'inline-block' }} />
          Scroll to explore
        </div>
      </div>
    </section>
  )
}
