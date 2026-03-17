import React from "react";
import "../assets/styles/HeroSection.scss";
import profileImage from "../assets/images/profile1.jpg";
import heroImg from "../assets/images/profile3.png";
import DownloadIcon from "../assets/images/charm_download.png"
import Icon1 from "../assets/images/line-md_linkedin.png"
import { Link } from "react-scroll";
const HeroSection = () => {
    return (
//         <section className="hero profile-wrapper mx-0 container-fluid border">
//             <div className="row">
//                 <div className="col-md-4">
//                     <div className="">
//                         <img src={profileImage} className="profile-img" />
//                     </div>
//                 </div>
//                 <div className="col-md-8">
// hi
//                 </div>
//             </div>
//         </section>
        <section className="container hero-section-wrapper" id="Home">
            <div className="row ">
                <div className="col-xl-3 col-md-4 col-12">
                    <div className="avatar-img">
                        
                    <img src={heroImg} className="heroImg" />
                    </div>
                </div>
                
                <div className="col-xl-9 col-md-8 col-12">
                    <div className="title-text ">
                        <p className="mb-0 arrow">Hello! I am <span>Akshay Sapra</span> </p>
                        <p className="sm-text top-margin mb-0">UI/UX Designer & Frontend Developer</p>
                        <h3 className="lg-text mb-0 body-heading">Designing intuitive interfaces  <span>and high performing web experiences.</span> </h3>
                        <p className="xs-text para-width">I specialize in crafting user-focused digital products that combine thoughtful UX,
modern UI systems, and responsive frontend development.</p>
                        <div className="d-flex flex-wrap">    
                            <button className="primary-btn d-flex items-center">Download Resume <span className="ms-2"> <img src={DownloadIcon} height={18}></img></span> </button>
                            <Link
                                to="crafted-experience"
                                smooth={true}
                                duration={300}
                                offset={-80}
                            
                            >
                                <button className="primary-btn d-flex items-center ms-3"> Explore My Work </button>
                            </Link>
                        </div>
                        
                        {/* <div>
                            <img src={Icon1} height={40} />
                        </div> */}
                    </div>
                </div>
            </div>
            
        </section>
         
    );
};

export default HeroSection;
