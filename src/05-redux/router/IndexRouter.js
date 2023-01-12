import React, {Component} from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Films from "../views/Films";
import Cinemas from "../views/Cinemas";
import Center from "../views/Center";
import NotFound from "../views/NotFound";
import Detail from "../views/Detail";
import LoginForm from "../views/loginpage";
import City from "../views/City";
import Search from "../views/Search";

function isAuth(){
    return localStorage.getItem("token")
}

class MRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    {this.props.children}
                    <Switch>
                        <Route path="/films" component={Films}>< /Route>
                        <Route path="/cinemas" component={Cinemas} exact></Route>
                        <Route path="/cinemas/search" component={Search}></Route>
                        {/*also can use withRouter to get props*/}
                        <Route path="/centre" render={(props)=>{
                            return isAuth()?<Center {...props}></Center>:<Redirect to="/loginpage" ></Redirect>
                        }}></Route>
                        {isAuth()?"":<Route path="/loginpage" component={LoginForm}>< /Route>}
                        <Route path="/city" component={City}></Route>
                        <Route path="/detail/:myId" component={Detail}></Route>
                        {/*<Route path="/detail" component={Detail}></Route>*/}
                        <Redirect from="/" to="/films" exact></Redirect>
                        <Route component={NotFound}></Route>
                    </Switch>

                </Router>
            </div>
        );
    }
}

export default MRouter;