import Hero from '../sections/Homep/Hero'
import Marquee from '../sections/Homep/Marquee'
import Brands from '../sections/Homep/Brands'
import About from '../sections/Homep/About'
import ServicesOverview from '../sections/Homep/ServicesOverview'
import WhyChoose from '../sections/Homep/WhyChoose'
import CTA from '../sections/Homep/CTA'
import Testimonials from '../sections/Homep/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Brands />
      <About />
      <ServicesOverview />
      <WhyChoose />
      <Testimonials />
      <CTA />
    </main>
  )
}
