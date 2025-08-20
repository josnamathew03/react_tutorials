import React, { Component, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import './App.css';
import ClassCounter from './1component/ClassCounter';
import HookCounter from './1component/HookCounter';
import HooksCounterPrev from './1component/HooksCounterPrev';
import HooksCounterObject from './1component/HooksCounterObject';
import HooksCounterArray from './1component/HooksCounterArray';
import ClassImple from './2componentUseEffect/ClassImple';
import HooksUseEffect from './2componentUseEffect/HooksUseEffect';
import ClassMouse from './2componentUseEffect/ClassMouse';
import HooksMouse from './2componentUseEffect/HooksMouse';
import Toggle from './2componentUseEffect/Toggle';
import IntervelClass from './2componentUseEffect/IntervelClass';
import IntervelFun from './2componentUseEffect/IntervelFun';
import DataFetching from './2componentUseEffect/DataFetching';

// import ComponentA from './3componentContext/ComponentA';

import CounterReduce from './4ComponentReducer.js/CounterReduce';

import CounterComplex from './4ComponentReducer.js/CounterComplex';
import CounterMulti from './4ComponentReducer.js/CounterMulti';

import ComponentA from './5componentRed+Con/ComponentA';
import ComponentB from './5componentRed+Con/ComponentB';
import ComponentC from './5componentRed+Con/ComponentC';
import FetchUseEffect from './6componentFetch/FetchUseEffect';
import FetchUseReducer from './6componentFetch/FetchUseReducer';

import Parent from './7componentUseCallback/Parent';

import CounterMemo from './8componentUseMemo/CounterMemo';
import FocusInput from './9compoenntUseRef/FocusInput';

import ClassTimer from './9compoenntUseRef/ClassTimer';
import HookTimer from './9compoenntUseRef/HookTimer';
import DocTitle1 from './10componentCustomHook/DocTitle1';
import DocTitle2 from './10componentCustomHook/DocTitle2';
import CounterCustom from './10componentCustomHook/CounterCustom';
import CounterCustom2 from './10componentCustomHook/CounterCustom2';
import useCounter from './Hooks/useCounter';
import InputCustom from './10componentCustomHook/InputCustom';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)


  return (
    <div className="App">
      {/* <ClassCounter/> */}

      {/* <HookCounter/> */}

      {/* <HooksCounterPrev/> */}

      {/* <HooksCounterObject/> */}

      {/* <HooksCounterArray/> */}
      {/* /////////////////////////////////////////////////////// */}

      {/* <ClassImple/> */}
      {/* <HooksUseEffect/> */}

      {/* <ClassMouse/> */}
      {/* <HooksMouse/> */}
      {/* <Toggle/> */}
      {/* <IntervelClass/> */}
      {/* <IntervelFun/> */}      
      {/* <DataFetching/> */} 
      {/* /////////////////////////////////////////////////////////////// */}

      {/* <UserContext.Provider value={'jos'}>
        <ChannelContext.Provider value={'code'}>
          <ComponentA /> 
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* //////////////////////////////////////////////////////////// */}

      {/* <CounterReduce/> */}
      {/* <CounterComplex/> */}   
      {/* <CounterMulti/> */}
   
      {/* ///////////////////////////////////////////////////////// */}
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
 
      {/* ////////////////////////////////////////////////////////// */}

      {/* <FetchUseEffect/> */}
      {/* <FetchUseReducer/> */}

      {/* ////////////////////////////////////////////////////////////// */}
      {/* <Parent/> */}
      {/* <CounterMemo/> */}

      {/* //////////////////////////////////////////////////////// */}

      {/* <FocusInput/> */}
      {/* <ClassTimer/>
        <HookTimer/> */}

      {/* ///////////////////////////////////////////////////////// */}

      {/* <DocTitle1/>
      <DocTitle2/> */}
      {/* <CounterCustom/>
      <CounterCustom2/> */}  
      <InputCustom/>
    </div>
  );
}
 
export default App;  

// 077 - debugging
// https://www.youtube.com/watch?v=d10qxIXgLbg&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=77






