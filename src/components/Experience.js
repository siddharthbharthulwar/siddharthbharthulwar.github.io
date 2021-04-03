import React from 'react'

const Experience = ( { experience, currentIndex, length } ) => {

    var image = require(`../img/${experience.imgFileName}`)

    var bottomMargin = "0"

    if (length - currentIndex == 1) {

        bottomMargin = "160px"
    }

    else {

        bottomMargin = "50px"
    }

    const schoolStyle = {
        height: "150px",
        width: "1280px",
        color: "white",
        textAlign: "left",
        position : "relative",
        marginBottom: bottomMargin,
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
                <>
                    <h4>{pt}</h4>
                    <br></br>
                </>
                ))}
            </div>
            <div style = {rightStyle}>
                <img src = {image.default} style = {{display: "block", marginLeft: "auto", marginRight: "auto", maxHeight: experience.imgSize}} alt = {experience.organization} />
            </div>
        </div>
    )
}

export default Experience
