import React, { Component } from 'react'

 class UserGreetings extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         isLogged : true
      }
    }
  render() {
// return this.state.isLogged && <div>Welcome Josna</div>

    // return(
    //     this.state.isLogged? <div>Welcome Josna</div> : <div>Welcome Guests</div>
    // )
    // let message
    // if(this.state.isLogged){
    //     message = 'welcome josna'
    // }
    // else{
    //     message = 'welcome guests'
    // }
    // return <div>{message}</div>

    // if(this.state.isLogged){
    // return (
    //   <div>
    //     welcome josna
    //   </div>
    // )
    // }
    // else{
    //     return(
    //         <div>
    //             welcome guests
    //         </div>
    //     )
    // }

  }
}

export default UserGreetings
