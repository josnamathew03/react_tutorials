import React, { useReducer } from 'react'

type counterState = {
    count: number
}

type updateAction = {
    type: 'increment' | 'decrement',
    value: number
}
type updateReset = {
    type: 'reset'
}

type counterAction = updateAction | updateReset
// type counterAction ={
//     type: string,
// type: 'increment' | 'decrement' | 'reset'
//     value?: number
// }

const Counter = () => {

    const initialState = { count: 0 }
    const reducer = (state: counterState, action: counterAction) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + action.value }
            case 'decrement':
                return { count: state.count - action.value }
            case 'reset':
                return initialState
            default:
                return state

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            <div>count: {state.count}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>increment</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>



        </div>
    )
}

export default Counter

