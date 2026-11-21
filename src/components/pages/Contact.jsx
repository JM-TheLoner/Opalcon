import '../stylesheets/contact.css'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Reveal from '../effects/Reveal'
import { useEffect, useState, useContext, useRef } from 'react'
import emailjs from '@emailjs/browser'
import DataContext from '../../context/DataContext';
import { FaEnvelope, FaPaperPlane, FaPhone, FaQuoteLeft } from 'react-icons/fa';
import { FaLocationDot, FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import whatlight from '../../assets/images/whatsapplight.png'
import defProfPic from '../../assets/images/default_profile.jpg'
import insta from '../../assets/images/insta.png'
import twitter from '../../assets/images/twitter.png'
import linkedin from '../../assets/images/linkedin.png'

const Contact = () => {

  const { navigate } = useContext(DataContext)

  const form = useRef()

  const[fullname, setfullname] = useState('')
  const[contactemail, setcontactemail] = useState('')
  const[contactaddress, setcontactaddress] = useState('')
  const[message, setmessage] = useState('')
  const[nofullname, setnofullname] = useState(false)
  const[nocontactemail, setnocontactemail] = useState(false)
  const[nocontactaddress, setnocontactaddress] = useState(false)
  const[nomessage, setnomessage] = useState(false)

  const [reviewDisplay, setReviewDisplay] = useState(0)
  const [reviewPageCount, setReviewPageCount] = useState(1)

  const testimonialRef = useRef(null);
  const targetPageRef = useRef(0);

  const goToReviewPage = (page) => {
  const slider = testimonialRef.current
  if (!slider) return;

  const pageCount = Math.max(1, Math.ceil(slider.scrollWidth / slider.clientWidth))

  // Wrap the requested page around the available pages
  const nextPage = (page + pageCount) % pageCount

  // Store the intended destination immediately
  targetPageRef.current = nextPage
  setReviewDisplay(nextPage)

  const maxScroll = slider.scrollWidth - slider.clientWidth
  const targetPosition = Math.min(nextPage * slider.clientWidth, maxScroll)

  slider.scrollTo({
    left: targetPosition,
    behavior: 'smooth'
  })
  }
  const moveRight = () => {
    goToReviewPage(targetPageRef.current + 1)
  }
  const moveLeft = () => {
    goToReviewPage(targetPageRef.current - 1)
  }

  useEffect(() => {
    const slider = testimonialRef.current
    if (!slider) return

    let scrollTimer

    const updatePageCount = () => {
      const count = Math.max(1, Math.ceil(slider.scrollWidth / slider.clientWidth) )

      setReviewPageCount(count)

      if (targetPageRef.current >= count) {
        targetPageRef.current = count - 1
        setReviewDisplay(count - 1)
      }
    }

    const handleScroll = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      // Identify the page currently closest to the visible position
      const currentPage =
        slider.scrollLeft >= maxScroll - 5
          ? reviewPageCount - 1
          : Math.round(slider.scrollLeft / slider.clientWidth);

      setReviewDisplay(currentPage);

      // Wait until scrolling settles before updating the intended destination
      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        targetPageRef.current = currentPage;
      }, 150);
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
  }, [reviewPageCount])
  
  const reviews =[
    {id: 0, key: 1, name: "Ebatamehi Andrew", descriptor: "Email Marketer", profilePic: "", review: "Working with him was a great experience. He understood the requirements and delivered a solution that met our needs."},
    {id: 1, key: 1, name: "Solomon-Eseh Emmanuel", descriptor: "Entrepreneur", profilePic: "", review: "He was professional, creative, and attentive to detail throughout the project."},
    {id: 2, key: 1, name: "Olubajo Abednego", descriptor: "Entrepreneur", profilePic: "", review: "He was professional, detail-oriented, and efficient throughout the design process, with great communication and excellent delivery."},
    {id: 3, key: 1, name: "Abstergo Industries", descriptor: "Tech Company", profilePic: "", review: "He was professional, detail-oriented, and efficient throughout the design process, with great communication and excellent delivery."},
    {id: 4, key: 2, name: "Ebatamehi Andrew2", descriptor: "Email Marketer", profilePic: "", review: "Working with him was a great experience. He understood the requirements and delivered a solution that met our needs."},
    {id: 5, key: 2, name: "Solomon-Eseh Emmanuel2", descriptor: "Entrepreneur", profilePic: "", review: "He was professional, creative, and attentive to detail throughout the project."},
    {id: 6, key: 2, name: "Olubajo Abednego2", descriptor: "Entrepreneur", profilePic: "", review: "He was professional, detail-oriented, and efficient throughout the design process, with great communication and excellent delivery."},
    {id: 7, key: 2, name: "Abstergo Industries2", descriptor: "Tech Company", profilePic: "", review: "He was professional, detail-oriented, and efficient throughout the design process, with great communication and excellent delivery."},
    {id: 8, key: 3, name: "Ebatamehi Andrew3", descriptor: "Email Marketer", profilePic: "", review: "Working with him was a great experience. He understood the requirements and delivered a solution that met our needs."},
    {id: 9, key: 3, name: "Solomon-Eseh Emmanuel3", descriptor: "Entrepreneur", profilePic: "", review: "He was professional, creative, and attentive to detail throughout the project."},
    {id: 10, key: 3, name: "Olubajo Abednego3", descriptor: "Entrepreneur", profilePic: "", review: "He was professional, detail-oriented, and efficient throughout the design process, with great communication and excellent delivery."},
    {id: 11, key: 3, name: "Abstergo Industries3", descriptor: "Tech Company", profilePic: "", review: "He was professional, detail-oriented, and efficient throughout the design process, with great communication and excellent delivery."},
  ]

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  const fullnamer= () => {
    setnofullname(true)
  } 
  const emailer= () => {
    setnocontactemail(true)
  } 
  const addresser= () => {
    setnocontactaddress(true)
  } 
  const messager= () => {
    setnomessage(true)
  } 

  const handleContact = async (e) => { 
    e.preventDefault()
    setnofullname(false)
    setnocontactaddress(false)
    setnocontactemail(false)
    setnomessage(false)

    if (!fullname || !contactaddress || !contactemail || !message){
      if (fullname){        
        if (contactemail){        
          if (contactaddress){          
            if (message){
            } else{
              alert('Please Type a Message')
            }
          } else{
            alert('Please Type A Subject/Headline')
          }        
        } else{
          alert('Please Type Your Email')
        }      
      } else{
        alert('Please Type Your Name')
      }
    }
    

    if (!fullname){
        fullnamer()
    }
    if (!contactaddress){
        addresser()
    }
    if (!contactemail){
        emailer()
    }
    if (!message){
        messager()
    }
    if (fullname && contactaddress && contactemail && message){
      emailjs.sendForm(
        //add emailjs service and template codes as well as public Key before deploying
        'service_code',
        'template_code', 
        form.current, 
        {
          publicKey: 'publicKey',
        }
      )
      .then( 
        () => {
          alert('Message Sent!');
          setfullname('')
          setcontactaddress('')
          setcontactemail('')
          setmessage('')
          navigate('/')        
          window.scrollTo(0,0)
        },
        (error) => {
          alert('FAILED. Please Try Again');
          console.log('FAILED...', error.text);
        },
      );
    }
  }

  return (
    <div className='Contact'>
      <Header title="Opalcon Limited"/>
      <Reveal className='contactContainer'>
          <div className='testimonialSection'>
            <p className='testimonialhead contTxtColorRGB'>TESTIMONIALS</p>
            <div className='txtAndNav'>
              <p className='testimonialTxt txtColor'>Check Out Our Reviews</p>
              <div className='revNav'>
                <button className='revNavBtn' onClick={moveLeft}>
                  <FaAngleLeft size={15} color='#c20cff'/>
                </button>
                <button className='revNavBtn' onClick={moveRight}>
                  <FaAngleRight size={15} color='#920cff'/>
                </button>
              </div>
            </div>
            <div className='testimonialLister' ref={testimonialRef}>
              {reviews.map((review)=>(                
                <div className='review' key={review.id}>   
                  <div className='reviewWords'>
                    <svg width="0" height="0" style={{ position: 'absolute' }}>
                      <linearGradient id="icon-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop stopColor="#3146ff" offset="0%" />
                        <stop stopColor="#4173ff" offset="25%" />
                        <stop stopColor="#d67cff" offset="50%" />
                        <stop stopColor="#920cff" offset="100%" />
                      </linearGradient>
                    </svg>
                    <FaQuoteLeft size={24} style={{ fill: 'url(#icon-gradient-1)' }}/>
                    <p className='reviewText txtColor'>{review.review}</p>
                  </div>
                  <div className='revBorderBottom'></div>
                  <div className='reviewIdentity'>
                    <img className='profImage' src={review.profilePic || defProfPic} alt='Profile Img'/>
                    <div className='profId'>
                      <p className='reviewName txtColor'>{review.name}</p>
                      <p className='reviewPos txtColor'>{review.descriptor}</p>
                    </div>
                  </div>                
                </div>
              ))} 
            </div>
            <div className='scrollPoints'>
              {Array.from({ length: reviewPageCount }).map((_, index) => (
                <div
                  key={index}
                  onClick={() => goToReviewPage(index)}
                  className={
                    reviewDisplay === index
                      ? 'reviewScrollHere'
                      : 'reviewScrollThere'
                  }
                />
              ))}
            </div>            
          </div>
          <div className='contactSection'>
            <div className='contactleft'>
              <div className='contacttext'>
                <div className='contPGHeadLineContainer'>
                  <div className="contPGHeadWrap">
                    <h1 className="contPGHeadLine ">Let's Connect</h1> 
                  </div>
                </div>
                <div className='contHeadWrap' style={{display:"flex"}}>
                  <p className='txtColor' style={{marginRight:"10px"}}>Get In</p>
                  <p className='contTxtColorRGB_Full'>Touch</p>
                </div>                              
                <div className='GITBorderBottom'></div>
                <p className='contactbody txtColor'>Have a project in mind?<br/>Let's bring your ideas to life together</p>
                <p className='contactbodylow txtColor'>We'd love to hear from you! Whether you're ready to start a project, have a question or just want to learn more about what we do. Feel free to reach out</p>
              </div>
              <div className='contactButtonsPELList'>
                <a className='contactButtonsPEL' href='mailto:oolaitan13@gmail.com' target="_blank" rel="noopener noreferrer">              
                  <div className='ContactButtonsPELIcon'>
                    <FaEnvelope size={23} color='#7d2cff'/>
                  </div>
                  <div className='contactButtonsPELText'>
                    <p className='PELTextHead txtColor'>Email Us</p>
                    <p className='PELTextBody txtColor'>Oolaitan13@gmail.com</p>
                  </div>                      
                </a>
                <a className='contactButtonsPEL' href='tel:+234-902-328-2736' target="_blank" rel="noopener noreferrer">
                  <div className='ContactButtonsPELIcon'>
                    <FaPhone size={23} color='#7d2cff' style={{rotate:'90deg'}}/>
                  </div>
                  <div className='contactButtonsPELText'>                  
                    <p className='PELTextHead txtColor'>Call Us</p>            
                    <p className='PELTextBody txtColor'>+234-902-328-2736</p>            
                  </div>
                </a>
                <a className='contactButtonsPEL' href='https://maps.app.goo.gl/TfUdKPA54V9AJ8uL9' target="_blank" rel="noopener noreferrer">              
                  <div className='ContactButtonsPELIcon'>
                    <FaLocationDot size={23} color='#7d2cff'/>
                  </div>
                  <div className='contactButtonsPELText'>
                    <p className='PELTextHead txtColor'>Our Location</p>
                    <p className='PELTextBody txtColor'>Lagos, Nigeria</p>
                  </div>                      
                </a>                
              </div>
              <div className='contactFollow'>
                <div className='contFollowWrap'>
                  <div className='BorderHalfBeg'></div>
                  <p className='contactFollowHead contTxtColorRGB_REV'>FOLLOW US</p>
                  <div className='BorderHalfEnd'></div>
                </div>
                <div className='smLogos'>
                  <a
                      className="loc"
                      href="https://wa.me/qr/7K2XV7UM75H4N1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={whatlight} className="smlogo" alt="whatlight"/>
                    </a>
                  <a
                      className="loc"
                      href="https://www.instagram.com/_the.loner"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={insta} className="smlogo" alt="insta"/>
                    </a>
                  <a
                      className="loc"
                      href="https://x.com/JayMono7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={twitter} className="smlogo" alt="twitter"/>
                    </a>
                  <a
                      className="loc"
                      href="https://www.linkedin.com/in/oluwaseun-olaitan-059b23201"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} className="smlogo" alt="linkedin"/>
                    </a>
                </div>  
              </div>
                 
            </div>


            <div className='contactRight'>
              <div className='contactwrapper'>
                <div className='contactWrapperHeader'>
                  <div className='contactWrapperHeaderIcon'>
                    <FaPaperPlane color='#7402f6' size={35}/>
                  </div>
                  <div className='contactWrapperHeaderText'>
                    <p className='contactWrapperHeaderTextHead txtColor'>Send Us a Message</p>
                    <p className='contactWrapperHeaderTextBody txtColor'>We'll get back to you as soon as possible</p>
                  </div>
                </div>
                <form ref={form}>
                  <div className='contactsameline'>
                    <div className='fullnameinputBox'>
                      <input
                      type='text'
                      placeholder='Your Name'
                      required
                      className={!nofullname ? 'regularBox' : 'errorBox'}
                      value={fullname}
                      name='user_name'
                      onChange={(e)=>{setfullname(e.target.value)}}/>
                    </div>

                    <div className='contactemailinputBox'>
                      <input
                      type='email'
                      placeholder='Your Email'
                      required
                      className={!nocontactemail ? 'regularBox' : 'errorBox'}
                      value={contactemail}
                      name='user_email'
                      onChange={(e)=>{setcontactemail(e.target.value)}}/>
                    </div>
                  </div>
                  <div className='contactsameline'>
                    <div className='contactaddressinputBox'>
                      <input
                      type='text'
                      placeholder='Request Header'
                      required
                      className={!nocontactaddress ? 'regularBox' : 'errorBox'}
                      value={contactaddress}
                      name='user_address'
                      onChange={(e)=>{setcontactaddress(e.target.value)}}/>
                    </div>
                  </div>
                  <div className='contactsameline'>
                    <div className='messageinputBox'>
                      <textarea
                      type='text'
                      placeholder='Your Message'
                      required
                      className={!nomessage ? 'regularBox' : 'errorBox'}
                      value={message}
                      name='message'
                      onChange={(e)=>{setmessage(e.target.value)}}/>
                    </div>
                  </div>
                  <div className='contactbuttonline'>
                    <button type='submit' value='Send' className='contactbutton contbuttoncolorgrad' onClick={(e)=>{handleContact(e)}}>
                      <div className='contactBtnTxt'>
                        <FaPaperPlane  size={18} color='#F5F4F9'/>    
                        Send Message                    
                      </div>  
                    </button>   
                  </div>           
                </form>
              </div>      
            </div>      

          </div>
        
      </Reveal>
    <Footer/>
  </div>
  )
}

export default Contact