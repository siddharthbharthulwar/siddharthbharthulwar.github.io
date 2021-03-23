import React from 'react'
import data from '../../res/info.json'
import Award from '../Award.js'

const Awards = () => {

    const awards = data.awards
    const style = {

        alignItems: "center",
        textAlign: "center"
    }

    return (
        <div style = {style}>
            <h2>Awards</h2>
            {awards.map((award, x) => (

            <Award award = {award} />
            ))}
        </div>
    )
}

export default Awards
