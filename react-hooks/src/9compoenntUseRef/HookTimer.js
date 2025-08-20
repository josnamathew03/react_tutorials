import React, { useState, useRef, useEffect } from 'react'

function HookTimer() {
  const [timer, setTimer] = useState(0)
  const intervelRef = useRef()
  useEffect(() => {
     intervelRef.current = setInterval(()=>{
      setTimer(prev=>prev+1)
    },1000)
    return () => {
      clearInterval(intervelRef.current)
    }
  }
    , [])

  return (
    <div>
      Hook time - {timer} 
      <button onClick={()=>clearInterval(intervelRef.current)}>clear</button>
    </div>
  )
}

export default HookTimer
