import React from 'react'
import ReactDOM from 'react-dom'

function Portal() {
  return ReactDOM.createPortal (
    <h2>Portal</h2>,
    document.getElementById('portal-root')
  )
}

export default Portal
