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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="fixed inset-0 bg-img bg-cover bg-center bg-fixed opacity-10"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 py-8">
            <Hero />
            <About />
            <Skill />
            <Project />
            <ContactForm />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
