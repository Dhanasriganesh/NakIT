import { useEffect, useRef } from 'react'
import { gsap } from '../../utils/gsap'

const services = [
  { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>), title: 'Financial Services', description: 'Secure, compliant, and scalable systems for banking, insurance, and financial institutions.', tags: ['Banking', 'InsurTech', 'Compliance'], iconBg: 'bg-blue-100', iconColor: 'text-blue-600', tagBg: 'bg-blue-50 text-blue-600 border-blue-200', accent: '#2563eb' },
  { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>), title: 'Healthcare', description: 'Patient care technology that streamlines operations and ensures regulatory compliance.', tags: ['Patient Care', 'HIPAA', 'Health IT'], iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600', tagBg: 'bg-cyan-50 text-cyan-700 border-cyan-200', accent: '#0891b2' },
  { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>), title: 'Media, Entertainment & Gaming', description: 'Immersive digital platforms for content creation, distribution, and interactive entertainment.', tags: ['Streaming', 'Gaming', 'Content'], iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600', tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-200', accent: '#4f46e5' },
  { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>), title: 'Technology Enablement', description: 'Strategic consulting to leverage cutting-edge solutions and drive measurable innovation.', tags: ['Cloud', 'AI/ML', 'DevOps'], iconBg: 'bg-blue-100', iconColor: 'text-blue-700', tagBg: 'bg-blue-50 text-blue-700 border-blue-200', accent: '#1d4ed8' },
  { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>), title: 'Telecommunications', description: 'Advanced network infrastructure and cloud communications for next-generation connectivity.', tags: ['5G', 'Network', 'VoIP'], iconBg: 'bg-sky-100', iconColor: 'text-sky-600', tagBg: 'bg-sky-50 text-sky-700 border-sky-200', accent: '#0284c7' },
  { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>), title: 'Energy', description: 'Smart energy management and renewable solutions for sustainable power infrastructure.', tags: ['Renewable', 'Smart Grid', 'IoT'], iconBg: 'bg-blue-100', iconColor: 'text-blue-500', tagBg: 'bg-blue-50 text-blue-600 border-blue-200', accent: '#3b82f6' },
  { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>), title: 'Consumer & Industrial Products', description: 'Manufacturing and supply chain digital transformation across consumer and industrial sectors.', tags: ['Manufacturing', 'Supply Chain', 'PLM'], iconBg: 'bg-indigo-100', iconColor: 'text-indigo-500', tagBg: 'bg-indigo-50 text-indigo-600 border-indigo-200', accent: '#6366f1' },
  { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>), title: 'Transportation & Travel', description: 'Integrated mobility and logistics platforms that enhance efficiency and passenger experiences.', tags: ['Logistics', 'Mobility', 'Booking'], iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600', tagBg: 'bg-cyan-50 text-cyan-700 border-cyan-200', accent: '#06b6d4' },
  { icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>), title: 'Automobile Industry', description: 'Automotive tech solutions for vehicle manufacturing, EV connectivity, and smart transport.', tags: ['EV Tech', 'Connected Cars', 'ADAS'], iconBg: 'bg-blue-100', iconColor: 'text-blue-600', tagBg: 'bg-blue-50 text-blue-600 border-blue-200', accent: '#2563eb' },
]

export default function ServicesOverview() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Clip-path reveal for section header ──────────────────────────
      gsap.fromTo('.services-badge',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '.services-header', start: 'top 88%', once: true } }
      )
      gsap.fromTo('.services-title',
        { clipPath: 'inset(0 0 100% 0)', y: 30, opacity: 0 },
        { clipPath: 'inset(0 0 0% 0)', y: 0, opacity: 1, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: '.services-title', start: 'top 88%', once: true } }
      )
      gsap.fromTo('.services-desc',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: '.services-desc', start: 'top 90%', once: true } }
      )

      // ── Card stack-deal animation ─────────────────────────────────────
      const cards = gsap.utils.toArray('.service-card')

      // Set the "stacked deck" initial state
      gsap.set(cards, {
        opacity: 0,
        y: (i) => 60 + i * 4,
        scale: (i) => 0.72 + i * 0.012,
        rotation: (i) => ((i % 3) - 1) * (5 - i * 0.4),
        transformOrigin: 'center bottom',
        boxShadow: '0 24px 48px rgba(0,0,0,0.12)',
      })

      // Deal cards out to grid positions
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        duration: 0.75,
        stagger: {
          amount: 0.85,
          from: 'center',
          grid: 'auto',
          ease: 'power2.inOut',
        },
        ease: 'back.out(1.5)',
        scrollTrigger: { trigger: '.services-grid', start: 'top 82%', once: true },
      })

      // ── 3D perspective tilt on hover ──────────────────────────────────
      cards.forEach((card) => {
        const icon = card.querySelector('.card-icon-wrap')

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
          gsap.to(card, {
            rotateX: -y * 10,
            rotateY: x * 10,
            transformPerspective: 700,
            scale: 1.03,
            boxShadow: `${-x * 10}px ${-y * 10}px 30px rgba(37,99,235,0.12), 0 8px 32px rgba(0,0,0,0.08)`,
            duration: 0.25,
            ease: 'power2.out',
          })
          if (icon) gsap.to(icon, { x: x * 5, y: y * 5, duration: 0.25, ease: 'power2.out' })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotateX: 0, rotateY: 0, scale: 1,
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            duration: 0.6, ease: 'elastic.out(1.1, 0.45)',
          })
          if (icon) gsap.to(icon, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1.1, 0.45)' })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-slate-50 py-24 relative overflow-hidden" id="services">
      {/* Floating accent blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cyan-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="services-header text-center mb-16 overflow-hidden">
          <div className="services-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-4">
            Services Overview
          </div>
          <h2 className="services-title text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Industry-focused{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              technology solutions
            </span>
          </h2>
          <p className="services-desc text-slate-500 text-lg max-w-2xl mx-auto">
            Consulting services tailored to your business needs, delivering transformative results
            across every major industry vertical.
          </p>
        </div>

        {/* Card grid */}
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group p-6 rounded-2xl bg-white border border-slate-200 cursor-default select-none"
              style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
            >
              {/* Icon */}
              <div className={`card-icon-wrap ${service.iconBg} ${service.iconColor} mb-4 p-2.5 rounded-xl inline-flex transition-colors duration-300`}
                style={{ willChange: 'transform' }}>
                {service.icon}
              </div>

              {/* Shimmer line */}
              <div className="w-8 h-0.5 rounded-full mb-4" style={{ background: service.accent, opacity: 0.6 }} />

              <h3 className="text-slate-900 font-bold text-lg mb-3 group-hover:text-blue-700 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className={`text-xs px-2.5 py-1 rounded-full ${service.tagBg} font-medium border`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
