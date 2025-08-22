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

import ButtonClick from './component/EventProps/ButtonClick';

import InputChange from './component/EventProps/InputChange';
function App() {
  // let name:string = 'crocodile'
  const person = {
    fname: 'roronoa',
    lname: 'zoro'
  }
  const crew = ['luffy', 'nami', 'zoro', 'sanji']

  const crewRole = [
    {
      name: 'nami',
      role: 'navigator'
    },
    {
      name: 'sanji',
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
      {/* <Greet name='croc'  isGuest={true}/> */}


      {/* <ButtonClick handleClick={(event,id)=>console.log(event,id)}></ButtonClick> */}
      <InputChange handleChange={(e)=>console.log(e)} value=''></InputChange>


    </div>
  );
}

export default App;

// 099 - event props:
// click event:
//   acccept click event as a prop and pass it to the html Element
//   click handler hal fof the time doesnt take any parameter and dosnt return anything
//     hsndleCLich : () => void
// if we ewant to pass  event to the clickhandler
// th etype of this event is React.MouseEvent, we can be more specific by saying it is a button click by adding <HTMlButtonElement>



// change event:
// two props that are input value  and onChnage handler






