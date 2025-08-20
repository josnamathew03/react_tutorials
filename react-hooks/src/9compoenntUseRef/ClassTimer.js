import React, { Component } from 'react'

class ClassTimer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }
    componentDidMount() {
        this.intervel = setInterval(() => {
            this.setState(
                { timer: this.state.timer + 1 }
            )
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.intervel)
    }
    render() {
        return (
            <div>
                Class time : {this.state.timer}
                <button onClick={() => clearInterval(this.intervel)}>clear timer</button>
            </div>
        )
    }
}

export default ClassTimer
