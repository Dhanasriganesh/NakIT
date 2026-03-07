import { useEffect, useRef } from 'react'
import { gsap } from '../../../utils/gsap'
import MagneticButton from '../../ui/MagneticButton'

const ctaStats = [
  { value: '10k+', label: 'Developers' },
  { value: '50k+', label: 'Projects Built' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
]

export default function CTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })

      tl.from('.cta-badge', { y: -20, opacity: 0, duration: 0.5 })
        .from('.cta-headline', { y: 40, opacity: 0, duration: 0.75 }, '-=0.2')
        .from('.cta-sub', { y: 25, opacity: 0, duration: 0.6 }, '-=0.35')
        .from('.cta-btn', { scale: 0.9, opacity: 0, duration: 0.45, stagger: 0.12 }, '-=0.3')
        .from('.cta-stat', { y: 20, opacity: 0, duration: 0.4, stagger: 0.08 }, '-=0.2')
        .from('.cta-contact-row', { y: 15, opacity: 0, duration: 0.4 }, '-=0.1')

      // Floating blobs
      gsap.to('.cta-blob-1', { y: -25, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.cta-blob-2', { y: 20, duration: 6.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.5 })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-nak-deep via-nak-text to-nak-deep py-24 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="cta-blob-1 absolute top-1/3 left-1/4 w-[500px] h-[400px] rounded-full bg-nak-bright/10 blur-[100px] pointer-events-none" />
      <div className="cta-blob-2 absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative text-center">
        <div className="cta-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-nak-bright animate-pulse" />
          Get Started Today
        </div>

        <h2 className="cta-headline text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-6">
          Ready to build<br />
          <span className="text-nak-bright">something amazing?</span>
        </h2>

        <p className="cta-sub text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Join thousands of organizations who are transforming faster with NAK IT Group. Start your
          free consultation today and experience the difference.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <MagneticButton
            href="mailto:Info@nakitgroup.com"
            className="cta-btn w-full sm:w-auto px-8 py-4 rounded-full bg-white text-nak-deep font-bold text-base shadow-xl shadow-black/20"
          >
            Contact Us Now
          </MagneticButton>
          <MagneticButton
            href="#services"
            className="cta-btn w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 border border-white/25 text-white font-bold text-base hover:bg-white/20 hover:border-white/40 transition-colors duration-300"
          >
            View Services
          </MagneticButton>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
          {ctaStats.map((stat) => (
            <div key={stat.label} className="cta-stat text-center">
              <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-nak-bright/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="cta-contact-row flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-white/10">
          <a href="tel:+17133203582" className="flex items-center gap-2 text-white/90/70 hover:text-white transition-colors text-sm">
            <svg className="w-4 h-4 text-nak-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +1 7133203582
          </a>
          <a href="mailto:Info@nakitgroup.com" className="flex items-center gap-2 text-white/90/70 hover:text-white transition-colors text-sm">
            <svg className="w-4 h-4 text-nak-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Info@nakitgroup.com
          </a>
          <span className="flex items-center gap-2 text-white/90/70 text-sm">
            <svg className="w-4 h-4 text-nak-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Charleston, South Carolina 29406
          </span>
        </div>
      </div>
    </section>
  )
}
