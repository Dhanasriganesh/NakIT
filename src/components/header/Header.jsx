import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about-company' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Industries', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

function NakLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="nakGradHeader" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <path
        d="M9 34 C2 27 2 13 9 6"
        stroke="url(#nakGradHeader)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="14" y1="30" x2="14" y2="10" stroke="url(#nakGradHeader)" strokeWidth="3" strokeLinecap="round" />
      <line x1="14" y1="10" x2="26" y2="30" stroke="url(#nakGradHeader)" strokeWidth="3" strokeLinecap="round" />
      <line x1="26" y1="30" x2="26" y2="10" stroke="url(#nakGradHeader)" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M26 10 C30 4 38 6 36 15"
        stroke="url(#nakGradHeader)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm shadow-slate-200/60'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-sm border border-blue-200">
            <NakLogo size={26} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-slate-900 font-extrabold text-lg tracking-widest">NAK</span>
            <span className="text-blue-600 text-xs font-semibold tracking-widest">IT Group</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        {/* <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm text-slate-500 hover:text-slate-800 transition-colors duration-200 font-medium"
          >
            Log in
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-md shadow-blue-200 hover:shadow-blue-300"
          >
            Get Started
          </a>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-600 hover:text-slate-900"
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
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold text-center"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
