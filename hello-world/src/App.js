import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import ListRendering17 from './components/ListRendering17';
import StyleSheets20 from './components/StyleSheets20';
import InlineStyling20 from './components/InlineStyling20';
import './appStyle.css'
import styles from './appStyles.module.css'
import FormHandling21 from './components/FormHandling21';
import { isCallSignatureDeclaration, parseIsolatedEntityName, updateBindingElement } from 'typescript';
import { Component } from 'react';
import LifeCycleA from './components/LifeCycleA';
import LifeCycleUpdatesA from './components/LifeCycleUpdateA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureAndReg from './components/PureAndReg';

function App() {
  return (
    <div className="App">
      {/* <Greet></Greet> */}
      {/* <Greet name="Josna" last="mathew"><p> this is children props</p></Greet> */}
      {/* <Greet name="Athira" last="k"> <button>Action</button> </Greet>
   <Greet name="Gouri" last="s"/>*/}

      {/* <Welcome name="Josna" last="mathew"><p> this is children props</p></Welcome> */}
      {/*<Welcome name="Athira" last="k"> <button>Action</button> </Welcome>
   <Welcome name="Gouri" last="s"/>
   <Hello/> */}
      {/* <Message/> */}
      {/* <Counter/>
    <FunctionClick></FunctionClick>
    <ClassClick></ClassClick>
    <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreetings/> */}
      {/* <ListRendering17/> */}
      {/* <StyleSheets20 isClass= {true}/> */}
      {/* <InlineStyling20/>
    <h2 className='error'>Error</h2>
    <h2 className={styles.sucess}>Sucess</h2> */}
      {/* <FormHandling21/> */}
      {/* <LifeCycleA/> */}
      {/* <LifeCycleUpdatesA/> */}
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      <PureAndReg />
    </div>
  );
}

export default App;



