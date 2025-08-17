import React, { Component } from 'react'

export class LifeCycleUpdateB extends Component {
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
   
  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('LifecycleA componentDidUpdate')
  }


  render() {
        console.log('LifecycleB render')

    return (
      <div>
        
      </div>
    )
  }
}

export default LifeCycleUpdateB
