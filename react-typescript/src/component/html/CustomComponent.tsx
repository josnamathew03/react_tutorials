import React from "react"
import Greet from "../propsComponent/Greet"

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      {props.count}
    </div>
  )
}

export default CustomComponent
