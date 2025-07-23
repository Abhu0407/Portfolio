import React, { useEffect } from 'react'
import AOS, { init } from 'aos'
import 'aos/dist/aos.css'
import Home from './components/Home'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS, init({
      duration: 1000,
    });
  }, [])
  return (
    <main>
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App