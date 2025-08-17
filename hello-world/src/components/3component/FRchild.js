import React from 'react'

const FRchild = React.forwardRef((props,ref)=> {
  return (
    <div>
      <input ref={ref}/>
    </div>
  )
}) 

export default FRchild
