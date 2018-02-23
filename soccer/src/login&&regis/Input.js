/*
* @Author: Marte
* @Date:   2018-02-22 14:42:48
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-22 16:04:39
*/

import React,{Component} from 'react';
import './Input.css';

class Input extends Component{
    constructor(){
        super()

    }

    render(){
        console.log()
                 if(this.props.type==="login"){
                    var style= {display:"none"}
                    var style2= {display:"block"}
                 }else{
                    var style={display:"block"}
                    var style2= {display:"none"}
                 }
        return(<div className="input-content">

                  <input onChange={(e)=>{this.props.values(e)}} type="text" placeholder="手机号" />
                  <input  onChange={(e)=>{this.props.values(e)} }type="password" placeholder="密码" />
                  <input   onChange={(e)=>{this.props.values(e)} }style={style} type="text" placeholder="昵称" />
                  <p style={style2}>此处没有账号？点击此处立即<a href="/register">注册</a></p>

                  <button onClick={this.props.submit}>提交</button>


            </div>)
    }
}


export default Input;