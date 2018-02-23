/*
* @Author: Marte
* @Date:   2018-02-23 16:26:25
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-23 17:04:45
*/
import React,{Component} from 'react';
import './Mines.css';
import a from '../imgs/timg.gif'
class  Mines extends Component {
    render(){
        return (<div className="users-wrap">
                    <div className="users">
                        <img src={a} alt="" />
                        <div>
                        <p>{JSON.parse(localStorage.user).user}</p>
                        <span>我是小萌我怕谁哈哈哈</span>
                        </div>
                    </div>

                </div>)
    }
}

export default Mines ;