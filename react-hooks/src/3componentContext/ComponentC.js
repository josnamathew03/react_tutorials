import React,{useContext} from 'react'
import { UserContext, ChannelContext } from '../App'

// function ComponentC() {
//     return (

//         <div>
//             <UserContext.Consumer>
//                 {
//                     user => {
//                         return (
//                             <ChannelContext.Consumer>
//                                 {
//                                     channel => {
//                                         return <div>COmponet C {user} {channel}</div>
//                                     }
//                                 }
//                             </ChannelContext.Consumer>
//                         )
//                     }
//                 }
//             </UserContext.Consumer>
//         </div>
//     )
// }

function ComponentC(){
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>Component c {user} {channel}</div>
    )
}

export default ComponentC
