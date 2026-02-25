export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-14 py-7 gap-3 md:gap-0"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)', position: 'relative', zIndex: 2, background: '#080c10' }}>
      {['© 2025 — Vikas Shukla', 'Built with Next.js + Tailwind', 'Available for freelance'].map(text => (
        <span key={text} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.04em', color: '#6b7a8a' }}>
          {text}
        </span>
      ))}
    </footer>
  )
}
