import React, { Component } from 'react'

export class ClassClick extends Component {
    getMessage(){
        console.log('clickedddd')
    }
  render() {
  
    return (
      <div>
        <button onClick={this.getMessage}>
            click me
        </button>
      </div>
    )
  }
}

export default ClassClick



  
