/*
* @Author: Marte
* @Date:   2018-02-21 13:57:37
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-23 15:53:30
*/

import React,{Component} from 'react';
import a from '../imgs/未标题-1.gif'
import './Live.css';


class Live extends Component{

    render(){
        return(<div className="content">
                    <ul>
                        <li>
                            <img src={a}  alt="life" />
                            <span>小丸子啊小丸子！</span>
                        </li>
                        <li>
                            <img src={a}   alt="life" />
                            <span>小丸子啊小丸子！</span>
                        </li>
                        <li>
                            <img src={a}   alt="life" />
                            <span>小丸子啊小丸子！</span>
                        </li>
                        <li>
                            <img src={a}  alt="life"  />
                            <span>小丸子啊小丸子！</span>
                        </li>
                        <li>
                            <img src={a}   alt="life" />
                            <span>小丸子啊小丸子！</span>
                        </li>

                    </ul>
               </div>)
    }
}

export default Live;