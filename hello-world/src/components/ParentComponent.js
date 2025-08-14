import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'parent'
      }
      this.greetparent = this.greetparent.bind(this)
    }
    greetparent(childName){
        alert(`hello ${this.state.parentName} from ${this.state.childName}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent geetHandler ={this.greetparent}/>
      </div>
    )
  }
}

export default ParentComponent
