import "./App.css";
import { Table } from "react-bootstrap";
// import { Button, Alert } from "react-bootstrap";
// import "./Style.css"
// import style from "./custom.module.css";
// import User2 from "./User2";
// import Passfun from "./Passfun";
// import Profile from "./Profile";
// import React, { Component } from "react";
// import Child from "./Child";
// import Junk from './Junk.js';  How to import component in react
// import Student  from './Students.js';
// import Student from './Student.js';
// # Making nested entries in html table
function App() {
  const empData = [
    {
      name: "Ronda",
      email: "ronda@gmail.com",
      address: [
        { houseNumber: "324-f", city: "Bangkok", country: "Thailand" },
        { houseNumber: "3-y", city: "Rocky Mountain", country: "USA" },
        { houseNumber: "r24-f", city: "Kharkiv", country: "Ukraine" },
        { houseNumber: "3-f", city: "Isle of men", country: "Iceland" },
        { houseNumber: "32-h", city: "Beijing", country: "China" },
        { houseNumber: "32-d", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Stacy",
      email: "stacy@gmail.com",
      address: [
        { houseNumber: "3-y", city: "Rocky Mountain", country: "USA" },
        { houseNumber: "324-f", city: "Bangkok", country: "Thailand" },
        { houseNumber: "r24-f", city: "Kharkiv", country: "Ukraine" },
        { houseNumber: "3-f", city: "Isle of men", country: "Iceland" },
        { houseNumber: "32-d", city: "Delhi", country: "India" },
        { houseNumber: "32-h", city: "Beijing", country: "China" },
      ],
    },
    {
      name: "Steve",
      email: "ronda@gmail.com",
      address: [
        { houseNumber: "r24-f", city: "Kharkiv", country: "Ukraine" },
        { houseNumber: "324-f", city: "Bangkok", country: "Thailand" },
        { houseNumber: "3-y", city: "Rocky Mountain", country: "USA" },
        { houseNumber: "3-f", city: "Isle of men", country: "Iceland" },
        { houseNumber: "32-d", city: "Delhi", country: "India" },
        { houseNumber: "32-h", city: "Beijing", country: "China" },
      ],
    },
    {
      name: "willy",
      email: "willy@gmail.com",
      address: [
        { houseNumber: "3-f", city: "Isle of men", country: "Iceland" },
        { houseNumber: "324-f", city: "Bangkok", country: "Thailand" },
        { houseNumber: "3-y", city: "Rocky Mountain", country: "USA" },
        { houseNumber: "r24-f", city: "Kharkiv", country: "Ukraine" },
        { houseNumber: "32-d", city: "Delhi", country: "India" },
        { houseNumber: "32-h", city: "Beijing", country: "China" },
      ],
    },
    {
      name: "Eleven",
      email: "eleven@gmail.com",
      address: [
        { houseNumber: "32-d", city: "Delhi", country: "India" },
        { houseNumber: "324-f", city: "Bangkok", country: "Thailand" },
        { houseNumber: "3-y", city: "Rocky Mountain", country: "USA" },
        { houseNumber: "r24-f", city: "Kharkiv", country: "Ukraine" },
        { houseNumber: "3-f", city: "Isle of men", country: "Iceland" },
        { houseNumber: "32-h", city: "Beijing", country: "China" },
      ],
    },
    {
      name: "yale",
      email: "yale@gmail.com",
      address: [
        { houseNumber: "32-h", city: "Beijing", country: "China" },
        { houseNumber: "324-f", city: "Bangkok", country: "Thailand" },
        { houseNumber: "3-y", city: "Rocky Mountain", country: "USA" },
        { houseNumber: "r24-f", city: "Kharkiv", country: "Ukraine" },
        { houseNumber: "3-f", city: "Isle of men", country: "Iceland" },
        { houseNumber: "32-d", city: "Delhi", country: "India" },
      ],
    },
  ];
  return (
    <div className="App">
      <Table striped hover variant="dark">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {empData.map((item, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Table striped hover variant="dark">
                  <thead>
                    <tr>
                      <th>House Number</th>
                      <th>City</th>
                      <th>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.address.map((add, j) => (
                      <tr key={j}>
                        <td>{add.houseNumber}</td>
                        <td>{add.city}</td>
                        <td>{add.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
// # Making entries in html table using map function
// function App() {
//   const empData = [
//     { name: "daniel", email: "daniel@gmail.com", phone: "25346345" },
//     { name: "sofia", email: "sofia@gmail.com", phone: "25344345" },
//     { name: "susan", email: "susan@gmail.com", phone: "22346345" },
//     { name: "mandy", email: "mandy@gmail.com", phone: "25346345" },
//     { name: "olive", email: "olive@gmail.com", phone: "25346745" },
//     { name: "jack", email: "jack@gmail.com", phone: "25386345" },
//     { name: "randy", email: "randy@gmail.com", phone: "25346445" },
//     { name: "joker", email: "joker@gmail.com", phone: "25346385" },
//     { name: "robert", email: "robert@gmail.com", phone: "253436345" },
//     { name: "stefan", email: "stefan@gmail.com", phone: "25348345" },
//     { name: "stuart", email: "stuart@gmail.com", phone: "253443345" },
//     { name: "stacy", email: "stacy@gmail.com", phone: "25340345" },
//     { name: "stalin", email: "stalin@gmail.com", phone: "23346345" },
//     { name: "steve", email: "steve@gmail.com", phone: "25346385" },
//   ];
//   return (
//     <div className="App">
//       <h1>List using react Bootstrap</h1>
//       <Table striped hover variant="dark">
//         <tbody>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Contact</th>
//           </tr>
//           {empData.map((item, i) =>
//             item.name[0] === "s" ? (
//               <tr key={i}>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.phone}</td>
//               </tr>
//             ) : null
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
// # using loop with DOM
// function App() {
// //   const names = ["Daniel", "bryan", "sam", "james", "bob", "rob"];
// const empData = [
//    { name:'daniel',email:'daniel@gmail.com',phone:'25346345'},
//    { name:'sofia',email:'sofia@gmail.com',phone:'25346345'},
//    { name:'susan',email:'susan@gmail.com',phone:'25346345'}
// ];
//   return (
//     <div className="App">
//       {/* {names.map((data) => (
//         <h1 key={data}>{data}</h1>
//       ))} */}
//       <h1>Here i handling complete object</h1>
//       {
//          empData.map((data,i) => <Alert variant="success" className="container" key={i}>
//             <h1 key={data.name}>Name is : {data.name}</h1>
//             <h1 key={data.email}>Email is : {data.email}</h1>
//             <h1 key={data.phone}>Phone is : {data.phone}</h1>
//          </Alert>
//          )
//       }
//     </div>
//   );
// }
// # why map not for loop
// function App() {
//    const names=["Daniel","bryan","sam","james","bob","rob"];
//    let names2=names.map((item)=>item+'khan');//# the main difference between forEach and map function is the map function return a value and forEach doesn't return any value
//    for(let i=0; i<names2.length; i++) {
//       console.log(`Using for loop my name is : ${names2[i]}`);
//    }
//    return(
//       <div className="App">
//          <h1>This is the use case of map over for loop </h1>
//       </div>
//    )
// }
// # React Bootstrap Component (buttons,alert)
// function App() {
//   return (
//     <div className="App">
//       <Alert variant="danger">
//         This is the normal alert
//         {/* 'primary',
//         'secondary',
//         'success',
//         'danger',
//         'warning',
//         'info',
//         'light',
//         'dark', */}
//       </Alert>
//     </div>
//   );
// }
// function App(){
//    return(
//       <div className="App">
//          <h1>Here is the example of react Bootstrap</h1>
//          <Button variant="primary">Button1</Button>
//          <Button variant="secondary">Button2</Button>
//          <Button variant="danger">Button3</Button>
//          <Button variant="success">Button4</Button>
//          <Button variant="info">Button5</Button>
//          <Button variant="warning">Button6</Button>
//          <Button variant="light">Button7</Button>
//          <Button variant="dark">Button8</Button>
//       </div>
//    )
// }
// # 3 basic types of css implementation in react js
// function App() {
//    return(
//       <div className="App">
//          <h1 className="one">This is method one</h1>
//          <h1 style={{color: 'white',backgroundColor: 'red'}}>This is method two</h1>
//          <h1 className={style.three}>This is method three</h1>
//       </div>
//    )
// }
// import React, { useState,useEffectS } from "react";
// *                   ^^^^ this is hook to use state and lifecycle methods in functional component
// # useEffect() with specific state and Props
// function App() {
//   const [data, setData] = useState(1);
//   const [variable, setVariable] = useState(100);
//   return (
//     <div className="App">
//       <h1>This is the example of useEffect with props</h1>
//       <button
//         onClick={() => {
//           setVariable(variable + 1);
//         }}
//       >
//         Change variable
//       </button>
//       <button
//         onClick={() => {
//           setData(data + 1);
//         }}
//       >
//         Change data
//       </button>
//       <User2 data={data} variable={variable}></User2>
//     </div>
//   );
// }
// function App() {
//   const [variable, setVariable] = useState(1);
//   const [data, setData] = useState(100);
//   useEffect(() => {
//     console.log("useEffect us being called for variable");
//   },[variable]);
//   useEffect(() => {
//     console.log("useEffect us being called for data");
//   },[data]);
//   return (
//     <div className="App">
//       <h1>useEffect with specific state and Props</h1>
//       <h1>variable :{variable}</h1>
//       <h1>data :{data}</h1>
//       <button onClick={()=>{setVariable(variable+1)}}>Change variable</button>
//       <button onClick={()=>{setData(data+1)}}>Change data</button>
//     </div>
//   );
// }
// ? Does child component Rerender on parent state change?
// * Re-rendering of parent component: Whenever the components render function is called, all its subsequent child components will re-render, regardless of whether their props have changed or not.
// # useEffect() Hooks in react js
// function App() {
//    const [count , setCount] = useState(0);
//    useEffect(() => {
//       console.log("useEffect us being called !!!");
//    })
//    return(
//       <div className="App">
//          <h1>useEffect hook</h1>
//          <h1>{count}</h1>
//          <button onClick={()=>{setCount(count+1)}}>Increase</button>
//       </div>
//    )
// }
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
