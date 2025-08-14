import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'event binding'
      }
    // this.change = this.change.bind(this)

    }
     change = ()=>{
        this.setState({
            message:'done'
    })
    console.log(this)
    }

    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.change.bind(this)}>event bind</button> */}
        {/* <button onClick={()=>this.change()}>event bind</button> */}
        <button onClick={this.change}>event bind</button>


      </div>
    )
  }                  
}      

export default EventBind


