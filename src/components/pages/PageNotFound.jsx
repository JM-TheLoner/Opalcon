import { Link } from "react-router-dom"
import '../stylesheets/notfound.css'
import { useEffect } from "react"
import Header from '../layout/Header';

const Pagenotfound = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  return (
      <div className="notfound">
      <Header title="Opalcon Limited"/>
        <div className="topline">
          <h1><span className="first">404</span><span className="second">|</span><span className="third">Page not found</span></h1>
        </div>
        <div>
          <h3 className="bottomline">click <Link to={'/'} className="link">Here</Link> to see our home page</h3>
        </div>
      </div>
  )
}

export default Pagenotfound
