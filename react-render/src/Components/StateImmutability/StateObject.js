import React, { useState } from 'react'

const initial = {
    fname : 'jos',
    lname : 'mathew'
}

const StateObject = () => {
    console.log('object changed')
    const [name,setName] = useState(initial)
    const changeName = ()=>{
        const newName = {
            ...name,
            fname:'athi',
            lname:'das'
        }
        setName(newName)
    }
  return (
    <div>
      <button onClick={changeName}>{name.fname} {name.lname}</button>
    </div>
  )
}

export default StateObject


