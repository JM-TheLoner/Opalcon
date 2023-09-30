import './services.css'
import { Link } from 'react-router-dom'
import image from './image.png'

const ServiceContentGet = ({service}) => {
  return (
    <>
    {(!service) ? (
    <div>
    <p classname='Pad'>This Service Does Not Exist</p>
    <Link to={'/services'} classname='Pad'>click here to check out our services</Link>
    </div>
    ) : (
        <article className='servicer'>
            <p className='Pad4'>Service Information</p>
            <p className='namess'>ID:</p>
            <p className="serid">{service._id}</p>
            <p className='namess'>Name:</p>
            <h2 className="sername">{service.name}</h2>
            <p className='namess'>Description:</p>
            <p className="serdesc">{service.description}</p>
            <p className='namess'>Price:</p>
            <p className="serpri">${service.price_range}</p>
            { service.image_one &&
            <>
              <p className='namess'>Samples:</p>
              <ul>
                <li>
                  <img src={service.image_one !== false ? service.image_one : {image}} alt='' className='imageone'/>
                </li>
                <li>
                  <img src={service.image_two !== false ? service.image_two : {image}} alt='' className='imagetwo'/>
                </li>
                <li>
                  <img src={service.image_three !== false ? service.image_three : {image}} alt='' className='imagethree'/>
                </li>
              </ul>
            </>}
        </article>
    )
    }
    </>
  )
}

export default ServiceContentGet
