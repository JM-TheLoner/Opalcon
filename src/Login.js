import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import DataContext from './context/DataContext'
import { useContext, useState, useEffect } from 'react'
import img from './bkgimg.jpg' 
import eye from './eyeimg.png'


const Login = ({ url }) => {
  const { userInput, setuserInput, pwdInput, setpwdInput, setloggedIn, setaccessKey, setuser} = useContext(DataContext)
  const navigate = useNavigate()
  const [loggingIn, setloggingIn] = useState(false)
  const [open, setopen] = useState(false)
  const [fetchError, setfetchError] = useState('')
  const [wrong, setwrong] = useState(false)
  const [noUsername, setnoUsername] = useState(false)
  const [noPassword, setnoPassword] = useState(false)

  const failed = () =>{
    alert('Wrong Login Details Provided')
    setwrong(true)
  }

  const usernamer= () => {
    alert('Username Required')
    setnoUsername(true)
    if (!pwdInput) {
      setnoPassword(true)
    }
  }
  const passworder= () => {
    alert(`Password Required`)
    setnoPassword(true)
  }

  const theEye = async (e) =>{
    e.preventDefault()
    setopen(!open)
  }

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  const handleLogin = async (e) => { 
    e.preventDefault()
    setopen(false)
    setnoPassword(false)
    setnoUsername(false)

    if (!userInput) {
      usernamer()
    }
    if (userInput && !pwdInput) {
      passworder()
    }
    if (userInput && pwdInput){
      setaccessKey('')
      try{
        setloggingIn(true)
        const response = await fetch(`${url}/login`, {
            method: 'POST',
            body: JSON.stringify({
                user: userInput,
                pwd: pwdInput
            }),
            headers:{
              'Content-type': 'application/json; charset=UTF-8'
            }
        })            
        if (response.status === 401){
          return failed()
          }
        if (!response.ok) throw Error('Did Not Recieve Expected Data')
        const access = await response.json()
        await setaccessKey(access)
        await setuser(userInput)
        /* 
        console.log('======== access')
        console.log(accessKey) */
        //if you ever run into problems with the accessKey remove the coments from the above lines and check to see if it is assigning correctly
        setloggedIn(true)
        setloggingIn(false)
        navigate('/')
    } catch (err){
        if (err.response){
          setfetchError(`Error: ${err.response.data}`)
        } else {
          setfetchError(`Error: ${err.message}`)
        }
      
    } finally{
        setloggingIn(false)
        setpwdInput('')
        setuserInput('')
    }
    }
}

  return (
    <div className='Login1' style={{
      backgroundImage:`url(${img})`,
      backgroundSize:'cover'
      }}>
      <div className='Wrapper'>
        <form>
          <h1>Login</h1>
          {fetchError && <p className='error'>{fetchError}</p>}
          {wrong && <p className='failed'>Wrong details provided</p>}
          {loggingIn && <p className='loading'>Loading...</p>}
          {noUsername && <p className='requirement'>Username and Password Required</p>}
          {!noUsername && noPassword && <p className='requirement'>Username and Password Required</p>}
          <div className={!noUsername ? 'inputBox' : 'inputBoxred'}>
            <input
            type='text'
            placeholder='Username'
            required
            value={userInput}
            onChange={(e)=>{setuserInput(e.target.value)}}/>
          </div>
          <div className={!noPassword ? 'inputBox' : 'inputBoxred'}>
            <input
            type={open ? 'text' : 'password'}
            placeholder='Password'
            required
            value={pwdInput}
            onChange={(e)=>{setpwdInput(e.target.value)}}/>
          </div>
            <button 
              type='submit' 
              onClick={(e)=>{theEye(e)}} 
              className='eyebtn1'
              title='Show Password'>
                <img src={eye} className='eye1' alt='eye'/>
              </button>
          <div className='space'>
            <button type='submit' className='btn' onClick={(e)=>{handleLogin(e)}}>Login</button> 
          </div>
        </form>
        <div>
          <ul>
            <li>
              <Link to={'/forgot'}>
                <p className='spaceout'>Forgotten Your Password?</p>
              </Link>
            </li> 
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Login