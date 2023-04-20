import React, {Component} from 'react';
import MRouter from "./router/IndexRouter";
import Tabbar from "./components/Tabbar";
import './views/css/app.css'
import {connect} from "react-redux";
// import store from './redux/store'
class App extends Component {

    componentDidMount() {
         console.log(this.props)
    }

    render() {
        return (
            <div>
                <MRouter>
                    {this.props.isshow && <Tabbar></Tabbar>}
                </MRouter>

            </div>
        );
    }
}

export default connect((state)=>{
    console.log(state)
    return {
        a:1,
        b:2,
        isshow:state.isshow_reducer.show
    }
})(App);