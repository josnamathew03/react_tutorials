import React, { Component } from 'react'
import FRchild from './FRchild'

 class FRparent extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    clickHandler = ()=>{
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <FRchild ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRparent
