import React, { useContext } from 'react'
import { UserContext } from './UserDetailsContext'
import { userDetails } from './UserDetailsContext'

const User = () => {
    const user = useContext(UserContext)
    const handleLogin = () => {
        user.setUser({
            name: 'jhurt',
            email:'hbfgbae'
        })
    }
    const handleLogout = () => {
        user.setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Log in</button>
            <button onClick={handleLogout}>Log out</button>
            <div>{user.user?.name} {user.user?.email}</div>
        </div>
    )
}

export default User
