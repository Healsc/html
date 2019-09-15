import React from 'react';

import './App.css';
import Class1 from './components/Class1';
import Class2 from './components/Class2';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
      <Router>
        <div>
          <Link to="/">class-one</Link> | 
          <Link to="/class2/100">class-two</Link> |  
          <Link to="/rendertest">class-three</Link>
          <Route path={'/'} component={Class1}/>
          <Route path={'/class2/:id'} component={Class2}/>
          <Route path={'/rendertest'} render={()=><div><h1>hi render</h1></div>}></Route>
        </div>
      </Router>
     {/*  <Class1/>
      <Class2/> */}
    </div>
  );
}

export default App;
