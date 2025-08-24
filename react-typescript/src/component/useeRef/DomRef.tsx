import React, { useEffect, useRef } from 'react'

const DomRef = () => {

  
    const inputRef = useRef<HTMLInputElement>(null!) // specify the input element, for different element pick the suitable one
    useEffect(()=>{
        inputRef.current.focus()
    })
  return (
    <div>
      <input type='text' ref={inputRef}/>
    </div>
  )
}

export default DomRef
