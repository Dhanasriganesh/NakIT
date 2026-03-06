const faqs = [
  {
    question: 'What types of IT consulting projects do you take on?',
    answer:
      'We focus on cloud strategy, architecture, platform engineering, digital transformation, and long‑term managed services for mid‑market and enterprise organizations.',
  },
  {
    question: 'How quickly can we start an engagement?',
    answer:
      'For advisory work, we can typically begin within 2–3 weeks. For larger delivery or managed services engagements, we align on discovery, staffing, and governance timelines together.',
  },
  {
    question: 'Do you work with existing vendors and internal teams?',
    answer:
      'Yes. Most of our work happens in multi‑vendor environments. We are comfortable integrating with your internal teams, existing SIs, and platform providers.',
  },
]

export default function ContactFAQ() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-sm">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-3">
              FAQs
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Answers to common questions.
            </h2>
            <p className="text-slate-600 text-xs md:text-sm">
              Still unsure whether NAK IT Group is the right consulting partner? Share your questions in the
              form above—we&apos;re happy to talk through details.
            </p>
          </div>
          <div className="flex-1 space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 hover:border-nak-bright transition-colors duration-300"
              >
                <p className="text-xs font-semibold text-white mb-1.5">{faq.question}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

