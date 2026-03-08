import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../../utils/gsap'
import homeAboutImage from '../../../assets/nakit-images/home-about.webp'

const stats = [
  { value: 150, suffix: '+', label: 'Enterprise Clients' },
  { value: 130, suffix: '+', label: 'IT Projects Delivered' },
  { value: 4, suffix: '+', label: 'Cloud Platforms' },
]

const capabilities = [
  'Cloud Migration',
  'Digital Transformation',
  'Cybersecurity Solutions',
  'DevOps Services',
  'Data Analytics',
  'AI Integration',
]

export default function About() {

  const sectionRef = useRef(null)

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo('.about-badge',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-badge', start: 'top 88%', once: true }
        }
      )

      gsap.fromTo('.about-left',
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-left', start: 'top 88%', once: true }
        }
      )

      gsap.fromTo('.about-tag',
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.about-tags', start: 'top 88%', once: true }
        }
      )

      gsap.fromTo('.about-stat-card',
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-right', start: 'top 88%', once: true }
        }
      )

      document.querySelectorAll('.stat-number').forEach((el) => {

        const target = parseInt(el.getAttribute('data-target'), 10)

        const obj = { val: 0 }

        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(obj, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = Math.round(obj.val)
              }
            })
          },
          once: true
        })

      })

      gsap.fromTo('.about-image',
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-image', start: 'top 88%', once: true }
        }
      )

      gsap.fromTo('.about-accent-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-accent-card', start: 'top 88%', once: true }
        }
      )

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  return (

    <section
      ref={sectionRef}
      className="bg-white py-14 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
      id="about-company"
    >

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full bg-nak-bright/20 blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="container-app">

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

          {/* LEFT */}

          <div className="about-left">

            <div className="about-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-nak-bright/10 border border-nak-bright/30 text-nak-deep text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-6">
              About Company
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4 sm:mb-6">
              Empowering businesses with
              <span className="bg-gradient-to-r from-nak-deep to-cyan-500 bg-clip-text text-transparent">
                {' '}innovative technology
              </span>
            </h2>

            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              We're a leading IT consulting team focused on empowering businesses with innovative
              technology solutions and digital transformation strategies.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              From cloud migrations to AI integrations, we help organizations
              achieve digital excellence faster and smarter.
            </p>

            <div className="about-tags flex flex-wrap gap-1.5 sm:gap-2">

              {capabilities.map((cap) => (

                <span
                  key={cap}
                  className="about-tag px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs sm:text-sm font-medium hover:bg-nak-bright/10 hover:border-nak-bright hover:text-nak-deep transition-all duration-300 cursor-default hover:-translate-y-0.5"
                >
                  {cap}
                </span>

              ))}

            </div>

          </div>


          {/* RIGHT */}

          <div className="about-right relative">

            {/* IMAGE CARD */}

            <div className="about-image relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200">

              <img
                src={homeAboutImage}
                alt="About NAK IT Group"
                className="w-full h-56 sm:h-72 md:h-80 lg:h-[420px] object-cover"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* FLOATING STATS */}

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6 grid grid-cols-3 gap-2 sm:gap-3">

                {stats.map((stat) => (

                  <div
                    key={stat.label}
                    className="about-stat-card backdrop-blur-lg bg-white/80 border border-white/40 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 text-center"
                  >

                    <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-nak-deep">

                      <span
                        className="stat-number"
                        data-target={stat.value}
                      >
                        0
                      </span>

                      {stat.suffix}

                    </div>

                    <div className="text-[10px] sm:text-xs text-slate-600 mt-0.5 sm:mt-1">
                      {stat.label}
                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* ACCENT CARD */}

            <div className="about-accent-card mt-4 sm:mt-5 md:mt-6 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-nak-deep to-nak-bright relative overflow-hidden shadow-lg shadow-nak-deep/30">

              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-2xl" />

              <div className="relative">

                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">

                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">

                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />

                    </svg>

                  </div>

                  <span className="text-white font-bold text-sm sm:text-base">
                    Fast. Scalable. Reliable.
                  </span>

                </div>

                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  Technology solutions that evolve with your business,
                  delivering measurable results at every stage of your
                  digital journey.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}