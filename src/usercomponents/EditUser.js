import './users.css'
import { useState, useEffect } from 'react'
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import img from '../bkgimg.jpg' 

const EditUser = () => {
  const { accessKey, setstatus } = useContext(DataContext)
  const [usernameInput, setusernameInput] = useState('')
  const [passwordInput, setpasswordInput] = useState('')
  const [confirmInput, setconfirmInput] = useState('')
  const [fetchError, setfetchError] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const url = "https://opalconbackend.glitch.me"

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  const unauthorized = () =>{
    alert('You Are Not Authorized To Perform This Action')
    navigate('/')
  }

  const handleEdit = async (e) =>{ 
    if (passwordInput === confirmInput){ 
      setisLoading(true)
      e.preventDefault()
      try{
          const response = await fetch(`${url}/users/`, {
          method: 'PUT',
          headers:{
              'Authorization': `Bearer ${accessKey}`,
              'Content-type': 'application/json; charset=UTF-8'                  
          },
          body:JSON.stringify({
              id:id,
              user:usernameInput,
              pwd:passwordInput,
              conf:confirmInput
          })
          })
          if (response.status === 401){
            return unauthorized()
            }
          if (!response.ok) throw Error('Did Not Recieve Expected Data')
          const serviceItems = await response.json()
          setstatus(serviceItems)
          setfetchError(null)
          navigate(`/users/${id}`)
      } catch (err){
          setfetchError(err.message)
          setstatus([])
          if (err.response){
            setfetchError(`Error: ${err.response.data}`)
          } else {
          setfetchError(`Error: ${err.message}`)
          }
      } finally{
      setisLoading(false)
      }}
    else if (passwordInput !== confirmInput){
        alert('Password and confirmation do not match')
      }
      }

  return (
  <div style={{
    backgroundImage:`url(${img})`,
    backgroundSize:'cover'
    }}>
      <div className='Users'>              
          <form>
              <h1 className='Pad2'>Edit User: {id}</h1>
              {isLoading && <p className='Pad1'>Changing User Details...</p>}
              {!isLoading && fetchError && <p className='error5'>{fetchError}</p>}
              <div className='inputBoxuser'>
              <h2 className='name'>Username</h2>
                  <input
                      type='text'
                      placeholder='Username'
                      required
                      value={usernameInput}
                      onChange={(e)=>{setusernameInput(e.target.value)}}/>
              </div>
              <div className='inputBoxpwd'>
              <h2 className='name'>Password</h2>
                  <input
                      type='password'
                      placeholder='Password'
                      required
                      value={passwordInput}
                      onChange={(e)=>{setpasswordInput(e.target.value)}}/>
              </div>
              <div className='inputBoxconf'>
              <h2 className='name'>Confirm Password</h2>
                  <input
                      type='password'
                      placeholder='Confirm Password'
                      required
                      value={confirmInput}
                      onChange={(e)=>{setconfirmInput(e.target.value)}}/>
              </div>
              <button type='submit' className='btn1' onClick={(e)=>{handleEdit(e)}}>Save Changes</button> 
              <button type='button' className='btn2' onClick={()=>{navigate(`/users/${id}`)}}>Discard</button> 
          </form>
      </div>
  </div>
  )
}

export default EditUser
