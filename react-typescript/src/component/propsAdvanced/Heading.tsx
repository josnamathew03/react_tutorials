import React from 'react'
type props = {
    children:string
}

const Heading = (prop:props) => {
  return (
    <div>
      {prop.children}
    </div>
  )
}

export default Heading
