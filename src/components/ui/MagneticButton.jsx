import { useRef } from 'react'
import { gsap } from '../../utils/gsap'

export default function MagneticButton({ children, className = '', href, onClick, strength = 0.38, radius = 90 }) {
  const btnRef = useRef(null)
  const textRef = useRef(null)

  const handleMouseMove = (e) => {
    const btn = btnRef.current
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const dist = Math.sqrt(x * x + y * y)

    if (dist < radius) {
      gsap.to(btn, { x: x * strength, y: y * strength, duration: 0.35, ease: 'power2.out' })
      gsap.to(textRef.current, { x: x * (strength * 0.5), y: y * (strength * 0.5), duration: 0.35, ease: 'power2.out' })
    }
  }

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1.2, 0.5)' })
    gsap.to(textRef.current, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1.2, 0.5)' })
  }

  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      ref={btnRef}
      href={href}
      onClick={onClick}
      className={`magnetic-btn relative inline-flex items-center justify-center ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: 'transform' }}
    >
      <span ref={textRef} className="relative z-10 inline-flex items-center justify-center gap-2" style={{ willChange: 'transform' }}>
        {children}
      </span>
    </Tag>
  )
}
