import React from 'react'
type kingProps ={
    children : React.ReactNode
}

const PirateKing = (props: kingProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default PirateKing
