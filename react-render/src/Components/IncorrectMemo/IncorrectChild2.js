import React from 'react'

export const IncorrectChild2 = ({name}) => {
    console.log('IncorrectChild2 renders')
    const now = new Date()
  return (
    <div>
      hey {name}, {now.getHours()} : {now.getMinutes()} : {now.getSeconds()}
    </div>
  )
}

export const Memoized2 = React.memo(IncorrectChild2) 
