import React,{useState, useMemo, useRef} from 'react'

function CounterMemo() {
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)

    const iseven = useMemo(()=>{
        let i = 0
        while(i<2000000000) i++;
        return count1 % 2 === 0 ? 'even' : 'odd'
    },[count1])
    const increment1 = ()=>{
        setCount1(count1+1)
    }
    const increment2 = ()=>{
        setCount2(count2+1)
    }

  return (
    <div>
      <button onClick={increment1}>count1 - {count1}</button> <span>{iseven}</span> <br/>
      <button onClick={increment2}> count 2 - {count2}</button>

    </div>
  )
}

export default CounterMemo


// 071- useRef hook p1:
// focusing a text input using useRef
// focusing has to be implemented using component didmount behaviour, as we only needs to do focusing once for that use useEffect with empty dependency
// import { useRef } from 'react'
// call and assign useRef which accept initial value as parameter in here initial value is null 
// add ref to the Input
// focus it inside  useefffect