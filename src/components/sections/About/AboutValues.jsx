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
      <div className="container-app py-14 sm:py-16 md:py-20 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 sm:gap-10 lg:gap-12 items-start">
            <div className="mb-6 lg:mb-0">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-nak-deep/90 mb-2 sm:mb-3">
                Our Principles
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                The consulting DNA behind every engagement.
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                NAK is built for enterprises that expect both strategic guidance and delivery excellence. Our
                values drive how we design architectures, ship software, and partner with your teams every day.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur-md p-3 sm:p-4 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(15,23,42,0.12)] hover:border-slate-300/80 hover:-translate-y-1 hover:bg-white/90"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-nak-bright to-cyan-400 mb-2 sm:mb-2.5 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900 mb-0.5 sm:mb-1">{value.title}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

