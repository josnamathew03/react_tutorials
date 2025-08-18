import React, { Component } from 'react'
import ComponentF from './ComponentF'
import userContext from './userContext'

 class ComponentD extends Component {
  render() {
    return (
        
      <div>
        <div>conponent d {this.context}</div>
        <ComponentF/>
      </div>
    )
  }
}
ComponentD.contextType = userContext

export default ComponentD
