import React from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom';
import phlogo from './phlogo.png'
import DataContext from './context/DataContext'
import { useContext, useState } from 'react'

const Header = ({ title }) => {
    const { loggedIn, baseUrl, accessKey, setaccessKey, user, setuser, setloggedIn } = useContext(DataContext)
    const navigate = useNavigate()
    const [ fetchError, setfetchError ] = useState('')

    const handleLogout = async () => {
        try{
            await setaccessKey('') 
            await setuser('')
            const response = await fetch(`${baseUrl}/logout`, {
                method: 'POST',
                headers:{
                  'Content-type': 'application/json; charset=UTF-8',
                  'Authorization': `Bearer ${accessKey}`
                },
                body: JSON.stringify({
                    name: user
                })
            })
            if (!response.ok) throw Error('Did Not Recieve Expected Data')
            const repo = await response.json()
            console.log('=============')
            console.log(repo)
            setfetchError(null)
        } catch (err){
            setfetchError(err.message)
            if (err.response){
              console.log(err.response.data)
              console.log(err.response.status)
              console.log(err.response.headers)
            } else {
              console.log(`Error: ${err}`)
            }}finally{
              setaccessKey('')
              setuser('')
              console.log(`Err:${fetchError}`)
              setloggedIn(false)
              navigate('/')
            }
    }


    if (!loggedIn){
    return (
        <header className='Header'>
            <Link to={'/'}><img src={phlogo} className="App-logo1" alt="logo" /></Link>
            <h1 className='Headspace4'>{title}</h1>
            <ul className='Headspace'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/services'}>Services</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact Us</Link></li>
            </ul>
            <ol className='Headspace1'>
                <li><Link to={'/login'}>Login</Link></li>
            </ol>
        </header>
  )}
    if (loggedIn){
    return (
        <header className='Header'>
            <Link to={'/'}><img src={phlogo} className="App-logo1" alt="logo" /></Link>
            <h1 className='Headspace4'>{title}</h1>
            <ul className='Headspace'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/service'}>Services</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact Us</Link></li>
                <li><Link to={'/employees'}>Employees</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
            </ul>
            <ul className='Headspace2'>
                <li><Link to={'/'} onClick={() => {handleLogout()}}>Logout</Link></li>
            </ul>
            <ul>
                <Link to={'/user'}><img src={phlogo} className="App-logo1" alt="logo" /></Link>
            </ul>
        </header>
  )}
}

export default Header
