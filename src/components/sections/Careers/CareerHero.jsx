export default function CareerHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-nak-deep via-nak-text to-nak-deep">
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1600&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-nak-deep via-nak-deep/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-bright/90 mb-3">
          Careers
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl mb-5">
          Build the next generation of digital platforms with us.
        </h1>
        <p className="text-slate-300 max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed mb-8">
          Join a team of consultants, architects, and engineers solving some of the hardest technology
          challenges for global enterprises.
        </p>
        <div className="flex flex-wrap gap-3 text-xs text-slate-100">
          <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700">
            Hybrid & remote‑friendly
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700">
            Clear growth paths
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700">
            Global client exposure
          </span>
        </div>
      </div>
    </section>
  )
}

