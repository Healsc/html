import React ,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Prompt
} from 'react-router-dom'
const One =()=><h1>One</h1>
const Two =()=><h1>Two</h1>
class Form extends Component {
    constructor(props) {
      super(props);
      this.state={
        val:''
      }
    }
    change(e){
        this.setState({
            val:e.target.value
        })
    }
    render(){
        return(
            <div>
                <Prompt when={this.state.val.length>0} message="You sure???"/>
                <input type="text" onChange={this.change.bind(this)}/>
                <button>Submit</button>
            </div>
        )
    }
}
const Class8 =()=>{
    return(
        <div>
            <Router>
                <div>
                    <div>
                        <Link to="/one">One</Link>
                    </div>
                    <div>
                        <Link to="/two">Two</Link>
                    </div>
                    <div>
                        <Link to="/form">Form</Link>
                    </div>
                    <hr/>
                    <Route path="/one" component={One}/>
                    <Route path="/two" component={Two}/>
                    <Route path="/form" component={Form}/>
                </div>
            </Router>
        </div>
    )
}
export default Class8