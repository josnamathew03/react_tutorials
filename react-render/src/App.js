import logo from './logo.svg';
import './App.css';
import UseState from './Components/UseState/UseState';
import { createElement, useCallback, useMemo, useReducer, useState, version } from 'react';
import UseReducer from './Components/UseState/UseReducer';
import StateObject from './Components/StateImmutability/StateObject';
import StateArray from './Components/StateImmutability/StateArray';
import Parent from './Components/ParentChild/Parent';
import ParentOpt from './Components/Optimization/ParentOpt';
import ChildOpt from './Components/Optimization/ChildOpt';
import ParentMemo from './Components/Optimization/ParentMemo';
import IncorrectParent from './Components/IncorrectMemo/IncorrectParent';
import { Memoized } from './Components/Optimization/ChildMemo';
import { IncorrectChild2 } from './Components/IncorrectMemo/IncorrectChild2';
import IncorrectParentProps from './Components/IncorrectMemo/IncorrectParentProps';
import ContextParent from './Components/Context/ContextParent';
import ContextChildA from './Components/Context/ContextChild';

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseReducer/> */}
      {/* <StateObject/> */}
      {/* <StateArray/> */}
      {/* <Parent/> */}
      {/* <ParentOpt child={<ChildOpt/>}></ParentOpt> */}
      {/* <ParentMemo/> */}
      {/* <IncorrectParent></IncorrectParent> */}
      {/* <IncorrectParentProps/> */}
      <ContextParent>
        <ContextChildA/>
      </ContextParent>
    </div>
  );
}

export default App;
     








