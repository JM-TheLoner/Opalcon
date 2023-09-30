import UserServiceList from "./UserServiceList"
import '../services.css'

const UserServiceContent = ({ services }) => {
  return (
    <>
    {(!services.length) ? ( 
    <p className="Pad">There Are No Services To Display</p>
    ) : (
    <div className="packit">
        {services.map(service => (
            <UserServiceList key={service._id} service={service}/>
        ))}
    </div>
    )
    }
    </>
  )
}

export default UserServiceContent
