import React from 'react'
import './Footer.css'
import user from '../../assets/user-icon.svg'
const Footer = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3ca99a41-6450-495a-9e89-cfc63b048b60");
    
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
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src="" alt="" />
                <p>As a proficient frontend and backend developer, I bring together creativity and functionality to design seamless user experiences and robust server-side solutions. My portfolio reflects my expertise in building dynamic, responsive websites, implementing efficient backend architectures, and creating applications tailored to client needs. With a strong foundation in modern frameworks and technologies</p>

            </div>
            <div className="footer-top-right">
                <form onsubmit={onsubmit} className="footer-email-input">
                    <img src={user} alt="" />
                    <input type="email" placeholder='  Enter your email ' required/>
                </form>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
       <hr />
       <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2024 Nikhil. All Rights Reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>privacy Policy</p>
            <p>Connect with me</p>
        </div>
       </div>
    </div>
  )
}

export default Footer
