import React, { useState, useEffect } from 'react'

function HooksUseEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    console.log(count)
    useEffect(() => {
        console.log('updating title')
          document.title = `${count}` 
        },[count])
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>click {count} times</button>
        </div>
    )
}

export default HooksUseEffect

