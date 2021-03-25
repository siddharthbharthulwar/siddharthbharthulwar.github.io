import React from 'react'

const Experience = ( { experience } ) => {

    var image = require(`../img/${experience.imgFileName}`)

    const schoolStyle = {
        height: "150px",
        width: "950px",
        color: "white",
        textAlign: "left",
        position : "relative",
        marginBottom: "22px",
        lineHeight: "1.0",
        marginLeft: "auto",
        marginRight : "auto"
       
   }

   const leftStyle = {

        float: "left",
        width: "70%",
        margin: "auto",
        display: "block"   
    }

   const rightStyle = {

        float: "right",
        width: "10%",
        paddingTop: "5px"

   }

    return (
        <div style = {schoolStyle}>
            <div style = {leftStyle}>
                <h1 style = {{color: 'rgb(227, 135, 45)'}}>{experience.organization}</h1>
                <h3>{experience.role}</h3>

                {experience.bullets.map((pt, x) => (

                <h4>{pt}</h4>
                ))}
            </div>
            <div style = {rightStyle}>
                <img src = {image.default} style = {{display: "block", marginLeft: "auto", marginRight: "auto", maxHeight: experience.imgSize}} alt = {experience.organization} />
            </div>
        </div>
    )
}

export default Experience
