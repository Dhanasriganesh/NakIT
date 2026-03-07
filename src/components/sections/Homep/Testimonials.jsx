import { useEffect, useRef } from 'react'
import { gsap } from '../../../utils/gsap'

const testimonials = [
  { quote: 'Working with NAK IT Group has been a game-changer for our organization. Their strategic approach to digital transformation and commitment to excellence is unmatched in the industry.', author: 'Sarah Mitchell', role: 'CTO, Capital One', avatar: 'SM', accent: 'from-nak-deep to-nak-bright' },
  { quote: "Their team is professional, knowledgeable, and truly understands our business needs. Whether it's a complex workflow or a lightweight self-service feature, the experience always feels effortless.", author: 'James Chen', role: 'VP Engineering, NVIDIA', avatar: 'JC', accent: 'from-nak-deep to-nak-bright' },
  { quote: "NAK IT Group delivered our cloud migration on time and under budget. We've seen 40% faster operations since deployment. The expertise they bring to every project is exceptional.", author: 'Priya Sharma', role: 'Director of Technology, TCS', avatar: 'PS', accent: 'from-cyan-500 to-nak-bright' },
  { quote: 'The AI integration solutions they built transformed how we handle data analytics. Our team now makes decisions 3x faster with actionable insights delivered in real-time.', author: 'Michael Torres', role: 'Head of Data, Walmart', avatar: 'MT', accent: 'from-indigo-500 to-nak-bright' },
  { quote: 'From initial consulting to final delivery, transparent communication and a product that exceeded our expectations in every way. Truly a world-class team.', author: 'Lisa Wang', role: 'SVP Digital, Apple', avatar: 'LW', accent: 'from-nak-bright to-cyan-500' },
  { quote: 'Outstanding cybersecurity solutions that gave us complete confidence in our infrastructure. Their 24/7 monitoring catches and resolves issues before they become problems.', author: 'David Kumar', role: 'CISO, Microsoft', avatar: 'DK', accent: 'from-sky-500 to-nak-bright' },
]

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header clip-path reveal
      gsap.fromTo('.testimonials-title',
        { clipPath: 'inset(0 0 100% 0)', y: 20, opacity: 0 },
        { clipPath: 'inset(0 0 0% 0)', y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', scrollTrigger: { trigger: '.testimonials-header', start: 'top 88%', once: true } }
      )
      gsap.fromTo('.testimonials-sub',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: '.testimonials-header', start: 'top 88%', once: true } }
      )

      // Cards alternating left/right stagger
      gsap.fromTo('.testimonial-card:nth-child(odd)',
        { x: -50, opacity: 0, rotateY: -5 },
        { x: 0, opacity: 1, rotateY: 0, duration: 0.75, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.testimonials-grid', start: 'top 85%', once: true } }
      )
      gsap.fromTo('.testimonial-card:nth-child(even)',
        { x: 50, opacity: 0, rotateY: 5 },
        { x: 0, opacity: 1, rotateY: 0, duration: 0.75, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.testimonials-grid', start: 'top 85%', once: true } }
      )

      // 3D tilt hover on each card
      const cards = gsap.utils.toArray('.testimonial-card')
      cards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
          gsap.to(card, {
            rotateX: -y * 8,
            rotateY: x * 8,
            transformPerspective: 600,
            scale: 1.03,
            boxShadow: `${-x * 8}px ${-y * 8}px 24px rgba(37,99,235,0.10), 0 4px 24px rgba(0,0,0,0.07)`,
            duration: 0.25, ease: 'power2.out',
          })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotateX: 0, rotateY: 0, scale: 1,
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            duration: 0.55, ease: 'elastic.out(1.1, 0.45)',
          })
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-nak-bright/20 blur-[100px] pointer-events-none" />

      <div className="container-app relative">
        {/* Header */}
        <div className="testimonials-header text-center mb-16 overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-nak-bright/10 border border-nak-bright/30 text-nak-deep text-xs font-semibold uppercase tracking-widest mb-4">
            Client Stories
          </div>
          <h2 className="testimonials-title text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-nak-deep to-cyan-500 bg-clip-text text-transparent">industry leaders</span>
          </h2>
          <p className="testimonials-sub text-slate-500 text-lg max-w-xl mx-auto">
            See how NAK IT Group has helped global brands achieve digital excellence and drive transformation.
          </p>
        </div>

        {/* Grid */}
        <div className="testimonials-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card p-6 rounded-2xl bg-white border border-slate-200 flex flex-col cursor-default select-none"
              style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
            >
              {/* Quote mark */}
              <div className="text-5xl text-nak-bright/60 font-serif leading-none mb-3 select-none">"</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{t.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-slate-900 font-semibold text-sm">{t.author}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
