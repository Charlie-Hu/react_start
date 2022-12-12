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
                    myname:"pikachu"
                })}>who am i？</button>
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