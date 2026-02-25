'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-14 py-6"
      style={{ backdropFilter: 'blur(20px)', background: 'rgba(8,12,16,0.7)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
        VS<span style={{ color: '#00e5c0' }}>.</span>
      </div>
      <div className="hidden md:flex gap-10">
        {['skills', 'projects', 'about', 'contact'].map(item => (
          <Link key={item} href={`#${item}`}
            style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b7a8a', textDecoration: 'none' }}
            className="hover:text-[#00e5c0] transition-colors">
            {item}
          </Link>
        ))}
      </div>
    </nav>
  )
}
