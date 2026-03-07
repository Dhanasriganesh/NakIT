import { NavLink } from 'react-router-dom'

const services = [
  {
    title: 'Contract Staffing',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20h16" />
      </svg>
    ),
    description:
      'Deploy skilled IT professionals on a contract basis to scale your team for projects, peak demand, or specialized initiatives. We handle sourcing, screening, and onboarding so you get vetted talent without long-term commitment.',
  },
  {
    title: 'Full-Time Hiring',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    description:
      'We support your full-time hiring from job design and candidate sourcing to final placement. Our process ensures cultural fit, technical validation, and smooth onboarding so new hires contribute from day one.',
  },
  {
    title: 'Permanent Hiring',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    description:
      'Secure permanent IT talent for your organization with end-to-end recruitment support. We focus on roles that demand deep expertise and long-term alignment with your business goals and team culture.',
  },
  {
    title: 'Contract-to-Hire',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
      </svg>
    ),
    description:
      'Try before you commit. Place candidates on a contract with a clear path to permanent conversion. You evaluate fit and performance in your environment; we manage the transition to full-time when you are ready.',
  },
  {
    title: 'Offshore Staffing',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    description:
      'Access global talent pools through our offshore delivery model. We provide remote IT professionals who integrate with your processes, time zones, and tools—reducing cost while maintaining quality and communication.',
  },
  {
    title: 'Onsite Staffing',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    description:
      'Place IT experts at your location for hands-on collaboration. Ideal for projects requiring close alignment with your teams, sensitive environments, or roles where in-person presence adds the most value.',
  },
  {
    title: 'Workforce Support',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description:
      'Ongoing support for your extended workforce: performance management, retention, upskilling, and replacement when needed. We act as an extension of your HR and delivery leadership so your teams stay productive.',
  },
  {
    title: 'Leadership Hiring',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    description:
      'Find senior leaders who can drive technology strategy and team performance. We specialize in VP, Director, and Head-of roles in engineering, product, and operations—with rigorous assessment and cultural fit.',
  },
  {
    title: 'Executive Hiring',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    description:
      'C-suite and executive technology placements: CTO, CIO, CDO, and similar. We combine confidential search, board-level presentation, and deep industry networks to place leaders who shape your digital future.',
  },
  {
    title: 'Managed Resource',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    description:
      'We own the full lifecycle of dedicated resources: recruitment, payroll, benefits, and performance management. You get a committed team member without the administrative burden; we ensure continuity and quality.',
  },
  {
    title: 'IT Skill-Based Talent',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description:
      'Precision hiring by skill: cloud, security, data, DevOps, full-stack, and more. We match verified technical competencies to your requirements so you get the right expertise without compromise.',
  },
  {
    title: 'Project-Based',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description:
      'Staff entire project teams or key roles for a defined scope and timeline. We deliver the right mix of skills, from architects to developers, so your project runs on time and within budget.',
  },
  {
    title: 'Free Support',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    description:
      'Ongoing assistance at no extra cost: resume review, interview prep, and career guidance for placed candidates. We stay invested in their success and your satisfaction throughout the engagement.',
  },
  {
    title: 'Documentation',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    description:
      'Complete paperwork and compliance documentation for every placement: contracts, NDAs, timesheets, and role handover. We keep records clear and audit-ready so you focus on delivery, not admin.',
  },
  {
    title: 'Visa Hassle',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description:
      'We manage visa, work permits, and relocation for talent who need to work in your country. From application to approval and move support, we reduce the legal and administrative burden on you and the candidate.',
  },
  {
    title: 'Free Updates',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    description:
      'Regular, no-cost updates on candidate shortlists, market availability, and role progress. Transparent communication keeps you informed and in control without extra fees.',
  },
]

export default function ServicesStaffingGrid() {
  return (
    <section className="bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-screen-2xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-3">
            Global IT Staffing Expertise
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
            End-to-end staffing and workforce solutions
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            From contract and permanent hiring to offshore and onsite delivery, we help you build and scale
            your IT teams with the right talent, processes, and support—so you can focus on outcomes, not hiring friction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => (
            <article
              key={item.title}
              className="group relative rounded-2xl bg-white border border-slate-200 p-6 shadow-sm overflow-hidden
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_-12px_rgba(26,73,142,0.18)] hover:border-nak-bright/60
                hover:ring-2 hover:ring-nak-bright/20"
            >
              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-nak-bright/5 via-transparent to-nak-deep/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-nak-bright/10 border border-nak-bright/20 flex items-center justify-center text-nak-deep mb-4
                  transition-all duration-500 ease-out
                  group-hover:scale-110 group-hover:bg-nak-bright/20 group-hover:border-nak-bright/50 group-hover:shadow-[0_8px_24px_-4px_rgba(46,175,230,0.25)]
                  [&_svg]:transition-transform [&_svg]:duration-500 group-hover:[&_svg]:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-slate-900 font-semibold text-base mb-2 transition-colors duration-300 group-hover:text-nak-deep">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-slate-700">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* How we work + CTA */}
        <div className="mt-16 md:mt-20 rounded-2xl bg-white border border-slate-200 p-8 md:p-10 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">How we work with you</h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 max-w-4xl">
            We start by understanding your hiring needs, team structure, and timelines. Our recruiters and account
            managers then source, screen, and present candidates aligned to your requirements. Once you choose,
            we handle contracts, onboarding, and ongoing support—including documentation, visa assistance when
            needed, and free updates so you stay informed. Whether you need one specialist or an entire project
            team, we scale with you.
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-nak-deep hover:bg-nak-bright text-white text-sm font-semibold transition-colors duration-300"
          >
            Discuss your staffing needs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NavLink>
        </div>
      </div>
    </section>
  )
}
