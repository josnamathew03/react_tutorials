import React from 'react'

type buttonProps = {
    // handleClick: () => void
    handleClick: (event:React.MouseEvent<HTMLButtonElement>,id:number) => void
}

const ButtonClick = (props:buttonProps) => {
  return (
    <div>
      <button onClick={(event)=>props.handleClick(event,2)}>Click</button>
    </div>
  )
}

export default ButtonClick
