import { useEffect, useRef } from 'react'
import { gsap } from '../../../utils/gsap'

const industries = [
  'Financial Services',
  'Healthcare',
  'Media, Entertainment & Gaming',
  'Technology Enablement',
  'Telecommunications',
  'Energy',
  'Consumer & Industrial Products',
  'Transportation & Travel',
  'Automobile Industry',
]

export default function Marquee() {
  const sectionRef = useRef(null)
  const doubled = [...industries, ...industries]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 90%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-6 sm:py-8 md:py-10 overflow-hidden border-y border-slate-100">
      <div className="relative flex">
        {/* Fade edges - narrower on mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-3 sm:gap-4 md:gap-6 animate-marquee whitespace-nowrap">
          {doubled.map((industry, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs sm:text-sm font-medium hover:text-nak-deep hover:border-nak-bright hover:bg-nak-bright/10 transition-colors duration-300 cursor-default"
            >
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-nak-bright shrink-0" />
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
