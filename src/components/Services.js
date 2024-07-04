import { services } from '../data'
import Service from './Service'
import Title from './Title'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subTitle={'Services'} />
      <div className="section-center services-center">
        {services.map((data) => (
          <Service key={data.id} {...data} />
        ))}
      </div>
    </section>
  )
}
export default Services
