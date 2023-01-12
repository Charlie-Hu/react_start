import React, {Component} from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import NowPlaying from "./films/NowPlaying";
import ComingSoon from "./films/ComingSoon";

class Films extends Component {
    render() {
        return (
            <div>
                <div style={{height: "300px", background: "grey"}}>Films</div>
                <ul>
                    <li>
                        <NavLink to="/films/nowPlaying">Now Playing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/films/comingSoon" >Coming Soon</NavLink>
                    </li>
                </ul>
                <h1>content</h1>
                <Switch>
                    <Route path="/films/nowPlaying" component={NowPlaying}></Route>
                    <Route path="/films/comingSoon" component={ComingSoon}></Route>
                    <Redirect from="/films" to="/films/nowplaying"></Redirect>
                </Switch>
            </div>
    );
    }
    }

    export default Films;