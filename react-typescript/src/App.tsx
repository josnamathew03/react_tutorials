import React from 'react';
import logo from './logo.svg';
import './App.css';
import { visitParameterList } from 'typescript';
import Greet from './component/propsComponent/Greet';
import ObjectProps from './component/propsComponent/ObjectProps';
import ArrayProp from './component/propsComponent/ArrayProp';

import StatusComponent from './component/propsAdvanced/StatusComponent';
import Heading from './component/propsAdvanced/Heading';
import PirateKing from './component/propsAdvanced/PirateKing';
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
      {/* <ObjectProps person={person}/>
      <ArrayProp crew={crew} crewRole={crewRole}/> */}

        {/* <StatusComponent status='error'/> */}
        {/* <Heading>ONE PIECE</Heading>
        <PirateKing>
          <Heading>MONKEY D LUFFY king of the pirates</Heading>
        </PirateKing> */}
      <Greet name='croc'  isGuest={true}/>


    </div>
  );
}

export default App;







