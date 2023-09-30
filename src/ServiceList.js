import './services.css'
import { Link } from "react-router-dom"
import image from './image.png'

const ServiceList = ({ service }) => {
  return (
    <>
    {service.image_one &&
      <Link to={`/services/${service._id}`}>
        <main className="Packager" >
              <img classname='display' src={service.image_one} alt=''/>
              <p className="serviceDate">{service._id}</p>
              <h2 className="serviceBody">{service.name}</h2>
          </main>
      </Link>
      }
      { !service.image_one &&
      <Link to={`/services/${service._id}`}> 
        <main className="Packager" >
          <img classname='display' src={image} alt=''/>
          <p className="serviceDate">{service._id}</p>
          <h2 className="serviceBody">{service.name}</h2>
        </main>
      </Link>}
  </>
  )
}

export default ServiceList
