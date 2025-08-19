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
import Toggle from './2componentUseEffect/Toggle';
import IntervelClass from './2componentUseEffect/IntervelClass';
import IntervelFun from './2componentUseEffect/IntervelFun';
import DataFetching from './2componentUseEffect/DataFetching';

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
    {/* <HooksMouse/> */}
    {/* <Toggle/> */}
    {/* <IntervelClass/> */}
    {/* <IntervelFun/> */}
    <DataFetching/>
    </div>
  );
}

export default App;












