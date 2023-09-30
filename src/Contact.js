import img from './bkgimg.jpg'
import email from './email.png'
import lov from './lov.png'
import soc from './soc.png'
import phone from './phone.png'
import './contact.css'
import { useEffect } from 'react'

const Contact = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  return (
    <div className='Contact' style={{
      backgroundImage:`url(${img})`,
      backgroundSize:'cover'
      }}>
        <h1 className='right1'>Give us a call or send us an email</h1>
        <h2 className='right2'>Put your business on the map</h2>
        <h2 className='right3'>What are you waiting for</h2>
        <ul>
         <li>
          <img src={lov} className="ogo1" alt="logo" />
          <figcaption className='ImgTag'>
            <a
              className="loc"
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              >
              <div className='holes'>
                <p className='line1'>2B, Oshineye Street</p>
                <p className='line3'>2nd Pedro, Gbagada Phase 2</p>
                <p className='line2'>Gbagada Lagos</p>
              </div>
            </a>
          </figcaption>
        </li> 
        <li>
          <img src={phone} className="ogo2" alt="logo" />
          <figcaption className='ImgTag'>
            <div className='phone1'>
              <p>08033230123</p>
              <p>08098134566</p>
            </div>
          </figcaption>
        </li>
        <li>
          <img src={soc} className="ogo3" alt="logo" />
          <figcaption className='ImgTag'>
            <p className='soc1'>Whatsapp: 08033230123</p>
            <p className='soc3'>Facebook: popoola olaitan</p>
            <p className='soc2'>linkedin: username</p>
          </figcaption>
        </li>
        <li>
          <img src={email} className="ogo4" alt="logo" />
          <figcaption className='ImgTag'>
            <p className='email'>polaitan@yahoo.com</p>
          </figcaption>
        </li>
      </ul>
    </div>
  )
}

export default Contact