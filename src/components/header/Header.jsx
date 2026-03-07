import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { gsap } from '../../utils/gsap'
import logo from '../../assets/nakitlogo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Career', to: '/career' },
  { label: 'Contact', to: '/contact' },
]

const SCROLL_THRESHOLD = 60
const SCROLL_DELTA = 80 // pixels to scroll before hide/show to avoid jitter and allow smooth animation

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const lastScrollY = useRef(0)
  const scrollYWhenVisible = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      if (y <= SCROLL_THRESHOLD) {
        setHeaderVisible(true)
        scrollYWhenVisible.current = y
      } else if (y > lastScrollY.current) {
        // Scrolling down: only hide after scrolling down by at least SCROLL_DELTA from when header was visible
        if (y >= scrollYWhenVisible.current + SCROLL_DELTA) setHeaderVisible(false)
      } else {
        // Scrolling up: show header (curtain down)
        setHeaderVisible(true)
        scrollYWhenVisible.current = y
      }
      lastScrollY.current = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.header-logo', { y: -30, opacity: 0, duration: 0.7 })
        .from('.header-nav-link', { y: -20, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.4')
        .from('.header-cta', { y: -20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
    }, headerRef)
    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={headerRef}
      className={`header-curtain fixed top-0 left-0 right-0 z-50 ${
        !headerVisible ? 'header-curtain--hidden' : ''
      } ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm shadow-slate-200/60'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="header-logo flex items-center gap-3 group">
          <img src={logo} alt="NAK IT Solutions" className="h-18 w-28 object-contain transition-transform duration-300 group-hover:scale-105" />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `header-nav-link text-sm transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-nak-bright after:transition-all after:duration-300 ${
                  isActive
                    ? 'text-nak-deep font-semibold after:w-full'
                    : 'font-medium text-nak-muted hover:text-nak-bright after:w-0 hover:after:w-full'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
       

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-nak-muted hover:text-nak-text transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors py-1 ${
                    isActive ? 'text-nak-deep font-semibold' : 'text-nak-muted hover:text-nak-bright'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="mt-2 px-5 py-2.5 rounded-full bg-nak-deep hover:bg-nak-bright text-white text-sm font-semibold text-center transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
