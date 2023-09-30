import ServiceList from "./ServiceList"
import './services.css'

const ServiceContent = ({ services }) => {
  return (
    <>
    {(!services.length) ? ( 
    <p classname='Pad'>There Are No Services To Display</p>
    ) : (
    <div className="packit">
      {services.map((service) => (
          <ServiceList key={service._id} service={service}/>
      ))}
    </div>
    )
    }
    </>
  )
}

export default ServiceContent
