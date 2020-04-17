import React,{Component} from 'react'

export default class Class2 extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.match.params.id}</h1>
                <h1>this is class2</h1>
            </div>
        )
    }
}