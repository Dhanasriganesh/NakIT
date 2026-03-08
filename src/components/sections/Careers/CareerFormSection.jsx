import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const ROLE_OPTIONS = [
  'Select a role',
  'Senior Cloud Architect',
  'Lead DevOps / Platform Engineer',
  'Senior IT Strategy Consultant',
  'Other (specify in message)',
]

import { apiCareer } from '../../../config/api'

export default function CareerFormSection() {
  const [status, setStatus] = useState({ type: null, message: '' })
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const name = form.name.value?.trim()
    const email = form.email.value?.trim()
    const role = form.role.value?.trim()
    if (!name || !email || !role || role === 'Select a role') {
      setStatus({ type: 'error', message: 'Name, email and role are required.' })
      return
    }
    setStatus({ type: null, message: '' })
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('phone', form.phone.value?.trim() || '')
      formData.append('role', role)
      formData.append('resumeLink', form.resumeLink.value?.trim() || '')
      formData.append('message', form.message.value?.trim() || '')
      const resumeFile = form.resume?.files?.[0]
      if (resumeFile) formData.append('resume', resumeFile)

      const res = await fetch(apiCareer, {
        method: 'POST',
        body: formData,
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus({ type: 'error', message: data.error || 'Failed to send application.' })
        return
      }
      setStatus({ type: 'success', message: data.message || 'Application sent successfully.' })
      form.reset()
      if (form.resume) form.resume.value = ''
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Network error.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-slate-100 py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="container-app">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl sm:rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-xl shadow-slate-200/50 p-5 sm:p-6 md:p-8 lg:p-10
            transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:shadow-[0_24px_48px_-12px_rgba(26,73,142,0.15)] hover:border-nak-bright/40 hover:bg-white/80">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-nak-deep/90 mb-1.5 sm:mb-2">
              Start your application
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1.5 sm:mb-2 font-serif">
              Apply with us
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mb-6 sm:mb-8">
              Share your details and we&apos;ll get back with next steps. You can also email your resume to{' '}
              <a href="mailto:Info@nakitgroup.com" className="text-nak-deep font-medium hover:text-nak-bright transition-colors break-all">Info@nakitgroup.com</a>
              .
            </p>

            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
              {status.message && (
                <p className={`text-xs sm:text-sm py-2 px-3 rounded-lg ${status.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                  {status.message}
                </p>
              )}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input
                    name="name"
                    type="text"
                    required
                    disabled={loading}
                    className="w-full rounded-lg sm:rounded-xl border border-slate-300/80 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors disabled:opacity-70"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">Email <span className="text-red-500">*</span></label>
                  <input
                    name="email"
                    type="email"
                    required
                    disabled={loading}
                    className="w-full rounded-lg sm:rounded-xl border border-slate-300/80 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors disabled:opacity-70"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  disabled={loading}
                  className="w-full rounded-lg sm:rounded-xl border border-slate-300/80 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors disabled:opacity-70"
                  placeholder="+1 234 567 8900"
                />
              </div>
              <div>
                <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">Role of interest <span className="text-red-500">*</span></label>
                <select
                  name="role"
                  required
                  disabled={loading}
                  className="w-full rounded-lg sm:rounded-xl border border-slate-300/80 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%2364748b%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10 disabled:opacity-70"
                >
                  {ROLE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt === 'Select a role' ? '' : opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">Resume / CV (link or paste)</label>
                <input
                  name="resumeLink"
                  type="text"
                  disabled={loading}
                  className="w-full rounded-lg sm:rounded-xl border border-slate-300/80 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors disabled:opacity-70"
                  placeholder="Link to LinkedIn, portfolio, or paste a short summary"
                />
              </div>
              <div>
                <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">Or upload resume (PDF, DOC; max 5MB)</label>
                <input
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  disabled={loading}
                  className="w-full rounded-lg sm:rounded-xl border border-slate-300/80 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors disabled:opacity-70 file:mr-2 file:rounded-lg file:border-0 file:bg-slate-100 file:px-3 file:py-1 file:text-xs"
                />
              </div>
              <div>
                <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={3}
                  disabled={loading}
                  className="w-full rounded-lg sm:rounded-xl border border-slate-300/80 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors resize-none disabled:opacity-70"
                  placeholder="Tell us about your experience and what you're looking for..."
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-nak-deep hover:bg-nak-bright text-white text-xs sm:text-sm font-semibold shadow-lg shadow-nak-deep/30 hover:shadow-nak-bright/30 transition-all duration-300 disabled:opacity-70"
                >
                  {loading ? 'Sending…' : 'Submit application'}
                </button>
                <NavLink
                  to="/contact"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:border-nak-bright hover:text-nak-deep text-center transition-colors"
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
