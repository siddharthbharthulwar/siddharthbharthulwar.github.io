import React from 'react'
import Pdf from '../../res/2021resume.pdf'

const About = () => {

    const style = {

        alignItems: "center",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto"

    }

    const buttonStyle = {

        backgroundColor: "rgb(227, 135, 45)",
        border: "none",
        color: "white",
        padding: "10px",
        textAlign : "center",
        textDecoration : "none",
        display: "inline-block",
        fontSize : "16px",
        margin : "4px 2px",
        cursor: "pointer",
        borderRadius: "8px"
    }


    return (
        <div style = {style}>
            <h2>About Me</h2>
            <h4 style = {{color: "white", marginBottom : "25px"}}>Hi! My name is Siddharth (Sid) Bharthulwar, and I'm a student researcher and software engineer. </h4>

            <a href={Pdf} without rel="noopener noreferrer" target="_blank">
                <button trailingIcon="picture_as_pdf" label="Resume" style = {buttonStyle}>
                    Here's my Resume
                </button>
            </a>
        </div>
    )
}

export default About
