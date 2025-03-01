import React from 'react'
import './Contact.css'
import email from '../../assets/email-mail.svg'
import location from '../../assets/location.svg'
import call from '../../assets/call.svg'
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8135252f-3bea-4fa2-9144-f8eabdabc597");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message)
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
        <h1> Get in touch</h1>
        <img src="" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>we are here to help you </p>
          <div className="contact-details">
          <div className="contact-detail">
               <img src={email}alt="email icon" /><p>nikhkumarchauhan165@gmail.com</p>
          </div>
          <div className="contact-detail">
                <img src={call} alt="call-icon" /><p>+91-7257022346</p>
          </div>
          <div className="contact-detail">
                <img src={location} alt="location-icon" />BIHAR,INDIA<p></p>
          </div>
            </div>
        </div>
        
        <form onSubmit={onSubmit} className='contact-right'>
              <label htmlFor="name"> Name</label>
              <input type="text" placeholder='Enter your name' name='name' required />
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='Enter your email ' name='email' required />
              <label htmlFor="location">Location</label>
              <input type="text" placeholder='Enter your location' name='locaton' required/>
              <label htmlFor="">Write your message here</label>
              <textarea name="message" rows="8" placeholder='Write your query'></textarea>
              <button className='contact-submit' type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
