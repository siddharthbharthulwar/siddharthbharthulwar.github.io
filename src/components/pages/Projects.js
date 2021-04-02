import React from 'react'
import data from '../../res/info.json'
import Project from '../Project'

const Projects = () => {

    const projects = data.projects

    const style = {

        alignItems : "center",
        textAlign : "center"
    }

    return (
        <div style = {style}>
            <h2>Projects</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 5 }}>

                <div>

                    {projects.map((project, x) => (

                    <Project project = {project} />
                    ))}    
                </div>
                <div>

                    {projects.map((project, x) => (

                    <Project project = {project} />
                    ))}    
                </div>
            </div>

        </div>
    )
}

export default Projects