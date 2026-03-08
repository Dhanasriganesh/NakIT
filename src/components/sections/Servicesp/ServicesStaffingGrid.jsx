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

import staff1 from "../../../assets/services/13.png"
import staff2 from "../../../assets/services/14.png"
import staff3 from "../../../assets/services/15.png"
import staff4 from "../../../assets/services/16.png"
import staff5 from "../../../assets/services/17.png"

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

      <div className="container-app py-16 md:py-20">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-nak-deep/90 mb-3">
            Global IT Staffing Expertise
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            End-to-end staffing and workforce solutions
          </h2>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            We help organizations scale engineering and IT teams with trusted
            recruitment expertise, global reach, and flexible workforce models.
          </p>
        </div>


        {/* Highlight Image Section */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">

          {highlights.map((item) => (

            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-sm">
                  {item.title}
                </h3>
              </div>

            </div>

          ))}

        </div>


        {/* Services Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((item) => {
            const Icon = serviceIcons[item.title]
            return (
              <article
                key={item.title}
                className="group bg-white rounded-xl p-6 border border-slate-200/90 shadow-[0_1px_3px_0_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_-2px_rgba(15,23,42,0.08)] hover:border-slate-300/90"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 border border-slate-200/80 text-slate-600 mb-4 group-hover:bg-nak-deep/10 group-hover:border-nak-deep/20 group-hover:text-nak-deep transition-colors duration-300">
                  {Icon && <Icon className="w-5 h-5" strokeWidth={1.75} />}
                </div>
                <h3 className="text-slate-900 font-semibold text-base mb-2 group-hover:text-nak-deep transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </article>
            )
          })}

        </div>


        {/* CTA */}

        <div className="mt-16 md:mt-20 rounded-2xl bg-white border border-slate-200 p-8 md:p-10 shadow-sm">

          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            How we work with you
          </h3>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 max-w-4xl">
            Our recruiters analyze your requirements, source verified talent,
            perform technical screening, and manage onboarding. From hiring one
            specialist to building full engineering teams, we ensure seamless
            workforce scaling.
          </p>

          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
            bg-nak-deep hover:bg-nak-bright text-white text-sm font-semibold
            transition-colors duration-300"
          >
            Discuss your staffing needs
          </NavLink>

        </div>

      </div>
    </section>
  )
}