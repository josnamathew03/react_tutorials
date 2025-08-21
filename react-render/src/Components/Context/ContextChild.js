import React, {  useContext } from 'react'
import { childcontext } from './ContextParent'

const ContextChildA = () => {
    console.log('childA render')

  return (
    <div>
      child A
      <ContextChildB/>
    </div>
  )
}
const ContextChildB = () => {
    console.log('childB render')

  return (
    <div>
      child B
      <ContextChildC/>
    </div>
  )
}
const ContextChildC = () => {
    const contextValue = useContext(childcontext)
    console.log('childC render')

  return (
    <div>
      child c {contextValue}
    </div>
  )
}

// export const MemoizedChildA = React.memo(ContextChildA) 
export default ContextChildA
