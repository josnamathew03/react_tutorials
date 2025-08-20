import React from 'react'
import useCounter from '../Hooks/useCounter'

function CounterCustom2() {

    const {increment,decrement,reset,count} = useCounter(10,20)
   
    return (
        <div>
            <div>{count}</div>
            <button onClick={increment }>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>

        </div>
    )
}

export default CounterCustom2
