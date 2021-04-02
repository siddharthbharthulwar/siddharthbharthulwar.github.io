import React from 'react'

const Award = ( { award } ) => {

    var image = require(`../img/${award.imgFileName}`)

    const schoolStyle = {
        height: "150px",
        width: "1280px",
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
                <h1 style = {{color: 'rgb(227, 135, 45)'}}>{award.name}</h1>
                <h3>{award.date}</h3>
                <h4>{award.description}</h4>
            </div>

            <div style = {rightStyle}>
                <img src = {image.default} style = {{display: "block", marginLeft: "auto", marginRight: "auto", maxHeight: award.imgSize}} alt = {award.name} />
            </div>
        </div>
    )
}

export default Award
