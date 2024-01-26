import './App.css';
import { Login } from './Components/login';
import { connectedPage } from './Components/connectedPage';
import React, {useState} from 'react';


function App() {
  const [connected,setConnected] = useState(false);
  const connection = () =>{
    setConnected(true);
  }
  return (
    <div className="App">
      {
        connected === false ? <Login connection={connection}/> : <connectedPage/>
      }  
    </div>
  );
}

export default App;
