export default function User(props){
    return(
       <div className="App">
         <h1>User name is {props.data.name} </h1>
         <h1>User name is {props.data.email} </h1>
         <h1>User name is {props.data.phone} </h1>
       </div>
    )
}