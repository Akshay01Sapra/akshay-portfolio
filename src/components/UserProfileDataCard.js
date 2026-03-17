import React from 'react'
import '../assets/styles/UserProfileCard.scss'
const UserProfileDataCard = () => {
  return (
    <div>
         
          <div className="user-card">
              {/* <img className="avatar" src={avatar} alt="User Avatar" /> */}
              <h3 className="name">Alex Carter</h3>
              <p className="role">Frontend Developer</p>
              <p className="bio">
                  Passionate about UI/UX and building clean, responsive interfaces with React and Sass.
      </p>
              <div className="actions">
                  <button className="btn btn-primary">Follow</button>
                  <button className="btn btn-outline-secondary">Message</button>
              </div>
          </div>
 
    </div>
  )
}

export default UserProfileDataCard
