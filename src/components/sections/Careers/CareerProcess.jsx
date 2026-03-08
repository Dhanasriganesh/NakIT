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
  'rounded-xl sm:rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-200/40 overflow-hidden ' +
  'transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ' +
  'hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_48px_-12px_rgba(26,73,142,0.15)] hover:border-nak-bright/50 hover:bg-white/85 hover:ring-2 hover:ring-nak-bright/20'

export default function CareerProcess() {
  return (
    <section className="bg-slate-50 border-t border-slate-200/70">
      <div className="container-app py-14 sm:py-16 md:py-20 grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-nak-deep/90 mb-2 sm:mb-3">
            Hiring Process
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            A thoughtful process that respects your time.
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">
            We keep our hiring loops focused, transparent, and conversational. You will speak with the people
            you will actually work with—no endless interview chains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 order-1 lg:order-2">
          {steps.map((step) => (
            <div key={step.label} className={`${glassCard} p-4 sm:p-5 flex flex-col gap-1.5 sm:gap-2`}>
              <span className="text-[10px] sm:text-xs font-semibold text-nak-deep">{step.label}</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-900">{step.title}</p>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
