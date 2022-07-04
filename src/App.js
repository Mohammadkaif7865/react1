// import React,{ useState } from 'react';
import React, { Component } from 'react';
// import Junk from './Junk.js';  How to import component in react 
import './App.css';
// import Student  from './Students.js';
import Student from './Student.js';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name : "hola",
      email: "abc123@gmail.com"
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Props with class components</h1>
        <Student name={this.state.name} email={this.state.email} other={{ address: "delhi", mobile: "45346234" }} />
        <button onClick={()=>{this.setState({name:"sonu",email: "sonu@gmail.com"})}}>change</button>
      </div>
    )
  }
}
// Props with functional components
// function App() {
//   const [name,setName] =useState("Monu");
//   return(
//     <div className="App">
//        <h1>Props in React</h1>
//        <Student name={name} email="xyz@gmail.com" other={{address:"delhi",mobile:"45346234"}}/>
//        <button onClick={()=>{setName("Mohammad kaif")}} >change the name</button>
//     </div>
//   )
// }
//### state in class component
// import React,{ Component} from 'react';
//This is a class state Example
// class App extends Component {
//     constructor(){
//       super();
//       this.state = {
//         data: 1
//       }
//     }
//     apple() {
//       this.setState({data:this.state.data+1});
//     }
//     render() {
//       return (
//         <div className="App">
//           <h1>{this.state.data}</h1>
//           <button onClick={()=>this.apple()}>Update data</button>
//         </div>
//       )
//     }
// }
// #### State in functional component
// function App() {
//   const [data, setData] = useState(0);
//   function updateData() {
//     setData(data + 1);
//   }
//   console.warn("_______");
//   return (
//     <div className="App">
//       <h1>State in React {data} </h1>
//       <button onClick={updateData}>Update Data</button>
//     </div>
//   );
// }
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
