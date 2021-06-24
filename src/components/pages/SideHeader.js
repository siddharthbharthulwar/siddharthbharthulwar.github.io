import React from 'react'

const SideHeader = () => {

    var image = require('../../img/headshot2.png')

    const imgStyle = {

        maxHeight: '500px',
        height: 'auto'
    }


    return (
        <div className = "jumbotron">
            <div style = {{
                float: 'left', 
                width: '100%',
                display: 'block',
                background: 'blue',
                height: '100%'
                
            }}>                
                <h1>Siddharth Bharthulwar</h1>
                <p>Software Engineer, Researcher, and Innovator</p>

            </div>

            <div style = {{
                float: 'right', 
                width: '40%',
                display: 'block',
                background: 'green',
                height: '100%'
            }}>

                <img style = {imgStyle} src= {image.default} />

            </div>
        </div>
    )
}

export default SideHeader
