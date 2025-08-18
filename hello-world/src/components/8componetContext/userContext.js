import React from "react";

const userContext = React.createContext('nahhhhhhhhhhh')

const UserProvider = userContext.Provider
const UserConsumer = userContext.Consumer

export {UserConsumer,UserProvider}
export default userContext