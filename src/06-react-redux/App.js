import React, {Component} from 'react';
import MRouter from "./router/IndexRouter";
import Tabbar from "./components/Tabbar";
import './views/css/app.css'
import {connect} from 'react-redux';
// import store from './redux/store'

class App extends Component {
    state={
        isShow:true
    }
    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <MRouter>
                    {this.state.isShow && <Tabbar></Tabbar>}
                </MRouter>

            </div>
        );
    }
}

// export default App
export default  connect((state)=>{
    console.log(state)
    return {
        a:1,
        b:2,
    }
})(App)