import React, { useCallback, useMemo, useState } from 'react'
import { MemoizedProp } from './IncorrectChildProp'


function IncorrectParentProps() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('neh')

    const person ={
        fname: 'tony',
        mname:'tony',
        lname:'chopper'
    }
    const memoizedPerson = useMemo(() => person,[])
    const newfun =()=>{
        return 'funnnnnnnnn'
    }
    const memoizedFun = useCallback(newfun,[])

    console.log('IncorrectParentProps render')
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Click {count}</button>
            <button onClick={()=>setName('jos')}>name</button>
            <MemoizedProp name={name} person={memoizedPerson} fun={memoizedFun}></MemoizedProp>
         
        </div>
    )
}

export default IncorrectParentProps

