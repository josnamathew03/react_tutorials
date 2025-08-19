import React, { useReducer } from 'react'

function CounterMulti() {
    const initialState = 0
    const initialState2 = 10

    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return initialState
        }

    }
    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState2)


    return (
        <div>
            <div>{count}</div>

            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <div>
                <div>{count2}</div>
                <button onClick={() => dispatch2('increment')}>Increment2</button>
                <button onClick={() => dispatch2('decrement')}>Decrement2</button>
                <button onClick={() => dispatch2('reset')}>Reset</button>

            </div>
        </div>
    )
}

export default CounterMulti
