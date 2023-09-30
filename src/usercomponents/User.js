import './users.css'
import DataContext from '../context/DataContext'
import { useContext, useEffect, useState } from 'react'
import UserDetails from './UserDetails'
import img from '../bkgimg.jpg'

const User = ({ url }) => {
  const { accessKey, user } = useContext(DataContext)
  const [users, setusers] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [fetchError, setfetchError] = useState('')


  useEffect(() => {

  const fetchdata = async () => {
    setisLoading(true)
      try{
          const response = await fetch(`${url}/user/`, {
            method: 'POST',
            headers:{
              'Content-type': 'application/json; charset=UTF-8',
              'Authorization': `Bearer ${accessKey}`              
            },
            body: JSON.stringify({
              name: user
            })
            })
          if (!response.ok) throw Error('Did Not Recieve Expected Data')
          const serviceItems = await response.json()
          setusers(serviceItems)
          setfetchError(null)
      } catch (err){
          setfetchError(err.message)
          setusers([])
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
  },[url, accessKey, user])

  return (
    <main style={{
        backgroundImage:`url(${img})`,
        backgroundSize:'cover'
        }}>
      <div className='Users'>
        {isLoading && <p>Loading Your Details...</p>}
        {!isLoading &&fetchError && <p className='error5'>{fetchError}</p>}
        {!fetchError && !isLoading && 
        <>
          <UserDetails
              users={users}
          />
        </>
        }
      </div>
    </main>
  )
}

export default User
