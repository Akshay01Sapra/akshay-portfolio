import React from 'react'
import "../assets/styles/landingpage.scss"
import LandingLogo from "../assets/images/landing-logo1.png";
import Icon1 from '../assets/images/icon1.svg'
import Icon2 from '../assets/images/icon2.svg'
import Icon3 from '../assets/images/icon3.svg'
import Icon4 from '../assets/images/icon4.svg'
import serviceBanner from '../assets/images/service.png'
import scard1 from "../assets/images/s-card1.png";
import scard2 from "../assets/images/s-card2.png";
import scard3 from "../assets/images/s-card3.png";
import Doctor from "../assets/images/contact.png"
const Landingpage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar navbar-expand-lg navbar-wrapper">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={LandingLogo} height={50} alt="logo image" />
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
                <a className="nav-link active" aria-current="page" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
              </li>
              <li className="nav-item me-0">
                <a className="nav-link active" aria-current="page" href="#">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* hero-section */}
      
      <div className="hero-background">
        <div className="container">
          <div className="row">
            <div className="col-7 text-wrapper ">
              <div className="hero-text h-100 d-flex justify-content-center flex-column">
                <h1>Struggling with <br></br> <span class="highlight">Blurry Vision</span>  Or <span class="highlight">Tired Eyes?</span> </h1>
                <p className="sub-text mt-4">Struggling to focus on screens or noticing blurry vision? Our experienced optometrists provide thorough eye exams to help you see clearly and comfortably again.</p>
                  <p className="sub-text">Trusted local optometrists</p> 
                  <p className="sub-text"> Convenient appointments in Toronto & Mississauga</p>
                <div>
                    <button className="cta-btn mt-4">Book an Eye Exam Today</button> 
                </div>
                                </div>      
            </div>
          </div>
           
        </div>
      </div>
      
      {/* section2 */}
      
      <div className="section-2 my-5 container">
        <h2 className="section-heading  text-center">Noticing Changes in Your Vision?</h2>
        
        <div className="row gy-4">
          <div className="col-6">
            <div className="vision-card">
              <div className="d-flex align-items-center">
                <div>
                  <img src={Icon1} height={110}></img>
                </div>
                
                <div className="ps-3">
                  <h3 className="card-title">Blurry Vision When Reading</h3>
                  <p className="card-subtitle">Small text looks unclear or you need to hold things farther away to focus.</p>
                  <button className="readmore-btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="vision-card">
              <div className="d-flex align-items-center">
                <div>
                  <img src={Icon2} height={110}></img>
                </div>

                <div className="ps-3">
                  <h3 className="card-title">Eye Strain After Screen Time</h3>
                  <p className="card-subtitle">Your eyes feel tired, dry, or sore after using phones or computers for long periods</p>
                  <button className="readmore-btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="vision-card">
              <div className="d-flex align-items-center">
                <div>
                  <img src={Icon3} height={110}></img>
                </div>

                <div className="ps-3">
                  <h3 className="card-title">Trouble Focusing on Close Tasks</h3>
                  <p className="card-subtitle">Reading, sewing, or using your phone takes more effort than it used to.</p>
                  <button className="readmore-btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="vision-card">
              <div className="d-flex align-items-center">
                <div>
                  <img src={Icon4} height={110}></img>
                </div>

                <div className="ps-3">
                  <h3 className="card-title">Tired or Uncomfortable Eyes</h3>
                  <p className="card-subtitle">Your eyes feel heavy, irritated, or uncomfortable by the end of the day.</p>
                  <button className="readmore-btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-5 card-subtitle text-center">These are common signs of vision changes. A professional eye exam can identify the cause and help restore clear, comfortable vision.</p>
      </div>
      
      {/* section-3 service section */}
      
      <div className="service-wrapper service-bg">
        <div className="service-img">
          <div className="container h-100">
          <div className="row h-100">
              <div className="col-5 d-flex overlay">
                <div className="my-auto">
                  <h2 class="service-intro__title">
                    Comprehensive Eye Exams <br />
                for <span>Clearer Vision</span>
                  </h2>

                  <p class="service-intro__text">
                    Our comprehensive eye exams evaluate your vision and overall eye health,
                    helping detect early changes and ensuring you receive the right care at
                    the right time.
              </p>
                </div>
                
              </div>

            </div>
          </div>
        </div>
        
      </div>
      
      <div className="service-card-wrapper">
        <div className="container">
          <div className="row gx-5">
            <div className="col-4">
              <div className="service-card">
                <img src={scard1}></img>
                
                <div className="p-3">
                  <h3 className="service-card-title">Detailed Vision Testing</h3>
                  <p className="service-card-subtitle">We use advanced diagnostic tools to accurately measure your vision and eye performance.</p>
                  <button className="readmore-btn">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="service-card">
                <img src={scard2}></img>

                <div className="p-3">
                  <h3 className="service-card-title">Early Detection of Changes</h3>
                  <p className="service-card-subtitle">Identify vision changes and potential concerns before they begin to affect your daily life.</p>
                  <button className="readmore-btn">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="service-card">
                <img src={scard3}></img>

                <div className="p-3">
                      <h3 className="service-card-title">Comfortable Experience</h3>
                  <p className="service-card-subtitle">Enjoy friendly, professional care in a welcoming and relaxed clinic environment.</p>
                  <button className="readmore-btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {/* why us section */}
      
      <div className="us-section">
        <div class="whyus__container">

          <div class="whyus__kicker mb-5">
            <span class="whyus__line"></span>
            <span class="whyus__label">WHY US</span>
            <span class="whyus__line"></span>
          </div>

          <h2 class="whyus__title text-center">
            Your Vision Care Is in <span>Safe Hands</span>
          </h2>

          <p class="whyus__text text-center">
            Our licensed optometrists provide friendly, professional eye care in a
      <strong>comfortable clinic</strong> environment designed to put you at ease.
      We take the time to explain your results clearly and guide you through the next
      steps after your exam, so you always feel confident about your eye health and vision care.
    </p>

        </div>
        
      </div>
    
      
      {/* contact us */}
      
      <section class="contact-wrapper">
        <div class="hero-content">
          <h2 className="text-center">Book Your Eye Exam Today</h2>
          <p className="text-center">Complete the form below and our team will confirm your appointment.</p>
        </div>

        <div class="form-card">
          <div class="doctor-image">
            <img src={Doctor} alt="Doctor" />
          </div>

          <div class="form-area">
            <form>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />

              <label>Phone Number</label>
              <input type="text" placeholder="Enter your phone number" />

              <label>Email Address</label>
              <input type="email" placeholder="Enter your email address" />

              <div class="row">
                <div class="col">
                  <label>Preferred Location</label>
                  <select>
                    <option>Toronto</option>
                    <option>Vancouver</option>
                    <option>Montreal</option>
                  </select>
                </div>

                <div class="col">
                  <label>Preferred Date & Time</label>
                  <input type="date" />
                </div>
              </div>

              <button type="submit" class="cta-btn">Confirm My Appointment</button>
            </form>
          </div>
        </div>

        <div class="features">
          <div class="feature">
            {/* <!-- Shield Icon --> */}
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#16b3b3" stroke-width="2">
              <path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" />
            </svg>
            <h3>Private & Secure</h3>
            <p>Booking is quick and easy — choose your location, pick a time, and we’ll</p>
          </div>

          <div class="feature">
            {/* <!-- Calendar Icon --> */}
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#16b3b3" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <h3>Easy Scheduling</h3>
            <p>Choose your location, pick a time, and we'll confirm your appointment.</p>
          </div>

          <div class="feature">
            {/* <!-- Support Icon --> */}
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#16b3b3" stroke-width="2">
              <path d="M18 8a6 6 0 10-12 0v4a2 2 0 002 2h1v-6H8a4 4 0 118 0h-1v6h1a2 2 0 002-2V8z" />
            </svg>
            <h3>Friendly Support</h3>
            <p>Booking is quick and easy — choose your location, pick a happy screener.</p>
          </div>
        </div>

        
      </section>
      
      
      {/* footer */}
      
      <div>
        <footer className="site-footer">
          {/* Newsletter Section */}
          <div className="newsletter">
            <div className="newsletter-left">
              <div className="icon-box">✉</div>

              <div>
                <h2>Book an Eye Exam Today</h2>
                
              </div>
            </div>

            <div className="newsletter-form">
              
              <button type="button">Get Exam</button>
            </div>
          </div>

          {/* Main Footer */}
          <div className="footer-main">
            {/* Clinic Info */}
            <div className="footer-col brand">
              <h3>Clear Vision Clinic</h3>
              <p>
                Providing professional eye exams and personalized vision care for
                families in Toronto and Mississauga.
          </p>

              <div className="socials">
                <span>f</span>
                <span>t</span>
                <span>in</span>
                <span>ig</span>
              </div>
            </div>

            {/* Appointment Info */}
            <div className="footer-col">
              <h4>Appointment Booking</h4>
              <ul>
                <li>✔ Eye Exam Duration</li>
                <li>✔ Eye Exam Cost</li>
                <li>✔ Insurance Accepted</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="contact-list">
                <li>📍 Toronto &amp; Mississauga Locations</li>
                <li>📞 (416) 123-4567</li>
                <li>✉ info@clearvisionclinic.com</li>
                <li>🕒 Mon–Sat: 9 AM – 6 PM</li>
              </ul>
            </div>

            {/* Call Box */}
            <div className="footer-col call-box">
              <h4>Need Help Booking?</h4>

              <div className="call-card">
                <div className="phone-icon">📞</div>
                <div>
                  <strong>Call Us</strong>
                  <p>(416) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © 2026 Clear Vision Clinic. All rights reserved.
      </div>
        </footer> 
        
      </div>
      
    </div>
    
  )
}

export default Landingpage
