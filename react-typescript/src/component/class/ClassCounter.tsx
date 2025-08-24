import { count } from 'console'
import React, { Component } from 'react'
 type messageprops={
        message: string
    }
    type stateType={
        count: number
    }

export class ClassCounter extends Component<messageprops,stateType> {
   
    constructor(props: messageprops) {
        super(props)

        this.state = {
            count: 0
        }
    }
    handleClick = () => {
        this.setState((prev)=>({
            count: prev.count +1
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}></button>
                <div>{this.props.message} {this.state.count}</div>
            </div>
        )
    }
}

export default ClassCounter
