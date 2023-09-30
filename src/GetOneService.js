import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ServiceContentGet from "./ServiceContentGet"
import './services.css'
import img from './bkgimg.jpg'

const GetOneService = () => {

  const [service, setservice] = useState({})
  const [isLoading, setisLoading] = useState(false)
  const [fetchError, setfetchError] = useState('')
  const {id} = useParams()

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  const API_URL = `https://opalconbackend.glitch.me/getservices/${id}`

  useEffect(() => {

    const fetchdata = async () => {
      setisLoading(true)
        try{
            const response = await fetch(API_URL)
            if (!response.ok) throw Error('Did Not Recieve Expected Data')
            const serviceItems = await response.json()
            setservice(serviceItems)
            setfetchError(null)
        } catch (err){
            setfetchError(err.message)
            setservice([])
            if (err.response){
              setfetchError(err.response.data)
            } else {
              setfetchError(`Error: ${fetchError}`)
            }
        } finally{
          setisLoading(false)
        }
      }
      fetchdata()

  },[API_URL, fetchError])
  
  return (
    <main>
      <div className='Services' style={{
        backgroundImage:`url(${img})`,
        backgroundSize:'cover'
        }}>
        {isLoading && <p classname='Pad'>Loading Service Details...</p>}
        {!isLoading && fetchError && <p classname='error2'>{fetchError}</p>}
        {!fetchError && !isLoading && 
          <ServiceContentGet
            service={service}
          />
        }
      </div>
    </main>
  )
}

export default GetOneService
