import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchUseEffect() {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({})
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
            .then((response) => {
                setLoading(false)
                setPost(response.data)
                setErrorMsg('')
            })
            .catch((error) => {
                setLoading(false)
                setPost('')
                setErrorMsg('something went wrong')
            })
    }, [])


    return (
        <div>
            {loading? 'Loading' : post.title}
            {errorMsg? errorMsg : null }
            
        </div>
    )
}

export default FetchUseEffect
