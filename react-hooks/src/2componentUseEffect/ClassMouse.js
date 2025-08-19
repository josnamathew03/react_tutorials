import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }
    setPointer = (e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.setPointer)
    }
    componentWillUnmount(){
        window.removeEventListener('mousemove',this.setPointer)
    }
    render() {
        const {x, y} = this.state
        return (
            <div>
                x - {x},
                y - {y}
            </div>
        )
    }
}

export default ClassMouse
