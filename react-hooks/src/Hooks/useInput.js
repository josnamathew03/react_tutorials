// import {useState} from 'react'

// function useInput() {
//   const [fname,setFname] = useState('')
//     const [lname,setLname] = useState('')
//     const submitHandler = ()=>{
//         alert(`hi ${fname} ${lname}`)
//     }
//     return {fname,lname,submitHandler,setFname,setLname}
// }

// export default useInput

import {useState} from 'react'

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const reset = ()=>{
        setValue(initialValue)
    }
    const bind = {
        value,
        onChange: e=>{
            setValue(e.target.value)
        }
    }
    return [value,bind,reset]

}

export default useInput
