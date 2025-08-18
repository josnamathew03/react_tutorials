import React, { Component } from 'react'

 class CounterLogic extends Component {
      constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment = ()=>{
        this.setState(prev=>{
            return {count: prev.count+1}
        })
    }
    
  render() {
    return (
      <div>
        {this.props.children(this.state.count,this.increment)}
      </div>
    )
  }
}

export default CounterLogic
