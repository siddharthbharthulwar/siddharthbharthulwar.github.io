import React from 'react'
import data from '../../res/info.json'
import Project from '../Project'

const Projects = (props) => {

    const projects = data.projects

    const style = {

        alignItems : "center",
        textAlign : "center"
    }

    var oneProjects = []
    var twoProjects = []
    var threeProjects = []

    for (var i = 0; i < projects.length; i++) {

        if (i % 3 == 0){

            oneProjects.push(projects[i]);

        }

        if (i % 3 == 1){

            twoProjects.push(projects[i]);

        }

        if (i % 3 == 2){

            threeProjects.push(projects[i]);

        }


    }

    return (
        <div style = {style}>
            <h2>Projects</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 5 }}>

                <div>

                    {oneProjects.map((project, x) => (

                    <Project project = {project} trigger = {props.trigger} setTrigger = {props.setTrigger} index = {props.index} setIndex = {props.setIndex}/>
                    ))}    
                </div>

                <div>

                    {twoProjects.map((project, x) => (

                    <Project project = {project} trigger = {props.trigger} setTrigger = {props.setTrigger} index = {props.index} setIndex = {props.setIndex}/>
                    ))}    
                </div>
                <div>

                    {threeProjects.map((project, x) => (

                    <Project project = {project} trigger = {props.trigger} setTrigger = {props.setTrigger} index = {props.index} setIndex = {props.setIndex}/>
                    ))}    
                </div>
            </div>

        </div>
    )
}

export default Projects