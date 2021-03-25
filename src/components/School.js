import React from 'react'

const School = ( { school } ) => {

   var image = require(`../img/${school.imgFileName}`)

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
        width: "90%",
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

                <h1 style = {{color: 'rgb(227, 135, 45)'}}>{school.name}</h1>

                <h3>{school.descriptor1}</h3>
                <h4>{school.descriptor2}</h4>

            </div>

            <div style = {rightStyle}>

                <img src = {image.default} style = {{display: "block", marginLeft: "auto", marginRight: "auto", maxHeight: school.imgSize}} alt = {school.name} />

            </div>

        </div>
    )
}

export default School
