import React,{useContext} from 'react'
import ComponentB from './ComponentB'
import { CountContext } from '../App'

function ComponentA() {
  const coutContext = useContext(CountContext)
  return (
    <div>
      ComponentA -{coutContext.countState}
      <button onClick={()=> coutContext.countDispatch('increment')}>Increment</button>
      <button onClick={()=> coutContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=> coutContext.countDispatch('reset')}>Reset</button>


    </div>
  )
}

export default ComponentA
       
