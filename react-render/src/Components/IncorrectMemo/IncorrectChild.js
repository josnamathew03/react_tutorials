import React from 'react'

export const IncorrectChild = ({name,children}) => {
    console.log('IncorrectChild renders')
  return (
    <div>
      IncorrectChild component {children} {name}
    </div>
  )
}

export const MemoizedChild = React.memo(IncorrectChild) 
