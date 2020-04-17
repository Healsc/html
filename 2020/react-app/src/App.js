import React ,{Component}from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Class1 from "./components/Class1";
import Class2 from "./components/Class2";

const Test = ({match})=>{
  return(
    <div>
      <h1>{match.params.id}</h1>
      <h1>这是个局部无状态组件</h1>
    </div>
  )
}
class App extends Component{
  render(){
    return(
      <div className="App">
      <Router>
        <Link to="/">Class1</Link>
        <Link to="/class2/102">Class2</Link>
        <Link to="/test/101">TEst</Link>
        <Switch>
          <Route path="/class2/:id" component={Class2} />
          <Route path='/test/:id' component={Test}/>
          <Route path="/" component={Class1} />
       
          
          {/* <Route exact path="/" component={Class1} /> */}
        </Switch>
      </Router>
    </div>
    )
  }
}

/* function App() {
  return (
   
  );
} */
export default App;
