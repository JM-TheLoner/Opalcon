import image from './abtimg.jpg'
import img from './bkgimg.jpg'
import './about.css'
import logo from './phlogo.png'
import { useEffect } from 'react'

const About = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  return (
    <div className='About' style={{
      backgroundImage:`url(${img})`,
      backgroundSize:'cover'
    }}>
      <div className='sideimage'>
        <img src={image} className='images' alt='logo'/>
        <div className='textbox'>
          <h1 className='story'>Our story</h1>
          <p className='para1'>
            ist paragraph ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
          </p>
          <p className='para2'>
            2nd paragraph ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
          </p>
          <p className='para3'>
            3rd paragraph ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
          </p>

          <h1 className='hours'>Operating hours</h1>
          <div className='sameline'><h2 className='day1'>Mon:</h2><h2 className='day11'> 2:00AM - 2:00PM</h2></div>
          <div className='sameline'><h2 className='day1'>Tue:</h2><h2 className='day2'> 2:00AM - 2:00PM</h2></div>
          <div className='sameline'><h2 className='day1'>Wed:</h2><h2 className='day3'> 2:00AM - 2:00PM</h2></div>
          <div className='sameline'><h2 className='day1'>Thur:</h2><h2 className='day4'> 2:00AM - 2:00PM</h2></div>
          <div className='sameline'><h2 className='day1'>Fri:</h2><h2 className='day5'> 2:00AM - 2:00PM</h2></div>
          <div className='sameline'><h2 className='day1'>Sat:</h2><h2 className='day6'> 2:00AM - 2:00PM</h2></div>

          <h1 className='clientelle'>Our clientele</h1>
          <ul className='logolist'>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li> 
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default About
