export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-white">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Soft glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-200/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-100/30 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          New — Introducing NAK IT Group
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 leading-tight tracking-tighter mb-6">
          Transform your
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            business
          </span>{' '}
          with expert
          <br />
          IT consulting
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl leading-relaxed mb-10">
          We provide comprehensive IT consulting services to help businesses optimize their technology
          infrastructure, streamline operations, and achieve digital transformation goals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#services"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold text-base hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5"
          >
            Explore Services
          </a>
          <a
            href="#about-company"
            className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-base hover:bg-slate-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 shadow-sm"
          >
            Learn More
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: '150+', label: 'Enterprise Clients' },
            { value: '130+', label: 'Projects Delivered' },
            { value: '10+', label: 'Years Experience' },
            { value: '4+', label: 'Cloud Platforms' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md hover:shadow-blue-100 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
