import React, { useEffect, useState } from 'react'
import axios from 'axios'

// function DataFetching() {
//     const [posts,setPost] = useState([])
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(response=>{
//             setPost(response.data)
//         }
            
//         )
//         .catch(error=>console.log(error))
//     },[])
//   return (
//     <div>
//       <ul>
//         {
//             posts.map(post=><li key={post.id}>{post.title}</li>)
//         }
//       </ul>
//     </div>
//   )
// }

function DataFetching(){
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromButton,setIdFromButton] = useState(1)

    const handleId = ()=>{
        setIdFromButton(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(res=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err=>console.log(err))
    },[idFromButton])

    return(
        <div>
            <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
            <button onClick={handleId}>Fetch postt</button>
            <h2>{post.title}</h2>
        </div>
    )
}

export default DataFetching
