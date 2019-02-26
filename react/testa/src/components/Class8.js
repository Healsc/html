import React, { Component } from 'react'
import axios from 'axios'
export default class Class8 extends Component {
    constructor(props){
        super(props);
        this.state={
            dataList:[]
        }
    }
    componentDidMount(){
        let url = 'https://api.myjson.com/bins/9inum';
        let url1 = 'https://www.heal.com/getData';
        let url2 = 'https://www.heal.com/getData2';
        let url3 = 'https://www.heal.com/getData3'
        axios.get(url3)
        .then((res)=>{
            //console.log(res)
            this.setState({
                dataList:res.data.data
            })
        })
    }
    render() {
        //console.log(this.state.dataList)
        let com = null;
        let nowList = this.state.dataList;
        com = nowList.map((item,index)=>{
            return(
                <div key={item.id}>
                    <div>{"ID:"+item.id}</div>
                    <div>{"姓名："+item.name}</div>
                    <div>{"住址："+item.address}</div>
                    <div>{item.text}</div>
                    <hr/>
                </div>
            )
        })
        return (
            <div>
                {com}
            </div>
        )
    }
}
