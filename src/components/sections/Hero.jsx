import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../utils/gsap'
import MagneticButton from '../ui/MagneticButton'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Floating blobs ────────────────────────────────────────────────
      gsap.to('.hero-blob-1', { y: -40, x: 20, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.hero-blob-2', { y: 30, x: -15, duration: 7.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })
      gsap.to('.hero-blob-3', { y: -25, x: 10, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 })

      // ── Entrance timeline ─────────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 })

      tl.fromTo('.hero-badge',
        { y: -24, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.65 }
      )
      .fromTo('.hero-line-1',
        { clipPath: 'inset(0 0 100% 0)', y: 50, opacity: 0 },
        { clipPath: 'inset(0 0 0% 0)', y: 0, opacity: 1, duration: 0.9 }, '-=0.15'
      )
      .fromTo('.hero-line-2',
        { clipPath: 'inset(0 0 100% 0)', y: 50, opacity: 0 },
        { clipPath: 'inset(0 0 0% 0)', y: 0, opacity: 1, duration: 0.9 }, '-=0.6'
      )
      .fromTo('.hero-line-3',
        { clipPath: 'inset(0 0 100% 0)', y: 50, opacity: 0 },
        { clipPath: 'inset(0 0 0% 0)', y: 0, opacity: 1, duration: 0.9 }, '-=0.6'
      )
      .fromTo('.hero-sub',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }, '-=0.4'
      )
      .fromTo('.hero-btns',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }, '-=0.35'
      )
      .fromTo('.hero-stat',
        { y: 36, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.1 }, '-=0.25'
      )
      .fromTo('.hero-scroll-indicator',
        { opacity: 0, y: 10 },
        { opacity: 0.5, y: 0, duration: 0.5 }, '-=0.1'
      )

      // ── Scroll indicator bounce ───────────────────────────────────────
      gsap.to('.hero-scroll-indicator', { y: 8, duration: 1.2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2.5 })

      // ── Parallax blobs on scroll ──────────────────────────────────────
      gsap.to('.hero-blob-1', {
        y: -120, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
      })
      gsap.to('.hero-blob-2', {
        y: -60, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      })

      // ── Stat cards pop on hover ────────────────────────────────────────
      document.querySelectorAll('.hero-stat').forEach((card) => {
        card.addEventListener('mouseenter', () => gsap.to(card, { y: -6, scale: 1.04, boxShadow: '0 12px 32px rgba(37,99,235,0.14)', duration: 0.3, ease: 'power2.out' }))
        card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, scale: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.06)', duration: 0.5, ease: 'elastic.out(1.1, 0.5)' }))
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-white">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Blobs */}
      <div className="hero-blob-1 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-200/30 blur-[120px] pointer-events-none" />
      <div className="hero-blob-2 absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-[100px] pointer-events-none" />
      <div className="hero-blob-3 absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-100/30 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          New — Introducing NAK IT Group
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 leading-tight tracking-tighter mb-6 overflow-hidden">
          <span className="hero-line-1 block">Transform your</span>
          <span className="hero-line-2 block">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">business</span>{' '}with expert
          </span>
          <span className="hero-line-3 block">IT consulting</span>
        </h1>

        {/* Sub */}
        <p className="hero-sub max-w-2xl mx-auto text-slate-500 text-lg md:text-xl leading-relaxed mb-10">
          We provide comprehensive IT consulting services to help businesses optimize their technology
          infrastructure, streamline operations, and achieve digital transformation goals.
        </p>

        {/* Magnetic CTA Buttons */}
        <div className="hero-btns flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <MagneticButton
            href="#services"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold text-base shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-shadow duration-300"
          >
            Explore Services
          </MagneticButton>
          <MagneticButton
            href="#about-company"
            className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-base shadow-sm hover:border-blue-300 hover:text-blue-700 transition-colors duration-300"
          >
            Learn More
          </MagneticButton>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: '150+', label: 'Enterprise Clients' },
            { value: '130+', label: 'Projects Delivered' },
            { value: '10+', label: 'Years Experience' },
            { value: '4+', label: 'Cloud Platforms' },
          ].map((stat) => (
            <div key={stat.label} className="hero-stat p-4 rounded-2xl bg-white border border-slate-200 shadow-sm cursor-default" style={{ willChange: 'transform' }}>
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-indicator mt-16 flex flex-col items-center gap-2">
          <span className="text-slate-400 text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
