import React from 'react'

type personProp = {
    person:{
        fname: string,
        lname: string
    }
}

const ObjectProps = (person: personProp) => {
  return (
    <div>
      Ore wa {person.person.fname} {person.person.lname}
    </div>
  )
}

export default ObjectProps
