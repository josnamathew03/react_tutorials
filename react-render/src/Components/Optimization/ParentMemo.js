import React, { useState } from 'react'
import {Memoized} from './ChildMemo'


function ParentMemo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('neh')

    console.log('ParentMemo render')
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Click {count}</button>
            <button onClick={()=>setName('jos')}>name</button>
            <Memoized name={name}/>
        </div>
    )
}

export default ParentMemo
