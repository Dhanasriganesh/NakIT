import { useEffect, useRef } from 'react'
import { gsap } from '../../../utils/gsap'
import heroVideo from '../../../assets/nakit.mp4'

export default function Hero() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-video-overlay', { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 })
      gsap.fromTo('.hero-scroll-indicator', { opacity: 0, y: 12 }, { opacity: 0.8, y: 0, duration: 0.8, ease: 'power2.out', delay: 1.2 })
      gsap.to('.hero-scroll-indicator', { y: 8, duration: 1.2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden " id="hero">
      {/* Video starts just below header; space above is behind the fixed header */}
      <video
        ref={videoRef}
        src={heroVideo}
        className="absolute  md:top-28 left-0 right-0 bottom-0 w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      {/* Subtle overlay for contrast (optional) */}
      <div className="hero-video-overlay absolute top-24 md:top-28 left-0 right-0 bottom-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

      {/* Scroll cue */}
      <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/80 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
