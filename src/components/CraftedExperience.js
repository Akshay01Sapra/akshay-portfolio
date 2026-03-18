import React from 'react'
import {useState} from 'react'
import "../assets/styles/CraftedExperience.scss"
import CustomCard from './CustomCard'

const CraftedExperience = () => {
  
  const [activeCategory, setActiveCategory] = useState("All")
  return (
    <section className="" id="crafted-experience">
      <div className="container Crafted-wrapper">
        <h3 className="section-title body-heading">Crafted Experience</h3>

        <div className="btn-panels section-title">
          
          {["All", "UI", "UX", "Web Design"].map((cat) => (
            <button
              key={cat}
              className={`craft-btn btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
         
            
        <CustomCard activeCategory={activeCategory}  />
        
          
        
      </div>
    </section>
  )
}

export default CraftedExperience
