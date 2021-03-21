import React from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"
import Main from './pages/Main'
import Education from './pages/Education'
import Experience from './pages/Experience'

const Sidebar = () => {
    return (
        <Router>
        <nav>
          <ul>
            <li>
              <Link to = "/">Home</Link>
              <Link to = "/education">Education</Link>
              <Link to = "/experience">Experience</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path = "/" exact component = {Main}/>
          <Route path = "/education" component = {Education}/>
          <Route path = "/experience" component = {Experience}/>
        </Switch>
      </Router>
    )
}

export default Sidebar
