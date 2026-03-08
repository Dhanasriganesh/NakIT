import { useEffect, useRef } from 'react'
import { gsap } from '../../../utils/gsap'

import energy from "../../../assets/industries/energy.png"
import finance from "../../../assets/industries/financial.png"
import healthcare from "../../../assets/industries/health.png"
import media from "../../../assets/industries/media.png"
import technology from "../../../assets/industries/tech.png"
import telecommunications from "../../../assets/industries/tele.png"
import transportation from "../../../assets/industries/transport.png"
import automobile from "../../../assets/industries/automate.png"


const services = [
  {
    image: finance,
    title: 'Financial Services',
    description: 'Secure, compliant, and scalable systems for banking, insurance, and financial institutions.',
    tags: ['Banking', 'InsurTech', 'Compliance'],
    accent: '#1a498e'
  },
  {
    image: healthcare,
    title: 'Healthcare',
    description: 'Patient care technology that streamlines operations and ensures regulatory compliance.',
    tags: ['Patient Care', 'HIPAA', 'Health IT'],
    accent: '#0891b2'
  },
  {
    image: media,
    title: 'Media, Entertainment & Gaming',
    description: 'Immersive digital platforms for content creation and interactive entertainment.',
    tags: ['Streaming', 'Gaming', 'Content'],
    accent: '#4f46e5'
  },
  {
    image: technology,
    title: 'Technology Enablement',
    description: 'Strategic consulting to leverage cutting-edge solutions and drive innovation.',
    tags: ['Cloud', 'AI/ML', 'DevOps'],
    accent: '#1a498e'
  },
  {
    image: telecommunications,
    title: 'Telecommunications',
    description: 'Advanced network infrastructure and cloud communications.',
    tags: ['5G', 'Network', 'VoIP'],
    accent: '#0284c7'
  },
  {
    image: energy,
    title: 'Energy',
    description: 'Smart energy management and renewable solutions.',
    tags: ['Renewable', 'Smart Grid', 'IoT'],
    accent: '#2eafe6'
  },
  {
    image: technology,
    title: 'Consumer & Industrial Products',
    description: 'Manufacturing and supply chain digital transformation.',
    tags: ['Manufacturing', 'Supply Chain', 'PLM'],
    accent: '#6366f1'
  },
  {
    image: transportation,
    title: 'Transportation & Travel',
    description: 'Integrated mobility and logistics platforms.',
    tags: ['Logistics', 'Mobility', 'Booking'],
    accent: '#06b6d4'
  },
  {
    image: automobile,
    title: 'Automobile Industry',
    description: 'Automotive tech solutions for EV connectivity and smart transport.',
    tags: ['EV Tech', 'Connected Cars', 'ADAS'],
    accent: '#1a498e'
  }
]

export default function ServicesOverview() {

  const sectionRef = useRef(null)

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo('.services-badge',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: .6, ease: 'power3.out',
          scrollTrigger: { trigger: '.services-header', start: 'top 88%', once: true }
        }
      )

      gsap.fromTo('.services-title',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out',
          scrollTrigger: { trigger: '.services-title', start: 'top 88%', once: true }
        }
      )

      const cards = gsap.utils.toArray('.service-card')

      gsap.set(cards, {
        opacity: 0,
        y: (i) => 60 + i * 4,
        scale: (i) => 0.72 + i * 0.012,
        rotation: (i) => ((i % 3) - 1) * (5 - i * 0.4),
        transformOrigin: 'center bottom'
      })

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: .75,
        stagger: {
          amount: .85,
          from: 'center',
          grid: 'auto'
        },
        ease: 'back.out(1.5)',
        scrollTrigger: { trigger: '.services-grid', start: 'top 82%', once: true }
      })

    }, sectionRef)

    return () => ctx.revert()

  }, [])


  return (

    <section ref={sectionRef} className="bg-slate-50 py-24 relative overflow-hidden" id="services">

      <div className="container-app">

        {/* Header */}

        <div className="services-header text-center mb-16">

          <div className="services-badge inline-flex px-3 py-1.5 rounded-full bg-nak-bright/10 border border-nak-bright/30 text-nak-deep text-xs font-semibold uppercase tracking-widest mb-4">
            Services Overview
          </div>

          <h2 className="services-title text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Industry-focused
            <span className="bg-gradient-to-r from-nak-deep to-cyan-500 bg-clip-text text-transparent">
              {" "}technology solutions
            </span>
          </h2>

        </div>


        {/* Grid */}

        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => (

            <div
              key={service.title}
              className="service-card group relative bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_48px_-12px_rgba(15,23,42,0.18)] hover:border-slate-300/80"
            >
              {/* Accent bar - animates on hover */}
              <div
                className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10"
                style={{ background: service.accent, height: '3px' }}
              />

              {/* Image */}

              <div className="relative h-40 overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />

              </div>


              {/* Content */}

              <div className="p-6 transition-colors duration-300">

                <h3 className="text-slate-900 font-bold text-lg mb-3 group-hover:text-slate-800 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-4 group-hover:text-slate-600 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {service.tags.map(tag => (

                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80 transition-all duration-300 group-hover:bg-slate-200/70 group-hover:border-slate-300/80"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}