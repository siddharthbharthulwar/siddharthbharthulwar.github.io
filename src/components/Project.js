import React from 'react'

const Project = () => {

    const style = {

        height: "300px",
        width: "600px",
        overflow: 'hidden',
        color: "white",
        backgroundColor: "maroon",
        borderRadius: "15px",
        boxShadow: "0 6px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        marginLeft: "25px",
        textAlign: "left",
        position : "relative",
        marginBottom: "36px"
    }

    return (
        <div style = {style}>
            <h5>Project Name</h5>
        </div>
    )
}

export default Project
