import logo from './logo.svg';
import './App.css';
import UseState from './Components/UseState/UseState';
import { createElement, useReducer } from 'react';
import UseReducer from './Components/UseState/UseReducer';
import StateObject from './Components/StateImmutability/StateObject';
import StateArray from './Components/StateImmutability/StateArray';
import Parent from './Components/ParentChild/Parent';
import ParentOpt from './Components/Optimization/ParentOpt';
import ChildOpt from './Components/Optimization/ChildOpt';

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseReducer/> */}
      {/* <StateObject/> */}
      {/* <StateArray/> */}
      {/* <Parent/> */}
      <ParentOpt child={<ChildOpt/>}></ParentOpt>
    </div>
  );
}

export default App;
     











