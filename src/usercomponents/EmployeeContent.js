import EmployeeList from './EmployeeList'
import './employees.css' 

const EmployeesContent = ({ employees }) => {
  return (
    <> 
    {(!employees.length) ? ( 
    <p className='Pad' >There Are No employees To Display</p>
    ) : (
    <div>
        {employees.map(employee => (
            <EmployeeList key={employee._id} employee={employee}/>
        ))}
    </div>
    )
    }
    </>
  )
}

export default EmployeesContent
