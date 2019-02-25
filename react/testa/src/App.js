import React, { Component } from 'react';

import './App.css';
import Class1 from './components/Class1'
import Class2 from './components/Class2'
import Class4 from './components/Class4'
import Class5 from './components/Class5'
import Class6 from './components/Class6'
import Class7 from './components/Class7'
import { 
  BrowserRouter as Router, 
  Route, 
  Link ,
  Redirect,
  Switch
} from "react-router-dom";
import {Provider} from 'react-redux'
import store from './srore'
const Test = ()=><h1>hello world</h1>
const Class3 = ({match})=>{
  return (
    <div>
      <h1>class3</h1>
      <h2>{match.params.id}</h2>
    </div>
  )
}
const Error404 = ()=><h1>Error404</h1>
class App extends Component {
  render() {

    return (
      <div className="App">
       <Provider store={store}>
        <Router>
          <div>
              <Test/>
              <Link to="/">class1</Link>|
              <Link to="/class2/sunc">class2</Link>|
              <Link to={'/class3/100'}>class3</Link>|
              <Link to="/render">render</Link>|
              <Link to='/class4'>class4</Link>|
              <Link to="/class5">class5</Link>|
              <Link to="/class6">class6</Link>|
              <Link to="/class7">class7</Link>
              <Switch>
                <Route exact path={'/'} component={Class1}/>
                <Route path={'/class2/:id'} component={Class2}/>
                <Route path={'/class3/:id'} component={Class3}/>
                <Route path={'/render'} render={()=><Redirect to="/"/>}/>
                <Route path={'/class4'} component={Class4}/>
                <Route path='/class5' component={Class5}/>
                <Route path='/class6' component={Class6}/>
                <Route path='/class7' component={Class7}/>
                <Route component={Error404}/>
              </Switch>
          </div> 
        </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
