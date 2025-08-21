import React, { useState } from 'react'

const StateArray = () => {
    console.log('Array changed')

    const initial = ['jos', 'athi']
    const [names, setName] = useState(initial)
    const addName = ()=>{
        // names.push('neh','aifa')
        const newName = [...names,'neh','aifa']
        setName(newName)
    }
    return (
        <>
            <div>
                {names.map(name => (
                    <div key={name}>{name}</div>
                ))}
            </div>
            <button onClick={addName}>add</button>
        </>
    )
}

export default StateArray
