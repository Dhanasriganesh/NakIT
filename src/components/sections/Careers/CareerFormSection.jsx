import { NavLink } from 'react-router-dom'

const ROLE_OPTIONS = [
  'Select a role',
  'Senior Cloud Architect',
  'Lead DevOps / Platform Engineer',
  'Senior IT Strategy Consultant',
  'Other (specify in message)',
]

export default function CareerFormSection() {
  return (
    <section className="bg-slate-100 py-16 md:py-20">
      <div className="container-app">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-xl shadow-slate-200/50 p-8 md:p-10
            transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:shadow-[0_24px_48px_-12px_rgba(26,73,142,0.15)] hover:border-nak-bright/40 hover:bg-white/80">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-2">
              Start your application
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 font-serif">
              Apply with us
            </h2>
            <p className="text-slate-600 text-sm mb-8">
              Share your details and we&apos;ll get back with next steps. You can also email your resume to{' '}
              <a href="mailto:Info@nakitgroup.com" className="text-nak-deep font-medium hover:text-nak-bright transition-colors">
                Info@nakitgroup.com
              </a>
              .
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-900 font-medium text-sm mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-slate-300/80 bg-white/80 backdrop-blur-sm px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-slate-900 font-medium text-sm mb-1.5">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-slate-300/80 bg-white/80 backdrop-blur-sm px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-900 font-medium text-sm mb-1.5">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-slate-300/80 bg-white/80 backdrop-blur-sm px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors"
                  placeholder="+1 234 567 8900"
                />
              </div>
              <div>
                <label className="block text-slate-900 font-medium text-sm mb-1.5">Role of interest <span className="text-red-500">*</span></label>
                <select
                  required
                  className="w-full rounded-xl border border-slate-300/80 bg-white/80 backdrop-blur-sm px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%2364748b%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10"
                >
                  {ROLE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt === 'Select a role' ? '' : opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-slate-900 font-medium text-sm mb-1.5">Resume / CV (link or paste)</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-300/80 bg-white/80 backdrop-blur-sm px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors"
                  placeholder="Link to LinkedIn, portfolio, or paste a short summary"
                />
              </div>
              <div>
                <label className="block text-slate-900 font-medium text-sm mb-1.5">Message</label>
                <textarea
                  rows={3}
                  className="w-full rounded-xl border border-slate-300/80 bg-white/80 backdrop-blur-sm px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors resize-none"
                  placeholder="Tell us about your experience and what you're looking for..."
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-nak-deep hover:bg-nak-bright text-white text-sm font-semibold shadow-lg shadow-nak-deep/30 hover:shadow-nak-bright/30 transition-all duration-300"
                >
                  Submit application
                </button>
                <NavLink
                  to="/contact"
                  className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:border-nak-bright hover:text-nak-deep text-center transition-colors"
                >
                  Contact us instead
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
