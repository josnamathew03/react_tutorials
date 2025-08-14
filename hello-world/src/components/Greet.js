import React from "react";
// function Greet(){
//     return <h1>Hello</h1>
// }

export const Greet = (props) => {
    return (
        <div>
            <h1>Hello, functional componet {props.name} {props.last}</h1>
            {props.children}
        </div>
    )
}


// export default Greet