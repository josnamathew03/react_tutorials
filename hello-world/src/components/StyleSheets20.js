import React from 'react'
import './myStyle.css'

export default function StyleSheets20(props) {
    const className = props.isClass ? 'primary' :''
  return (
    <div>
      <h2 className={`${className} font-xl`}>Styling</h2>
    </div>
  )
}
 
