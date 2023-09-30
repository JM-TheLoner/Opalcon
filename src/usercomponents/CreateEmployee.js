import './employees.css'
import { useState, useEffect } from 'react'
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../bkgimg.jpg' 

const CreateEmployee = ({ url }) => {
    const { accessKey, setstatus } = useContext(DataContext)
    const [firstNameInput, setfirstNameInput] = useState('')
    const [lastNameInput, setlastNameInput] = useState('')
    const [genInput, setgenInput] = useState('')
    const [phoneInput, setphoneInput] = useState('')
    const [emailInput, setemailInput] = useState('')
    const [fetchError, setfetchError] = useState('')
    const [isLoading, setisLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
      window.scrollTo(0,0)
   }, [])

    const unauthorized = () =>{
      alert('You Are Not Authorized To Perform This Action')
      navigate('/')
    }

    const handleCreate = async (e) =>{ 
        e.preventDefault()
        setisLoading(true)
        try{
            const response = await fetch(`${url}/employees/`, {
              method: 'POST',
              headers:{
                'Authorization': `Bearer ${accessKey}`,
                'Content-type': 'application/json; charset=UTF-8'                  
              },
              body:JSON.stringify({
                firstname:firstNameInput,
                lastname:lastNameInput,
                gender:genInput,
                email:emailInput,
                phone_number:phoneInput
              })
                    })
            if (response.status === 401){
              return unauthorized()
              }
            if (!response.ok) throw Error('Did Not Recieve Expected Data')
            const serviceItems = await response.json()
            setstatus(serviceItems)
            setfetchError(null)
            setisLoading(false)
            navigate('/employees')
        } catch (err){
            setfetchError(err.message)
            setisLoading(false)
            setstatus('')
            if (err.response){
              setfetchError(`Error: ${err.response.data}`)
            } else {
              setfetchError(`Error: ${fetchError}`)
            }
        }
        }

  return (
  <div style={{
    backgroundImage:`url(${img})`,
    backgroundSize:'cover'
    }}>
  <div>
    <form>
      <h1 className='Pad1'>Create New Employee</h1>
      {isLoading && <p className='Pad1'>Creating New Employee...</p>}
      {!isLoading && fetchError && <p className='error3'>{fetchError}</p>}
      <div className='inputBoxfirst'>
        <h2 className='name'>First Name</h2>
        <input
        type='text'
        placeholder='Employee Firstname'
        required
        value={firstNameInput}
        onChange={(e)=>{setfirstNameInput(e.target.value)}}/>
      </div>
      <div className='inputBoxlast'>
        <h2 className='name'>Last Name</h2>
        <input
        type='text'
        placeholder='Employee Lastname'
        required
        value={lastNameInput}
        onChange={(e)=>{setlastNameInput(e.target.value)}}/>
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
        type='text'
        placeholder='Email'
        required
        value={emailInput}
        onChange={(e)=>{setemailInput(e.target.value)}}/>
      </div>
      <button type='submit' className='btn1' onClick={(e)=>{handleCreate(e)}}>Add Employee</button> 
      <button type='button' className='btn2' onClick={()=>{navigate(`/employees/`)}}>Discard</button> 
    </form>
  </div>
</div>
  )
}

export default CreateEmployee
