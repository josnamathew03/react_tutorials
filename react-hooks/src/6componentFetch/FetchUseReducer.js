import React, { useReducer, useEffect } from 'react'
import axios from 'axios'


const initialState = {
    loading: true,
    post: {},
    errorMsg: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                loading: false,
                post: action.payload,
                errorMsg: ''

            }
        case 'failed':
            return {
                loading: false,
                post: {},
                errorMsg: 'wrongggggggggg'
            }
        default:
            return state
    }
}

function FetchUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
            .then(res => {
                dispatch({
                    type: 'success',
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'failed'
                })
            })
    }, [])
    return (
        <div>
            {state.loading? 'loading' : state.post.title}
            {state.errorMsg? state.errorMsg : null}

        </div>
    )
}

export default FetchUseReducer

