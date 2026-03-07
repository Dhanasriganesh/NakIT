import img14 from '../../../assets/services/14.png'

const OFFERINGS = [
  {
    title: 'Workforce Support',
    body: 'Ongoing support for your extended team: regular check-ins, performance feedback, and escalation paths. We ensure contract and offshore resources stay aligned with your goals and feel part of the team.',
  },
  {
    title: 'Leadership Hiring',
    body: 'We help you hire senior tech leads, principal engineers, and directors who can own architecture and delivery. Our process focuses on strategic fit and the ability to drive change.',
  },
  {
    title: 'Executive Hiring',
    body: 'C-suite and VP-level technology leadership—CTOs, VP Engineering, CIOs. We understand the blend of technical depth and business acumen required and source accordingly.',
  },
  {
    title: 'Managed Resource',
    body: 'We own the employment relationship; you get the outcome. We handle payroll, benefits, compliance, and retention so you can focus purely on the work and the deliverables.',
  },
]

export default function ServicesWorkforceLeadership() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid lg:grid-cols-[0.95fr,1.05fr] gap-10 lg:gap-14 items-start">
          <div className="rounded-xl overflow-hidden shadow-md ring-1 ring-slate-200/80 order-2 lg:order-1 w-full max-w-xs aspect-[4/3] max-h-[200px]">
            <img
              src={img14}
              alt="Workforce support and leadership hiring"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-2">
              Workforce & leadership
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Support and leadership talent
            </h2>
            <p className="text-slate-600 text-sm md:text-base mb-8 max-w-xl">
              Beyond filling roles, we provide ongoing workforce support and help you build leadership benches that can scale your technology organization.
            </p>
            <div className="space-y-5">
              {OFFERINGS.map((item) => (
                <div
                  key={item.title}
                  className="pl-4 border-l-2 border-nak-bright/40 hover:border-nak-deep transition-colors"
                >
                  <h3 className="text-slate-900 font-semibold mb-1.5">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
