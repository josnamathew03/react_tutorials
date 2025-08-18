import React, { useState } from 'react'

function HooksCounterObject() {
    const [name,setName] = useState({firstName:'',lastName:''})
  return (
    <form>
      <input type='text' name='firstName' value={name.firstName} onChange={e=>setName({...name,firstName: e.target.value})}/>
      <input type='text' name='lastName' value={name.lastName} onChange={e=>setName({...name,lastName: e.target.value})}/>
        <h2>YOUR FIRST NAME IS {name.firstName}</h2>
        <h2>LAST NAME IS {name.lastName}</h2>
    </form>
  )
}

export default HooksCounterObject
