export default function IndustriesInnovation() {
  return (
    <section className="bg-slate-50">
      <div className="container-app py-14 sm:py-16 md:py-20 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        <div className="group rounded-xl sm:rounded-2xl overflow-hidden border border-white/80 bg-white/40 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_24px_48px_-12px_rgba(15,23,42,0.18)] hover:border-slate-200/80 order-1 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1400&q=80"
            alt="Innovation lab"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 aspect-video lg:aspect-auto lg:min-h-[280px]"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="order-2 lg:order-2">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-nak-deep/90 mb-2 sm:mb-3">
            Innovation
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            Co‑create digital products that move your industry forward.
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3">
            With discovery sprints, rapid prototyping, and product‑led delivery, we help you experiment
            safely, validate ideas quickly, and scale the ones that work.
          </p>
          <p className="text-slate-600 text-[11px] sm:text-xs md:text-sm leading-relaxed">
            We bring designers, engineers, and industry specialists into focused squads—aligning every
            decision to user outcomes and revenue impact.
          </p>
        </div>
      </div>
    </section>
  )
}
