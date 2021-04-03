import React from 'react'
import data from '../../res/info.json'
import Experience from '../Experience.js'

const Experiences = () => {

    const experiences = data.experiences
    const style = {

        alignItems: "center",
        textAlign: "center"
    }

    return (
        <div style = {style}>
            <h2>Experience</h2>

            {experiences.map((exp, x) => (

            <Experience experience = {exp} currentIndex = {x} length = {experiences.length}/>
            ))}
        </div>
    )
}

export default Experiences
