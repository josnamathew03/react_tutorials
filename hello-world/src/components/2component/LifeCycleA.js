
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
   constructor(props) {
      super(props)
    
      this.state = {
         username:'name'
      }
      console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStatesFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA compoenentDidMOunt')
    }

  render() {
        console.log('LifecycleA render')

    return (
      <div>
        LifeCycleA
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA

