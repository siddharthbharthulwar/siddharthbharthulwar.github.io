import React from 'react'

const Header = () => {

    var image = require('../../img/Bharthulwar.Siddharth.Headshot.jpg')

    return (
        <div className="jumbotron">
            <div className="jumbotron-text">
                <img className = "center_circle_image" src= {image.default} />
                <h1>Siddharth Bharthulwar</h1>
                <p>Software Engineer, Researcher, and Innovator</p>
            </div>

            <div className="jumbotron-social">
                <ul className="ul-social">
                    <li className="li-social-links">
                    <a className="social" href="https://github.com/siddharthbharthulwar" target="_blank" rel="noreferrer"><i class="fa fa-github" aria-hidden="true"></i></a>
                    </li>
                    <li className="li-social-links">
                    <a className="social" href="https://www.linkedin.com/in/sbharthulwar" target="_blank" rel = "noreferrer"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    </li>

                    <li className="li-social-links">
                    <a className="social" href="https://twitter.com/sid_bharthulwar" target="_blank" rel = "noreferrer"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>

                    <li className="li-social-links">
                    <a className="social" href="https://www.youtube.com/channel/UCN28Z60d4jEPiwafW_0WGBQ" target="_blank" rel = "norefferer"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>

            <div id="down-arrow">
                <span><a href="#about"><i className="fa fa-chevron-down" aria-hidden="true"></i></a></span>
            </div>
        </div>
    )
}

export default Header
