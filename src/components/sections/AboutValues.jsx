const values = [
  {
    title: 'Outcome‑obsessed',
    description:
      'We measure success in production, not slideware. Every engagement is tied to clear, quantifiable business outcomes.',
  },
  {
    title: 'Engineering‑led',
    description:
      'Architects and engineers sit at the core of our teams, ensuring recommendations are buildable, secure, and scalable.',
  },
  {
    title: 'Transparent partnership',
    description:
      'We operate as an extension of your team—with radical honesty, shared roadmaps, and co‑created delivery models.',
  },
  {
    title: 'Secure by design',
    description:
      'From architecture to delivery pipelines, security and compliance are embedded, not bolted‑on at the end.',
  },
]

export default function AboutValues() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 border-y border-slate-200/70">
        <div className="grid lg:grid-cols-[1.1fr,1.4fr] gap-12 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-700/80 mb-3">
              Our Principles
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              The consulting DNA behind every engagement.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              NAK is built for enterprises that expect both strategic guidance and delivery excellence. Our
              values drive how we design architectures, ship software, and partner with your teams every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-blue-500/60 hover:bg-slate-900 transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mb-3 opacity-80 group-hover:opacity-100" />
                <h3 className="text-sm font-semibold text-white mb-1.5">{value.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

