import React, { useState } from 'react'
import { MemoizedChild } from './IncorrectChild'
import { Memoized2 } from './IncorrectChild2'

function IncorrectParent() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('neh')

    console.log('IncorrectParent render')
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Click {count}</button>
            <button onClick={()=>setName('jos')}>name</button>
            {/* <MemoizedChild name={name}><strong>hey</strong></MemoizedChild> */}
            <Memoized2 name={name}></Memoized2>
        </div>
    )
}

export default IncorrectParent

