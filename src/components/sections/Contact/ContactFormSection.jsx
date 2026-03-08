import { useState } from 'react'
import { apiContact } from '../../../config/api'

const CONTACT = {
  email: 'Info@nakitgroup.com',
  phone: '+1 7133203582',
  address: '6650 Rivers Ave STE 100, Charleston, South Carolina 29406',
  addressForMap: '6650+Rivers+Ave+STE+100,+Charleston,+South+Carolina+29406',
}

const TOPIC_OPTIONS = [
  { value: '', label: 'Select' },
  { value: 'strategy', label: 'Strategy / innovation' },
  { value: 'platforms', label: 'Platforms / engineering' },
  { value: 'ai', label: 'AI & automation' },
  { value: 'careers', label: 'Careers' },
  { value: 'media', label: 'Media / partnerships' },
]

const initialFormData = {
  name: '',
  company: '',
  email: '',
  mobile: '',
  topic: '',
  message: '',
}

export default function ContactFormSection() {
  const [formData, setFormData] = useState(initialFormData)
  const [file, setFile] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setSubmitted(false)
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null)
    setSubmitted(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name?.trim() || !formData.email?.trim() || !formData.topic?.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields (Name, Email, Topic).' })
      return
    }
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })
    try {
      const payload = new FormData()
      payload.append('name', formData.name.trim())
      payload.append('company', formData.company.trim())
      payload.append('email', formData.email.trim())
      payload.append('mobile', formData.mobile.trim())
      payload.append('topic', formData.topic.trim())
      payload.append('message', formData.message.trim())
      if (file) payload.append('file', file)

      const res = await fetch(apiContact, { method: 'POST', body: payload })

      const data = await res.json().catch(() => ({ success: false, error: 'Server error. Please try again later.' }))

      if (!res.ok) {
        setSubmitStatus({ type: 'error', message: data.error || `Server error: ${res.status}` })
        return
      }
      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent.' })
        setFormData(initialFormData)
        setFile(null)
        e.target.reset()
        setSubmitted(true)
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Unable to send. Please try again.' })
      }
    } catch (err) {
      setSubmitStatus({
        type: 'error',
        message: err.message || 'Network error. Please check your connection and try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-slate-100 py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="container-app grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
        {/* Left: Get in Touch + Map */}
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/60 p-5 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 font-serif">
              Get in Touch
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-nak-bright/10 border border-nak-bright/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-nak-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-slate-900 font-semibold text-xs sm:text-sm mb-0.5">Email</p>
                  <p className="text-slate-600 text-xs sm:text-sm mb-1 break-all">{CONTACT.email}</p>
                  <a href={`mailto:${CONTACT.email}`} className="text-xs sm:text-sm text-nak-deep font-medium underline underline-offset-2 hover:text-nak-bright transition-colors">
                    Send us an email
                  </a>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-nak-bright/10 border border-nak-bright/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-nak-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-slate-900 font-semibold text-xs sm:text-sm mb-0.5">Phone</p>
                  <p className="text-slate-600 text-xs sm:text-sm mb-1">{CONTACT.phone}</p>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-xs sm:text-sm text-nak-deep font-medium underline underline-offset-2 hover:text-nak-bright transition-colors">
                    Call us now
                  </a>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-nak-bright/10 border border-nak-bright/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-nak-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-slate-900 font-semibold text-xs sm:text-sm mb-0.5">Address</p>
                  <p className="text-slate-600 text-xs sm:text-sm whitespace-pre-line">{CONTACT.address}</p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`} target="_blank" rel="noopener noreferrer" className="inline-block mt-1 text-xs sm:text-sm text-nak-deep font-medium underline underline-offset-2 hover:text-nak-bright transition-colors">
                    View on map
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/60 overflow-hidden">
            <div className="aspect-[4/3] w-full max-h-[180px] sm:max-h-[200px] md:max-h-[260px] overflow-hidden rounded-b-xl sm:rounded-b-2xl">
              <iframe title="NAK IT Solutions office location" src={`https://www.google.com/maps?q=${CONTACT.addressForMap}&hl=en&z=15&output=embed`} className="w-full h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>

        {/* Right: Send us a Message form */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/60 p-5 sm:p-6 md:p-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 font-serif">
            Send us a Message
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mb-4">
            Upload documents, outlines, or supporting files. We keep everything confidential and respond with next steps.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {submitStatus.message && (
              <div className={`rounded-xl border px-3 py-2 text-xs font-semibold ${submitStatus.type === 'success' ? 'border-green-200 bg-green-50 text-green-700' : 'border-red-200 bg-red-50 text-red-700'}`}>
                {submitStatus.message}
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">Full name <span className="text-red-500">*</span></label>
                <input name="name" type="text" required disabled={isSubmitting} value={formData.name} onChange={handleChange} className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright disabled:opacity-70" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">Company</label>
                <input name="company" type="text" disabled={isSubmitting} value={formData.company} onChange={handleChange} className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright disabled:opacity-70" placeholder="Company name" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">Email <span className="text-red-500">*</span></label>
                <input name="email" type="email" required disabled={isSubmitting} value={formData.email} onChange={handleChange} className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright disabled:opacity-70" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">Mobile number <span className="text-red-500">*</span></label>
                <input name="mobile" type="tel" required disabled={isSubmitting} value={formData.mobile} onChange={handleChange} className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright disabled:opacity-70" placeholder="+1 234 567 8900" />
              </div>
            </div>
            <div>
              <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">Topic <span className="text-red-500">*</span></label>
              <select name="topic" required disabled={isSubmitting} value={formData.topic} onChange={handleChange} className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright appearance-none bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10 disabled:opacity-70" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")` }}>
                {TOPIC_OPTIONS.map((opt) => (
                  <option key={opt.value || 'select'} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">How can we help?</label>
              <textarea name="message" rows={4} disabled={isSubmitting} value={formData.message} onChange={handleChange} className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright resize-none disabled:opacity-70" placeholder="Tell us how we can help you..." />
            </div>
            <div>
              <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">Supporting file (PDF, DOCX, ZIP, PPTX; max 10MB)</label>
              <input name="file" type="file" accept=".pdf,.doc,.docx,.zip,.ppt,.pptx" onChange={handleFileChange} disabled={isSubmitting} className="w-full rounded-lg sm:rounded-xl border border-dashed border-slate-300 bg-white px-3 sm:px-4 py-2 text-xs text-slate-600 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-nak-bright/10 file:text-nak-deep hover:file:bg-nak-bright/20 disabled:opacity-70" />
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button type="submit" disabled={isSubmitting} className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-nak-deep hover:bg-nak-bright text-white text-xs sm:text-sm font-semibold shadow-lg shadow-nak-deep/30 hover:shadow-nak-bright/30 transition-all duration-300 disabled:opacity-70">
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>
              {submitted && submitStatus.type === 'success' && (
                <span className="text-xs font-semibold text-green-600">Thanks! We&apos;ll be in touch soon.</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
