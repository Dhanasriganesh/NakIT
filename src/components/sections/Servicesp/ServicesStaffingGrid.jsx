import { NavLink } from "react-router-dom"
import {
  FileSignature,
  UserPlus,
  Building2,
  ArrowRightLeft,
  Globe,
  MapPin,
  Target,
  UsersRound,
  Award,
  Settings,
  Cpu,
  FolderKanban,
  Heart,
  FileText,
  Plane,
  Bell,
} from "lucide-react"

import staff1 from "../../../assets/services/13.webp"
import staff2 from "../../../assets/services/14.webp"
import staff3 from "../../../assets/services/15.webp"
import staff4 from "../../../assets/services/16.webp"
import staff5 from "../../../assets/services/17.webp"

const highlights = [
  { image: staff1, title: "Global Talent Network" },
  { image: staff2, title: "Fast Hiring Process" },
  { image: staff3, title: "Industry Expertise" },
  { image: staff4, title: "Flexible Workforce Models" },
  { image: staff5, title: "End-to-End HR Support" },
]

const serviceIcons = {
  "Contract Staffing": FileSignature,
  "Full-Time Hiring": UserPlus,
  "Permanent Hiring": Building2,
  "Contract-to-Hire": ArrowRightLeft,
  "Offshore Staffing": Globe,
  "Onsite Staffing": MapPin,
  "Workforce Support": Target,
  "Leadership Hiring": UsersRound,
  "Executive Hiring": Award,
  "Managed Resource": Settings,
  "IT Skill-Based Talent": Cpu,
  "Project-Based": FolderKanban,
  "Free Support": Heart,
  "Documentation": FileText,
  "Visa Hassle": Plane,
  "Free Updates": Bell,
}

const services = [
  { title: "Contract Staffing", description: "Deploy skilled IT professionals on a contract basis to scale teams quickly." },
  { title: "Full-Time Hiring", description: "Complete hiring support from sourcing to onboarding for full-time roles." },
  { title: "Permanent Hiring", description: "Secure long-term talent aligned with your organization’s growth goals." },
  { title: "Contract-to-Hire", description: "Evaluate candidates on contract before transitioning to full-time employment." },
  { title: "Offshore Staffing", description: "Access global talent pools while optimizing operational costs." },
  { title: "Onsite Staffing", description: "Place IT professionals directly at your location for collaboration." },
  { title: "Workforce Support", description: "Performance management, retention strategies, and workforce stability." },
  { title: "Leadership Hiring", description: "Hire senior leaders including Directors, VPs, and Heads of Technology." },
  { title: "Executive Hiring", description: "Confidential executive search for C-suite technology leaders." },
  { title: "Managed Resource", description: "We manage recruitment, payroll, and lifecycle of dedicated resources." },
  { title: "IT Skill-Based Talent", description: "Hire experts across cloud, DevOps, security, data, and development." },
  { title: "Project-Based", description: "Staff complete project teams for defined timelines and deliverables." },
  { title: "Free Support", description: "Career support and interview preparation for placed candidates." },
  { title: "Documentation", description: "Contracts, compliance paperwork, and onboarding documentation." },
  { title: "Visa Hassle", description: "Visa processing, relocation, and international hiring support." },
  { title: "Free Updates", description: "Continuous hiring updates and candidate pipeline transparency." },
]

export default function ServicesStaffingGrid() {
  return (
    <section className="bg-slate-50 border-t border-slate-200/70">

      <div className="container-app py-12 sm:py-14 md:py-16 lg:py-20">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14 px-1">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-nak-deep/90 mb-2 sm:mb-3">
            Global IT Staffing Expertise
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            End-to-end staffing and workforce solutions
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            We help organizations scale engineering and IT teams with trusted
            recruitment expertise, global reach, and flexible workforce models.
          </p>
        </div>


        {/* Highlight Image Section */}

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-16">

          {highlights.map((item) => (

            <div
              key={item.title}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-28 sm:h-32 md:h-40 object-cover group-hover:scale-110 transition duration-500"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 md:bottom-4 md:left-4 md:right-4">
                <h3 className="text-white font-semibold text-[10px] sm:text-xs md:text-sm line-clamp-2">
                  {item.title}
                </h3>
              </div>

            </div>

          ))}

        </div>


        {/* Services Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">

          {services.map((item) => {
            const Icon = serviceIcons[item.title]
            return (
              <article
                key={item.title}
                className="group bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-slate-200/90 shadow-[0_1px_3px_0_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_-2px_rgba(15,23,42,0.08)] hover:border-slate-300/90"
              >
                <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-slate-100 border border-slate-200/80 text-slate-600 mb-3 sm:mb-4 group-hover:bg-nak-deep/10 group-hover:border-nak-deep/20 group-hover:text-nak-deep transition-colors duration-300">
                  {Icon && <Icon className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" strokeWidth={1.75} />}
                </div>
                <h3 className="text-slate-900 font-semibold text-sm sm:text-base mb-1.5 sm:mb-2 group-hover:text-nak-deep transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </article>
            )
          })}

        </div>


        {/* CTA */}

        <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 rounded-xl sm:rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 md:p-8 lg:p-10 shadow-sm">

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
            How we work with you
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 max-w-4xl">
            Our recruiters analyze your requirements, source verified talent,
            perform technical screening, and manage onboarding. From hiring one
            specialist to building full engineering teams, we ensure seamless
            workforce scaling.
          </p>

          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-nak-deep hover:bg-nak-bright text-white text-xs sm:text-sm font-semibold transition-colors duration-300"
          >
            Discuss your staffing needs
          </NavLink>

        </div>

      </div>
    </section>
  )
}