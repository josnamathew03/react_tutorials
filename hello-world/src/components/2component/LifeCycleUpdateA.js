import React, { Component } from 'react'
import LifeCycleUpdateB from './LifeCycleUpdateB'

export class LifeCycleUpdatesA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'name'
    }
    console.log('LifecycleA constructor')
  }
  changeState  = ()=>{
    this.setState(
      {
        username : 'josna'
      }
    )
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
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
    console.log('LifecycleA render')
    return (
      <div>
        LifeCycleUpdateA
        <LifeCycleUpdateB />
        <button onClick={this.changeState}>Change state</button>
      </div>
    )
  }
}

export default LifeCycleUpdatesA
