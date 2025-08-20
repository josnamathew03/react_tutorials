import {useState} from 'react'

function useInput() {
  const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const submitHandler = ()=>{
        alert(`hi ${fname} ${lname}`)
    }
    return {fname,lname,submitHandler,setFname,setLname}
}

export default useInput
