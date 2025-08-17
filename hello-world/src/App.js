import logo from './logo.svg';
import './App.css';
import { Greet } from './components/1component/Greet';
import Welcome from './components/1component/Welcome';
import Hello from './components/1component/Hello';
import Message from './components/1component/Message';
import Counter from './components/1component/Counter';
import FunctionClick from './components/1component/FunctionClick';
import ClassClick from './components/1component/ClassClick';
import EventBind from './components/1component/EventBind';
import ParentComponent from './components/1component/ParentComponent';
import UserGreetings from './components/1component/UserGreetings';
// import ListRendering17 from './components/ListRendering17';
import StyleSheets20 from './components/2component/StyleSheets20';
import InlineStyling20 from './components/2component/InlineStyling20';
// import './appStyle.css'
// import styles from './appStyles.module.css'
import FormHandling21 from './components/2component/FormHandling21';
import { isCallSignatureDeclaration, parseIsolatedEntityName, updateBindingElement } from 'typescript';
import { Component } from 'react';
// import LifeCycleA from './components/LifeCycleA';
// import LifeCycleUpdatesA from './components/LifeCycleUpdateA';
import FragmentDemo from './components/2component/FragmentDemo';
import Table from './components/2component/Table';
import PureAndReg from './components/2component/PureAndReg';
import RefsDemo from './components/3component/RefsDemo';
import ClassRefsParent from './components/3component/ClassRefsParent';
import Portal from './components/4componentPortal/Portal';

function App() {
  return (
    <div className="App">
      {/* <Greet></Greet> */}
      {/* <Greet name="Josna" last="mathew"><p> this is children props</p></Greet> */}
      {/* <Greet name="Athira" last="k"> <button>Action</button> </Greet>*/}
      {/*<Greet name="Gouri" last="s"/>*/}
      {/* <Welcome name="Josna" last="mathew"><p> this is children props</p></Welcome> */}
      {/*<Welcome name="Athira" last="k"> <button>Action</button> </Welcome>*/}
      {/*come name="Gouri" last="s"/>*/}
      {/*llo/> */}
      {/* <Message/> */}
      {/* <Counter/>*/}
      {/*ctionClick></FunctionClick>*/}
      {/*ssClick></ClassClick>*/}
      {/*ntBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreetings/> */}
      {/* <ListRendering17/> */}
      {/* <StyleSheets20 isClass= {true}/> */}
      {/* <InlineStyling20/>*/}
      {/* className='error'>Error</h2>*/}
      {/*<h2 className={styles.sucess}>Sucess</h2> */}
      {/* <FormHandling21/> */}
      {/* <LifeCycleA/> */}
      {/* <LifeCycleUpdatesA/> */}
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <PureAndReg /> */}
      {/* <RefsDemo/> */}
      {/* <ClassRefsParent/> */}
      <Portal/>
      
    </div>
  );
}

export default App;

