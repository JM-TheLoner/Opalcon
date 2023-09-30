import './employees.css'
import { Link } from "react-router-dom"

const EmployeeList = ({ employee }) => {
  return (
    <main className="Package">  
        <Link to={`/employees/${employee._id}`}>
          <h2 className='employeeDate'>Employee ID: {employee._id}</h2>
          <p className="employeeBody">Full Name: {employee.firstname}, {employee.lastname}</p>
          <p className="employeeBody1">Gender: {employee.gender}</p>
        </Link>
    </main>
  )
}

export default EmployeeList
