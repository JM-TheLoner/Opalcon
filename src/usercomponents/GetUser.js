import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GetUserContent from "./GetUserContent"
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import './users.css'
import img from '../bkgimg.jpg' 

const GetUser = ({ url }) => {const { accessKey } = useContext(DataContext)
const [user, setuser] = useState({})
const [isLoading, setisLoading] = useState(false)
const [fetchError, setfetchError] = useState('')
const {id} = useParams()

useEffect(()=>{
  window.scrollTo(0,0)
}, [])

const API_URL = `${url}/users/${id}`

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
          const employeeItems = await response.json()
          setuser(employeeItems)
          setfetchError(null)
      } catch (err){
          setfetchError(err.message)
          setuser([])
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
  <main className='Users' style={{
        backgroundImage:`url(${img})`,
        backgroundSize:'cover'
        }}>
    <div>
      {isLoading && <p classname='Pad'>Loading User Details...</p>}
      {!isLoading &&fetchError && <p className='error5'>{fetchError}</p>}
      {!fetchError && !isLoading && 
        <GetUserContent
          user={user}
        />
      }
    </div>
  </main>
)
}

export default GetUser
