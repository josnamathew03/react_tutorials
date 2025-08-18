import React, { Component } from 'react'
import withCounter from './withCounter'
class ClickCounter extends Component {


    render() {
        const { name,count,increment,age } = this.props

        return (
            <div>
                <button onClick={increment}>{name} of age {age} Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter,5)
