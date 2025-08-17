import React, { Component } from 'react'

 class RegularComponent extends Component {
  render() {
        console.log('reg com render')

    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegularComponent
