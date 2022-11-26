import React, {Component} from 'react';
import './css/01-index.css'

class App extends Component {

    render() {
        var obj = {
            background: "yellow"
        }
        return (
            <div>
                {10 + 20}
                <div style={obj}>11111</div>
                <div style={{background:"blue"}}>222222</div>
                <div className="active">3333333</div>
                <label htmlFor="username">username: </label>
                <input type="text" id="username"/>
            </div>
        );
    }
}

export default App;