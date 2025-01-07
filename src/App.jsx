import React from 'react'
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skill from './Components/Skill';
import Project from './Components/Project';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className='fixed inset-0 bg-fixed bg-cover bg-center bg-img'></div>
      <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <ContactForm/>
      <Footer/>
      </div>
    </div>
  )
}
export default App
