/*
* @Author: Marte
* @Date:   2018-02-21 13:57:50
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-23 15:54:23
*/

import React,{Component} from 'react';

import a from '../imgs/未标题-2.gif'
class Life extends Component{

    render(){
        return(<div className="content">
                    <ul>
                        <li>
                            <img src={a} alt="live" />
                            <span>徐云龙争顶</span>
                        </li>
                        <li>
                            <img src={a} alt="live" />
                            <span>徐云龙争顶</span>
                        </li>
                        <li>
                            <img src={a} alt="live" />
                            <span>徐云龙争顶</span>
                        </li>
                        <li>
                            <img src={a} alt="live" />
                            <span>徐云龙争顶</span>
                        </li>
                        <li>
                            <img src={a} alt="live" />
                            <span>徐云龙争顶</span>
                        </li>

                    </ul>
               </div>)
    }
}

export default Life;