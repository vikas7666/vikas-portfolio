'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-14 py-6"
      style={{ backdropFilter: 'blur(20px)', background: 'rgba(8,12,16,0.8)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.01em', fontStyle: 'italic' }}>
        Vikas<span style={{ color: '#00e5c0', fontStyle: 'normal' }}>.</span>
      </div>
      <div className="hidden md:flex gap-10">
        {['skills', 'projects', 'about', 'contact'].map(item => (
          <Link key={item} href={`#${item}`}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6b7a8a', textDecoration: 'none' }}
            className="hover:text-[#00e5c0] transition-colors">
            {item}
          </Link>
        ))}
      </div>
    </nav>
  )
}
