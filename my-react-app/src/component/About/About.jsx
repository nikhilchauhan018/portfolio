import React from 'react'
import './About.css'
const About = () => {
  return (
      <div id="about"className="about">
        <div className="about-title">
        <h1>About me</h1>
       <img src="" alt="" />
       </div>
      
      <div className="about-section">
        <div className="about-left">
            <img src="/1.jpg" alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Welcome to (Greensort), where creativity meets technology. We 
                specialize in delivering exceptional IT services tailored to empower your business.
                 Our expertise spans across UI/UX design, digital marketing, and 
                 full-stack development, providing end-to-end solutions that elevate your brand and drive results.</p>
                 <p>Our team of skilled designers crafts user-centric interfaces that deliver seamless experiences,
                 while our marketing experts ensure your brand stands out in a competitive digital landscape. With robust 
                 full-stack development capabilities, we build scalable and secure applications designed to meet your unique business needs.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>NODE JS</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>REACT JS</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>

      </div>
      <div className="about-achievements">
        <div className='about-achievement'>
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className='about-achievement'>
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
 <hr/>
      </div>
    </div>
  )
}

export default About
