import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { gsap } from '../../utils/gsap'
import logo from '../../assets/nak-it-logo.png'

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
      <div className="container-app flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="header-logo flex items-center gap-3 sm:gap-4 group shrink-0 min-w-0">
          <img
            src={logo}
            alt="NAK IT Solutions"
            className="h-48 sm:h-20 md:h-18 w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105"
            decoding="async"
            fetchPriority="high"
          />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `header-nav-link text-xs lg:text-sm transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-nak-bright after:transition-all after:duration-300 whitespace-nowrap ${
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

        {/* Mobile Menu Button - min touch target 44px */}
        <button
          className="md:hidden p-2.5 -mr-2.5 text-nak-muted hover:text-nak-text transition-colors rounded-lg hover:bg-slate-100 active:bg-slate-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 container-app py-4 pb-5 shadow-lg">
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors py-3 px-1 rounded-lg min-h-[44px] flex items-center ${
                    isActive ? 'text-nak-deep font-semibold bg-nak-deep/5' : 'text-nak-muted hover:text-nak-bright hover:bg-slate-50'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="mt-2 px-5 py-3 rounded-full bg-nak-deep hover:bg-nak-bright text-white text-sm font-semibold text-center transition-colors min-h-[44px] flex items-center justify-center"
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
