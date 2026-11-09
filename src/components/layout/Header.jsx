import React from 'react'
// import './App.css'
import { Link, useNavigate } from 'react-router-dom';
// import phlogo from './phlogo.png'
import DataContext from '../../context/DataContext.jsx'
import { useContext, useState } from 'react'

const Header = ({ title }) => {
    const { navigate } = useContext(DataContext)
    const [ fetchError, setfetchError ] = useState('')


    return (
        <header className='Header'>
            <Link to={'/'}><img src={''} className="App-logo1" alt="logo" /></Link>
            <h1 className='Headspace4'>{title}</h1>
            <ul className='Headspace'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/services'}>Services</Link></li>
                <li><Link to={'/contact'}>Contact Us</Link></li>
                <li><Link to={'/quote'}>Get a Quote</Link></li>

            </ul>
        </header>
    )
}

export default Header
