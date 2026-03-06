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

export default function CareerProcess() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
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
            <div
              key={step.label}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 flex flex-col gap-2"
            >
              <span className="text-xs font-semibold text-nak-bright">{step.label}</span>
              <p className="text-sm font-semibold text-white">{step.title}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

