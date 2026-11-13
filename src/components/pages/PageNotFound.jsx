import { Link } from "react-router-dom"
import '../stylesheets/notfound.css'
import { useEffect, useState } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import GlowCursor from '../effects/GlowCursor';
import lostImg from '../../assets/images/lostImg.png'

// Helper to convert HSL hue (0-360) to Hex (#rrggbb)
const hslToHex = (h, s = 90, l = 65) => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const Pagenotfound = () => {
  const [streakColor, setStreakColor] = useState('#5f8bff');

  useEffect(()=>{
    window.scrollTo(0,0)
 }, []) 
 
  const linkstyle = {
      textDecoration:"none"
  }

// Smoothly cycle the streak color
  useEffect(() => {
    let hue = 220; // starts near #5f8bff blue
    let animationFrameId;

    const updateColor = () => {
      hue = (hue + 0.5) % 360; // increase 0.5 for faster color changes, decrease for slower
      setStreakColor(hslToHex(hue));
      animationFrameId = requestAnimationFrame(updateColor);
    };

    animationFrameId = requestAnimationFrame(updateColor);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="notfound">
      <Header title="Opalcon Limited"/>
      <GlowCursor
      color={streakColor}
      intensity={1.3}
      trailWidth={3}
      linger={1.4}
      glow={1.2}
      clickBurst
      theme="light"
    >        
      <div className='lostDiv'>
        <div className='lostTop'>            
          <img src={lostImg} className='lostImg' alt="You're lost img"/>
        </div>
        <div className='lostBottom'>
          <div className="topline">
            <h1 className='losthead txtColorRGB'>404</h1>
            <h2 className='firstLine txtColor'>Page Not Found</h2>
            <p className='secondLine txtColor'>The page you are looking for doesn't exist or has moved.</p>
            <div >
            <div className={`toHomeBtn buttoncolorgrad`}>
                <Link to={'/'} style={linkstyle} className='toHomeContent'>
                    <div className='toHome'>
                      <div className='toHomeIcon' style={{fontSize: '25px'}}>&#8592;</div>
                      <div className='toHomeWord'>To Homepage</div>
                    </div> 
                </Link>
              </div>
            </div>
          </div>            
        </div>
      </div>
    </GlowCursor>
    <Footer/>
  </div>
  )
}

export default Pagenotfound
