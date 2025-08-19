import React, { useEffect, useState } from 'react'

function IntervelFun() {
    const [count, setCount] = useState(0)
    useEffect(
        () => {
           const intervel = setInterval(tick, 1000)
            return ()=> clearInterval(intervel)
        }
        // ,[]

    )
    const tick = ()=>{
        // setCount(count+1)
        setCount(prev=>prev+1)

    }
    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default IntervelFun
