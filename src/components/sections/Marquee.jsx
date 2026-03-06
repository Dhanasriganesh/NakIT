import { useEffect, useRef } from 'react'
import { gsap } from '../../utils/gsap'

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
    <section ref={sectionRef} className="bg-white py-10 overflow-hidden border-y border-slate-100">
      <div className="relative flex">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {doubled.map((industry, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-300 cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
