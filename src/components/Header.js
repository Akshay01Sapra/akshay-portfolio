import React,{useEffect , useState} from 'react'
import { Link } from "react-scroll";
import LogoImg from "../assets/images/logo1.svg"
import "../assets/styles/header.scss";
const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    
    useEffect(() => {
        const handlescroll = () => {
            setIsSticky(window.scrollY > 40)
        };
        window.addEventListener("scroll", handlescroll);
        return () => window.removeEventListener("scroll", handlescroll)
    }, []);
  return (
    <header className={`mainheader ${isSticky ? "sticky-header" : ""}`}>
          <nav className="navbar navbar-expand-lg navbar-wrapper">
              <div className="container">
                  <a className="navbar-brand" href="#">
                      <img src={LogoImg} className="logo-img"   alt="logo image" />
                      
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      {/* <span className="navbar-toggler-icon"></span> */}
                      <div className="toggler-icon1"></div>
                      <div className="toggler-icon2"></div>
                      <div className="toggler-icon3"></div>
                  </button>
                  
                  <div className="collapse navbar-collapse small-header " id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link
                                  className="nav-link active" aria-current="page"
                                  to="Home"
                                  smooth={true}
                                  duration={300}
                                  offset={-80} >HOME</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page"
                                  to="About"
                                  smooth={true}
                                  duration={300}
                                  offset={-140}>ABOUT</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page"
                                  to="Experience"
                                  smooth={true}
                                  duration={300}
                                  offset={-80}>EXPERIENCE</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page"
                                  to="crafted-experience"
                                  smooth={true}
                                  duration={300}
                                  offset={-80}>WORK</Link>
                          </li>
                          <li className="nav-item ">
                              <Link className="nav-link active" aria-current="page"
                                  to="Contact"
                                  smooth={true}
                                  duration={300}
                                  offset={-80}
                              >CONTACT</Link>
                              
                          </li>
                          
                          <li className="nav-item me-0">
                              <Link className="nav-link active" aria-current="page"
                                  to=""
                                  smooth={true}
                                  duration={300}
                                  offset={-80}
                              >RESUME</Link>
                              </li>
                      </ul>
                      </div>
              </div>
          </nav>
    </header>
  )
}

export default Header
