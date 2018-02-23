/*
* @Author: Marte
* @Date:   2018-02-19 14:56:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-23 15:44:32
*/

import React,{Component} from 'react';
import {BrowserRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom';
import Index from './pages/Index.js';
import Search from './pages/Search.js';
import Mine from './pages/Mine.js';

class Main extends Component{
  render(){

    return(<div className="main">
            <Router>
                <div>
                 <Switch>
                    <Route path="/index" component={Index}></Route>
                    <Route path="/mine" component={Mine}></Route>
                    <Route path="/search" component={Search}></Route>

                 </Switch>


                      <footer>
                      <ul>
                      <NavLink to="/index" activeClassName="likes"><li><i className="iconfont">&#xe604;</i><span>首页</span></li></NavLink>
                       <NavLink to="/search" activeClassName="likes"><li><i className="iconfont">&#xe621;</i><span>发现</span></li></NavLink>
                      <li  style={{width:"2rem",position:"relative"}}><div className="camera"><i className="iconfont">&#xe63d;</i></div></li>
                       <NavLink to="/mine" activeClassName="likes"><li><i className="iconfont">&#xe62a;</i><span>我的</span></li></NavLink>
                       {localStorage.user?<li className="act" onClick={()=>{localStorage.clear("user");window.location.reload()}}><i className="iconfont">&#xe66a;</i><span>退出</span></li>:<li className="act" onClick={()=>{window.location="/login"}}><i className="iconfont">&#xe608;</i><span>登录</span></li>}

                      </ul>

                      </footer>
                  </div>
             </Router>
        </div>)

  }

}


export default Main;