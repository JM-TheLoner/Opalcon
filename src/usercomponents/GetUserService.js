import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserServiceContentGet from "./UserServiceContentGet"
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import '../services.css'
import img from '../bkgimg.jpg'

const GetUserService = ({ url }) => {
    const { accessKey } = useContext(DataContext)
    const [service, setservice] = useState({})
    const [isLoading, setisLoading] = useState(false)
    const [fetchError, setfetchError] = useState('')
    const {id} = useParams()
  
    useEffect(()=>{
      window.scrollTo(0,0)
   }, [])
   
    const API_URL = `${url}/services/${id}`
  
    useEffect(() => {
  
      const fetchdata = async () => {
        setisLoading(true)
          try{
              const response = await fetch(API_URL, {
                method: 'GET',
                headers:{
                    'Authorization': `Bearer ${accessKey}`                        
                }
              })
              if (!response.ok) throw Error('Did Not Recieve Expected Data')
              const serviceItems = await response.json()
              setservice(serviceItems)
              setfetchError(null)
          } catch (err){
              setfetchError(err.message)
              setservice('')
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
  
    },[API_URL, accessKey])

    return (
      <main>
        <div className='Services' style={{
        backgroundImage:`url(${img})`,
        backgroundSize:'cover'
        }}>
          {isLoading && <p classname='Pad'>Loading Service Details...</p>}
          {!isLoading &&fetchError && <p className='error2'>{fetchError}</p>}
          {!fetchError && !isLoading && 
            <UserServiceContentGet
              service={service}
            />
          }
        </div>
      </main>
    )
}

export default GetUserService
