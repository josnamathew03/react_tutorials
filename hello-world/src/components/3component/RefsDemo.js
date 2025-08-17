import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
   
         this.inputRef = React.createRef()
         this.cbRef = null
         this.setRef = e =>{
          this.cbRef = e
         }
      
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if(this.cbRef){
          this.cbRef.focus()

        }
    }

clickHandler =()=>{
  alert(this.inputRef.current.value)
}

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
        <input type='text' ref={this.setRef}/>

        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default RefsDemo
