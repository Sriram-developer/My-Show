import {Route} from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

function Name() {
  return <h1>hello </h1>
}

function App() {
  return ( <>
   <DefaultHOC path= "/" exact component={Name}/>
  </>);
}

export default App;
