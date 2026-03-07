const HERO_IMG = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80'

export default function IndustriesHero() {
  return (
    <section className="relative min-h-[42vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden />

      <div className="relative z-10 container-app py-16 md:py-20">
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

