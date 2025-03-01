import React, { useRef, useState } from 'react'
import './Navbar.css'
import vite from '../../assets/vite.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import open_menu from '../../assets/open_menu.svg'
import close_menu from '../../assets/close-menu.svg'

function Navbar() {
  const [menu,setMenu] = useState('home')
  const menuRef =useRef();
  const openMenu = () =>{
       menuRef.current.style.right="0"
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px"
}
  return (
    <div>
      
    <div className="navbar">
       <img src="{vite}" alt="" />
       <img src={open_menu} onClick={openMenu} alt=""  className='nav-mob-open'/>
       <ul ref={menuRef} className="nav-menu">
       <img src={close_menu} onClick={closeMenu} alt="menubar" className='nav-mob-close' />
       <li><AnchorLink className='anchor-link' offset={50} href='#home'><p>Home</p></AnchorLink></li>
      <li><AnchorLink className='anchor-link' offset={50} href='#services'><p>Services</p></AnchorLink></li>
      <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Us</p></AnchorLink></li>
      <li><AnchorLink className='anchor-link' offset={50} href='#work'><p>Portfolio</p></AnchorLink></li>
      <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
      </ul>
     <div className="nav-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with us</AnchorLink></div>
     
    </div>
    </div>
  )
}

export default Navbar
