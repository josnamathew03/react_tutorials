import React, { useState } from 'react'
import useInput from '../Hooks/useInput'

function InputCustom() {
    const [fname, BindFname, resetFname] = useInput('')
    const [lname, Bindlname, resetLname] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`hi ${fname} ${lname}`)
        resetFname()
        resetLname()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>First Name</label>
                <input
                    type='text'
                    {...BindFname}
                /> <br />
                <label>last name</label>
                <input
                    type='text'
                    {...Bindlname}

                /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default InputCustom