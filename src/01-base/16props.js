import React, {Component} from 'react';
import Navbar from "./Navbar/index";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>home</h1>
                    <Navbar title='home' leftshow={false}></Navbar>
                </div>
                <div>
                    <h1>list</h1>
                    <Navbar title='list' ></Navbar>
                </div>
                <div>
                    <h1>shopping car</h1>
                    <Navbar title='shopping car'></Navbar>
                </div>
            </div>
        )
            ;
    }
}

export default App;