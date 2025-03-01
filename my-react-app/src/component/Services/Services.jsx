import React from 'react'
import './Services.css'
import services_Data from '../../assets/Services_data'
import arrow from '../../assets/arrow.svg'
import services from '../../assets/services.svg'
const Services = () => {
  return (
    <div id='services' className='Services'>
      <div className="services-title">
        <h1>Our Services</h1>
        <img src={services}alt="" />
      </div>
      <div className="services-container">
        {services_Data.map((service,index)=>{
            return <div  key={index} className='services-format'>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_des}</p>
                <div className="services_readmore">
                 <p>Read More</p>
                 <img src={arrow} alt="" />
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Services
