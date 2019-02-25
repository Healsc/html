import React, { Component } from 'react';

import './App.css';
import Class1 from './components/Class1'
import Class2 from './components/Class2'
import Class4 from './components/Class4'
import { 
  BrowserRouter as Router, 
  Route, Link ,
  Redirect
} from "react-router-dom";

const Test = ()=><h1>hello world</h1>
const Class3 = ({match})=>{
  return (
    <div>
      <h1>class3</h1>
      <h2>{match.params.id}</h2>
    </div>
  )
}
class App extends Component {
  render() {

    return (
      <div className="App">
        <Router>
          <div>
              <Test/>
              <Link to="/">class1</Link>|
              <Link to="/class2/sunc">class2</Link>|
              <Link to={'/class3/100'}>class3</Link>|
              <Link to="/render">render</Link>|
              <Link to='/class4'>class4</Link>
              <Route exact path={'/'} component={Class1}/>
              <Route path={'/class2/:id'} component={Class2}/>
              <Route path={'/class3/:id'} component={Class3}/>
              <Route path={'/render'} render={()=><Redirect to="/"/>}/>
              <Route path={'/class4'} component={Class4}/>
          </div> 
        </Router>
      </div>
    );
  }
}

export default App;
