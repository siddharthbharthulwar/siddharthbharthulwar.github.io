import React from 'react'

const Project = ( { project } ) => {

    var image = require('../img/' + project.imgFileName)

    const style = {

        height: "200px",
        width: "400px",
        overflow: 'hidden',
        color: "white",
        backgroundColor: project.accentColor,
        borderRadius: "15px",
        boxShadow: "0 6px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        marginLeft: "25px",
        textAlign: "left",
        position : "relative",
        marginBottom: "36px"
    }

    const overlayStyle = {

        zIndex: "150",
        position: "absolute",
        paddingTop: "35px",
        paddingLeft: "35px",
        paddingRight: "35px",
        paddingBottom : "35px",
        textAlign: 'center'
    }

    return (
        <div style = {style}>
            <div style = {overlayStyle}>
                <h3>{project.title}</h3>
                <h4>{project.dates}</h4>
            </div>
            <img src = {image.default} style = {{marginLeft : 'auto', marginRight: 'auto', display: 'block', maxWidth: '100%', minHeight: '100%', position: 'absolute', opacity: '44%', zIndex: '2'}} />
        </div>
    )
}

export default Project
