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

<Private  isLoggedIn={true} component={Profile}/>

    </div>
  );
}

export default App;

// 111- compoent prop:
// we got 3 compoennt 
//   a Component login that says please login to continue
//   a compoennt profile that says private profile Component
//   prive.jsx compoennt which shoes the compoennt by checking whether logged in or not, it take two parameter as props taht is is Logged in and the compoennt to show if logged in

// specify type for the props for react component it si react.componenttype
// pass the props and receive it and specify the type
// type PrivateProps={
//   isLoggedIn: boolean
//   component: React.ComponentType<profileProps>
// } 
// if you have to acess props in props compoennt sepcify that in angle brackets




























