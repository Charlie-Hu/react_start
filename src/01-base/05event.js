import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <input type="text"/>
                <button onClick={() => {
                    console.log("11111")
                }}>add1
                </button>
                <button onClick={this.handleClick2}>add2</button>
                <button onClick={this.handleClick3}>add3</button>
                <button onClick={()=>{this.handleClick4()}}>add4</button>
            </div>
        );
    }

    handleClick2() {
        console.log("222222")
    }

    handleClick3 = () => {
        console.log("333333")
    }
    handleClick4 = () => {
        console.log("444444")
    }

}

export default App