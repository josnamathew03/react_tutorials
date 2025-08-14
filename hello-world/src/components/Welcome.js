import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        return <h1>Hello, class componet {this.props.name} {this.props.last} {this.props.children}</h1>
    }
}

export default Welcome