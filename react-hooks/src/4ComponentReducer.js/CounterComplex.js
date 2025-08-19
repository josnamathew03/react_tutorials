import React, { useReducer } from 'react'

function CounterComplex() {
    const initialState = {
        first: 0,
        second: 10
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { ...state,first: state.first + action.value }
            case 'decrement':
                return { ...state,first: state.first - action.value }
            case 'increment2':
                return { ...state,second: state.second + action.value }
            case 'decrement2':
                return {...state, second: state.second - action.value }
            case 'reset':
                return initialState
            default:
                return state
        }

    }
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>{count.first}</div>
            <div>{count.second}</div>

            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment second</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement second</button>
            </div>


            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

        </div>
    )
}

export default CounterComplex

