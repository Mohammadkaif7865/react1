import {useState} from 'react';
// import Junk from './Junk.js';  How to import component in react 
import './App.css';

function App() {
  const [data,setData] = useState(0);
  function updateData() {
    setData(data+1);
  }
  console.warn("_______");
  return (
    <div className="App">
     <h1>State in React {data} </h1>
     <button onClick={updateData}>Update Data</button>
    </div>
  );
}

//Yes!! we can have component inside a component 

export default App;
