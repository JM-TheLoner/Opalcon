import DataContext from './context/DataContext'
import { useContext, useState, useEffect } from 'react'
import './Forgot.css'
import { useNavigate } from 'react-router-dom'
import img from './bkgimg.jpg'

const Forgot = () => {
  const { newPwd, setnewPwd, confirmPwd, setconfirmPwd, baseUrl, setstatus } = useContext(DataContext)
  const [idInput, setidInput] = useState('')
  const [isLoading, setisLoading] = useState('')
  const [fetchError, setfetchError] = useState('')
  const navigate = useNavigate()
  const [wrong, setwrong] = useState(false)
  const [noId, setnoId] = useState(false)
  const [noPassword, setnoPassword] = useState(false)
  const [noConfirm, setnoConfirm] = useState(false)

  const failed = () =>{
    alert('No existing user matches specified ID')
    setwrong(true)
  }

  const ider= () => {
    alert('ID Required')
    setnoId(true)
    if (!newPwd) {
      setnoPassword(true)
    }
    if (!confirmPwd) {
      setnoConfirm(true)
    }
  }
  const passworder= () => {
    alert(`Password Required`)
    setnoPassword(true)
    if (!confirmPwd) {
      setnoConfirm(true)
    }
  }
  const confirmer= () => {
    alert(`Confirm the Password`)
    setnoConfirm(true)
  }

  const mismatch = () =>{
    alert(`New password must match confirmation password`)    
    setnoPassword(true)
    setnoConfirm(true)
  }
  
  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  const handleForgot = async (e) => {
    e.preventDefault()
    setnoConfirm(false)
    setnoId(false)
    setnoPassword(false)
    if (!idInput) {
        ider()
    }
    if (idInput && !newPwd){
        passworder()
    }
    if (newPwd && newPwd !== confirmPwd && idInput) {
        if (!confirmPwd){
            confirmer()
        } else if (confirmPwd){
          mismatch()
        }
    }
    if (newPwd && newPwd === confirmPwd && idInput) {
        setisLoading(true)
        try{
            const response = await fetch(`${baseUrl}/forgot/`, {
            method: 'PUT',
            headers:{
                'Content-type': 'application/json; charset=UTF-8'                  
            },
            body:JSON.stringify({
                id:idInput,
                pwd:newPwd,
                conf:confirmPwd
            })
            })          
            if (response.status === 401){
              return failed()
              }
            if (!response.ok) throw Error('Did Not Recieve Expected Data')
            const serviceItems = await response.json()
            setstatus(serviceItems)
            setfetchError(null)
            alert('Attempt to log in now')
            navigate(`/login`)
        } catch (err){
            setfetchError(err.message)
            if (err.response){
            setfetchError(`Error: ${err.response.data}`)
            } else {
            setfetchError(`Error: ${err.message}`)
            }
        } finally{
        setisLoading(false)
        setidInput('')
        setnewPwd('')
        setconfirmPwd('')
        }}
  }

    return (
    <div className='Login2' style={{
      backgroundImage:`url(${img})`,
      backgroundSize:'cover'
      }}>
          <div className='Wrapper'>
            <form>
              <h1>Forgotten Password</h1>
              {fetchError && <p className='error1'>{fetchError}</p>}
              {isLoading && <p className='changing'>Please Wait...</p>}
              {wrong && <p className='failed'>Wrong details provided</p>}
              <div className={!noId ? 'inputBoxEmail' : 'inputBoxEmailred'}>
                <input
                type='text'
                placeholder='Enter Your User ID'
                required
                value={idInput}
                onChange={(e)=>{setidInput(e.target.value)}}/>
              </div>
              <div className={!noPassword ? 'inputBox' : 'inputBoxred'}>
                <input
                type='password'
                placeholder='New Password'
                required
                value={newPwd}
                onChange={(e)=>{setnewPwd(e.target.value)}}/>
              </div>
              <div className={!noConfirm ? 'inputBox1' : 'inputBox1red'}>
                <input
                type='password'
                placeholder='Confirm Password'
                required
                value={confirmPwd}
                onChange={(e)=>{setconfirmPwd(e.target.value)}}/>
              </div>
              <button type='submit' className='btn' onClick={(e)=>{handleForgot(e)}}>Reset Password</button>
              {noId && <p className='required'>All fields must be filled</p>}
              {!noId && noPassword && <p className='required'>All fields must be filled</p>}
              {!noId && !noPassword && noConfirm && <p className='required'>All fields must be filled</p>}
            </form>
          </div>
        </div>
    )
  
}

export default Forgot
