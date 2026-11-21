import '../stylesheets/home.css'
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react'; 
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Reveal from '../effects/Reveal'
import merchImg from '../../assets/images/merchImg.png'
import merchImg1 from '../../assets/images/merchImg1.png'
import merchImg2 from '../../assets/images/merchImg2.png'
import digiSolImg from '../../assets/images/digiSolImg.png'
import signageImg from '../../assets/images/signageImg.png'
import printProdImg from '../../assets/images/printProdImg.png'
import abstergo from '../../assets/images/abstergo.png'
import templar from '../../assets/images/templar.png'
import assassin from '../../assets/images/assassin.png'
import jedi from '../../assets/images/jedi.png'
import sith from '../../assets/images/sith.png'
import bioshock from '../../assets/images/bioshock.png'
import kingfishers from '../../assets/images/kingfishers.png'
import { FaAngleLeft, FaAngleRight, FaMagnifyingGlass } from 'react-icons/fa6';
import { FaPalette, FaPuzzlePiece, FaCheckCircle, FaPenNib, FaRegLightbulb } from "react-icons/fa";
import { IoRocket, IoBarChart } from "react-icons/io5";
import { PiHandshakeFill } from "react-icons/pi";

const Home = () => {

  const images = [
    {id: 0, src: merchImg1, alt: 'Branded Opalcon Products'},
    {id: 1, src: digiSolImg, alt: 'Digital Solutions'},
    {id: 2, src: merchImg, alt: 'Branded Opalcon Products'},
    {id: 3, src: printProdImg, alt: 'Print Production'},
    {id: 4, src: merchImg2, alt: 'Branded Customer Products'},
    {id: 5, src: signageImg, alt: 'Signage & Large Format'},
  ]

  const logos = [
    {id: 0, src:abstergo, alt:'abstergo'},
    {id: 1, src:templar, alt:'templar'},
    {id: 2, src:assassin, alt:'assassin'},
    {id: 3, src:jedi, alt:'jedi'},
    {id: 4, src:sith, alt:'sith'},
    {id: 5, src:bioshock, alt:'bioshock'},
    {id: 6, src:kingfishers, alt:'kingfishers'},
  ]

  const [imageDisplay, setImageDisplay] = useState(0)
  const [imagePageCount, setImagePageCount] = useState(1)
  const [selfSlide, setSelfSlide] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false);

  const imageRef = useRef(null)
  const isProgrammaticScroll = useRef(false)
  const targetPageRef = useRef(0)

  const goToImagePage = (page) => {
    const slider = imageRef.current
    if (!slider) return

    const pageCount = images.length;

    const nextPage = (page + pageCount) % pageCount

    targetPageRef.current = nextPage
    setImageDisplay(nextPage)

    const maxScroll = slider.scrollWidth - slider.clientWidth

    const targetPosition =
      nextPage === pageCount - 1
        ? maxScroll
        : Math.min(nextPage * slider.clientWidth, maxScroll)

    isProgrammaticScroll.current = true

    slider.scrollTo({
      left: targetPosition,
      behavior: reducedMotion ? 'instant' : 'smooth'
    })
  }
  const moveRightSelf = () => {
    goToImagePage(targetPageRef.current + 1)
  }
  const moveRight = () => {
    goToImagePage(targetPageRef.current + 1)

    if (selfSlide) {
      setSelfSlide(false)
    }
  }
  const moveLeft = () => {
    goToImagePage(targetPageRef.current - 1)
    
    if (selfSlide) {
      setSelfSlide(false)
    }
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    setReducedMotion(mediaQuery.matches)

    const handleChange = (event) => {
      setReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])
  useEffect(() => {
    const slider = imageRef.current
    if (!slider) return

    let scrollTimer

    const updatePageCount = () => {
      const count = Math.max(1, Math.ceil(slider.scrollWidth / slider.clientWidth) )

      setImagePageCount(count)

      if (targetPageRef.current >= count) {
        targetPageRef.current = count - 1
        setImageDisplay(count - 1)
      }
    }

const handleScroll = () => {
  const currentPage = Math.min(
    images.length - 1,
    Math.max(0, Math.round(slider.scrollLeft / slider.clientWidth))
  );

  if (!isProgrammaticScroll.current) {
    setImageDisplay(currentPage);
  }

  clearTimeout(scrollTimer);

  scrollTimer = setTimeout(() => {
    const finalPage = Math.min(
      images.length - 1,
      Math.max(0, Math.round(slider.scrollLeft / slider.clientWidth))
    );

    setImageDisplay(finalPage);
    targetPageRef.current = finalPage;
    isProgrammaticScroll.current = false;
  }, 200);
};

    updatePageCount();

    const observer = new ResizeObserver(updatePageCount);
    observer.observe(slider);

    window.addEventListener('resize', updatePageCount);
    slider.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(scrollTimer);
      observer.disconnect();
      window.removeEventListener('resize', updatePageCount);
      slider.removeEventListener('scroll', handleScroll);
    };
  }, [imagePageCount])
  useEffect(() => {
      // 1. Set up the interval
      const intervalId = setInterval(() => {
        if (selfSlide) {
          moveRightSelf()
        }
      }, 5000)

      // 2. Clean up the interval
      return () => clearInterval(intervalId);
  }, [selfSlide, reducedMotion]) // Empty array ensures this runs only once on mount
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
 
  const linkstyle = {
    textDecoration:"none"
  }

  return (
    <div className='Home'>
      <Header title="Opalcon Limited"/>
      <div className='homeContainer'>
        <Reveal className='HomeLayerOne'>
          <div className='leftside'>
            <div className='Overline'>
              <div className='overlineDash'></div>
              <div className='overlineText txtColor_Rev'>
                <div>STRATEGY</div>
                <div>·</div>
                <div>CREATIVITY</div>
                <div>·</div>
                <div>IMPACT</div>
              </div>
            </div>
            <div className="TopLine">
              <div className="ToplineText">
                  <div className='txtColor_Rev'>Build a Brand That</div>
                  <div className='homeTxtColorRGB_Rev'>Stands Out</div>
              </div>
            </div>      
            <div className="lineTwo">
              <p className="txtColor_Rev">From brand identity and design to printing and production,<br/>We make an Impact bringing your ideas to life.</p>        
            </div>

            <div className='sidebutton'>
              <Link to={'/services'} style={linkstyle}>
                <button className='toServiceButton homebuttoncolorgrad'>
                  <div className='seeWork'>
                      <div className='btnWords'>Explore Our Services</div>
                      <div className='btnIcon'>&#x2192;</div>
                  </div>                      
                </button>
              </Link>
            </div>
          </div>
          
          <div className="rightside">            
            <div className='homeImgCont' ref={imageRef}>
              {images.map((image)=>(
                <img key={image.id} src={image.src} className="homeImg" alt={image.alt} onClick={()=>{setSelfSlide(!selfSlide)}}/> 
              ))}        
              <div className='imgNav'>
                <button className='imgNavBtn' onClick={moveLeft}>
                  <FaAngleLeft size={20} color='#fafafa'/>
                </button>
                <button className='imgNavBtn' onClick={moveRight}>
                  <FaAngleRight size={20} color='#fafafa'/>
                </button>                      
              </div>    
            </div>
            <div className='scrollPoints'> 
              {images.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => {
                    setSelfSlide(false);
                    goToImagePage(index);
                  }}
                  className={
                    imageDisplay === index
                      ? 'imageScrollHere'
                      : 'imageScrollThere'
                  }
                />
              ))}
            </div>        
          </div> 
        </Reveal>

        <Reveal className='HomeLayerTwo'>
          <div className='qualityStrip'>
            <svg width="0" height="0" style={{ position: 'absolute' }}>
              <linearGradient id="icon-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop stopColor="#0400e1" offset="0%" />
                <stop stopColor="#4231ff" offset="25%" />
                <stop stopColor="#ba25ff" offset="70%" />
                <stop stopColor="#5100ba" offset="100%" />
              </linearGradient>
            </svg>
            <div className='quality qualityBorder'>
              <div className='qualityIcon'>
                <FaPalette style={{ fill: 'url(#icon-gradient-1)' }} size={40}/>
              </div>                
              <p className='txtColor qualityWords'>Creative Design</p>
              <p className='txtColor qualityWordsDesc'>Ideas made visually compelling.</p>
            </div>
            <div className='quality qualityBorder'>
              <div className='qualityIcon'>
                <FaRegLightbulb style={{ fill: 'url(#icon-gradient-1)' }} size={40}/>
              </div>                
              <p className='txtColor qualityWords'>Operational Excellence</p>
              <p className='txtColor qualityWordsDesc'>Functionality with Purpose</p>
            </div>
            <div className='quality qualityBorder'>
              <div className='qualityIcon'>
                <IoRocket style={{ fill: 'url(#icon-gradient-1)' }} size={40}/>
              </div>                
              <p className='txtColor qualityWords'>Strategic Branding</p>
              <p className='txtColor qualityWordsDesc'>Brands built with purpose.</p>
            </div>
            <div className='quality qualityBorder'>
              <div className='qualityIcon'>
                <PiHandshakeFill style={{ fill: 'url(#icon-gradient-1)' }} size={45}/>
              </div>                
              <p className='txtColor qualityWords'>Dedicated Support</p>
              <p className='txtColor qualityWordsDesc'>We're here every step.</p>
            </div>
            <div className='quality'>
              <div className='qualityIcon'>
                <IoBarChart style={{ fill: 'url(#icon-gradient-1)' }} size={35}/>
              </div>                
              <p className='txtColor qualityWords'>Measurable Impact</p>
              <p className='txtColor qualityWordsDesc'>Results that make a difference.</p>
            </div>
          </div>
        </Reveal>

        <Reveal className='HomeLayerThree'>        
          <div className='layerThreeTop'>
            <div className='homeProcessDash'></div>  
            <div className='LayerThreeHeadLineContainer'>
              <div className="LayerThreeHeadWrap">
                <h1 className="LayerThreeHeadLine ">Our Process</h1> 
              </div>
            </div>
            <div className='homeProcessDash_Rev'></div>            
          </div>
          <div className='layerThreeBolder txtColor'>How We Bring Brands To Life</div>
          <div className='layerThreeLighter txtColor'>A thoughtful process, Creative Execution, Meaningful Results</div>
          <div className='LayerThreeBottom'>
            <div className='processSteps'>
              <div className='stepCont'>
                <div className='stepImg'>
                  <FaMagnifyingGlass size={25} color='#8100eb'/>
                </div>
                <div className='stepHead txtColor'>Discovery</div>
                <div className='stepDesc txtColor'>We learn about your business and goals</div>
              </div>
              <div className='processArrow'>&#x2192;</div>
              <div className='stepCont'>
                <div className='stepImg'>
                  <FaPuzzlePiece style={{transform:"rotate(270deg)"}} size={25} color='#8100eb'/>
                </div>
                <div className='stepHead txtColor'>Strategy</div>
                <div className='stepDesc txtColor'>We craft a strategy that fits your vision</div>
              </div>
              <div className='processArrow'>&#x2192;</div>
              <div className='stepCont'>
                <div className='stepImg'>
                  <FaPenNib style={{transform:"rotate(270deg)"}} size={25} color='#8100eb'/>
                </div>
                <div className='stepHead txtColor'>Creation</div>
                <div className='stepDesc txtColor'>We bring ideas to life with stunning visuals</div>
              </div>
              <div className='processArrow'>&#x2192;</div>
              <div className='stepCont'>
                <div className='stepImg'>
                  <FaCheckCircle size={25} color='#8100eb'/>
                </div>
                <div className='stepHead txtColor'>Delivery</div>
                <div className='stepDesc txtColor'>You get results. On time. Every time</div>
              </div>
            </div>
            <div className='aboutPlugCont'>
              <div className='aboutPlug'>
                <div className='aboutPlugHead txtColor'>Want to know more about us?</div>
                <div className='aboutPlugText txtColor'>Discover the story behind the company that works for you</div>
                <Link to={'/about'} style={linkstyle}>
                  <button className='aboutPlugButt  homebuttoncolorgrad'>
                    <div className='plugseeWork'>
                        <div className='plugbtnWords'>Explore Opalcon</div>
                        <div className='plugbtnIcon'>&#x2192;</div>
                    </div>                      
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className='HomeLayerFour'>
          <div className='layerFourTop'>
            <div className='homeBrandsDash'></div>    
            <p className="LayerFourHeadLine txtColor">BRANDS WE'VE WORKED WITH</p> 
            <div className='homeBrandsDash'></div>               
          </div>
          <div className='brandLogoList'>
            {logos.map((logo)=>(
              <img className='brandLogo' key={logo.id} src={logo.src} alt={logo.alt}/>
            ))}
          </div>
        </Reveal>

        <Reveal className='HomeLayerFive'>
          <div className='layerFive'>
            <div className='layerFiveText'>
              <p className='fiveTextHead txtColor_Rev'>Ready to Build a Brand that Cuts Through the Noise?</p>
              <p className='fiveTextDesc txtColor_Rev'>Let's turn your ideas into reality</p>
            </div>
            <div className='layerFiveButton'>                
              <Link to={'/contact'} style={linkstyle}>
                <button className='layerFiveCTAButton'>
                  <div className='layerFiveCTASeeWork'>
                      <div className='layerFiveCTABtnWords'>Get In Touch</div>
                      <div className='layerFiveCTABtnIcon'>&#x2192;</div>
                  </div>                      
                </button>
              </Link>
            </div>
          </div>
        </Reveal>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Home
