import '../stylesheets/about.css'
import logo from '../../assets/images/phlogo.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Reveal from '../effects/Reveal'
import ceoimg from '../../assets/images/ceoimg1.jpg'
import ceoimgOut from '../../assets/images/ceoimg1Out.png'
import { TbBulb } from 'react-icons/tb';
import { Gem, Telescope } from 'lucide-react';
import { FaHandshake } from 'react-icons/fa';
import { LuCrown } from 'react-icons/lu';
import { MdAutoAwesome, MdGroups } from 'react-icons/md';
import { GiBullseye } from 'react-icons/gi';

const About = () => {

  const clientelle = [
    {id: 0, icon: logo, name:'Noviteck', alt: 'Client Logo Icon'},
    {id: 1, icon: logo, name:'Questline', alt: 'Client Logo Icon'},
    {id: 2, icon: logo, name:'Blooming corp', alt: 'Client Logo Icon'},
    {id: 3, icon: logo, name:'Stark Loyalties', alt: 'Client Logo Icon'},
    {id: 4, icon: logo, name:'Urban West', alt: 'Client Logo Icon'},
    {id: 5, icon: logo, name:'Lumina', alt: 'Client Logo Icon'},
    {id: 6, icon: logo, name:'Agen Kolar', alt: 'Client Logo Icon'},
    {id: 7, icon: logo, name:'Thel Vadamee', alt: 'Client Logo Icon'},
    {id: 8, icon: logo, name:'San Shayuum', alt: 'Client Logo Icon'},
    {id: 9, icon: logo, name:'Dathomiri', alt: 'Client Logo Icon'},
    {id: 10, icon: logo, name:'Ah Tabai', alt: 'Client Logo Icon'},
    {id: 11, icon: logo, name:'Borgia Holdings', alt: 'Client Logo Icon'},
    {id: 12, icon: logo, name:'Naboo Council', alt: 'Client Logo Icon'},
    {id: 13, icon: logo, name:'Pillar of Autumn', alt: 'Client Logo Icon'}
  ]

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  const linkstyle = {
      textDecoration:"none"
  }

  return (
    <div className='About'>
      <Header title="Opalcon Limited"/>
      <div className='aboutContainer'>
        <Reveal className='aboutLayer topLayer'>
          <div className='topLayerText'>
            <div>
              <div className='headLineContainer'>
                <div className="headWrap">
                  <h1 className="headLine ">About Us</h1> 
                </div>
              </div>
              <h1 className='story' style={{display:"flex"}}>
                <div className='txtColor' style={{marginRight:"10px"}}>Our</div>
                <div className='abtTxtColorRGB'>Story</div>
              </h1>
              <div className='borderBottom'></div>
              <div className='paragraph'>
                <p className='paraHead txtColor' style={{marginTop:'5px'}}>
                  Turning ideas into meaningful visual experiences.
                </p>
                <p className='paraTxt txtColor' style={{marginTop:'8px'}}>
                  At Opalcon, we're more than just an advertising and branding company. We're your creative partner. From concept down to completion, we help businesses and individuals bring their ideas to life with quality, precision and style.
                </p>
              </div>
              <div className={`aboutbtn aboutbuttoncolorgrad`}>
                  <Link to={'/services'} style={linkstyle} className='aboutcontent'>
                      <div className='about'>
                          <div className='aboutWord'>Our Services</div>  
                          <div className='abouticon'>&#x2192;</div>
                      </div> 
                  </Link>
              </div>           
            </div>
            
          </div>
          <div className='topLayerImage'>
            <div className='absoluteImgCont'>
              <div className='absImgDecorBorder'>
              </div>
            </div>
            <div className='absoluteImgCont'>
              <div className='absImgDecor'>
              </div>
            </div>
            <div className='absoluteImgCont'>
              <div className='absImgBack imgin'>
                <img src={ceoimg} className='ceoimage' alt='logo'/>
              </div>
            </div>
            <div className='absoluteImgCont'>
              <div className='absImgBack imgout'>
                <img src={ceoimgOut} className='ceoimage' alt='logo'/>
              </div>
            </div>
          </div>          
        </Reveal>
        <Reveal className='aboutLayer uMidLayer'>
          <div className='uMidLayerVM colorfulBorder'>
            <div className='vmWords'>
              <div className='vmTitle'>
                  <div className='txtColor' style={{marginRight:"5px"}}>Our</div>
                  <div className='abtTxtColorRGB'>Vision</div>
              </div>
              <p className='vmBody txtColor'>
                To become a leading and trusted company, recognised for turning ideas into impactful visual experiences through innovation, quality, and excellence.
              </p>
            </div>
            <div className='vmIcon'>
              <svg width="0" height="0" style={{ position: 'absolute' }}>
                <linearGradient id="icon-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop stopColor="#3146ff" offset="0%" />
                  <stop stopColor="#4173ff" offset="33%" />
                  <stop stopColor="#d67cff" offset="66%" />
                  <stop stopColor="#920cff" offset="100%" />
                </linearGradient>
              </svg>
              <div className='txtColor vismisicon'>
                <Telescope size={125} style={{ stroke: 'url(#icon-gradient-1)', fill: 'none' }}/>
              </div>
            </div>
          </div>
          <div className='uMidLayerVM colorfulBorder1'>
            <div className='vmWords'>
              <div className='vmTitle'>
                  <div className='txtColor' style={{marginRight:"5px"}}>Our</div>
                  <div className='abtTxtColorRGB_Rev'>Mission</div>
              </div>
              <p className='vmBody txtColor'>
                To provide innovative, high-quality solutions that empower individuals and businesses to express their ideas, strengthen their identity, and make lasting impressions.
              </p>
            </div>
            <div className='vmIcon'>
              <div className='txtColor vismisicon'>
                <GiBullseye size={125} style={{ fill: 'url(#icon-gradient-1)', transform:"rotate(180deg)" }}/>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal className='aboutLayer lMidLayer'>
          <div className='lMidTitle'>
            <div className='headLineContainer1'>
              <div className="headWrap1">
                <h1 className="headLine1 ">Our Values</h1> 
              </div>
            </div>
            {/* <p className='valuesTitle txtColor'>Our Values guide every decision, project and partnership </p> */}
          </div>
          <div className='lMidValues'>   
            <div className='lMidValue'>
              <Gem size={60} color='#920cff' className='valueIcon'/>
              <p className='valueTxt txtColor'>Creativity</p>
              <p className='valueDesc txtColor'>Bringing fresh ideas to life through thoughtful design.</p>
            </div>
            <div className='lMidValue'>
              <FaHandshake size={60} color='#3146ff' className='valueIcon'/>
              <p className='valueTxt txtColor'>Integrity</p>
              <p className='valueDesc txtColor'>Building relationships through honesty and transparency.</p>
            </div>
            <div className='lMidValue'>
              <LuCrown size={60} color='#ffb20b' className='valueIcon'/>
              <p className='valueTxt txtColor'>Excellence</p>
              <p className='valueDesc txtColor'>Maintaining high standards in every project we undertake</p>
            </div>
            <div className='lMidValue'>
              <MdGroups size={60} color='#920cff' className=''/>
              <p className='valueTxt txtColor'>Collaboration</p>
              <p className='valueDesc txtColor'>Working closely with clients to achieve shared goals.</p>
            </div>
            <div className='lMidValue'>
              <TbBulb size={60} color='#3146ff' className='valueIcon'/>
              <p className='valueTxt txtColor'>Innovation</p>
              <p className='valueDesc txtColor'>Exploring better ways to create and deliver solutions.</p>
            </div>
            <div className='lMidValue'>
              <MdAutoAwesome size={60} color='#ffb20b' className=''/>
              <p className='valueTxt txtColor'>Customer Focus</p>
              <p className='valueDesc txtColor'>Putting our clients' needs at the centre of our work.</p>
            </div>
          </div>
        </Reveal>
        <Reveal className='aboutLayer bottomLayer'>
          <div className='bottomTitle'>
            <p className='clientelle txtColor'>Trusted By:</p>
          </div>
          <div className='bottomLogos'>
            <ul className='logolist'>
              {clientelle.map(client => (
              <li key={client.id} className='clientelleListItem'>
                <img src={client.icon} className="clientellelogo" alt={client.alt} />
                <p className='clientelleName txtColor'>{client.name}</p>
              </li> 
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      <Footer/>
    </div>
  )
}

export default About