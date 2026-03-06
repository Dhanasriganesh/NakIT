import { useEffect, useRef } from 'react'
import { gsap } from '../../utils/gsap'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Off-screen on mount
    gsap.set([dot, ring], { x: -200, y: -200 })
    gsap.set(dot,  { opacity: 0, scale: 1 })
    gsap.set(ring, { opacity: 0, scale: 1 })

    let visible = false

    // ── Position tracking ────────────────────────────────────────────
    const onMove = (e) => {
      if (!visible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.4, ease: 'power2.out' })
        visible = true
      }
      // Dot: near-instant snap
      gsap.to(dot, {
        x: e.clientX, y: e.clientY,
        duration: 0.06, ease: 'none',
      })
      // Ring: smooth trail
      gsap.to(ring, {
        x: e.clientX, y: e.clientY,
        duration: 0.45, ease: 'power3.out',
      })
    }

    // ── Hover states ─────────────────────────────────────────────────
    const onLinkEnter = () => {
      gsap.to(dot,  { scale: 0, duration: 0.2, ease: 'power2.out' })
      gsap.to(ring, {
        scale: 1.7,
        borderColor: 'rgba(37,99,235,0.7)',
        backgroundColor: 'rgba(37,99,235,0.07)',
        duration: 0.35, ease: 'power3.out',
      })
    }
    const onLinkLeave = () => {
      gsap.to(dot,  { scale: 1, duration: 0.3, ease: 'back.out(2)' })
      gsap.to(ring, {
        scale: 1,
        borderColor: 'rgba(15,23,42,0.22)',
        backgroundColor: 'transparent',
        duration: 0.4, ease: 'power3.out',
      })
    }

    const onBtnEnter = () => {
      gsap.to(dot,  { scale: 0, duration: 0.2, ease: 'power2.out' })
      gsap.to(ring, {
        scale: 2,
        borderColor: 'rgba(37,99,235,0.55)',
        backgroundColor: 'rgba(37,99,235,0.09)',
        duration: 0.35, ease: 'power3.out',
      })
    }
    const onBtnLeave = () => {
      gsap.to(dot,  { scale: 1, duration: 0.3, ease: 'back.out(2)' })
      gsap.to(ring, {
        scale: 1,
        borderColor: 'rgba(15,23,42,0.22)',
        backgroundColor: 'transparent',
        duration: 0.45, ease: 'elastic.out(1, 0.55)',
      })
    }

    const onLeaveWindow = () => gsap.to([dot, ring], { opacity: 0, duration: 0.35 })
    const onEnterWindow = () => gsap.to([dot, ring], { opacity: 1, duration: 0.2 })

    // ── Mousedown / up pulse ─────────────────────────────────────────
    const onDown = () => {
      gsap.to(ring, { scale: 0.85, duration: 0.12, ease: 'power2.out' })
      gsap.to(dot,  { scale: 0.6,  duration: 0.12, ease: 'power2.out' })
    }
    const onUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.35, ease: 'elastic.out(1.2, 0.5)' })
      gsap.to(dot,  { scale: 1, duration: 0.25, ease: 'back.out(2)' })
    }

    window.addEventListener('mousemove',  onMove)
    window.addEventListener('mousedown',  onDown)
    window.addEventListener('mouseup',    onUp)
    document.addEventListener('mouseleave', onLeaveWindow)
    document.addEventListener('mouseenter', onEnterWindow)

    // Attach hover listeners to all interactive elements
    const attach = (selector, enter, leave) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
      })
    }
    attach('a, input, textarea, select, label, [data-cursor]', onLinkEnter, onLinkLeave)
    attach('button, .magnetic-btn', onBtnEnter, onBtnLeave)

    return () => {
      window.removeEventListener('mousemove',  onMove)
      window.removeEventListener('mousedown',  onDown)
      window.removeEventListener('mouseup',    onUp)
      document.removeEventListener('mouseleave', onLeaveWindow)
      document.removeEventListener('mouseenter', onEnterWindow)
    }
  }, [])

  return (
    <>
      {/* Inner dot — sharp, instant */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 5, height: 5,
          borderRadius: '50%',
          background: '#0f172a',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%,-50%)',
          willChange: 'transform, opacity',
        }}
      />
      {/* Outer ring — lagging, responsive */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 28, height: 28,
          borderRadius: '50%',
          border: '1.5px solid rgba(15,23,42,0.22)',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%,-50%)',
          willChange: 'transform, opacity',
          backdropFilter: 'blur(0px)',
        }}
      />
    </>
  )
}
