import React from "react";
// function Greet(){
//     return <h1>Hello</h1>
// }

export const Greet = ({name,last,children}) => {
    return (
        <div>
            <h1>Hello, functional componet {name} {last}</h1>
            {children}
        </div>
    )
}


// export default Greet