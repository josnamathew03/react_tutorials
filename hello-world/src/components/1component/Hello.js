import React from "react";

const Hello = ()=>{
    // return <div>
    //     <h1 id="head" className="head-class">JSX</h1>
    // </div>

    return React.createElement('div',null,React.createElement('h1',{id:'head',className:'head-class'},'without JSX')) // parameters are string that specifies html tag to be rendered , second parameter any additional properties, thirs parameter children for the html tag, giving it directly willl only give it as a parameter also wont work so add a new react create element
                                                                                        // second parameter is an object of key vallue pais that we want to apply to parameters, if we want give class name use className as key because class i s a reserved keywors in js
}
export default Hello
 