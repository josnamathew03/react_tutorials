import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
   {/* <Greet></Greet> */}
    <Greet name="Josna" last="mathew"><p> this is children props</p></Greet>
     {/* <Greet name="Athira" last="k"> <button>Action</button> </Greet>
   <Greet name="Gouri" last="s"/>*/}

     <Welcome name="Josna" last="mathew"><p> this is children props</p></Welcome>
   {/*<Welcome name="Athira" last="k"> <button>Action</button> </Welcome>
   <Welcome name="Gouri" last="s"/>
   <Hello/> */}
   {/* <Message/> */}
   <Counter/>
    <FunctionClick></FunctionClick>
    <ClassClick></ClassClick>
   
    </div>
  );
}

export default App;
