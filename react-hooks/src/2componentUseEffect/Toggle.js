import React, { useState } from 'react'
import HooksMouse from './HooksMouse'


function Toggle() {
    const [display,setDisplay] = useState(true) 
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {display &&  <HooksMouse/>}
      
    </div>
  )
}

export default Toggle
