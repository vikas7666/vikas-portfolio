'use client'
import { useEffect, useRef } from 'react'

const skills = [
  {
    icon: '⚛',
    name: 'React & Next.js',
    desc: 'Building performant SPAs and SSR applications with modern React patterns, hooks, and Next.js App Router.',
    tags: ['React 18', 'Next.js 14', 'App Router', 'RSC'],
    color: '#61dafb',
  },
  {
    icon: '🎨',
    name: 'Frontend Styling',
    desc: 'Crafting responsive, accessible UIs with semantic HTML, modern CSS, and utility-first Tailwind CSS.',
    tags: ['HTML5', 'CSS3', 'Tailwind', 'Framer Motion'],
    color: '#38bdf8',
  },
  {
    icon: '🖥',
    name: 'Node.js & Express',
    desc: 'Designing and building RESTful APIs, middleware, authentication, and scalable backend services.',
    tags: ['Node.js', 'Express', 'REST API', 'JWT'],
    color: '#68a063',
  },
  {
    icon: '🗄',
    name: 'Databases',
    desc: 'Modeling and querying relational and document databases for efficient, scalable data persistence.',
    tags: ['MongoDB', 'PostgreSQL', 'Prisma', 'Mongoose'],
    color: '#f6c915',
  },
  {
    icon: '☁',
    name: 'Cloud & DevOps',
    desc: 'Deploying and maintaining apps on modern cloud platforms with CI/CD pipelines and containerization.',
    tags: ['Vercel', 'Docker', 'GitHub Actions', 'AWS'],
    color: '#ff9900',
  },
  {
    icon: '🔧',
    name: 'Tools & Workflow',
    desc: 'Version control, package management, testing, and productivity tools for professional development.',
    tags: ['Git', 'TypeScript', 'Jest', 'Postman'],
    color: '#7c6bff',
  },
]

export default function Skills() {
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
    <section id="skills" ref={sectionRef} style={{ background: '#0e1318', position: 'relative', zIndex: 2 }}>
      <div className="max-w-6xl mx-auto px-14 py-32">
        <div className="section-tag reveal flex items-center gap-3 mb-5"
          style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.15em', color: '#00e5c0', textTransform: 'uppercase' }}>
          Tech Stack
          <span style={{ width: 60, height: 1, background: 'rgba(255,255,255,0.07)', display: 'inline-block' }} />
        </div>
        <h2 className="reveal mb-16"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          What I work with
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 1, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)' }}>
          {skills.map((skill, i) => (
            <div key={skill.name}
              className={`skill-card reveal ${i > 0 ? `reveal-delay-${Math.min(i, 3)}` : ''} relative overflow-hidden p-9 transition-colors`}
              style={{ background: '#111820' }}>
              <div className="skill-card-line" style={{ background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)` }} />
              <div style={{ fontSize: '1.6rem', marginBottom: 16 }}>{skill.icon}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1.05rem', marginBottom: 8 }}>{skill.name}</div>
              <div style={{ fontSize: '0.88rem', color: '#6b7a8a', lineHeight: 1.6, marginBottom: 16 }}>{skill.desc}</div>
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.06em', padding: '4px 10px', border: '1px solid rgba(255,255,255,0.07)', color: '#6b7a8a', borderRadius: 2 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
