import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
const add = () => {
  console.log("add");
  return {
    type: "ADD",
  };
};
class Class3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  addHandler() {
    this.setState({
      count: store.getState().count,
    });
    store.dispatch(add());
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h1>{this.props.count}</h1>
        <button onClick={this.addHandler.bind(this)}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});
const mapDispathToProps = (dispatch) => {
  return {
    add: () => dispatch(add()),
  };
};

/* export default Class3; */
export default connect(mapStateToProps, mapDispathToProps)(Class3);
