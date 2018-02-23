/*
* @Author: Marte
* @Date:   2018-02-22 14:20:17
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-23 15:38:18
*/
import React,{Component} from 'react';

import Input from '../login&&regis/Input.js';

import axios from 'axios';

class Login extends Component{
  constructor(){
    super()
    this.state={
        user:"",
        pwd:""
    }
    this.values = this.values.bind(this);
    this.submit = this.submit.bind(this);


  }

    render(){
        return(<div className="con-index">
                    <header style={{ fontSize:"1.2rem",color:"white"}}>足球圈 — 登录</header>
                        <Input type="login" values={this.values} submit={this.submit}/>
                    </div>)
    }
values(e){
    var name =  e.target.type==="text"?"user":"pwd"

    this.setState({
        [name]:e.target.value
    })


}
submit(){
    if(this.state.user.trim()===""||this.state.pwd.trim()===""){
            alert("用户名密码不能为空")
            return;
    }
    axios.post('/api/login',this.state).then(function(data){
            if(data.data.code==1){
                alert("用户不存在或密码错误")
            }else{
                alert("登录成功")
                 localStorage.user = JSON.stringify(data.data.msg[0])
                 window.location = '/index'

            }
    })
}

}

export default Login;