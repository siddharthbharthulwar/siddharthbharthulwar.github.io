import React from 'react'

const School = ( { school } ) => {

   var image = require(`../img/${school.imgFileName}`)

   const schoolStyle = {
        height: "150px",
        width: "1000px",
        color: "white",
        marginLeft: "25px",
        textAlign: "left",
        position : "relative",
        marginBottom: "22px",
        lineHeight: "1.0",
        borderRadius: "25px",
        border: "0.5px solid gray"
       
   }

   const leftStyle = {

        float: "left",
        width: "20",
        margin: "auto",
        display: "block",
        paddingTop: "25px",
        paddingLeft: "25px"

   }

   const rightStyle = {

        float: "right",
        width: "84%",
        paddingTop: "10px"

   }

    return (
        <div style = {schoolStyle}>
            <div style = {leftStyle}>

                <img src = {image.default} style = {{display: "block", marginLeft: "auto", marginRight: "auto", maxHeight: school.imgSize}} alt = {school.name} />

            </div>

            <div style = {rightStyle}>

                <h3>{school.name}</h3>

                <h5>{school.descriptor1}</h5>
                <h5>{school.descriptor2}</h5>

            </div>
        </div>
    )
}

export default School
