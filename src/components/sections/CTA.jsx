const ctaStats = [
  { value: '10k+', label: 'Developers' },
  { value: '50k+', label: 'Projects Built' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
]

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-[#0d1a3a] py-24 relative overflow-hidden" id="contact">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-blue-400/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-200 animate-pulse" />
          Get Started Today
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-6">
          Ready to build
          <br />
          <span className="text-blue-200">
            something amazing?
          </span>
        </h2>

        <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Join thousands of organizations who are transforming faster with NAK IT Group. Start your
          free consultation today and experience the difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="mailto:Info@nakitgroup.com"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-blue-700 font-bold text-base hover:bg-blue-50 transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-0.5"
          >
            Contact Us Now
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 border border-white/25 text-white font-bold text-base hover:bg-white/20 hover:border-white/40 transition-all duration-300"
          >
            View Services
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
          {ctaStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-blue-200/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contact info row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-white/10">
          <a href="tel:+17133203582" className="flex items-center gap-2 text-blue-100/70 hover:text-white transition-colors text-sm">
            <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +1 7133203582
          </a>
          <a href="mailto:Info@nakitgroup.com" className="flex items-center gap-2 text-blue-100/70 hover:text-white transition-colors text-sm">
            <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Info@nakitgroup.com
          </a>
          <span className="flex items-center gap-2 text-blue-100/70 text-sm">
            <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Charleston, South Carolina 29406
          </span>
        </div>
      </div>
    </section>
  )
}
