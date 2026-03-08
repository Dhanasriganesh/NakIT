import { useState, useEffect, useRef } from 'react'
import { gsap } from '../../../utils/gsap'
import MagneticButton from '../../ui/MagneticButton'

import homeExpertiseImage from '../../../assets/nakit-images/home-expertise.png'
import homeInnovationImage from '../../../assets/nakit-images/home-innovation.png'
import homeReliabilityImage from '../../../assets/nakit-images/home-reliability.png'
import homeInteractionImage from '../../../assets/nakit-images/home-interaction.png'
import homePartnershipImage from '../../../assets/nakit-images/home-partnership.png'

const tabs = [
  {
    id: 'expertise',
    label: 'Expertise',
    image: homeExpertiseImage,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    heading: 'Expertise',
    subheading: 'Proven track record with cutting-edge technology solutions',
    description: 'Our team brings deep expertise across AI, Cloud Computing, and Data Science with proven methodologies for successful project delivery.',
    bullets: [
      'Certified professionals in AI, Cloud Computing, and Data Science',
      'Deep industry knowledge across Finance, Healthcare, and Technology',
      'Proven methodologies for successful project delivery'
    ],
    stats: [
      { value: '10+', label: 'Years' },
      { value: '100+', label: 'Experts' },
      { value: '500+', label: 'Projects' }
    ],
    color: 'blue'
  },

  {
    id: 'innovation',
    label: 'Innovation',
    image: homeInnovationImage,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    heading: 'Innovation',
    subheading: 'Forward-thinking approach that transforms businesses',
    description: 'We embrace emerging technologies and forward-thinking digital strategies to keep your business ahead.',
    bullets: [
      'Cutting-edge AI and Machine Learning solutions',
      'Cloud-native architectures for scalable applications',
      'Advanced analytics for business insights'
    ],
    stats: [
      { value: '95%', label: 'Satisfaction' },
      { value: '50+', label: 'Innovations' },
      { value: '24/7', label: 'Support' }
    ],
    color: 'cyan'
  },

  {
    id: 'reliability',
    label: 'Reliability',
    image: homeReliabilityImage,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4"/>
      </svg>
    ),
    heading: 'Reliability',
    subheading: 'Consistent delivery with unwavering commitment',
    description: 'We deliver high-quality solutions with a 99.9% uptime guarantee.',
    bullets: [
      '99.9% uptime guarantee',
      'Rigorous quality assurance',
      '24/7 monitoring and support'
    ],
    stats: [
      { value: '99.9%', label: 'Uptime' },
      { value: '98%', label: 'On-Time' },
      { value: '0', label: 'Critical Bugs' }
    ],
    color: 'indigo'
  },

  {
    id: 'interaction',
    label: 'Interaction',
    image: homeInteractionImage,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2z"/>
      </svg>
    ),
    heading: 'Interaction',
    subheading: 'Seamless user experiences through intuitive interfaces',
    description: 'We design user-centered experiences that enhance productivity.',
    bullets: [
      'User-centered design',
      'Cross-platform compatibility',
      'Real-time collaboration tools'
    ],
    stats: [
      { value: '40%', label: 'Faster' },
      { value: '85%', label: 'Adoption' },
      { value: '60%', label: 'Time Saved' }
    ],
    color: 'sky'
  },

  {
    id: 'partnership',
    label: 'Partnership',
    image: homePartnershipImage,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20H7"/>
      </svg>
    ),
    heading: 'Partnership',
    subheading: 'Long-term collaborative relationships built on trust',
    description: 'We build lasting relationships through dedicated account management.',
    bullets: [
      'Dedicated account managers',
      'Transparent communication',
      'Flexible engagement models'
    ],
    stats: [
      { value: '90%', label: 'Retention' },
      { value: '5+', label: 'Years Avg.' },
      { value: '32+', label: 'Clients' }
    ],
    color: 'blue'
  }
]

export default function WhyChoose() {

  const [activeTab, setActiveTab] = useState('expertise')
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  const activeData = tabs.find(t => t.id === activeTab)

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo('.why-header',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: .8 }
      )

      gsap.fromTo('.why-tab-btn',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: .08, duration: .5 }
      )

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline()

      tl.from('.why-content', { y: 30, opacity: 0, duration: .5 })
      .from('.why-bullet', { x: -20, opacity: 0, stagger: .08 })
      .from('.why-image', { scale: 1.1, opacity: 0, duration: .6 }, "-=.4")

    }, contentRef)

    return () => ctx.revert()

  }, [activeTab])


  return (

    <section ref={sectionRef} className="bg-white py-24">

      <div className="container-app">

        {/* Header */}

        <div className="why-header text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Why Choose <span className="text-blue-600">NAK IT Group</span>
          </h2>

        </div>


        {/* Tabs */}

        <div className="flex flex-wrap justify-center gap-3 mb-12">

          {tabs.map((tab, i) => (

            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`why-tab-btn px-5 py-2 rounded-full text-sm font-semibold border transition ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {String(i + 1).padStart(2, '0')} {tab.label}
            </button>

          ))}

        </div>


        {/* Content */}

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div className="why-content">

            <h3 className="text-3xl font-bold mb-4">
              {activeData.heading}
            </h3>

            <p className="text-slate-600 mb-6">
              {activeData.description}
            </p>

            <ul className="space-y-3 mb-8">

              {activeData.bullets.map(b => (

                <li key={b} className="why-bullet flex gap-3 text-slate-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  {b}
                </li>

              ))}

            </ul>

            <MagneticButton
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold"
            >
              Learn More
            </MagneticButton>

          </div>


          {/* Right Image Card */}

          <div className="relative rounded-3xl overflow-hidden shadow-xl border">

            <img
              src={activeData.image}
              alt={activeData.heading}
              className="why-image w-full h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <div className="absolute bottom-0 p-8 text-white">

              <h4 className="text-2xl font-bold mb-2">
                {activeData.heading}
              </h4>

              <p className="text-white/80 text-sm mb-5">
                {activeData.subheading}
              </p>

              <div className="flex gap-6">

                {activeData.stats.map(stat => (

                  <div key={stat.label}>

                    <div className="text-xl font-bold">
                      {stat.value}
                    </div>

                    <div className="text-xs text-white/70">
                      {stat.label}
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}