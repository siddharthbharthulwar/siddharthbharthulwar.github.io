import React from 'react'
import data from '../../res/info.json'
import School from '../School'

const Education = () => {

    const schools = data.schools

    return (
        <div>

            {schools.map((school, x) => (

            <School school = {school} />
            ))}

        </div>
    )
}

export default Education
