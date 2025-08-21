import React from 'react'

const IncorrectChildProp = ({name,person,fun}) => {
    console.log('IncorrectChildProp render')

  return (
    <div>
      hey {name}
      <div>{person.fname} {person.mname} {person.lname}</div>
      <div>{fun()}</div>
    </div>
  )
}

export const MemoizedProp = React.memo(IncorrectChildProp) 
 