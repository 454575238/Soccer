/*
* @Author: Marte
* @Date:   2018-02-22 14:20:31
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-23 15:37:16
*/

import React,{Component} from 'react';
import Input from '../login&&regis/Input.js';
import axios from 'axios';


class Register extends Component{
  constructor(){
    super();
    this.state={
        user:"",
        pwd:"",
        nick:""
    }
    this.values = this.values.bind(this);
    this.submit = this.submit.bind(this);
  }
    render(){
        return(<div className="con-index">
                    <header style={{ fontSize:"1.2rem",color:"white"}}>足球圈 ——— 注册</header>
                    <Input values={this.values} submit={this.submit} />
                    </div>)

    }
   values(e){

    var name =  e.target.type==="text"?"user":"pwd"
     if(e.target.placeholder==="昵称"){
        name = "nick"
    }
    this.setState({
        [name]:e.target.value
    })


}
submit(){
    if(this.state.user.trim()===""||this.state.pwd.trim()===""||this.state.nick.trim()===""){
            alert("用户名密码不能为空或昵称不能为空")
            return;
    }
    axios.post("/api/register",this.state).then(function(data){
          alert(data.data.msg)
          if(data.data.code==0){
            window.location = "/login"
          }
    })

}

}

export default Register;