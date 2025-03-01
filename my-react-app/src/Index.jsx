import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Nikhil from './component/Nikhil/Nikhil'
import About from './component/About/About'
import Services from './component/Services/Services'
import Mywork from './component/Mywork/Mywork'
import Contact from './component/Contact/Contact'
import Footer from './component/footer/Footer'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Nikhil></Nikhil>
      <About></About>
      <Services></Services>
      <Mywork></Mywork>
      <Contact></Contact>
     <Footer></Footer>
    </div>
  )
}

export default App
