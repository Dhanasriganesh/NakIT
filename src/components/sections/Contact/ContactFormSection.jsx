export default function ContactFormSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.1fr,1.2fr] gap-10 items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-3">
            Start a Conversation
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Tell us about your IT consulting needs.
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4">
            Whether you&apos;re exploring a cloud migration, modernizing a core platform, or looking for a
            long‑term consulting partner, we&apos;ll respond within two business days.
          </p>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            No heavy sales motion—just a focused discussion with our senior consultants and architects.
          </p>
        </div>

        <form className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-300 mb-1">Full name</label>
              <input
                type="text"
                className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-nak-bright"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">Work email</label>
              <input
                type="email"
                className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-nak-bright"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-300 mb-1">Company</label>
              <input
                type="text"
                className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-nak-bright"
                placeholder="Company name"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">Role</label>
              <input
                type="text"
                className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-nak-bright"
                placeholder="e.g. CIO, VP Engineering"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">How can we help?</label>
            <textarea
              rows={4}
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-nak-bright resize-none"
              placeholder="Briefly describe your initiatives, timelines, and any context that will help us prepare."
            />
          </div>
          <button
            type="button"
            className="w-full md:w-auto px-6 py-2.5 rounded-full bg-nak-deep hover:bg-nak-bright text-xs font-semibold text-white shadow-lg shadow-nak-deep/40 transition-colors"
          >
            Submit inquiry
          </button>
        </form>
      </div>
    </section>
  )
}

