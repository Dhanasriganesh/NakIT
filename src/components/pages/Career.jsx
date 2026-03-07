import CareerHero from '../sections/Careers/CareerHero'
import CareerCulture from '../sections/Careers/CareerCulture'
import CareerBenefits from '../sections/Careers/CareerBenefits'
import CareerOpenRoles from '../sections/Careers/CareerOpenRoles'
import CareerProcess from '../sections/Careers/CareerProcess'
import CareerFormSection from '../sections/Careers/CareerFormSection'
export default function Career() {
  return (
    <>
      <CareerHero />
      <CareerFormSection />
      <CareerCulture />
      <CareerBenefits />
      <CareerOpenRoles />
      <CareerProcess />
    </>
  )
}

