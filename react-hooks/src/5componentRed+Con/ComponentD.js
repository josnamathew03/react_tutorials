import React,{useContext} from 'react'
import { CountContext } from '../App'

function ComponentD() {
    const coutContext = useContext(CountContext)
  
  return (
    
    <div>
      ComponentD -{coutContext.countState}
      <button onClick={() => coutContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => coutContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => coutContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentD
