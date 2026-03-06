export default function IndustriesInnovation() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-blue-900/40">
          <img
            src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1400&q=80"
            alt="Innovation lab"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-700/80 mb-3">
            Innovation
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Co‑create digital products that move your industry forward.
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-3">
            With discovery sprints, rapid prototyping, and product‑led delivery, we help you experiment
            safely, validate ideas quickly, and scale the ones that work.
          </p>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            We bring designers, engineers, and industry specialists into focused squads—aligning every
            decision to user outcomes and revenue impact.
          </p>
        </div>
      </div>
    </section>
  )
}

