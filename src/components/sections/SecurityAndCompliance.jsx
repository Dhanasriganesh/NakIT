const capabilities = [
  'Security architecture & zero‑trust designs',
  'Cloud security posture management (CSPM)',
  'Identity, access, and privileged access management',
  'Compliance for SOC 2, ISO 27001, HIPAA and more',
]

export default function SecurityAndCompliance() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.2fr,1.4fr] gap-12 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-700/80 mb-3">
            Security & Compliance
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Build secure, compliant platforms by design—not as an afterthought.
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            Our security architects and consultants partner with your risk, compliance, and engineering teams to
            embed security across architecture, pipelines, and operations.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
          <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4 mb-4">
            <p className="text-xs text-slate-400">
              We align security controls with your regulatory landscape and risk appetite, making it easier
              for product teams to move fast without compromising on governance.
            </p>
          </div>
          <ul className="space-y-3 text-xs text-slate-200">
            {capabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span className="text-slate-300">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

