import React, { Component } from 'react'

class classImple extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            value: ''
        }
    }
    componentDidMount() {
        document.title = `${this.state.count}`
    }
    componentDidUpdate(props, prev) {
        // console.log(this.state.value)
        if (prev.count !== this.state.count) {
            console.log('updating')
            document.title = `${this.state.count}`

        }

    }
    render() {
        return (
            <div>
                <input value={this.state.value} onChange={(e) => { this.setState({ value: e.target.value }) }} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}> click</button>
            </div>
        )
    }
}

export default classImple
