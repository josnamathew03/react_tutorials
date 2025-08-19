import { Component, useEffect, useState } from 'react';
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

function App() {
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
    <HooksMouse/>
    </div>
  );
}

export default App;

// 053 - useEffect with cleanUp :(componetWillUnmount)















