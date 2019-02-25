import React from "react";
import { 
    BrowserRouter as Router, 
    Route, 
    Link 
} from "react-router-dom";

const MenuLink = ({ label, to}) => (
  <Route
    path={to}

    children={({ match }) => (
      <div>
        {match ? "> " : ""}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const Class5 = () => (
    <Router>
      <div>
        <MenuLink to="/home" label="Home" />
        <MenuLink to="/about" label="About" />
        <hr />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
);
export default Class5;
