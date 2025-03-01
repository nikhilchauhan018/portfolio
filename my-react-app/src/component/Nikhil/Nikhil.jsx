import React from 'react'
import './Nikhil.css'
import nikhil from '../../assets/nikhil.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Nikhil = () => {
  return (
    
      <div id="home"className="nikhil">
        <img src={nikhil} alt=""  className="nikhil-img"/>
        <h1><span>I'M NIKHIL</span> frontend and backend developer from india</h1>
        <p>At GREENSORT IT, we deliver cutting-edge IT solutions designed to transform your business operations and drive success.
         Our comprehensive portfolio of services ensures that you stay ahead in the fast-paced digital world. Here’s what we offer:</p>
         <div className="hero-action">
          <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with us</AnchorLink></div>
         </div>
      </div>
   
  )
}

export default Nikhil
