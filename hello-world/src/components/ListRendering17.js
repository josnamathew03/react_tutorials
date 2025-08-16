import React from 'react'
import PersonHtml from './PersonHtml'

function ListRendering17() {
//     const persons = ['josna','athira','gouri']
//     const list =  persons.map(person => <h2>{person}</h2>)
//   return (
//     <div>
//             {list}
//     </div>
//   )

const persons =[
    {
        age:13,
        name:'josna',
        skill:'react'
    },
    {
        age:19,
        name:'hridhya',
        skill:'vue'
    },
       {
        age:33,
        name:'hgjsd',
        skill:'angular'
    }
]

const list = persons.map(person=> <PersonHtml person={person}/>)
return(
    <div>
    {list}
    </div>
)
}

export default ListRendering17

