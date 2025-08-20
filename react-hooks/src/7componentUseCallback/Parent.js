import React, { useState,useCallback } from 'react'
import ChildButton from './ChildButton'
import ChildCount from './ChildCount'
import ChildTitle from './ChildTitle'

function Parent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(25000)
   const incrementAge=useCallback(
    ()=>{
        setAge(age + 1)
    },[age]
   )

    const incrementSalary= useCallback(
        ()=>{
       setSalary(salary + 5000)
    },[salary]
    )

    return (
        <div>
            <ChildTitle />
            <ChildCount text='age' count={age} />
            <ChildButton handleClick={incrementAge}>Increment age</ChildButton>
            <ChildCount text='salary' count={salary} />
            <ChildButton handleClick={incrementSalary}>Increment salary</ChildButton>
        </div>
    )
}

export default Parent
