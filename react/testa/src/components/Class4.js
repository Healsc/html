import React, { Component } from 'react'
import { 
    BrowserRouter as Router, 
    Route,
    Link ,
    withRouter,
    Prompt
  } from "react-router-dom";
const Page1 = ()=>{
      return(
          <div>
              <h1>
                  这是Page1
              </h1>
          </div>
      )
  }
const Page2 = ()=>{
    return(
        <div>
            <h1>
                这是Page2
            </h1>
        </div>
    )
}
const MenuLink = ({to,lable})=>{
    return(
        <Route 
            path={to}
            children={
                ({match})=>{
                    return(
                        <div>
                            <Link to={to}>{lable}</Link>
                        </div>
                    )
                }
            }
        />
    )
}
const RouterChange = withRouter(({history})=>{
    return(
      <div>
        <button onClick={()=>{history.push("/page2")}}>编程导航</button>
      </div>
    )
})

export default class Class4 extends Component {
    constructor(props){
        super(props);
        this.state={
            prompt:true
        }
    }
  render() {
    return (
      <div>
        <Router>
            <div>
                <Link to="/page1">子链接1</Link>|
                <Link to="/page2">子链接2</Link>
                <MenuLink to="/page3" lable="自定义链接1"/>
                <MenuLink to="/page4" lable="自定义链接2"/>
                <RouterChange/>
                <Route path='/page1' component={Page1}/>
                <Route path='/page2' component={Page2}/>
                <Prompt when={this.state.prompt} message="确定离开？？？"/>
            </div>
        </Router>
      </div>
    )
  }
}
