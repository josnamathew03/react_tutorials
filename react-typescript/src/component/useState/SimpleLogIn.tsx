import React, { useState } from 'react'

const SimpleLogIn = () => {
    const [islogged, setIsloggd] = useState(false) 
    console.log(islogged)
  return (
    <div>
      <button onClick={()=>setIsloggd(true)}>Log in</button>
      <button onClick={()=>setIsloggd(false)}>Log out</button>
      
        <div>{islogged? 'sucess' : 'failed'}</div>
    </div>
  )
}

export default SimpleLogIn
