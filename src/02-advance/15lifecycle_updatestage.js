import React, {Component} from 'react';

class App extends Component {
    state={
        myname:"Doris"
    }
    render() {
        console.log("render")
        return (
            <div>
                {this.state.myname}
                <button onClick={()=>this.setState({
                    myname:"翟憨憨"
                })}>我是谁</button>
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(JSON.stringify(this.state)===JSON.stringify(nextState)){
            return false
        }
        return true

    }
}

export default App;