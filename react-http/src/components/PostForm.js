import React, { Component } from 'react'
import axios from 'axios'

 class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }
    changeInput = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitChanges = (e)=>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }
    
  render() {
    const {userId,title,body} = this.state
    return (
      <form onSubmit={this.submitChanges}>
        <input placeholder='userId' name='userId' value={userId} onChange={this.changeInput}/> <br/>
        <input placeholder='title' name='title' value={title} onChange={this.changeInput}/> <br/>
        <input placeholder='body' name='body' value={body} onChange={this.changeInput}/> <br/>
        <button type='submit'>submit</button>
      </form>
    )
  }
}

export default PostForm
