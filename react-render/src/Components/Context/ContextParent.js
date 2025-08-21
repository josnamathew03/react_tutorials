import React, { useState } from 'react'
import { MemoizedChildA } from './ContextChild'

export const childcontext = React.createContext()

const ContextParent = ({children}) => {
    console.log('parent render')
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Count - {count}</button>
            <childcontext.Provider value={count}>
                {children}
                {/* <MemoizedChildA /> */}
            </childcontext.Provider>
        </div>
    )
}

export default ContextParent
