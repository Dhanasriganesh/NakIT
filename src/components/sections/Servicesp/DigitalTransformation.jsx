const initiatives = [
  {
    title: 'Customer experience platforms',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1100&q=80',
    description:
      'Re‑imagine customer journeys across web, mobile, and branch channels using cloud‑native architectures and APIs.',
  },
  {
    title: 'Data & AI modernization',
    image:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1100&q=80',
    description:
      'Design data platforms, governance models, and applied AI use‑cases that create real business value.',
  },
]

export default function DigitalTransformation() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-2">
              Digital Transformation
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Move from projects to product‑driven digital portfolios.
            </h2>
          </div>
          <p className="text-slate-600 text-xs md:text-sm max-w-xl">
            We help enterprises adopt modern ways of working, product operating models, and agile governance
            so technology roadmaps stay tightly aligned with business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {initiatives.map((item) => (
            <article
              key={item.title}
              className="group rounded-3xl border border-slate-800 overflow-hidden bg-slate-950/80 hover:border-nak-bright transition-colors duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-sm md:text-base font-semibold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

