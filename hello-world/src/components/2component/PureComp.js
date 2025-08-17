import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
     console.log('pure comp render')
    return (
      <div>
        pure component {this.props.name}
      </div>
    )
  }
}

export default PureComp
