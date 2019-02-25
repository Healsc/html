import React from "react";
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Prompt 
} from "react-router-dom";

const One =()=>{
    return(
        <div>
            <h1>One</h1>
        </div>
    )
}
const Class7 = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Form</Link>
        </li>
        <li>
          <Link to="/one">One</Link>
        </li>
        <li>
          <Link to="/two">Two</Link>
        </li>
      </ul>
      <Route path="/" exact component={Form} />
      <Route path="/one" component={One} />
      <Route path="/two" render={() => <h3>Two</h3>} />
    </div>
  </Router>
);
class Form extends React.Component {
  state = {
    isBlocking: false
  };
  render() {
    const { isBlocking } = this.state;
    return (
        <div>
            <Prompt
                when={isBlocking}
                message={location =>
                    `Are you sure you want to go to ${location.pathname}`
                }
            />
            <input
                placeholder="type something to block transitions"
                onChange={(event) => {
                this.setState({
                    isBlocking: event.target.value.length > 0
                });
                }}
            />
            <button>Submit</button>
        </div>
    );
  }
}
export default Class7;