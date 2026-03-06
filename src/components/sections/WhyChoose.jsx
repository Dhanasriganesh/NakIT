import { useState, useEffect, useRef } from 'react'
import { gsap } from '../../utils/gsap'
import MagneticButton from '../ui/MagneticButton'

const tabs = [
  {
    id: 'expertise', label: 'Expertise',
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>),
    heading: 'Expertise', subheading: 'Proven track record with cutting-edge technology solutions',
    description: 'Our team brings deep expertise across AI, Cloud Computing, and Data Science with proven methodologies for successful project delivery. We combine industry knowledge with technical mastery to drive real transformation.',
    bullets: ['Certified professionals in AI, Cloud Computing, and Data Science', 'Deep industry knowledge across Finance, Healthcare, and Technology', 'Proven methodologies for successful project delivery'],
    stats: [{ value: '10+', label: 'Years' }, { value: '100+', label: 'Experts' }, { value: '500+', label: 'Projects' }],
    color: 'blue',
  },
  {
    id: 'innovation', label: 'Innovation',
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
    heading: 'Innovation', subheading: 'Forward-thinking approach that transforms businesses',
    description: 'We embrace emerging technologies and forward-thinking digital strategies to keep your business ahead of the curve. From AI/ML to cloud-native architectures, we bring innovation that creates real competitive advantages.',
    bullets: ['Cutting-edge AI and Machine Learning solutions', 'Cloud-native architectures for scalable applications', 'Advanced analytics for actionable business insights'],
    stats: [{ value: '95%', label: 'Satisfaction' }, { value: '50+', label: 'Innovations' }, { value: '24/7', label: 'Support' }],
    color: 'cyan',
  },
  {
    id: 'reliability', label: 'Reliability',
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
    heading: 'Reliability', subheading: 'Consistent delivery with unwavering commitment to excellence',
    description: 'We deliver high-quality solutions with a 99.9% uptime guarantee and rigorous quality assurance. Our commitment to meeting deadlines and maintaining transparency makes us a partner you can trust completely.',
    bullets: ['99.9% uptime guarantee for all solutions', 'Rigorous quality assurance and testing processes', '24/7 monitoring and support services'],
    stats: [{ value: '99.9%', label: 'Uptime' }, { value: '98%', label: 'On-Time' }, { value: '0', label: 'Critical Bugs' }],
    color: 'indigo',
  },
  {
    id: 'interaction', label: 'Interaction',
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>),
    heading: 'Interaction', subheading: 'Seamless user experiences through intuitive interfaces',
    description: 'We design user-centered experiences that enhance productivity and adoption across all platforms. Our solutions are built for the way people actually work, creating interfaces that feel natural and drive real results.',
    bullets: ['User-centered design for intuitive interfaces', 'Cross-platform compatibility across all devices', 'Real-time collaboration tools and dashboards'],
    stats: [{ value: '40%', label: 'Faster' }, { value: '85%', label: 'Adoption' }, { value: '60%', label: 'Time Saved' }],
    color: 'sky',
  },
  {
    id: 'partnership', label: 'Partnership',
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
    heading: 'Partnership', subheading: 'Long-term collaborative relationships built on trust',
    description: 'We build lasting relationships through dedicated account management, transparent communication, and flexible engagement models tailored to your specific needs. Your success is our success.',
    bullets: ['Dedicated account managers for personalized service', 'Transparent communication with regular updates', 'Flexible engagement models for your needs'],
    stats: [{ value: '90%', label: 'Retention' }, { value: '5+', label: 'Years Avg.' }, { value: '32+', label: 'Clients' }],
    color: 'blue',
  },
]

const palette = {
  blue:   { badge: 'bg-blue-50 border-blue-200 text-blue-700', bullet: 'bg-blue-500', stat: 'text-blue-600', card: 'bg-blue-50 border-blue-200', btn: 'from-blue-600 to-blue-800', active: 'bg-blue-600 text-white border-blue-600', shadow: 'shadow-blue-200' },
  cyan:   { badge: 'bg-cyan-50 border-cyan-200 text-cyan-700', bullet: 'bg-cyan-500', stat: 'text-cyan-600', card: 'bg-cyan-50 border-cyan-200', btn: 'from-cyan-600 to-cyan-800', active: 'bg-cyan-600 text-white border-cyan-600', shadow: 'shadow-cyan-200' },
  indigo: { badge: 'bg-indigo-50 border-indigo-200 text-indigo-700', bullet: 'bg-indigo-500', stat: 'text-indigo-600', card: 'bg-indigo-50 border-indigo-200', btn: 'from-indigo-600 to-indigo-800', active: 'bg-indigo-600 text-white border-indigo-600', shadow: 'shadow-indigo-200' },
  sky:    { badge: 'bg-sky-50 border-sky-200 text-sky-700', bullet: 'bg-sky-500', stat: 'text-sky-600', card: 'bg-sky-50 border-sky-200', btn: 'from-sky-600 to-sky-800', active: 'bg-sky-600 text-white border-sky-600', shadow: 'shadow-sky-200' },
}

