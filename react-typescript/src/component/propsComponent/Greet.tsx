// import React from 'react'

//     type name = {
//         name:string,
//         count?: number,
//         isGuest: boolean
//     }
// const Greet = (name:name) => {
//   const {count = 10} = name

//   return (
//     <div>
//       Long time no see {name.name} {name.count}
//       {name.isGuest ? 'welcome guest' : 'welcome admin'}
//     </div>
//   )
// }

// export default Greet


type nameProps = {
  name: string,
  count?: number,
  isGuest: boolean


}
const Greet = ({ name, isGuest, count = 10 }: nameProps) => {
  return (
    <div>
       Long time no see {name} {count}
      {isGuest ? 'welcome guest' : 'welcome admin'}
    </div>
  )
}

export default Greet

