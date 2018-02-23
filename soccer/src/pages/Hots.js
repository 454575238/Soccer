/*
* @Author: Marte
* @Date:   2018-02-19 17:48:12
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-21 16:41:11
*/
import React,{Component} from 'react';

import {BrowserRouter as Router ,Route,Redirect,Switch,NavLink} from 'react-router-dom';

import './Hots.css';

import Girl from '../hosts/Girl.js';

import Life from '../hosts/Life.js';

import Live from '../hosts/Live.js';

class Hots extends Component{

    render(){
        return(<div className="con-hots">
                 <Router>
                   <div>
                      <div className="header">
                        <NavLink to="/index/hots/live"  activeClassName="active" >足球现场</NavLink>
                        <NavLink to="/index/hots/life"  activeClassName="active" >足球生活</NavLink>
                        <NavLink to="/index/hots/girls" activeClassName="active" >足球美女</NavLink>

                      </div>
                      <Switch>
                         <Route path="/index/hots/girls" component={Girl} />
                         <Route path="/index/hots/live" component={Live} />
                         <Route path="/index/hots/life" component={Life} />
                          <Redirect from="/index/hots" to="/index/hots/live" />
                      </Switch>


                    </div>
                 </Router>
               </div>)
    }
}

export default Hots;