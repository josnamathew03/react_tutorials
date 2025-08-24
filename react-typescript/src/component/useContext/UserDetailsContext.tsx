import React, { useState } from "react"
import { createContext } from "react"

export type userDetails ={
    name: string,
    email: string
}
type contextType ={
    user: userDetails |null,
    setUser:  React.Dispatch<React.SetStateAction<userDetails | null>>
}
type childrenProps = {
    children: React.ReactNode
}
// export const UserContext = createContext<contextType| null>(null)
export const UserContext = createContext({} as contextType)


export const UserDetailsContext = ({children}: childrenProps)=>{
    
    const [user,setUser] = useState<userDetails | null>(null)
    return <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
}