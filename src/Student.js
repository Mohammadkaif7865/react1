import React,{ Component} from 'react';
export default class Student extends Component {
 
    render(){
        console.log(this.props);//we cannot console directly inside the class component we have define it inside the function of class component
        return(
         <>
           <div>Student : {this.props.name}</div>
           <div>Email : {this.props.email}</div>
         </>
        )
    }
  }