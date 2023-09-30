import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GetEmployeeContent from "./GetEmployeeContent"
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import './employees.css'
import img from '../bkgimg.jpg' 

const GetEmployees = ({ url }) => {
    const { accessKey } = useContext(DataContext)
    const [employee, setemployee] = useState({})
    const [isLoading, setisLoading] = useState(false)
    const [fetchError, setfetchError] = useState('')
    const {id} = useParams()

    useEffect(()=>{
      window.scrollTo(0,0)
   }, [])
  
    const API_URL = `${url}/employees/${id}`
  
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
              setemployee(employeeItems)
              setfetchError(null)
          } catch (err){
              setfetchError(err.message)
              setemployee('')
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
      <main style={{
        backgroundImage:`url(${img})`,
        backgroundSize:'cover'
        }}>
        <div className='Employees'>
          {isLoading && <p classname='Pad'>Loading Employee Details...</p>}
          {!isLoading &&fetchError && <p className='error3'>{fetchError}</p>}
          {!fetchError && !isLoading && 
            <GetEmployeeContent
              employee={employee}
            />
          }
        </div>
      </main>
    )
}

export default GetEmployees
