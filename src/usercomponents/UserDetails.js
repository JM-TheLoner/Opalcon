import './users.css'
import { useState } from 'react'
import eye from '../eyeimg.png'

const UserDetails = ({ users }) => {

  const [open, setopen] = useState(true)

  const theEye = async () =>{
    setopen(!open)
  }

  return (
<>
    {(!users) ? (
    <>
    <p className='Pad'>This User Does Not Exist</p>
    </>
    ) : (
    <>
        <article>
            <p className='Padd2'>User Information</p>
            <p className="namer">Your User ID:</p>
            <p className="userid">{users._id}</p>
            <h2 className="namer1">Username:</h2>
            <h2 className='username'>{users.username}</h2>
            <h2 className="namer2">Password (encrypted):</h2>
            <h2 
              className={open ? 'userpwd' : 'userpwd1'}
              title='Show Password'>
                {users.password}  <button onClick={()=>{theEye()}} className='eyebtn'><img src={eye} className='eye' alt='eye'/></button>
            </h2>
        </article>
    </>
    )
    }
    </>
  )
}

export default UserDetails
