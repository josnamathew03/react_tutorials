import React, { Component, useContext, useRef, useState } from 'react';
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
import Container from './component/styleProps/Container';
import { types } from 'util';
import SimpleLogIn from './component/useState/SimpleLogIn';
import ComplexLogin from './component/useState/ComplexLogin';
import Counter from './component/useReducer/Counter';
import ThemeContext from './component/useContext/ThemeContext';
import Box from './component/useContext/Box';
import User from './component/useContext/User';
import { UserDetailsContext } from './component/useContext/UserDetailsContext';
import DomRef from './component/useeRef/DomRef';
import MutableRef from './component/useeRef/MutableRef';
import ClassCounter from './component/class/ClassCounter';
import Private from './component/compoenentProp/Private';
import { Profile } from './component/compoenentProp/Profile';
import ListRendering from './component/generic/ListRendering';
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
      {/* <InputChange handleChange={(e)=>console.log(e)} value=''></InputChange> */}


      {/* <Container styleHead={ {border: '1px solid black', padding: '1rem'}}/> */}

      {/* <SimpleLogIn/> */}
      {/* <ComplexLogin /> */}

      {/* <Counter/> */}

      {/* <ThemeContext>
        <Box/>
      </ThemeContext> */}
{/* <UserDetailsContext>
  <User/>
</UserDetailsContext> */}


{/* <DomRef/>
<MutableRef/> */}

{/* <ClassCounter message='count is'/> */}

{/* <Private  isLoggedIn={true} component={Profile}/> */}

<ListRendering
  items={['ajfr','jis']}
  clickHandle={(value)=>{
    console.log(value)
  }}
/>

    </div>
  );
}

export default App;






























