import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import style from './Tabbar.module.css'
function isAuth(){
    return localStorage.getItem("token")
}
console.log(style)
class Tabbar extends Component {
    render() {
        return (
            <div className={style.tabbar}>
                <ul>
                    <li>
                        <NavLink to= "/films" activeClassName={style.Charlie}>Films</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cinemas" activeClassName={style.Charlie}>Cinemas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/centre" activeClassName={style.Charlie}>Centre</NavLink>
                    </li>
                    {isAuth()?"":<li>
                        <NavLink to="/loginpage" activeClassName={style.Charlie} >login</NavLink>
                    </li>}
                    {isAuth()?<li>
                        <button onClick={()=>{localStorage.clear("token");window.location.reload()}}>logout</button>
                    </li>:""}
                </ul>

            </div>
        );
    }
}

export default Tabbar;