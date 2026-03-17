import React from 'react'
import frame1 from '../assets/images/carft2.png'
import frame2 from '../assets/images/carft3.png'
import frame3 from '../assets/images/carft4.png'
import frame4 from '../assets/images/carft5.png'
import frame5 from "../assets/images/clinic.png"
import frame6 from "../assets/images/Clinic list.png"
import EyePriview from "../assets/images/eye.png"
import eyeCover from "../assets/images/eye-cover.png"
const ExpCard = [{
    
    id: 1,
    title: "KANVAS MEDICAL",
    image: frame1,
    description:
        "Crafted a premium, conversion focused digital experience for Canvas Medical Group, seamlessly unifying academy and clinic services within a refined, high-performance web interface.",
    tech: "React JS • HTML5 • Bootstrap • SCSS",
    category: "Web Design",
    features: [
        "Component-based architecture",
        "Responsive Grid System",
        "Custom UI Styling"
    ],
    liveLink: "https://kanvasmedicalgroup.com",
    btnName: "VISIT WEBSITE"
}, {

        id: 2,
        title: "SAURBHI",
        image: frame4,
        description:
            "Designed a comprehensive digital experience for Saurbhi, an order management system that empowers retail businesses to efficiently deliver authentic Indian snacks and homemade food products.",
        tech: "React JS • HTML5 • Bootstrap • MUI • SCSS",
        category: "Web Design",
        features: [
            "Component-based architecture",
            "Responsive Grid System",
            "Custom UI Styling"
        ],
        liveLink: "https://saurbhi.com.au",
        btnName: "VISIT WEBSITE"
    }, {

        id: 3,
        title: "FACES",
        image: frame3,
        description:
            "Designed a comprehensive digital platform for Faces, enabling clinics to manage their services while allowing patients to seamlessly book skin treatments, schedule time-based appointments, and explore multiple clinic locations.",
        tech: "  React JS • PHP (MVC Architecture) • Bootstrap • HTML5 • SCSS • JavaScript",
        category: "Web Design",
        features: [
            "MVC-based application structure",
            "Responsive Grid System",
            "Custom SCSS-driven UI Styling"
        ],
        liveLink: "https://facesconsent.com/",
        btnName: "VISIT WEBSITE"
    },
    {

        id: 4,
        title: "FACES",
        image: frame5,
        description:
            "Designed a clinic discovery and booking interface that helps users explore treatments, compare clinics, and schedule appointments.",
        tech: "  Figma • Auto Layout • Components • Design System",
        category: "UI Design",
        features: [
            "High-fidelity UI layouts designed in Figma",
            "Reusable UI components and layout system",
            "Consistent typography and visual hierarchy"
        ],
        //liveLink: "https://facesconsent.com/",
        btnName: "View Design",
        designPreview: frame6
    },
    {

        id: 5,
        title: "CLEAR VISION",
        image: eyeCover,
        description:
            "Designed a clean and reassuring website interface for an optometry clinic, helping users understand services, access treatment information, and book appointments easily.",
        tech: "  Figma • Auto Layout • Components • Design System",
        category: "UI Design",
        features: [
            "High-fidelity healthcare website design in Figma",
            "Clean service-focused layout and visual hierarchy",
            "User-friendly appointment booking interface"
        ],
        //liveLink: "https://facesconsent.com/",
        btnName: "View Design",
        designPreview: EyePriview
    }
    
    
];


export default ExpCard
