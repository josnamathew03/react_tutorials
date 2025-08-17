import React from 'react'

function MemoCom({name}) {
    console.log('rendering memo components')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoCom)

