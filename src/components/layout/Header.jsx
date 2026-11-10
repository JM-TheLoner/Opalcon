import '../stylesheets/header.css'
import { Link } from 'react-router-dom';
import phlogo from '../../assets/images/phlogo.png'
import { useContext, useEffect, useState, useRef } from 'react'
import { useScrollDirection } from '../animations/ScrollUpHeader';
import { ClipboardList } from "lucide-react";
import fblogo from '../../assets/images/facebook.png';
import xlogo from '../../assets/images/twitter.png';
import lnlogo from '../../assets/images/linkedin.png'
import iglogo from '../../assets/images/insta.png';

const Header = () => {

  const [slider, setslider] = useState(false)
  const [isActive, setIsActive] = useState(false);
  
  const scrollDirection = useScrollDirection();
  const topRef = useRef(null);

  useEffect(() => {
    if (!slider) return;

    // Save previous styles
    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;

    // Lock background scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Clean up / unlock when navbar closes
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
    };
  }, [slider]);

  const handleslider = () => {
    if (!slider) {
      // 1. Scroll to the top anchor instantly while the page is still allowed to scroll
      topRef.current?.scrollIntoView({ behavior: 'auto' });
      window.scrollTo(0, 0);

      // 2. Small micro-delay to let the browser execute the jump before locking overflow
      setTimeout(() => {
        setslider(true);
        setIsActive(true);
      }, 10);
    } else {
      // If closing the slider, toggle states normally
      setslider(false);
      setIsActive(false);
    }
  };  
  
  const linkstyle = {
      textDecoration:"none"
  }



    return (
        <> 
            <header className='Header'>
                <div className='Topbar'>
                    <div className='applogo'>
                        <Link to={'/'} className='logolink'>
                            <img src={phlogo} className="logoimg" alt="logo"/>
                        </Link>
                        <div className='headtxt'>
                            <p className='txtColor'>OPALCON</p>
                        </div>
                    </div>                     
                    <div className='listicle'>
                        <Link to={'/'} style={linkstyle}>
                            <div className={`linklist linkitem`}>
                                <div className='linkbtn'>Home</div>
                            </div>
                        </Link>                     
                        <Link to={'/about'} style={linkstyle}>
                            <div className={`linklist linkitem`}>
                                <div className='linkbtn'>About</div>
                            </div>
                        </Link>                     
                        <Link to={'/services'} style={linkstyle}>
                            <div className={`linklist linkitem`}>
                                <div className='linkbtn'>Services</div>
                            </div>
                        </Link>                     
                        <Link to={'/contact'} style={linkstyle}>
                            <div className={`linklist linkitem`}>
                                <div className='linkbtn'>Contact</div>
                            </div>
                        </Link>                     
                    </div>

                    <div className='getquote'>
                        <div className={`quotebtn buttoncolorgrad`}>
                            <Link to={'/quote'} style={linkstyle} className='quotecontent'>
                                <div className='quote'>
                                    <ClipboardList size={20} className='quoteicon'/>
                                    <div className='quoteWord'>Get a Quote</div>  
                                </div> 
                            </Link>
                        </div>           
                    </div>     
                </div>    
            </header>



            <div ref={topRef} style={{ position: 'absolute', top: 0, left: 0 }} />
            <header  className={`smallHead ${scrollDirection === 'down' ? 'header--hidden' : ''}`}>
                <div className='smallTopbar'>
                    <div className='smallTopLeft'>
                        <img src={phlogo} className="logoimg" alt="logo"/> 
                    </div>
                    <div className='smallTopRight'>
                        <button className={`hamburger ${isActive ? 'active' : ''}`} onClick={(e)=>handleslider(e)} aria-label="Toggle navigation" aria-expanded={isActive}>
                            <span className='bar lbar'></span>
                            <span className='bar lbar'></span>
                            <span className='bar lbar'></span>
                        </button>
                    </div>                            
                </div>

                
                <div className={slider === true ? 'smalllinks' : 'smalllinksclosed'}>  
                    <div className='smallNavbar'>
                        <div className='navBarright lightnav'>
                            <div className='navbarhead'>
                                <div className='navbarName'>
                                    <p className='navnametxt txtColor'>OPALCON</p> 
                                    <p className='navdesctxt txtColor'>Branding Limited</p> 
                                </div>
                            </div>   

                            <div className='navbarBottom'>
                                <div className='smallListicle'>
                                    <Link to={'/'} className='navBarLinks lightnavbarborder'>
                                        <div className='smallLinklist'>
                                            <div style={linkstyle} className='linkbtn'>Home</div>
                                        </div>
                                    </Link>                     
                                    <Link to={'/about'} className='navBarLinks lightnavbarborder'>
                                        <div className='smallLinklist'>
                                            <div style={linkstyle} className='linkbtn'>About</div>
                                        </div>
                                    </Link>                     
                                    <Link to={'/services'} className='navBarLinks lightnavbarborder'>
                                        <div className='smallLinklist'>
                                            <div style={linkstyle} className='linkbtn'>Services</div>
                                        </div>
                                    </Link>                     
                                    <Link to={'/contact'} className='navBarLinks lightnavbarborder'>
                                        <div className='smallLinklist'>
                                            <div style={linkstyle} className='linkbtn'>Contact</div>
                                        </div>
                                    </Link>                     
                                    <Link to={'/quote'} className='navBarLinks'>
                                        <div className='smallLinklist'>
                                            <div style={linkstyle} className='linkbtn'>Get a Quote</div>
                                        </div>
                                    </Link>    
                                </div>

                                <div className='contLinks'>
                                    <div className='smLogos'>
                                        <a
                                            className="locsmlogolink"
                                            href="https://www.instagram.com/_the.loner"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >
                                            <img src={fblogo} className="smlogo" alt="insta"/>
                                            </a>
                                        <a
                                            className="smlogolink"
                                            href="https://www.instagram.com/_the.loner"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >
                                            <img src={iglogo} className="smlogo" alt="insta"/>
                                            </a>
                                        <a
                                            className="smlogolink"
                                            href="https://x.com/JayMono7"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >
                                            <img src={xlogo} className="smlogo" alt="twitter"/>
                                            </a>
                                        <a
                                            className="smlogolink"
                                            href="https://www.linkedin.com/in/oluwaseun-olaitan-059b23201"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >
                                            <img src={lnlogo} className="smlogo" alt="linkedin"/>
                                            </a>
                                        </div>
                                    </div>





                            </div> 
                        </div>
                    </div>              
                </div>    
            </header>
        </>
    )
}

export default Header
