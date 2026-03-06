import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../../utils/gsap'

const brands = [
  {
    name: 'Apple',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  { name: 'NVIDIA', logo: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M9.45 7.26v1.59H7.37V16h-2V8.85H3.31V7.26H9.45zm5.16 0l1.85 5.85 1.83-5.85h2.1L17.65 16h-2.4l-2.7-8.74h2.06zM12 7.26h2.3V16H12V7.26z" /></svg>) },
  { name: 'Walmart', logo: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 3l1.5 4.5L18 6l-3 3.5 2 4.5-4.5-2L9 17l-1.5-4.5L3 15l3-3.5-2-4.5 4.5 2z" /></svg>) },
  { name: 'Capital One', logo: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" /></svg>) },
  { name: 'TCS', logo: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>) },
  { name: 'Microsoft', logo: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M11.5 2.5h-9v9h9v-9zm1 0v9h9v-9h-9zm-1 10h-9v9h9v-9zm1 0v9h9v-9h-9z" /></svg>) },
  { name: 'Google', logo: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" /></svg>) },
  { name: 'Amazon', logo: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39.046.299.275-.147.192-2.79 2.342-6.138 3.38-3.347 1.036-6.958 1.057-10.838.055-1.184-.293-2.36-.78-3.51-1.49-.232-.15-.33-.298-.088-.584z" /></svg>) },
]

export default function Brands() {
  const sectionRef = useRef(null)
  const doubled = [...brands, ...brands]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.brands-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.brands-header', start: 'top 88%', once: true } }
      )
      gsap.fromTo('.brands-track',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.brands-track', start: 'top 92%', once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-slate-50 py-16 overflow-hidden border-b border-slate-100">
      <div className="brands-header max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold mb-2">Trusted Worldwide</p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">We Worked With Global Largest Brands</h2>
      </div>

      <div className="brands-track relative flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-8 animate-marquee-slow">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-white border border-slate-200 hover:border-nak-bright hover:shadow-md hover:shadow-nak-bright/20 transition-all duration-300 group cursor-default hover:-translate-y-1"
            >
              <div className="text-slate-300 group-hover:text-nak-bright transition-colors duration-300 group-hover:scale-110 transform">{brand.logo}</div>
              <span className="text-slate-400 group-hover:text-slate-700 text-xs font-semibold tracking-wider transition-colors duration-300">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
