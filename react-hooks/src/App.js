import { Component, useState } from 'react';
import './App.css';
import ClassCounter from './1component/ClassCounter';
import HookCounter from './1component/HookCounter';
import HooksCounterPrev from './1component/HooksCounterPrev';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}

      {/* <HookCounter/> */}

      <HooksCounterPrev/>
    </div>
  );
}

export default App;

