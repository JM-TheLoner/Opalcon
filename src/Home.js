import './App.css';
import img from './homeimg.jpg'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; 

const Home = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])
 
  const move = () =>{
    navigate('/services')
  }

  return (
    <div className='Homepagecontainer' style={{
      backgroundImage:`url(${img})`,
      backgroundSize:'cover'
      }}>
      <h3 className='Top'>
        Opalcon Limited
      </h3>
      <h2 className='Top1'>
        These days it's a jungle of products and services out there
      </h2>
      <h1 className='Middle'>
      We're all about giving YOU 
      </h1>
      <h1 className='Middle1'>
      the edge you need to
      </h1>
      <span>
        <h1 className='Middle2'>
        <p style={{
          fontSize:'1.7em'
          }}> WIN</p>
        </h1>
      </span>
      <div className='Headspace5'>
      <button className='Butt' onClick={()=>{move()}}>click here to see our services</button>
      </div>
      <h3 className='End'>
        We understand ideas and are all about solutions
      </h3>
    </div>
  )
}

export default Home
