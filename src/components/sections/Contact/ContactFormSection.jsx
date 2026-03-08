const CONTACT = {
  email: 'Info@nakitgroup.com',
  phone: '+1 7133203582',
  address: '6650 Rivers Ave STE 100, Charleston, South Carolina 29406',
  addressForMap: '6650+Rivers+Ave+STE+100,+Charleston,+South+Carolina+29406',
}

const SUBJECT_OPTIONS = [
  'Select a subject',
  'General inquiry',
  'Cloud & Infrastructure',
  'Digital Transformation',
  'Cybersecurity',
  'Careers',
  'Partnership',
  'Other',
]

export default function ContactFormSection() {
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
              {/* Email */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-nak-bright/10 border border-nak-bright/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-nak-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-slate-900 font-semibold text-xs sm:text-sm mb-0.5">Email</p>
                  <p className="text-slate-600 text-xs sm:text-sm mb-1 break-all">{CONTACT.email}</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-xs sm:text-sm text-nak-deep font-medium underline underline-offset-2 hover:text-nak-bright transition-colors"
                  >
                    Send us an email
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-nak-bright/10 border border-nak-bright/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-nak-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-slate-900 font-semibold text-xs sm:text-sm mb-0.5">Phone</p>
                  <p className="text-slate-600 text-xs sm:text-sm mb-1">{CONTACT.phone}</p>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                    className="text-xs sm:text-sm text-nak-deep font-medium underline underline-offset-2 hover:text-nak-bright transition-colors"
                  >
                    Call us now
                  </a>
                </div>
              </div>

              {/* Address */}
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
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-xs sm:text-sm text-nak-deep font-medium underline underline-offset-2 hover:text-nak-bright transition-colors"
                  >
                    View on map
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map overview */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/60 overflow-hidden">
            <div className="aspect-[4/3] w-full max-h-[180px] sm:max-h-[200px] md:max-h-[260px] overflow-hidden rounded-b-xl sm:rounded-b-2xl">
              <iframe
                title="NAK IT Solutions office location"
                src={`https://www.google.com/maps?q=${CONTACT.addressForMap}&hl=en&z=15&output=embed`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

     
        </div>

        {/* Right: Send us a Message form */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/60 p-5 sm:p-6 md:p-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 font-serif">
            Send us a Message
          </h2>

          <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">Phone Number</label>
              <input
                type="tel"
                className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors"
                placeholder="+1 234 567 8900"
              />
            </div>

            <div>
              <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">
                Subject <span className="text-red-500">*</span>
              </label>
              <select
                required
                className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%2364748b%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10"
              >
                {SUBJECT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt === 'Select a subject' ? '' : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-900 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-nak-bright focus:ring-1 focus:ring-nak-bright transition-colors resize-none"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-nak-deep hover:bg-nak-bright text-white text-xs sm:text-sm font-semibold shadow-lg shadow-nak-deep/30 hover:shadow-nak-bright/30 transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
