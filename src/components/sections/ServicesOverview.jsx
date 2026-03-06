const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Financial Services',
    description: 'Comprehensive technology solutions for banking, insurance, and financial institutions. Secure, compliant, and scalable systems.',
    tags: ['Banking', 'InsurTech', 'Compliance'],
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    tagBg: 'bg-blue-50 text-blue-600 border-blue-200',
    hoverBorder: 'hover:border-blue-300',
    hoverShadow: 'hover:shadow-blue-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Healthcare',
    description: 'Innovative healthcare technology solutions that improve patient care, streamline operations, and ensure regulatory compliance.',
    tags: ['Patient Care', 'HIPAA', 'Health IT'],
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    tagBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    hoverBorder: 'hover:border-cyan-300',
    hoverShadow: 'hover:shadow-cyan-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    title: 'Media, Entertainment & Gaming',
    description: 'Cutting-edge digital platforms and immersive experiences for content creation, distribution, and interactive entertainment.',
    tags: ['Streaming', 'Gaming', 'Content'],
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    hoverBorder: 'hover:border-indigo-300',
    hoverShadow: 'hover:shadow-indigo-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Technology Enablement',
    description: 'Strategic technology consulting and implementation services that empower businesses to leverage cutting-edge solutions.',
    tags: ['Cloud', 'AI/ML', 'DevOps'],
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    tagBg: 'bg-blue-50 text-blue-700 border-blue-200',
    hoverBorder: 'hover:border-blue-400',
    hoverShadow: 'hover:shadow-blue-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    title: 'Telecommunications',
    description: 'Advanced network infrastructure, cloud communications, and connectivity solutions for telecom providers and enterprises.',
    tags: ['5G', 'Network', 'VoIP'],
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
    tagBg: 'bg-sky-50 text-sky-700 border-sky-200',
    hoverBorder: 'hover:border-sky-300',
    hoverShadow: 'hover:shadow-sky-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Energy',
    description: 'Smart energy management systems, renewable energy solutions, and grid optimization technologies for sustainable infrastructure.',
    tags: ['Renewable', 'Smart Grid', 'IoT'],
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500',
    tagBg: 'bg-blue-50 text-blue-600 border-blue-200',
    hoverBorder: 'hover:border-blue-300',
    hoverShadow: 'hover:shadow-blue-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Consumer & Industrial Products',
    description: 'Digital transformation solutions for manufacturing, supply chain optimization, and product lifecycle management.',
    tags: ['Manufacturing', 'Supply Chain', 'PLM'],
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-500',
    tagBg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    hoverBorder: 'hover:border-indigo-300',
    hoverShadow: 'hover:shadow-indigo-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: 'Transportation & Travel',
    description: 'Integrated mobility solutions, logistics platforms, and travel technology systems that enhance efficiency and experiences.',
    tags: ['Logistics', 'Mobility', 'Booking'],
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    tagBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    hoverBorder: 'hover:border-cyan-300',
    hoverShadow: 'hover:shadow-cyan-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    title: 'Automobile Industry',
    description: 'Automotive technology solutions for vehicle manufacturing, connectivity, and smart transportation systems that redefine mobility.',
    tags: ['EV Tech', 'Connected Cars', 'ADAS'],
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    tagBg: 'bg-blue-50 text-blue-600 border-blue-200',
    hoverBorder: 'hover:border-blue-300',
    hoverShadow: 'hover:shadow-blue-100',
  },
]

export default function ServicesOverview() {
  return (
    <section className="bg-slate-50 py-24 relative" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-4">
            Services Overview
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Industry-focused{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              technology solutions
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Consulting services tailored to your business needs, delivering transformative results
            across every major industry vertical.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group p-6 rounded-2xl bg-white border border-slate-200 ${service.hoverBorder} hover:shadow-lg ${service.hoverShadow} transition-all duration-300 hover:-translate-y-1 cursor-default`}
            >
              {/* Icon */}
              <div className={`${service.iconBg} ${service.iconColor} mb-4 p-2.5 rounded-xl inline-flex`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-slate-900 font-bold text-lg mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-full ${service.tagBg} font-medium border`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
