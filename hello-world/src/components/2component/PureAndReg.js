import React, { Component, PureComponent } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComp'
import MemoCom from './MemoCom'

 class PureAndReg extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'gigi'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState(
                {
                    name: 'gigi'
                }
            )
        },2000)
    }
    
  render() {
    console.log('**************parent component render*******************')
    return (
      <div>
        ParentComponent
        {/* <RegularComponent name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
        <MemoCom name={this.state.name}/>
      </div>
    )
  }
}

export default PureAndReg
