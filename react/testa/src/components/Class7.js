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
            <h3>One</h3>
        </div>
    )
}
const Class7 = () => (
  <Router>
    <div>
        <div>
            <Link to="/">Form</Link>
        </div>
        <div>
            <Link to="/one">One</Link>
        </div>
        <div>
            <Link to="/two">Two</Link>
        </div> 
        <hr/>  
      <Route path="/" exact component={Form} />
      <Route path="/one" component={One} />
      <Route path="/two" render={() => <h3>Two</h3>} />
    </div>
  </Router>
);
class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        isBlocking: false
    }
  }
  render() {
    const { isBlocking } = this.state;
    return (
        <div>
            <input
                size="20"
                placeholder="hello world"
                onChange={(event) => {
                this.setState({
                    isBlocking: event.target.value.length > 0
                });
                }}
            />
            <button>Submit</button>
            <Prompt
                when={isBlocking}
                message={location =>
                    `Are you sure you want to go to ${location.pathname}`
                }
            />
        </div>
    );
  }
}
export default Class7;