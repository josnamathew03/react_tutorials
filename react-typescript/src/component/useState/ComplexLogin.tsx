import React, { useState } from 'react'

const ComplexLogin = () => {
    type person = {
        name: string,
        email:string
    }
    const logedperosn:person = {
        name:'robin',
        email:'rocin@123.com'
    }
    // const [user,setUser] = useState<person | null>(null)
    const [user,setUser] = useState({} as person)

    const login=()=>{
        setUser(logedperosn)
    }
    // const logout=()=>{
    //     setUser(null)
    // }

  return (
    <div>
      <button onClick={login}>Log in</button>
      {/* <button onClick={logout}>Log out</button> */}
      <div>user name is {user?.name}</div>
      <div>user email is {user?.email}</div>
    </div>
  )
}

export default ComplexLogin
