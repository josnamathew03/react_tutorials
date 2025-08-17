import React from 'react'

export default function InlineStyling20() {
    const headStyle = {
        fontSize : '100px',
        color : 'blue'
    }
  return (
    <div>
    <h2 className='error'>Error</h2>

      <h2 style={headStyle}>Inline</h2>
    </div>
  )
}
