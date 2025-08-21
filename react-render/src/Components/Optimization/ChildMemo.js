import React from 'react'

export const ChildMemo = ({name}) => {
    console.log('childMemo renders')
  return (
    <div>
      ChildMemo component {name}
    </div>
  )
}

export const Memoized = React.memo(ChildMemo) 
