import './users.css'
import { useState, useEffect } from 'react'
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../bkgimg.jpg' 

const CreateUser = ({ url }) => {
  const { accessKey, setstatus } = useContext(DataContext)
  const [userInput, setuserInput] = useState('')
  const [pwdInput, setpwdInput] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const [fetchError, setfetchError] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  const unauthorized = () =>{
    alert('You Are Not Authorized To Perform This Action')
    navigate('/')
  }
  const duplicate = () =>{
    alert('Conflict: The Username Entered Is Already Taken')
    setuserInput('')
    setpwdInput('')
  }

  const handleCreate = async (e) =>{ 
      e.preventDefault()
      setisLoading(true)
      try{
          const response = await fetch(`${url}/users/`, {
            method: 'POST',
            headers:{
              'Authorization': `Bearer ${accessKey}`,
              'Content-type': 'application/json; charset=UTF-8'                  
            },
            body:JSON.stringify({
              user:userInput,
              pwd:pwdInput
            })
          })
          if (response.status === 401){
            return unauthorized()
            }
          if (response.status === 409){
            return duplicate()
            }
          if (!response.ok) throw Error('Did Not Recieve Expected Data')
          const serviceItems = await response.json()
          setstatus(serviceItems)
          setfetchError(null)
          setisLoading(false)
          navigate('/users')
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
<div style={{
      backgroundImage:`url(${img})`,
      backgroundSize:'cover'}}>
<div className='Users'>
  <form>
    <h1 className='Pad2'>Create New User</h1>
      {isLoading && <p className='Pad1'>Creating New User...</p>}
      {!isLoading && fetchError && <p className='error5'>{fetchError}</p>}
    <div className='inputBoxuser'>
    <h2 className='name'>Username</h2>
      <input
      type='text'
      placeholder='Username'
      required
      value={userInput}
      onChange={(e)=>{setuserInput(e.target.value)}}/>
    </div>
    <div className='inputBoxpwd'>
    <h2 className='name'>Password</h2>
      <input
      type='password'
      placeholder='Password'
      required
      value={pwdInput}
      onChange={(e)=>{setpwdInput(e.target.value)}}/>
    </div>
    <button type='submit' className='btn1' onClick={(e)=>{handleCreate(e)}}>Add User</button> 
    <button type='button' className='btn2' onClick={()=>{navigate(`/Users/`)}}>Discard</button> 
  </form>
</div>
</div>
)
}

export default CreateUser
