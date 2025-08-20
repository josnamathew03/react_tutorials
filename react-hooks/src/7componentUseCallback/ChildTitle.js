import React from 'react'

function ChildTitle() {
    console.log('rendering title')
  return (
    <div>
      <h2>
        useCallback title
      </h2>
    </div>
  )
}

export default React.memo(ChildTitle)
