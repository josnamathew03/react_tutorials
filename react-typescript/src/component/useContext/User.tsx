import { useContext } from "react"
import { userProps } from "./UserDetailsContext"
import { UserDetailsContext } from "./UserDetailsContext"



const User = () => {

    const userdetails = useContext(UserDetailsContext)
 
    const handleLogin = () => {
        if (userdetails) {
            userdetails.setUser({
                name: 'vishwas',
                email: 'siwsas@gmail.com'
            })
        }
    }
    const handleLogout = () => {
        if (userdetails) {
            userdetails.setUser(null)
        }
    }
    return (
        <div>
            <button onClick={handleLogin}>log in</button>
            <button onClick={handleLogout}>log out</button>
            <div>user name is {userdetails?.user?.name}</div>
            <div>user email is {userdetails?.user?.email}</div>

        </div>
    )
}

export default User
