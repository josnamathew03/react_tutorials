import React, { useState } from 'react'

function HooksCounterPrev() {
    const initialValue = 0
    const [count,setCount] = useState(initialValue)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prev=>prev+1)
        }
    }
  return (
    <div>
      Count :{count} <br/>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
      <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
      <button onClick={()=>setCount(initialValue)}>Reset</button>
      <button onClick={incrementFive}>Increment 5</button>


    </div>
  )
}

export default HooksCounterPrev
