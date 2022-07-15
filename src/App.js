import React, { useState,useEffect } from "react";
// *             ^^^^ this is hook to use state in functional component
// import Passfun from "./Passfun";
// import Profile from "./Profile";
// import React, { Component } from "react";
// import Child from "./Child";
// import Junk from './Junk.js';  How to import component in react
import "./App.css";
// import Student  from './Students.js';
// import Student from './Student.js';
// # useEffect Hooks in react js
function App() {
   useEffect(() => {
      console.log("useEffect us being called !!!");
   })
   return(
      <div className="App">
         <h1>useEffect hook</h1>
      </div>
   )
}
// # useState Hooks in react js
// function App() {
//    const [name,setName] =useState('Monu');
//    return(
//       <div className="App">
//          <h1>{name}</h1>
//          <button onClick={()=>setName('Sonu')}>Change</button>
//       </div>
//    )
// }
// # Component will mount example
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       show: true,
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Component will unmount</h1>
//         {this.state.show ? <Child></Child> : null}
//         <button
//           onClick={() => {
//             this.setState({ show: !this.state.show });
//           }}
//         >
//           Toggle
//         </button>
//       </div>
//     );
//   }
// }
// # componentDiUpdate eg
// class App extends Component {
//    constructor(){
//       super();
//       console.log("this is the constructor calling");
//       this.state = {
//          name: 'Student',
//          count: 0,
//       }

//    }
//    shouldComponentUpdate(){
//       console.log('This the component should update function');
//       return this.state.count%2===0;
//       // * it is used conditionally display the update
//       // return true;
//    }
//    componentDidUpdate(preProps,preState,snapshots){
//       console.log(`this is the previous counter : ${preState.count}`); //! componentDidUpdate called every time when state us change
//       // * it is used to record previous state and props
//    }
//    componentDidMount(){
//       console.log("this is componentDidMount calling");// ! componentDidMount called in the last all the dom loading
//       // * best used case to call api
//    }
//    render(){
//       console.log("this is render method calling");
//       return(
//           <div className="App">
//                   {/* <h1 className="App">This the render method of class component of {this.state.name}</h1> */}
//                   {/* <button onClick={()=>this.setState({name:'monu'})}>change</button> */}
//                   <h1 className="App">Count:{this.state.count}</h1>
//                   <button onClick={()=>this.setState({count:this.state.count+1})}>Increase</button>
//           </div>
//       )
//    }
// }
// class App extends Component {
//    constructor(){
//       super();
//       this.state = {
//         data: 'monu'
//       }

//    }
//    render() {
//        return(
//         <h1 className="App">Hello there {this.state.data}</h1>
//        )
//    }
// }
// # passing function in child component
// function App() {
//   let  sum = (a,b)=>{
//      return a+b;
//   }
//   return (
//     <div className="App">
//       <Passfun sum={sum}></Passfun>
//     </div>
//   );
// }
// function App() {
//   const [name, setName] = useState("");// * this is how you define state in function below
//   const [genders, setGenders] = useState("");// ? you can only change the state in here only
//   const [stream, setStream] = useState("");// ! class component is going to deprecate sooner
//   TODO : complete the react video
// - this is for strike
// # form handling
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
// # Hide show element in react
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
// # getting input box values
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
// # Class component of App.js and passing props with use of Class component
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
// # Props with functional components
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
// # Here we get the example that the variable is not updated in react using function react only understand state and props
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

// ! Yes we can have component inside a component

export default App;
