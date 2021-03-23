import React from 'react'
import './index.css'
import Header from './components/pages/Header.js'
import About from './components/pages/About.js'
import Education from './components/pages/Education.js'
import Experiences from './components/pages/Experiences.js'
import Awards from './components/pages/Awards.js'

const App = () => {
  return (
    <div className = 'container'>
        <Header />
        <About />
        <Education />
        <Experiences />
        <Awards />
    </div>
  )
}

export default App
