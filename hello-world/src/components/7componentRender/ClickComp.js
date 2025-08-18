import React, { Component } from 'react'

 class ClickComp extends Component {
  
  render() {
    const {count,increment} = this.props
    return (
      <div>
        <button onClick={increment}>clicked {count} times</button>
      </div>
    )
  }
}

export default ClickComp
