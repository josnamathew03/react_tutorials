import React from 'react'
import PersonHtml from './PersonHtml'
import { addSyntheticTrailingComment } from 'typescript'

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
        id:1,
        age:13,
        name:'josna',
        skill:'react'
    },
    {
        id:2,
        age:19,
        name:'hridhya',
        skill:'vue'
    },
       {
        id:3,
        age:33,
        name:'hgjsd',
        skill:'angular'
    }
]

const list = persons.map((person,index)=> (<PersonHtml key={index} person={person}/>))
// const list = persons.map(person=> (<PersonHtml key={person.id} person={person}/>))
  

return(
    <div>
    {list}
    </div>
)
}

export default ListRendering17
    
 
