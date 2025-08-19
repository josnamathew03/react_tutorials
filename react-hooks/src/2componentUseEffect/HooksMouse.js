import React, { useEffect, useState } from 'react'

function HooksMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    useEffect(()=>{
        console.log('updating')
        window.addEventListener('mousemove',(e)=>{
        setX(e.clientX)
        setY(e.clientY)
    })},[])
  return (
    <div>
      x - {x},
      y- {y}
    </div>
  )
}

export default HooksMouse
