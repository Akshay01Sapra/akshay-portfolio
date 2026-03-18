import React from 'react'
import "../assets/styles/About.scss"
const About = () => {
  return (
    <section>
    <div id="About">
          <div className="container ">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
                  <h3 className="md-text mb-3 body-heading">I'm a Web Designer.</h3>
                  <p className="objective-text">I’m a <b> UI/UX Designer and Frontend Developer with 4+ years of experience creating scalable, user-centered digital products </b> across healthcare, e-commerce, and SaaS platforms. I specialize in transforming complex business requirements into intuitive interfaces that improve usability, accessibility, and product performance.</p>
                  <p className="objective-text">My work combines <b> design thinking with modern frontend engineering</b>, allowing me to move seamlessly from user research and information architecture to high-fidelity design and production-ready interfaces. I focus on building <b> responsive, high-performing web experiences </b> that balance visual clarity, usability, and technical efficiency.</p>
                  <p className="objective-text">I primarily work with <b> Figma, React.js, JavaScript, and modern CSS frameworks</b>, building reusable UI components and scalable design systems that help teams deliver consistent and efficient digital products.</p>
          </div>
          <div className="col-12 col-md-6">
            <div className="tech-card">
              <p className="tech-card-title after-border body-heading">Tools I Work With </p>
              
              <div className="">
                <p className="tech-subtitle">Design </p>
                <div className="pills-container">
                  <span className="tech-pills">Figma</span>
                  <span className="tech-pills">Adobe XD</span>
                  <span className="tech-pills">Sketch</span> 
                </div>
                
              </div>
              
              <div className="">
                <p className="tech-subtitle">Frontend </p>
                <div className="pills-container">
                  
                <span className="tech-pills">React.js</span>
                <span className="tech-pills">Javascript</span>
                <span className="tech-pills">Html5</span>
                <span className="tech-pills">Css3</span>
                <span className="tech-pills">Scss</span>
                </div>
              </div>
              
              <div className="">
                <p className="tech-subtitle">UI Frameworks </p>
                <div className="pills-container">
                  <span className="tech-pills">Tailwind CSS</span>
                  <span className="tech-pills">Bootstrap</span>
                  <span className="tech-pills">Material UI</span>
                </div>
              </div>
              
              <div className="">
                <p className="tech-subtitle">Version Control </p>
                <div className="pills-container"> 
                  <span className="tech-pills">Git</span>
                  <span className="tech-pills">GitHub</span>
                  <span className="tech-pills">Bitbucket</span>
                </div>
              </div>
            </div>
          </div>
              </div>
          </div>
          
      </div>
    </section>
  )
}

export default About
