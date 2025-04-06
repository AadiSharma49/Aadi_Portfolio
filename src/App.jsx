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
<div className="relative min-h-screen w-full overflow-x-hidden">
<div className="fixed inset-0 bg-img bg-cover bg-center bg-fixed"></div>
<div className="relative z-10 w-full">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <Hero/>
<Navbar/>
<About/>
<Skill/>
<Project/>
<ContactForm/>
<Footer/>
</div>
</div>
</div>
)
}

export default App