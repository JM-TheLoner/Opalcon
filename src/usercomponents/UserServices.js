import { useEffect, useState } from "react"
import UserServicesSearch from "./UserServiceSearch"
import UserServiceContent from "./UserServiceContent"
import '../services.css'
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import img from '../bkgimg.jpg'
import add from '../addicon.png'

const Services = ({ url }) => {
  const { accessKey } = useContext(DataContext)
  const [services, setservices] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [fetchError, setfetchError] = useState('')
  const [sSearch, setsSearch] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
     window.scrollTo(0,0)
  }, [])

  useEffect(() => {

  const fetchdata = async () => {
    setisLoading(true)
          try{
          const response = await fetch(`${url}/services/`, {
            method: 'GET',
            headers:{
              'Authorization': `Bearer ${accessKey}`                
            }
          })
          if (!response.ok) throw Error('Did Not Recieve Expected Data')
          const serviceItems = await response.json()
          setservices(serviceItems)
          setfetchError(null)
      } catch (err){
          setfetchError(err.message)
          setservices([])
          if (err.response){
            setfetchError(`Error: ${err.response.data}`)
          } else {
            setfetchError(`Error: ${err.message}`)
          }
      } finally{
        setisLoading(false)
      }
    }
    fetchdata()
  },[url, accessKey])

  return (
    <main style={{
      backgroundImage:`url(${img})`,
      backgroundSize:'cover' 
      }}>
      <UserServicesSearch search={sSearch} setsearch={setsSearch}/>
      <div className='Servicers'>
        {isLoading && <p classname='Pad'>Loading Services...</p>}
        {!isLoading &&fetchError && <p className='error2'>{fetchError}</p>}
        {!fetchError && !isLoading &&
          <UserServiceContent
            services={services.filter(service => ((service.name).toLowerCase()).includes(sSearch.toLowerCase()) || ((service.description).toLowerCase()).includes(sSearch.toLowerCase()) || ((service._id).toLowerCase()).includes(sSearch.toLowerCase()))}
          />
        }
      </div>
      <button className="buttons2" onClick={()=>{navigate('/service/create')}}>
        <img src={add} className="Addbutton2" alt="logo" />
        <figcaption className='ImgTag'>
            <p className='buttontext2'>Add New Service</p>
          </figcaption>
        </button>
    </main>
  )
}

export default Services