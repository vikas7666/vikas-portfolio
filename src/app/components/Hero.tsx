import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center" style={{ zIndex: 2 }}>
      {/* Orbs */}
      <div className="absolute rounded-full pointer-events-none" style={{ width: 400, height: 400, background: 'rgba(0,229,192,0.06)', filter: 'blur(100px)', top: '10%', right: '20%', zIndex: 1 }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 300, height: 300, background: 'rgba(124,107,255,0.06)', filter: 'blur(100px)', bottom: '20%', left: '10%', zIndex: 1 }} />

      <div className="relative max-w-6xl mx-auto px-14 py-40" style={{ zIndex: 2 }}>
        {/* Tag */}
        <div className="animate-fade-up-1 flex items-center gap-3 mb-7"
          style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00e5c0' }}>
          <span style={{ width: 32, height: 1, background: '#00e5c0', display: 'inline-block' }} />
          Available for work
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-2 mb-8"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(3.5rem, 9vw, 8rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}>
          Full Stack<br />
          <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Developer</span><br />
          <span style={{ color: '#00e5c0' }}>&amp; Builder</span>
        </h1>

        {/* Description */}
        <p className="animate-fade-up-3 mb-14 max-w-xl"
          style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#6b7a8a' }}>
          Crafting seamless digital experiences from pixel to server. Specialized in React, Next.js, and Node.js ecosystems — turning ideas into production-ready products.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4 flex gap-5 flex-wrap">
          <Link href="#projects"
            className="btn-clip inline-flex items-center gap-2 px-8 py-3 font-medium transition-all hover:-translate-y-0.5 hover:bg-white"
            style={{ background: '#00e5c0', color: '#000', fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}>
            View My Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 transition-all hover:-translate-y-0.5"
            style={{ background: 'transparent', color: '#e8edf2', fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.07)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#00e5c0'; (e.currentTarget as HTMLElement).style.color = '#00e5c0'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.color = '#e8edf2'; }}>
            Get In Touch
          </Link>
        </div>

        {/* Stats — desktop only */}
        <div className="animate-fade-up-5 hidden lg:flex absolute right-14 bottom-20 flex-col gap-0.5">
          {[['3+', 'Years Exp'], ['20+', 'Projects'], ['10+', 'Happy Clients']].map(([num, label]) => (
            <div key={label} className="flex items-baseline gap-2 px-6 py-4"
              style={{ border: '1px solid rgba(255,255,255,0.07)', background: '#111820' }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#00e5c0' }}>{num}</span>
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.1em', color: '#6b7a8a', textTransform: 'uppercase' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="animate-fade-up-6 absolute bottom-10 left-14 flex items-center gap-3"
          style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6b7a8a', textTransform: 'uppercase' }}>
          <span className="scroll-line" style={{ width: 40, height: 1, background: '#6b7a8a', display: 'inline-block' }} />
          Scroll to explore
        </div>
      </div>
    </section>
  )
}
