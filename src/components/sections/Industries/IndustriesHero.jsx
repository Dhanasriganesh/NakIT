export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-nak-deep via-nak-text to-nak-deep">
      <div className="absolute inset-0 opacity-35">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
          alt="Industry skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-nak-deep via-nak-deep/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-bright/90 mb-3">
          Industries
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl mb-5">
          Deep industry context for every transformation.
        </h1>
        <p className="text-slate-300 max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed">
          We bring proven patterns from financial services, healthcare, media, energy, and more—adapting them
          to your regulatory, operational, and customer realities.
        </p>
      </div>
    </section>
  )
}

