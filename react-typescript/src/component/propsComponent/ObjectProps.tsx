import React from 'react'

import { personProp } from '../person.type'

const ObjectProps = ({person}: personProp) => {
  return (
    <div>
      Ore wa {person.fname} {person.lname}
    </div>
  )
}

export default ObjectProps
