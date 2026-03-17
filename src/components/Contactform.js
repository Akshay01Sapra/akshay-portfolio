import React from 'react'
import '../assets/styles/ContactForm.scss'
const Contactform = () => {
  return (
    <section>
          <div className="form-wrapper" id="Contact">
              <div className="container">
                  <div className="form-heading">
                      <h3 className="section-title body-heading mb-0">Let's Work Together</h3>
                  </div>
                  
                  <form className="contact-form">
                      <div className="row ">
                          <div className="col-md-6 mb-2 mb-md-4">
                              <div className="form-group">
                                  <label htmlFor="firstName" className="label">First Name</label>
                                  <input
                                      type="text"
                                      id="firstName"
                                      name="firstName"
                                      
                                  />
                              </div>
                          </div>
                          <div className="col-md-6 mb-2 mb-md-4">
                              <div className="form-group">
                                  <label htmlFor="firstName" className="label">Last Name</label>
                                  <input
                                      type="text"
                                      id="firstName"
                                      name="firstName"

                                  />
                              </div>
                          </div>
                      </div>
                      
                      <div className="row  ">
                          <div className="col-md-6 mb-2 mb-md-4">
                              <div className="form-group">
                                  <label htmlFor="firstName" className="label">Email</label>
                                  <input
                                      type="text"
                                      id="firstName"
                                      name="firstName"

                                  />
                              </div>
                          </div>
                          <div className="col-md-6 mb-2 mb-md-4">
                              <div className="form-group">
                                  <label htmlFor="firstName" className="label">Subject</label>
                                  <div className="select-wrap">
                                      <select>
                                          <option value=""></option>
                                          <option value="web-design">Web Design Project</option>
                                          <option value="ui-ux">UI/UX Design Project</option>
                                          <option value="frontend">Frontend Development</option>
                                          <option value="collaboration">Collaboration</option>
                                      </select>
                                  </div>
                                 
                              </div>
                          </div>
                          <div className="text-area ">
                                  <div className="form-group">
                                      <label htmlFor="firstName" className="label">Message</label>
                                      <textarea
                                      />
                                  </div>
                          </div>
                          
                          <div className="form-btn text-center mt-3 mt-md-5">
                              <button>Hire Me</button>
                          </div>
                      </div>
                  </form>
                 
              </div>
              
       </div>
    </section>
  )
}

export default Contactform