export default function WhyChoose() {
  const [activeTab, setActiveTab] = useState('expertise')
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const activeData = tabs.find((t) => t.id === activeTab)
  const p = palette[activeData.color] || palette.blue

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header entrance
      gsap.fromTo('.why-header',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.why-header', start: 'top 88%', once: true } }
      )
      // Tab buttons stagger
      gsap.fromTo('.why-tab-btn',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.why-tabs', start: 'top 88%', once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Animate content whenever tab changes
  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.why-content-badge', { x: -20, opacity: 0, duration: 0.4 })
        .from('.why-content-heading', { y: 20, opacity: 0, duration: 0.45 }, '-=0.2')
        .from('.why-content-sub', { y: 15, opacity: 0, duration: 0.4 }, '-=0.2')
        .from('.why-content-desc', { y: 15, opacity: 0, duration: 0.4 }, '-=0.2')
        .from('.why-bullet', { x: -16, opacity: 0, duration: 0.35, stagger: 0.08 }, '-=0.15')
        .from('.why-content-btn', { scale: 0.9, opacity: 0, duration: 0.35 }, '-=0.1')
        .from('.why-stat-card', { y: 20, opacity: 0, scale: 0.95, duration: 0.4, stagger: 0.07 }, '-=0.5')
        .from('.why-visual-card', { y: 20, opacity: 0, duration: 0.4 }, '-=0.2')
    }, contentRef)
    return () => ctx.revert()
  }, [activeTab])

  return (
    <section ref={sectionRef} className="bg-white py-24 relative overflow-hidden" id="why-us">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="why-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-4">
            Why NAK IT Group
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">NAK IT Group</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="why-tabs flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab, i) => {
            const isActive = activeTab === tab.id
            const tp = palette[tab.color] || palette.blue
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`why-tab-btn flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? `${tp.active} shadow-md ${tp.shadow} scale-105`
                    : 'text-slate-500 bg-white border-slate-200 hover:bg-slate-50 hover:text-slate-800 hover:border-slate-300 hover:-translate-y-0.5'
                }`}
              >
                {String(i + 1).padStart(2, '0')} {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className={`why-content-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${p.badge} border text-xs font-semibold uppercase tracking-widest mb-6`}>
              {activeData.icon} {activeData.label}
            </div>
            <h3 className="why-content-heading text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              {activeData.heading}
            </h3>
            <p className={`why-content-sub ${p.stat} font-semibold mb-4`}>{activeData.subheading}</p>
            <p className="why-content-desc text-slate-500 leading-relaxed mb-8">{activeData.description}</p>

            <ul className="space-y-3 mb-8">
              {activeData.bullets.map((bullet) => (
                <li key={bullet} className="why-bullet flex items-start gap-3 text-slate-700">
                  <span className={`w-2 h-2 rounded-full ${p.bullet} mt-2 flex-shrink-0`} />
                  {bullet}
                </li>
              ))}
            </ul>

            <MagneticButton
              href="#contact"
              className={`why-content-btn px-6 py-3 rounded-full bg-gradient-to-r ${p.btn} text-white font-semibold text-sm shadow-md`}
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </MagneticButton>
          </div>

          {/* Right */}
          <div className="grid grid-cols-3 gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
            {activeData.stats.map((stat) => (
              <div key={stat.label} className={`why-stat-card flex flex-col items-center justify-center p-4 rounded-2xl ${p.card} border`}>
                <div className={`text-3xl font-extrabold ${p.stat} mb-1`}>{stat.value}</div>
                <div className="text-slate-500 text-xs text-center">{stat.label}</div>
              </div>
            ))}
            <div className={`why-visual-card col-span-3 mt-4 p-6 rounded-2xl ${p.card} border flex items-center gap-4`}>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.btn} flex items-center justify-center flex-shrink-0 shadow-md text-white`}>
                {activeData.icon}
              </div>
              <div>
                <div className="text-slate-900 font-bold mb-1">{activeData.heading}</div>
                <div className="text-slate-500 text-sm">{activeData.subheading}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
