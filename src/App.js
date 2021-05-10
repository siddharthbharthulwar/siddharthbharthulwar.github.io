import React from 'react'
import './index.css'
import Header from './components/pages/Header.js'
import About from './components/pages/About.js'
import Education from './components/pages/Education.js'
import Experiences from './components/pages/Experiences.js'
import Awards from './components/pages/Awards.js'
import Projects from './components/pages/Projects.js'
import Footer from './components/pages/Footer.js'

const App = () => {

  const style = {

    marginLeft: "15%",
    marginRight: "15%"
  }

  return (
    <div className = 'container'>
        <Header />
        <div style = {style}>
          <About />
          <Education />
          <Experiences />
          <Awards />
          <Projects />
          <Footer />
        </div>
    </div>
  )
}

export default App
