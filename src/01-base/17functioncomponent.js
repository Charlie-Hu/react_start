import React, {Component} from 'react';
import Navbar from "./Navbar/index";
import Sidebar from "./Sidebar";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar title='Navbar'></Navbar>
                <Sidebar bg='yellow' position='left'></Sidebar>
            </div>
        );
    }
}

export default App;