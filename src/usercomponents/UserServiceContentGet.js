import '../services.css'
import { Link, useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext'
import { useContext, useState } from 'react'
import img from '../bkgimg.jpg'
import image from '../image.png'

const UserServiceContentGet = ({ service }) => {
  const { accessKey, baseUrl, setstatus } = useContext(DataContext)
  const [fetchError, setfetchError] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate()

  const unauthorized = () =>{
    alert('You Are Not Authorized To Perform This Action')
    navigate('/')
  }

  const handleDelete = async (ids) => {
    setisLoading(true)
    try{
      const response = await fetch(`${baseUrl}/services/`, {
        method: 'DELETE',
        headers:{
          'Authorization': `Bearer ${accessKey}`,
          'Content-type': 'application/json; charset=UTF-8'               
        },
        body:JSON.stringify({
          id:ids
        })
          })
      if (response.status === 401){
        return unauthorized()
        }
      if (!response.ok) throw Error('Did Not Recieve Expected Data')
      const serviceItems = await response.json()
      setstatus(serviceItems)
      setfetchError(null)
      setisLoading(false)
      navigate('/service')
  } catch (err){
      setfetchError(err.message)
      setstatus('')
      setisLoading(false)
      if (err.response){
        setfetchError(`Error: ${err.response.data}`)
      } else {
        setfetchError(`Error: ${err.message}`)
      }
  }
  }
  
  return (
    <>
    {(!service) ? (
    <>
    <p className='Pad' style={{
        backgroundImage:`url(${img})`,
        backgroundSize:'cover'
        }}>This Service Does Not Exist</p>
    <Link to={'/service'}>click here to check out our services</Link>
    </>
    ) : (
      <>
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
      <button className='btn1' onClick={()=>{navigate(`/service/edit/${service._id}`)}}>Edit Service</button>
      <button className='btn2' onClick={()=>{handleDelete(service._id)}}>Delete Service</button>
      {isLoading && <p className='Pad1'>Deleting Service...</p>}
      {!isLoading && fetchError && <p className='error2'>{fetchError}</p>}
      </>
    )
    }
    </>
  )
}

export default UserServiceContentGet
