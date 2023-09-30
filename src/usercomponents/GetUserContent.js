import './users.css'
import { Link, useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext'
import { useContext, useState } from 'react'

const GetUserContent = ({ user }) => {
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
        const response = await fetch(`${baseUrl}/users/`, {
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
        navigate('/users')
    } catch (err){
        setfetchError(err.message)
        setstatus('')
        if (err.response){
          setfetchError(`Error: ${err.response.data}`)
        } else {
          setfetchError(`Error: ${err.message}`)
        }
    } finally{
      setisLoading(false)
    }
    }
  
  return (
    <>
    {(!user) ? (
      <>
      <p className='Pad'>This User Does Not Exist</p>
      <p classname='Pad'><Link to={'/users'}>click here to see the registered users</Link></p>
      </>
    ) : (
      <>
        <article>
            <p className='Padd2'>User Information</p>
            <p className="namer">User ID:</p>
            <p className="userid">{user._id}</p>
            <h2 className="namer1">Username:</h2>
            <h2 className='username'>{user.username}</h2>
        </article>
        <button className='btn1' onClick={()=>{navigate(`/users/edit/${user._id}`)}}>Edit User</button>
        <button className='btn2' onClick={()=>{handleDelete(user._id)}}>Delete User</button>
        {isLoading && <p className='Pad1'>Deleting User...</p>}
        {!isLoading && fetchError && <p className='error5'>{fetchError}</p>}
      </>
    )
    }
    </>)
}

export default GetUserContent
