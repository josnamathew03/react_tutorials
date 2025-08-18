import React from 'react'

export default function PersonHtml({person}) {
  return (
    <div>
     <h2>I am {person.name} of {person.age} and i know {person.skill}</h2>
    </div>
  )
}

