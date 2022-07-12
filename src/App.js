import React, { useState } from "react";
import Passfun from "./Passfun";
// import Profile from "./Profile";
// import React, { Component } from 'react';
// import Junk from './Junk.js';  How to import component in react
import "./App.css";
// import Student  from './Students.js';
// import Student from './Student.js';
//form handling
function App() {
  let  sum = (a,b)=>{
     return a+b;
  }
  return (
    <div className="App">
      <Passfun sum={sum}></Passfun>
    </div>
  );
}
// function App() {
//   const [name, setName] = useState("");// * this is how you define state in function below
//   const [genders, setGenders] = useState("");// ? you can only change the state in here only
//   const [stream, setStream] = useState("");// ! class component is going to deprecate sooner
//   //TODO : complete the react video
//   function getData(e) {
//     console.log(name,genders,stream);
//     e.preventDefault();
//   }
//   return (
//     <div className="container">
//       <h1>This is for form handling</h1>
//       <form onSubmit={getData}>
//         <div className="mb-3 mt-3">
//           <label htmlFor="name">Name: </label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-check">
//           <input
//             type="radio"
//             name="genders"
//             id="male"
//             value="male"
//             onChange={(e) => setGenders(e.target.value)}
//           />
//           <label htmlFor="male">male</label>
//         </div>
//         <div className="form-check">
//           <input
//             type="radio"
//             name="genders"
//             id="female"
//             value="female"
//             onChange={(e) => setGenders(e.target.value)}
//           />
//           <label htmlFor="female">female</label>
//         </div>
//         <div className="form-check">
//           <input
//             type="radio"
//             name="genders"
//             id="trans"
//             value="trans"
//             onChange={(e) => setGenders(e.target.value)}
//           />
//           <label htmlFor="trans">trans</label>
//         </div>
//         <select className="form-select"  onChange={(e) => setStream(e.target.value)}>
//           <option>---Select your stream --------</option>
//           <option>Medical</option>
//           <option>Non-Medical</option>
//           <option>Commerce</option>
//           <option>Humanities</option>
//         </select>
//         <button type="submit" className="btn btn-primary">Submit</button>
//         <button type="submit" className="btn btn-danger">clear</button>
//       </form>
//     </div>
//   );
// }
// //Hide show element in react
// function App() {
//   let [status,setStatus] = useState(true);
//   return(
//     <div className="App">
//       {
//         status?<h1>this is going to hide !!</h1>:null
//       }
//       {/* <button onClick={()=>setStatus(false)}>Hide</button>
//       <button onClick={()=>setStatus(true)}>Show</button> */}
//       <button onClick={()=>setStatus(!status)}>Toggle</button>
//     </div>
//   )
// }
//getting input box values
// function App() {
//   const [data, setData]  = useState(null);
//   const [print, setPrint]  = useState(false);
//   function saveData(data) {
//     // console.log(data.target.value);
//       setData(data.target.value);
//   }
//   function setTrue(){
//    setPrint(true);
//   }
//   return(
//     <div className="App">
//       {print? <h1>{data}</h1>:null}
//        <label htmlFor="here">input : </label>
//        <input id="here" type="text"  onChange={saveData}/>
//        <button onClick={setTrue}>Print</button>
//     </div>
//   )
// }
// Class component of App.js and passing props with use of Class component
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name : "hola",
//       email: "abc123@gmail.com"
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Props with class components</h1>
//         <Student name={this.state.name} email={this.state.email} other={{ address: "delhi", mobile: "45346234" }} />
//         <button onClick={()=>{this.setState({name:"sonu",email: "sonu@gmail.com"})}}>change</button>
//       </div>
//     )
//   }
// }
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
