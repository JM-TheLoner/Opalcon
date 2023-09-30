import { useEffect, useState } from "react"
import UserSearch from "./UserSearch"
import UserContent from "./UserContent"
import './users.css'
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import img from '../bkgimg.jpg'
import add from '../addicon.png'

const Users = ({ url }) => {
  const { accessKey } = useContext(DataContext)
  const [users, setusers] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [fetchError, setfetchError] = useState('')
  const [usearch, setusearch] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  useEffect(() => {

  const fetchdata = async () => {

  const unauthorized = () =>{
    alert('You Are Not Authorized To Perform This Action')
    navigate('/')
  }
    setisLoading(true)
      try{
          const response = await fetch(`${url}/users/`, {
            method: 'GET',
            headers:{
              'Authorization': `Bearer ${accessKey}`              
            }
                  })
          if (response.status === 401){
            return unauthorized()
            }
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
  },[url, accessKey, navigate])

  return (
    <main style={{
      backgroundImage:`url(${img})`,
      backgroundSize:'cover'
      }}>
      <UserSearch search={usearch} setsearch={setusearch}/>
      <div className='Users'>
        {isLoading && <p classname='Pader'>Loading Users...</p>}
        {!isLoading && fetchError && <p className='error5'>{fetchError}</p>}
        {!fetchError && !isLoading &&
        <>
          <UserContent
            users={users.filter(user => ((user.username).toLowerCase()).includes(usearch.toLowerCase()) || ((user._id).toLowerCase()).includes(usearch.toLowerCase()))}
          />
          
        </> 
        }
      </div>
      <button className="buttons1" onClick={()=>{navigate('/users/create')}}>
      <img src={add} className="Addbutton1" alt="logo" />
        <figcaption className='ImgTag'>
            <p className='buttontext1'>Add User</p>
          </figcaption>
      </button>
    </main>
  )
}

export default Users
