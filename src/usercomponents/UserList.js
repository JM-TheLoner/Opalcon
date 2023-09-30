import './users.css'
import { Link } from "react-router-dom"

const UserList = ({ user }) => {
  return (
    <main className="Packages">
        <Link to={`/users/${user._id}`}>
            <h2 className="userDate">User ID: {user._id}</h2>
            <p className="userBody">Username: {user.username}</p>
        </Link>
    </main>
  )
}

export default UserList
