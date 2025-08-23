import { createContext, useState } from "react"

export type userProps = {
    name: string,
    email:string
}
type userContextType = {
    user: userProps | null,
    setUser: React.Dispatch<React.SetStateAction<userProps | null>>
}
type childrenProps = {
    children: React.ReactNode
}

export const UserDetailsContext = createContext({} as userContextType)

export const UserDetails = ({children}: childrenProps)=>{
    const [user,setUser] = useState<userProps | null>(null)
    return <UserDetailsContext.Provider value={{user,setUser}}>
        {children}
    </UserDetailsContext.Provider>
}




