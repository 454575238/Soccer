/*
* @Author: Marte
* @Date:   2018-02-19 16:57:11
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-21 16:39:43
*/

import React,{Component} from 'react';

import {BrowserRouter as Router ,Route,Redirect,Switch,NavLink} from 'react-router-dom';
import './Index.css'
import Hots from "./Hots.js";
import Attention from './Attention.js';
class Index extends Component{

    render(){
        return(<div className="con-index">
                 <Router>
                   <div>
                    <header>
                        <div>
                        <NavLink activeClassName="pay" to="/index/hots">热点</NavLink>
                        <NavLink activeClassName="pay" to="/index/atte">关注</NavLink>
                         </div>
                    </header>

                    <Switch>

                     <Route path="/index/hots" component={Hots}></Route>

                     <Route path="/index/atte" component={Attention} ></Route>
                          <Redirect  from="/index" to="/index/hots" />

                    </Switch>

                    </div>
                 </Router>
               </div>)
    }
}

export default Index;