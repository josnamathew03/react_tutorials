 import React, { Children, useState } from 'react'
 
 function ParentOpt({child}) {
    const [count,setCount] = useState(0)
    console.log('ParentOpt render')
   return (
     <div>
       <button onClick={()=>setCount(prev=>prev+1)}>Click {count}</button>
     {child}

     </div>
   )
 }
 
 export default ParentOpt
 