import React, { Component } from 'react'
import ClassRefsChild from './ClassRefsChild'
 class ClassRefsParent extends Component { constructor(props) {
   super(props)
    this.componetRef = React.createRef()
 }
 clickHandler = ()=>{
    this.componetRef.current.inputFocus()
 }
 
  render() {
    return (
      <div>
        <ClassRefsChild ref={this.componetRef}/>  
        <button onClick={this.clickHandler}>Focus input</button>
      </div>
    )
  }
}

export default ClassRefsParent
