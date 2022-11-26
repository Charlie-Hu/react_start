import React, {Component, createRef} from 'react';
import Test from './19.1test'

class App extends Component {
    // inputRef = createRef()
    state = {
        inputValue: "Charlie"
    }

    render() {
        return (
            <div>
                <input value={this.state.inputValue} onChange={(evt) => this.changeValue(evt)}/>
                <button onClick={() => console.log(this.state.inputValue)}>submit</button>
                <button onClick={() => this.resetValue()}>reset</button>
                <Test mydata={this.state.inputValue}></Test>
            </div>
        );
    }

    changeValue(evt) {
        this.setState({
            inputValue: evt.target.value
        })
    }

    resetValue() {
        this.setState({
            inputValue: ''
        })
    }
}

export default App;