import React from 'react'

export default function PersonHtml({person}) {
  return (
    <div>
      <h2>I am {person.name} of {person.age} years old , I know {person.skill}</h2>
    </div>
  )
}

