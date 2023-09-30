import UserList from './UserList' 
import './users.css'

const UserContent = ({ users}) => {
  return (
    <>
    {(!users.length) ? ( 
    <p className='Pad'>There Are No users To Display</p>
    ) : (
    <div>
        {users.map(user => (
            <UserList key={user._id} user={user}/>
        ))}
    </div>
    )
    }
    </>
  )
}

export default UserContent
