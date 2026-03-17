import React from 'react'
import "../assets/styles/WorkExperience.scss"
import BGImg from "../assets/images/Gradient.png"
import CardImg from "../assets/images/Group1.png"
const WorkExperience = () => {
  return (
      <section className="container  work-experence-wrapper" id="Experience">
          <h3 className="section-title body-heading">Work Experience</h3>
          
          <div className="row g-3 g-lg-5 ">
              
              
                  <img src={BGImg} className="img" />
              
              <div className="col-12 col-md-6">
                  <div className="Work-card h-100 d-flex align-items-center ">
                      <div className="d-flex align-items-top">
                          <div className="">
                          <img src={CardImg} alt="card image" height={40} width={40} className="my-auto" />
                          </div>
                          <div className='ps-lg-3'>
                              <h4 className="card-title body-heading">UI/UX & Frontend Web Designer</h4>
                              <p className="mb-0 card-sm-text">Toronto, Canada</p>
                              <p className="card-sm-text">March 2024 - Present</p>
                              {/* <p className="card-text mb-0">Designed responsive websites and interactive UI components from Figma to front-end using HTML, CSS/SCSS, Bootstrap, Tailwind, Material UI, and React.js with Git collaboration.</p> */}
                              <ul className="card-list">
                                  <li className="card-text">Designed scalable UI components from Figma to React </li>
                                  <li className="card-text">Built mobile-first responsive interfaces using Tailwind & SCSS </li>
                                  <li className="card-text">Delivered production-ready frontends with clean, reusable code</li>
                              </ul>
                              <div className="btn-container">
                                  
                              {/* <button className='card-btn'>View More</button> */}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-12 col-md-6 ">
                  <div className="Work-card h-100 ">
                      <div className="d-flex align-items-top">
                          <div className="">
                              <img src={CardImg} alt="card image" height={40} width={40} className="my-auto" />
                          </div>
                          <div className='ps-lg-3'>
                              <h4 className="card-title body-heading">Web Designer</h4>
                              <p className="mb-0 card-sm-text">Techerudite - Ahemdabad, India</p>
                              <p className="card-sm-text">April 2023 - February 2024</p>
                              {/* <p className="card-text mb-0"> Translated Figma prototypes into a fully functional React.js frontend for a medical website, ensuring mobile-first design, accessibility, and smooth user interactions.</p> */}
                              <ul className="card-list">
                                  <li className="card-text">Translated complex Figma prototypes into React interfaces</li>
                                  <li className="card-text">Developed responsive, accessible web experiences</li>
                                  <li className="card-text">Optimized UI performance and interaction flows</li>
                              </ul>
                              <div className="btn-container">

                                  {/* <button className='card-btn'>View More</button> */}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-12 col-md-6 ">
                  <div className="Work-card h-100 ">
                      <div className="d-flex align-items-top">
                          <div className="">
                              <img src={CardImg} alt="card image" height={40} width={40} className="my-auto" />
                          </div>
                          <div className='ps-lg-3'>
                              <h4 className="card-title body-heading">Web Designer</h4>
                              <p className="mb-0 card-sm-text">Innvonix Tech Solution - Ahmedabad, India</p>
                              <p className="card-sm-text">August 2021 - April 2023</p>
                              {/* <p className="card-text mb-0">Crafted modern, interactive web pages for a graphic-rich diet studio using Figma, Material UI, Tailwind, and React.js, designing prototypes for seamless interfaces.</p> */}
                              <ul className="card-list">
                                  <li className="card-text">Designed modern UI systems for product-focused websites</li>
                                  <li className="card-text">Built responsive layouts using Tailwind and Material UI</li>
                                  <li className="card-text">Improved usability and visual consistency across pages</li>
                              </ul>
                              
                              <div className="btn-container">

                                  {/* <button className='card-btn'>View More</button> */}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-12 col-md-6 ">
                  <div className="Work-card h-100 ">
                      <div className="d-flex align-items-top">
                          <div className="">
                              <img src={CardImg} alt="card image" height={40} width={40} className="my-auto" />
                          </div>
                          <div className='ps-lg-3'>
                              <h4 className="card-title body-heading">Intern</h4>
                              <p className="mb-0 card-sm-text">ThirdRockTechno- Ahmedabad, India.</p>
                              <p className="card-sm-text">Jan 2021 - Jul 2021</p>
                              {/* <p className="card-text mb-0">Assisted in building responsive web pages and translating Figma prototypes. */}
                              {/* Collaborated using HTML, CSS/SCSS, Bootstrap, Tailwind, and React.js.</p> */}
                              
                              <ul className="card-list">
                                  <li className="card-text">Built responsive UI components using HTML, CSS, and React</li>
                                  <li className="card-text">Converted Figma wireframes into functional web layouts</li>
                                  <li className="card-text">Assisted with UI testing and cross-browser compatibility</li>
                              </ul>
                              <div className="btn-container">

                                  {/* <button className='card-btn'>View More</button> */}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default WorkExperience
