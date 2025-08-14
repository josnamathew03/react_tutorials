import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        const {name,last,children} = this.props
        // const {state1,state2} = this.state
        return <h1>Hello, class componet {name} {last} {children}</h1>
    }
}

export default Welcome
