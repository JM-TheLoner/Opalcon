import { useEffect, useState } from "react"
import ServicesSearch from "./ServicesSearch" 
import ServiceContent from "./ServiceContent"
import './services.css'
import img from './bkgimg.jpg'

const Services = ({ url }) => {
  
  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])
 
  const [services, setservices] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [fetchError, setfetchError] = useState('')
  const [search, setsearch] = useState('')

  useEffect(() => {

  const fetchdata = async () => {
    setisLoading(true)
      try{
          const response = await fetch(`${url}/getservices/`)
          if (!response.ok) throw Error('Did Not Recieve Expected Data')
          const serviceItems = await response.json()
          setservices(serviceItems)
          setfetchError(null)
      } catch (err){
          setfetchError(err.message)
          setservices('')
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
  },[url])

  return (
    <div>
      <ServicesSearch search={search} setsearch={setsearch}/>
      <main className='Servicers' style={{
      backgroundImage:`url(${img})`,
      backgroundSize:'cover'}}>
      
        {isLoading && <p classname='Pad'>Loading Services...</p>}
        {!isLoading &&fetchError && <p classname='error2'>{fetchError}</p>}
        {!fetchError && !isLoading && 
          <ServiceContent
            services={services.filter(service => ((service.name).toLowerCase()).includes(search.toLowerCase()) || ((service.description).toLowerCase()).includes(search.toLowerCase()) || ((service._id).toLowerCase()).includes(search.toLowerCase()))}
          />
        }
      </main>
    </div>
  )
}

export default Services