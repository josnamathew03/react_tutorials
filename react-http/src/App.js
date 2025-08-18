import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import { formToJSON } from 'axios';

function App() {
  return (
    <div className="App">
      {/* <PostList/> */}
      <PostForm/>
    </div>
  );
}

export default App;

