import React from 'react'
import { Name } from '../person.type'
// type crewProp = {
//     crew: string[],
//     crewRole: {
//         name: string,
//         role: string
//     }[]
// }
type crewProp ={
    crew: string[],
    crewRole : Name[]
}


const ArrayProp = (props: crewProp) => {
    return (
        <ul>
            {/* {props.crew.map(each => {
                return <li key={each}>{each}</li>
            }
            )} */}
            {props.crewRole.map(each=>{
                // return <li>{each.name}: {each.role}</li>
                return <li>{each.fname}: {each.lname}</li>

            })}

        </ul>
    )
}

export default ArrayProp
