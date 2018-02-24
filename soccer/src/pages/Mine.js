/*
* @Author: Marte
* @Date:   2018-02-21 16:43:51
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-24 14:53:06
*/

import React,{Component} from 'react';
import Mines from '../mines/Mines.js';
import {BowserRouter as Router ,Route ,Switch,NavLink,Redirect} from 'react-router-dom';
import './Mine.css';
import Photo from '../mines/Photo.js'
import Fans from '../mines/Fans.js'
import Att from '../mines/Att.js'

class Mine extends Component{

    render(){
        return(<div className="con-index">
                    <header style={{ fontSize:"1.2rem",color:"white"}}>个人中心</header>
                    {localStorage.user?<div><Mines data={JSON.parse(localStorage.user).user} />
                        <ul className="mine-data">
                        <NavLink to="/mine/photo" activeClassName="mine-choice" ><li>照片（0）</li></NavLink>
                        <NavLink to="/mine/att" activeClassName="mine-choice" ><li>关注（0）</li></NavLink>
                        <NavLink to="/mine/fans" activeClassName="mine-choice" ><li>粉丝（0）</li></NavLink>
                        </ul>
                        <Switch>
                            <Route path="/mine/photo" component={Photo} />
                            <Route path="/mine/fans" component={Fans} />
                            <Route path="/mine/att" component={Att} />
                           <Redirect from="/mine" to="/mine/photo" />
                        </Switch>

                        </div>:<div>请先登录</div>}
                    </div>)
    }
}

export default Mine;