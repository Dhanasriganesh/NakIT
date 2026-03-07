const steps = [
  {
    label: '01',
    title: 'Conversation',
    description: 'Intro chat focused on your experience, interests, and what you are looking for next.',
  },
  {
    label: '02',
    title: 'Technical & case rounds',
    description: 'Deep‑dive into architecture, coding, or consulting case‑studies with our practitioners.',
  },
  {
    label: '03',
    title: 'Culture & offer',
    description: 'Meet future teammates, align on expectations, and craft an offer that works for you.',
  },
]

const glassCard =
  'rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-200/40 overflow-hidden ' +
  'transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
  'hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_48px_-12px_rgba(26,73,142,0.15)] hover:border-nak-bright/50 hover:bg-white/85 hover:ring-2 hover:ring-nak-bright/20'

export default function CareerProcess() {
  return (
    <section className="bg-slate-50 border-t border-slate-200/70">
      <div className="container-app py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-3">
            Hiring Process
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            A thoughtful process that respects your time.
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            We keep our hiring loops focused, transparent, and conversational. You will speak with the people
            you will actually work with—no endless interview chains.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div key={step.label} className={`${glassCard} p-5 flex flex-col gap-2`}>
              <span className="text-xs font-semibold text-nak-deep">{step.label}</span>
              <p className="text-sm font-semibold text-slate-900">{step.title}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
