import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }
    }
    increment() {
        // this.setState({
        //     value: this.state.value + 1
        // },
        this.setState((prevState) => ({
            value: prevState.value + 1
        }),

            () => {
                console.log('callback value', this.state.value)

            })
        // console.log(this.state.value)
    }

    // incrementFive() {
    //     this.increment()
    //     this.increment() 
    //     this.increment()
    //     this.increment()
    //     this.increment()
 
    // }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <span>{this.state.value}</span>
                <button onClick={() => this.increment()}>inc</button>
            </div>
        )
    }

}
export default Counter

