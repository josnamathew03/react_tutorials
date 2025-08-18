import React, { Component } from 'react'

 class HoverComp extends Component {
   
  render() {
    const {count,increment} = this.props
    return (
      <div>
        <h2 onMouseEnter={increment}>hovered {count} times</h2>
      </div>
    )
  }
}

export default HoverComp
