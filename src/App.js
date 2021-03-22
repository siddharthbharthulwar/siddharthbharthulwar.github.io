import React from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"
import './index.css'
import Main from './components/pages/Main'
import Education from './components/pages/Education'
import Experience from './components/pages/Experience'
import Projects from './components/pages/Projects'



function App() {

  var image = require('./img/Bharthulwar.Siddharth.Headshot.jpg')

  return (
      <Router>
      <div className = "wrapper">
        <header>
          <div className = "author-name">
            <img className = "center_circle_image" src = {image.default}/>
            <h1>Sid Bharthulwar</h1>
            <h4>Software Engineer and Innovator</h4>
          </div>


            <ul class = "sidebar-nav">
              <Link to = "/" style = {{margin: '5px', flex: '1 1 auto'}}>Home</Link>
              <Link to = "/education" style = {{margin: '5px', flex: '1 1 auto'}}>Education</Link>
              <Link to = "/experience" style = {{margin: '5px', flex: '1 1 auto'}}>Experience</Link>
              <Link to = "/projects" style = {{margin: '5px', flex: '1 1 auto'}}>Projects</Link>
              <li class = "sidebar-nav-item"><a href = "./res/2020resume.pdf">Resume</a></li>
            </ul>
        </header>
        <main>
          <Switch>
                <Route path = "/" exact component = {Main}/>
                <Route path = "/education" component = {Education}/>
                <Route path = "/experience" component = {Experience}/>
                <Route path = "/projects" component = {Projects}/>
          </Switch>
        </main>
      </div>
      </Router>
  );
}

export default App;
