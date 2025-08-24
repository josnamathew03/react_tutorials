import React from "react"
import { Login } from "./Login"
import { profileProps } from "./Profile"
 

type PrivateProps={
  isLoggedIn: boolean
  component: React.ComponentType<profileProps>
}

const Private = ({isLoggedIn,component:Component} : PrivateProps) => {
  if(isLoggedIn){
    return <Component name='vishwas'/>
  }
else{
  return <Login/>
}
}

export default Private
 