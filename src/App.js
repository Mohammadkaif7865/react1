import { useState } from 'react';
// import Junk from './Junk.js';  How to import component in react 
import './App.css';

function App() {
  const [data, setData] = useState(0);
  function updateData() {
    setData(data + 1);
  }
  console.warn("_______");
  return (
    <div className="App">
      <h1>State in React {data} </h1>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}
//Here we get the example that the variable is not updated in react using function react only understand state and props
  // function App() {
  //   let data = "monu";
  //   function changeName () {
  //     data = "Mohammad kaif";
  //   }
  //   function ComponentInComponent(){
  //     return (
  //       <h1>This code is from component inside of an component</h1>
  //     )
  //   }
  //   return (
  //     <div className="App">
  //     <ComponentInComponent />
  //     <button onClick={changeName}>Update Data</button>
  //   </div>
  //   )
  // }


//Yes!! we can have component inside a component 

export default App;
