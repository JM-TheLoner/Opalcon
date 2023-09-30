import './employees.css'
import { useState, useEffect } from 'react'
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import img from '../bkgimg.jpg' 

const EditEmployee = () => {
  const { accessKey, setstatus } = useContext(DataContext)
  const [firstnameInput, setfirstnameInput] = useState('')
  const [lastnameInput, setlastnameInput] = useState('')
  const [genInput, setgenInput] = useState('')
  const [phoneInput, setphoneInput] = useState('')
  const [emailInput, setemailInput] = useState('')
  const [fetchError, setfetchError] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])
 
  const url = "https://opalconbackend.glitch.me"

  const unauthorized = () =>{
    alert('You Are Not Authorized To Perform This Action')
    navigate('/')
  }

  const handleEdit = async (e) =>{
      setisLoading(true)
      e.preventDefault()
      try{
          const response = await fetch(`${url}/employees/`, {
          method: 'PUT',
          headers:{
              'Authorization': `Bearer ${accessKey}`,
              'Content-type': 'application/json; charset=UTF-8'                  
          },
          body:JSON.stringify({
              id:id,
              firstname:firstnameInput,
              lastname:lastnameInput,
              gender:genInput,
              phone_no:phoneInput,
              email:emailInput
          })
          })
          if (response.status === 401){
            return unauthorized()
            }
          if (!response.ok) throw Error('Did Not Recieve Expected Data')
          const serviceItems = await response.json()
          setstatus(serviceItems)
          setfetchError(null)
          navigate(`/employees/${id}`)
      } catch (err){
          setfetchError(err.message)
          setstatus('')
          if (err.response){
          setfetchError(`Error: ${err.response.data}`)
          } else {
          setfetchError(`Error: ${fetchError}`)
          }
      } finally{
      setisLoading(false)
      }
      }

  return (
  <div style={{
    backgroundImage:`url(${img})`,
    backgroundSize:'cover'
    }}>
      <div>
          <form>
              <h1 className='Pad1'>Edit Employee: {id}</h1>
              {isLoading && <p className='Pad1'>Changing Employee Details...</p>}
              {!isLoading && fetchError && <p className='error3'>{fetchError}</p>}
              <div className='inputBoxfirst'>
                  <h2 className='name'>First Name</h2>
                  <input
                      type='text'
                      placeholder='Employee Firstname'
                      required
                      value={firstnameInput}
                      onChange={(e)=>{setfirstnameInput(e.target.value)}}/>
              </div>
              <div className='inputBoxlast'>
                  <h2 className='name'>Last Name</h2>
                  <input
                      type='text'
                      placeholder='Employee Lastname'
                      required
                      value={lastnameInput}
                      onChange={(e)=>{setlastnameInput(e.target.value)}}/>
              </div>
              <div className='inputBoxgen'>
                  <h2 className='name'>Gender</h2>
                  <input
                      type='text'
                      placeholder='Gender'
                      required
                      value={genInput}
                      onChange={(e)=>{setgenInput(e.target.value)}}/>
              </div>
              <div className='inputBoxphone'>
                  <h2 className='name'>Phone Number</h2>
                  <input
                      type='text'
                      placeholder='Phone Number'
                      required
                      value={phoneInput}
                      onChange={(e)=>{setphoneInput(e.target.value)}}/>
              </div>
              <div className='inputBoxemail'>
                  <h2 className='name'>Email</h2>
                  <input
                      type='email'
                      placeholder='Email'
                      required
                      value={emailInput}
                      onChange={(e)=>{setemailInput(e.target.value)}}/>
              </div>
              <button type='submit' className='btn1' onClick={(e)=>{handleEdit(e)}}>Save Changes</button> 
              <button type='button' className='btn2' onClick={()=>{navigate(`/employees/${id}`)}}>Discard</button> 
          </form>
      </div>
  </div>
  )
}

export default EditEmployee
