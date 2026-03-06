import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import Brands from '../sections/Brands'
import About from '../sections/About'
import ServicesOverview from '../sections/ServicesOverview'
import WhyChoose from '../sections/WhyChoose'
import CTA from '../sections/CTA'
import Testimonials from '../sections/Testimonials'

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
