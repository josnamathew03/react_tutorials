import React, { Component } from 'react'

export class LifeCycleB extends Component {
     constructor(props) {
      super(props)
    
      this.state = {
         username:'name'
      }
      console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStatesFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB compoenentDidMOunt')
    }

  render() {
        console.log('LifecycleB render')

    return (
      <div>
        
      </div>
    )
  }
}

export default LifeCycleB
