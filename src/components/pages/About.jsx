import '../stylesheets/about.css'
import logo from '../../assets/images/phlogo.png'
import { useEffect } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ceoimg from '../../assets/images/ceoimg1.jpg'
import { FaDumbbell } from 'react-icons/fa';

const About = () => {

  const clientelle = [
    {id: 0, icon: logo, alt: 'Client Logo Icon'},
    {id: 1, icon: logo, alt: 'Client Logo Icon'},
    {id: 2, icon: logo, alt: 'Client Logo Icon'},
    {id: 3, icon: logo, alt: 'Client Logo Icon'},
    {id: 4, icon: logo, alt: 'Client Logo Icon'},
    {id: 5, icon: logo, alt: 'Client Logo Icon'},
    {id: 6, icon: logo, alt: 'Client Logo Icon'},
    {id: 7, icon: logo, alt: 'Client Logo Icon'},
    {id: 8, icon: logo, alt: 'Client Logo Icon'},
    {id: 9, icon: logo, alt: 'Client Logo Icon'},
  ]

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  return (
    <div className='About'>
      <Header title="Opalcon Limited"/>
      <div className='aboutContainer'>
        <div className='aboutLayer topLayer'>
          <div className='topLayerImage'>
            <img src={ceoimg} className='ceoimage' alt='logo'/>
          </div>
          <div className='topLayerText'>
            <h1 className='story abtTxtColorRGB'>Our Story</h1>
            <div className='paragraph'>
              <p className='paraTxt txtColor' style={{marginTop:'5px'}}>
                ist paragraph ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
              </p>
              <p className='paraTxt txtColor' style={{marginTop:'8px'}}>
                ist paragraph ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
              </p>
            </div>
          </div>
        </div>
        <div className='aboutLayer uMidLayer'>
          <div className='uMidLayerVM colorfulBorder'>
            <p className='vmTitle txtColor'>
              Our Vision
            </p>
            <p className='vmBody txtColor'>
              ist paragraph ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            </p>
          </div>
          <div className='uMidLayerVM colorfulBorder1'>
            <p className='vmTitle txtColor'>
              Our Mission
            </p>
            <p className='vmBody txtColor'>
              ist paragraph ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            </p>
          </div>
        </div>
        <div className='aboutLayer lMidLayer'>
          <div className='lMidTitle'>
            <p className='valuesTitle txtColor'>Our Values</p>
          </div>
          <div className='lMidValues'>      
            <svg width="0" height="0" style={{ position: 'absolute' }}>
              <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop stopColor="#ff6785" offset="0%" />
                <stop stopColor="#ff4e51" offset="33%" />
                <stop stopColor="#ff7214" offset="66%" />
                <stop stopColor="#ffb20b" offset="100%" />
              </linearGradient>
            </svg>

            <div className='lMidValue'>
              <FaDumbbell size={55} style={{ fill: 'url(#icon-gradient)' }} className='valueIcon'/>
              <p className='valueTxt txtColor'>Generic Value</p>
            </div>
            <div className='lMidValue'>
              <FaDumbbell size={55} style={{ fill: 'url(#icon-gradient)' }} className='valueIcon'/>
              <p className='valueTxt txtColor'>Generic Value</p>
            </div>
            <div className='lMidValue'>
              <FaDumbbell size={55} style={{ fill: 'url(#icon-gradient)' }} className='valueIcon'/>
              <p className='valueTxt txtColor'>Generic Value</p>
            </div>
            <div className='lMidValue'>
              <FaDumbbell size={55} style={{ fill: 'url(#icon-gradient)' }} className='valueIcon'/>
              <p className='valueTxt txtColor'>Generic Value</p>
            </div>
            <div className='lMidValue'>
              <FaDumbbell size={55} style={{ fill: 'url(#icon-gradient)' }} className='valueIcon'/>
              <p className='valueTxt txtColor'>Generic Value</p>
            </div>
            <div className='lMidValue'>
              <FaDumbbell size={55} style={{ fill: 'url(#icon-gradient)' }} className='valueIcon'/>
              <p className='valueTxt txtColor'>Generic Value</p>
            </div>
          </div>
        </div>
        <div className='aboutLayer bottomLayer'>
          <div className='bottomTitle'>
            <p className='clientelle txtColor'>Trusted By:</p>
          </div>
          <div className='bottomLogos'>
            <ul className='logolist'>
              {clientelle.map(client => (
              <li key={client.id}>
                <img src={client.icon} className="clientellelogo" alt={client.alt} />
              </li> 
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About

        {/* <img src={''} className='images' alt='logo'/> */}