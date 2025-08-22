import React from 'react'
type crewProp = {
    crew: string[],
    crewRole: {
        name: string,
        role: string
    }[]
}


const ArrayProp = (props: crewProp) => {
    return (
        <ul>
            {/* {props.crew.map(each => {
                return <li key={each}>{each}</li>
            }
            )} */}
            {props.crewRole.map(each=>{
                return <li>{each.name}: {each.role}</li>
            })}

        </ul>
    )
}

export default ArrayProp
