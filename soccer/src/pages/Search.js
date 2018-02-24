/*
* @Author: Marte
* @Date:   2018-02-21 16:43:11
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-24 16:22:48
*/

import React,{Component} from 'react';
import Mines from '../mines/Mines.js'
import './Search.css';
import axios from 'axios';
class Search extends Component{
  constructor(){
    super()
    this.state={
        data:[],
        value:""
    }
    this.changeValue = this.changeValue.bind(this);

  }
    render(){
        console.log(this.state)
        var arr = this.state.data

       if(arr.length!==0){
               arr.filter(function(elem){


               })

           var lis = arr.map(function(elem,index){

                 return <Mines data={elem.user} key={index} />
           })

       }
        return(<div className="con-index">
                    <header style={{ fontSize:"1.2rem",color:"white"}}>发现</header>
                    <div className="search">
                        <div className = "search-wrap">
                        <input value={this.state.value} placeholder="请输入昵称" type="text" onChange={(e)=>{this.changeValue(e)}} />
                        <button onClick={()=>{this.getData()}}>搜索</button>
                        </div>

                    </div>
                    {lis?lis:""}
                    <div className="bottom"></div>

               </div>)
    }

    getData(){
        var  that = this;
        axios.post('/api/users').then(function(data){
            var reg  = new RegExp(that.state.value)

            var arr =  data.data.msg.filter(function(elem){
               return reg.test(elem.user)
            })


                that.setState({
                    data:arr
                })
        })
    }

    changeValue(e){
         this.setState({
            value:e.target.value
         })

    }
}

export default Search;