import React, {Component} from 'react';
import MRouter from "./router/IndexRouter";
import Tabbar from "./components/Tabbar";
import './views/css/app.css'
class App extends Component {
    render() {
        return (
            <div>
                <MRouter>
                    <Tabbar></Tabbar>
                </MRouter>

            </div>
        );
    }
}

export default App;