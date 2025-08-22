import React from 'react';
import logo from './logo.svg';
import './App.css';
import { visitParameterList } from 'typescript';
// import Greet from './component/propsComponent/greet';
import ObjectProps from './component/propsComponent/ObjectProps';
import ArrayProp from './component/propsComponent/ArrayProp';
function App() {
  // let name:string = 'crocodile'
  const person ={
    fname : 'roronoa',
    lname : 'zoro'
  }
  const crew = ['luffy','nami','zoro','sanji']

  const crewRole = [
    {
      name:'nami',
      role:'navigator'
    },
    {
      name:'sanji',
      role: 'cook'
    }
  ]

  return (
    <div className="App">
      {/* <Greet name='croc'  count={10} isGuest={true}/> */}
      <ObjectProps person={person}/>
      <ArrayProp crew={crew} crewRole={crewRole}/>
    </div>
  );
}

export default App;


// 097 - basic props










