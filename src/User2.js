import React, {useEffect} from 'react';
export default function App(props) {
  useEffect(() =>{
    console.log('the values have been changed');
  },[props.data])
  return(
    <div className="App">
        <h1>data : {props.data}</h1>
        <h1>variable : {props.variable}</h1>
    </div>
  )
}