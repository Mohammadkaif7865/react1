function Student(props) {
    console.log(props);
    return (
        <div className="App" style={{backgroundColor: "greenyellow"}}>
            <h1>This is {props.name} component and his email is {props.email}</h1>
            <h1>Address is {props.other.address} and phone is {props.other.mobile}</h1>
            {/* inline css style in react */}
        </div>
    )
}
export default Student;