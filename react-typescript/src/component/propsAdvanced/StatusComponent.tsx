import React from 'react'
import { measureMemory } from 'vm'

type prop ={
    // status: string
    status : 'loading' | 'sucess' | 'error'
}

const StatusComponent = (props:prop) => {
    let message
    if(props.status === 'sucess'){
        message = 'data fetched sucessfully'
    }
    else if(props.status === 'loading'){
        message = 'loading'
    }
    else if(props.status === 'error'){
        message = ' error encountered'
    }
  return (
    <div>
      {message}
    </div>
  )
}

export default StatusComponent
