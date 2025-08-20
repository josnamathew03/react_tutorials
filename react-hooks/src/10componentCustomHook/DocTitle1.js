import React, { useState, useEffect } from 'react'
import useDocTitle from '../Hooks/useDocTitle'
function DocTitle1() {
    const [count, setCount] = useState(0)
    useDocTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}
export default DocTitle1
