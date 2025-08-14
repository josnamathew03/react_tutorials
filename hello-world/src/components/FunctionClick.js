import React from 'react'

function FunctionClick() {
    function clickHandle(){
        console.log('clicked')
    }
  return (
    <div>
      <button onClick={clickHandle}>Click</button>
    </div>
  )
}

export default FunctionClick

