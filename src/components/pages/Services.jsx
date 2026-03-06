import ServicesHero from '../sections/Servicesp/ServicesHero'
import CloudAndInfrastructure from '../sections/Servicesp/CloudAndInfrastructure'
import DigitalTransformation from '../sections/Servicesp/DigitalTransformation'
import ManagedServices from '../sections/Servicesp/ManagedServices'
import SecurityAndCompliance from '../sections/Servicesp/SecurityAndCompliance'

export default function Services() {
  return (
    <>
      <ServicesHero />
      <CloudAndInfrastructure />
      <DigitalTransformation />
      <ManagedServices />
      <SecurityAndCompliance />
    </>
  )
}

