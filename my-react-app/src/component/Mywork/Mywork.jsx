import React from 'react'
import './Mywork.css'
import arrow from '../../assets/arrow.svg'
import Mywork_data from '../../assets/mywork_data'
const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>Mylatest work</h1>
            <img src="" alt="" />
        </div>
      <div className="mywork-container">
      {Mywork_data.map((work ,index) => {
        
         return <img  key={index} src={work.w_img} alt={work.w_name} />
        
      })}
        
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default Mywork
