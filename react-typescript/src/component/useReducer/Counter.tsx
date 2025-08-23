import React, { useReducer } from 'react'
type counterState = {
     count: number
     }
type counterAction ={
    type:string,
    payload: number
}
const Counter = () => {
    const initialState = { count: 0 }
    const reducer = (state: counterState, action:counterAction) => {
        switch (action.type) {
            case 'increment':
                return {count:state.count + action.payload}
            case 'decrement':
                return {count :state.count - action.payload}
            case 'reset':
                return initialState
            default:
                return state
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            count: {count.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>increment 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>decrement 5</button>
            <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>reset</button>

        </div>
    )
}

export default Counter
