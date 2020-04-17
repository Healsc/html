import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'

import Class1 from "./components/Class1";
import Class2 from "./components/Class2";
import Class3 from "./components/Class3"
const Test = ({ match }) => {
  return (
    <div>
      <h1>{match.params.id}</h1>
      <h1>这是个局部无状态组件</h1>
    </div>
  );
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Link to="/">Class1</Link>
            <Link to="/class2/102">Class2</Link>
            <Link to="/class3">class3</Link>
            <Link to="/test/101">TEst</Link>
            <Switch>
              <Route path="/class2/:id" component={Class2} />
              <Route path="/test/:id" component={Test} />
              <Route path='/class3' component={Class3}/>
              
              <Route path="/" component={Class1} />

              {/* <Route exact path="/" component={Class1} /> */}
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

/* function App() {
  return (
   
  );
} */
export default App;
