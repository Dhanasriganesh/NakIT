const offices = [
  {
    city: 'Charleston, SC',
    address: '6650 Rivers Ave STE 100, Charleston, South Carolina 29406',
    focus: 'Executive leadership, client engagement, and delivery governance.',
  },
  {
    city: 'Houston, TX',
    address: 'Consulting and delivery hub for North American clients.',
    focus: 'Cloud, data, and security consulting for regulated industries.',
  },
  {
    city: 'Bengaluru, India',
    address: 'Global delivery center with multi‑cloud and engineering expertise.',
    focus: 'Platform engineering, DevOps, and 24x7 managed services.',
  },
]

export default function ContactOffices() {
  return (
    <section className="bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-2">
              Offices
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Where you can find us.
            </h2>
          </div>
          <p className="text-slate-600 text-xs md:text-sm max-w-xl">
            We operate with a mix of on‑site consulting and distributed teams. Most client work happens on
            your preferred collaboration tools and locations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {offices.map((office) => (
            <div
              key={office.city}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 hover:border-nak-bright transition-colors duration-300"
            >
              <p className="text-sm font-semibold text-white mb-1">{office.city}</p>
              <p className="text-xs text-slate-300 mb-1">{office.address}</p>
              <p className="text-xs text-slate-400">{office.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

