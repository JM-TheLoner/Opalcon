import './employees.css'
import { Link, useNavigate } from 'react-router-dom'
import DataContext from '../context/DataContext'
import { useContext, useState } from 'react'

const GetEmployeeContent = ({ employee }) => {
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
      const response = await fetch(`${baseUrl}/employees/`, {
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
      setisLoading(false)
      navigate('/employees')
  } catch (err){
      setfetchError(err.message)
      setisLoading(false)
      setstatus('')
      if (err.response){
        setfetchError(`Error: ${err.response.data}`)
      } else {
        setfetchError(`Error: ${err.message}`)
      }
  }
  }

  return (
    <>
    {(!employee) ? (
    <>
    <p className='Pad'>This Employee Does Not Exist</p>
    <p classname='Pad'><Link to={'/employees'}>click here to see registered employees</Link></p>
    </>
    ) : (
      <>
        <article>
            <h1 className='Padd1'>Employee Information</h1>
            <p className="namess">ID:</p>
            <p className="empid">{employee._id}</p>
            <h2 className="namess">Full Name:</h2>
            <h2 className="empname">{employee.lastname}, {employee.firstname}</h2>
            <p className="namess">Gender:</p>
            <p className="empgen">{employee.gender}</p>
            <p className="namess">Phone Number:</p>
            <p className="empphone">{employee.phone_no}</p>
            <p className="namess">Email:</p>
            <p className="empemail">{employee.email}</p>
        </article>
        <button className='btn1' onClick={()=>{navigate(`/employees/edit/${employee._id}`)}}>Edit Employee</button>
        <button className='btn2' onClick={()=>{handleDelete(employee._id)}}>Delete Employee</button>
        {isLoading && <p className='Pad1'>Deleting Employee...</p>}
        {!isLoading && fetchError && <p className='error3'>{fetchError}</p>}
        </>
    )
    }
    </>
  )
}

export default GetEmployeeContent
