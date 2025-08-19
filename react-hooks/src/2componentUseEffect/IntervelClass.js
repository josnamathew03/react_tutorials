import React, { Component } from 'react'

 class IntervelClass extends Component {
        constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    componentDidMount(){
        this.intervel = setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.intervel)
    }
    tick = ()=>{
        this.setState({
            count : this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

export default IntervelClass
