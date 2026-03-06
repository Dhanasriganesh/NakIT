const leaders = [
  {
    name: 'Nakul Agarwal',
    role: 'Founder & Chief Executive Officer',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Priya Mehta',
    role: 'Chief Technology Officer',
    image:
      'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'David Kim',
    role: 'Head of Cloud & Platforms',
    image:
      'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=900&q=80',
  },
]

export default function AboutLeadership() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90">
              Leadership
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">
              Practitioners, not just advisors.
            </h2>
          </div>
          <p className="text-slate-600 text-sm md:text-base max-w-xl">
            Our leadership team has led large‑scale transformations across cloud, data, security and
            product engineering, bringing hands‑on experience from top consulting and technology firms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="group rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/70 to-slate-950/90 overflow-hidden hover:border-nak-bright hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-white">{leader.name}</p>
                <p className="text-xs text-nak-bright mt-1">{leader.role}</p>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Advisor to CIOs and digital leaders on cloud strategy, operating models, and high‑performing
                  engineering cultures.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

