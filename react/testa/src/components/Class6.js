import React, { Component } from 'react'
import store from '../srore';
import {connect} from 'react-redux'
const add=()=>{
  //console.log('add')
  return{
    type:"ADD"
  }
}
class Class6 extends Component {
  addHandle(){
    store.dispatch(add())
  }
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <div><button onClick={this.addHandle.bind(this)}>add</button></div>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return(
    {
      count:state.count
    }
  )
}
const mapDistchToProps=(dispatch)=>{
  return{
    add:()=>dispatch(add())
  }
}
export default connect(mapStateToProps,mapDistchToProps)(Class6)