import './App.css'
import { Link } from 'react-router-dom';
import DataContext from './context/DataContext'
import { useContext } from 'react'
import ref from './Reicon.png'

const Footer = () => {
  const { loggedIn, handleRefresh } = useContext(DataContext)
  if (!loggedIn){
    return (  
      <>
        <footer className='Footer'>
          <ul className='Headspace3'>
              <a
              className="App-link"
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              2B, Oshineye Street, 2nd Pedro, Gbagada Phase 2, Gbagada Lagos
            </a>
          </ul>
          <ul className='Headspace2'>
            <li><Link to={'/contact'}>Instagram</Link></li>
            <li><Link to={'/contact'}>Linkedin</Link></li>
            <li><Link to={'/contact'}>Twitter</Link></li>
            <li><Link to={'/contact'}>Facebook</Link></li>
            <li><Link to={'/contact'}>Whatsapp</Link></li>
            <li><Link to={'/contact'}>Phone Number</Link></li>
            <li><Link to={'/contact'}>Email</Link></li>
          </ul>
        </footer>
        <h4 className='FooterMotto'>We believe that with the right approach, anyone can be a winner in their field</h4>
        <h4 className='FooterMotto1'>So let's get you started on the winning path</h4>
        <h5 className='FooterCopyright'>&copy; 2023 - Powered By JMTL</h5>
      </>
    )
  }
  if (loggedIn){
    return (
      <>
        <footer className='Footer'>
        <ul className='Headspace3'>
              <a
              className="App-link"
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              2B, Oshineye Street, 2nd Pedro, Gbagada Phase 2, Gbagada Lagos
            </a>
          </ul>
        <ul className='Headspace2'>
          <li><Link to={'/contact'}>Instagram</Link></li>
          <li><Link to={'/contact'}>Linkedin</Link></li>
          <li><Link to={'/contact'}>Twitter</Link></li>
          <li><Link to={'/contact'}>Facebook</Link></li>
          <li><Link to={'/contact'}>Whatsapp</Link></li>
          <li><Link to={'/contact'}>Phone Number</Link></li>
          <li><Link to={'/contact'}>Email</Link></li>
        </ul>
        <ol className='ref'>
          <li>
            <Link to={'/'} onClick={() => {handleRefresh()}}>
              <img src={ref} className="reflogo" alt="logo" />
            </Link>
          </li>
        </ol>
      </footer>
      <h4 className='FooterMotto'>We believe that with the right approach, anyone can be a winner in their field</h4>
      <h4 className='FooterMotto1'>So let's get you started on the winning path</h4>
      <h5 className='FooterCopyright'>&copy; 2023 - Powered By JMTL</h5>
    </>
  )}
}

export default Footer
