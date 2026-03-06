import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../../utils/gsap'

const stats = [
  { value: 150, suffix: '+', label: 'Enterprise Clients' },
  { value: 130, suffix: '+', label: 'IT Projects Delivered' },
  { value: 4, suffix: '+', label: 'Cloud Platforms' },
]

const capabilities = [
  'Cloud Migration', 'Digital Transformation', 'Cybersecurity Solutions',
  'DevOps Services', 'Data Analytics', 'AI Integration',
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge + heading
      gsap.fromTo('.about-badge',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '.about-badge', start: 'top 88%', once: true } }
      )

      // Left content slides from left
      gsap.fromTo('.about-left',
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.about-left', start: 'top 88%', once: true } }
      )

      // Capability tags stagger
      gsap.fromTo('.about-tag',
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'back.out(1.5)', scrollTrigger: { trigger: '.about-tags', start: 'top 88%', once: true } }
      )

      // Stats slide from right
      gsap.fromTo('.about-stat-card',
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.about-right', start: 'top 88%', once: true } }
      )

      // Number counters
      document.querySelectorAll('.stat-number').forEach((el) => {
        const target = parseInt(el.getAttribute('data-target'), 10)
        const obj = { val: 0 }
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(obj, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => { el.textContent = Math.round(obj.val) },
            })
          },
          once: true,
        })
      })

      // Accent card
      gsap.fromTo('.about-accent-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: '.about-accent-card', start: 'top 88%', once: true } }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-24 relative overflow-hidden" id="about-company">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-100/40 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="about-left">
            <div className="about-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-6">
              About Company
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              Empowering businesses with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                innovative technology
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              We're a leading IT consulting team focused on empowering businesses with innovative
              technology solutions and digital transformation strategies. We believe in technology
              that transforms — fast, scalable, and reliable.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              Our goal is to give organizations the tools to achieve digital excellence without
              wasting time or budget. From cloud migrations to AI integrations, we handle it all
              with precision and expertise.
            </p>
            <div className="about-tags flex flex-wrap gap-2">
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="about-tag px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 cursor-default hover:-translate-y-0.5"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="about-right grid grid-cols-1 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="about-stat-card flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 hover:shadow-md hover:shadow-blue-100 transition-all duration-300 group"
              >
                <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent min-w-[110px] tabular-nums">
                  <span className="stat-number" data-target={stat.value}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <div>
                  <div className="text-slate-800 font-semibold text-lg">{stat.label}</div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent mt-2 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            ))}

            <div className="about-accent-card p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden shadow-lg shadow-blue-200">
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-white font-bold">Fast. Scalable. Reliable.</span>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Technology solutions that evolve with your business, delivering measurable
                  results at every stage of your digital journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
