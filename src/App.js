
import Junk from './Junk.js';
import './App.css';

function App() {
  function Apple() {
    return (<div>Apple component</div>);
  }
  return (
    <div className="App">
     <h1>Hello World!</h1>
     <Junk/>
     {/* {Apple()} */}
     <Apple/>
    </div>
  );
}
//Yes!! we can have component inside a component 

export default App;
