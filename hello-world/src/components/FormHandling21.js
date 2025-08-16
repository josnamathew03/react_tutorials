import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class FormHandling21 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName : '',
         comments : '',
         dropDown : 'react'
      }
    }
    inputChange = (e)=>{
    this.setState({
        userName : e.target.value,
    })
    }
    commetChange = (e)=>{
        this.setState(
            {
                comments :e.target.value
            }
        )
    } 
    changeDrop = (e)=>{
        this.setState(
            {
                dropDown : e.target.value
            }
        )
    }
    handleForm = event =>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.dropDown}`)
        event.preventDefault()
    }
    render() {
        return (
                <form onSubmit={this.handleForm}>              
                    <div>
                        <label>Username</label>
                        <input name="username" value={this.state.userName} onChange={this.inputChange}></input>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments} onChange={this.commetChange}></textarea>
                    </div>
                    <div>
                        <label>Topics</label>
                        <select value={this.state.dropDown} onChange={this.changeDrop}>
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='flutter'>Flutter</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
        )          
    }
}

export default FormHandling21
