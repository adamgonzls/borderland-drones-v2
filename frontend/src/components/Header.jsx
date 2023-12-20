import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Header() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  function handleClick() {
    logout()
  }

  return (
    <header className='header base-padding'>
      <Link className='' to='/'>
        Borderland Drones
      </Link>
      <Link className='' to='/contact'>
        Contact
      </Link>
      {user && (
        <div>
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
          <Link className='' to='/missions'>
            Missions Dashboard
          </Link>
        </div>
      )}
      {!user && (
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      )}
    </header>
  )
}
