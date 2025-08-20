import React  from 'react'
import useInput from '../Hooks/useInput'

function InputCustom() {
  const {fname,lname,submitHandler,setFname,setLname} = useInput()

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>First Name</label>
        <input type='text' value={fname} onChange={(e)=>setFname(e.target.value)}/> <br/>
        <label>last name</label>
        <input type='text' value={lname} onChange={(e)=>setLname(e.target.value)}/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default InputCustom
