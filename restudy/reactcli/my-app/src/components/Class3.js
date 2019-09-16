import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
export default class componentName extends Component {
  render() {
    //console.log(this.props.match)
    return (
      <div>
          
          <h1>hello world</h1>
        
         {/*  <withRouter/> */}
      </div>
    )
  }
}
/* const RouterChange = withRouter(({history})=>{
  return(
    <div>
      <button onClick={()=>{history.push("/page2")}}>按钮</button>
    </div>
  )
}) */
