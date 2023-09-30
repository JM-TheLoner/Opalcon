import { useEffect, useState } from "react"
import EmployeeSearch from './EmployeeSearch'
import EmployeesContent from "./EmployeeContent"
import './employees.css'
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import img from '../bkgimg.jpg'
import add from '../addicon.png'

const Employees = ({ url }) => {
  const { accessKey } = useContext(DataContext)
  const [Employees, setEmployees] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [fetchError, setfetchError] = useState('')
  const [esearch, setesearch] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  useEffect(() => {

  const fetchdata = async () => {
    setisLoading(true)
      try{
          const response = await fetch(`${url}/Employees/`, {
            method: 'GET',
            headers:{
              'Authorization': `Bearer ${accessKey}`
            }
          })
          if (!response.ok) throw Error('Did Not Recieve Expected Data')
          const serviceItems = await response.json()
          setEmployees(serviceItems)
          setfetchError(null)
      } catch (err){
          setfetchError(err.message)
          setEmployees('')
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
  },[url, accessKey])

  return (
    <main style={{
      backgroundImage:`url(${img})`,
      backgroundSize:'cover' 
      }}>
      <EmployeeSearch search={esearch} setsearch={setesearch}/>
      <div className='Employees'>
        {isLoading && <p classname='Pad'>Loading Employees...</p>}
        {!isLoading && fetchError && <p className='error3'>{fetchError}</p>}
        {!fetchError && !isLoading && 
          <>
            <EmployeesContent
              employees={Employees.filter(employee => ((employee.firstname).toLowerCase()).includes(esearch.toLowerCase()) || ((employee.lastname).toLowerCase()).includes(esearch.toLowerCase()) || ((employee._id).toLowerCase()).includes(esearch.toLowerCase()))}
            />
          </>
        }
      </div>
      <button className="buttons" onClick={()=>{navigate('/employees/create')}}>
        <img src={add} className="Addbutton" alt="logo" />
        <figcaption className='ImgTag'>
            <p className='buttontext'>Add Employee</p>
          </figcaption>
        </button>
    </main>
  )
}

export default Employees
