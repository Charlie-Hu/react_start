import React, {Component, createRef} from 'react';
import Test from './19.1test'

class App extends Component {
    inputRef = createRef()
    a = 1
    render() {
        return (
            <div>
                <input ref={this.inputRef} defaultValue="charlie" />
                <button onClick={()=>console.log(this.inputRef.current.value)}>submit</button>
                <button onClick={()=>{this.inputRef.current.value =''}}>reset</button>
                <Test mydata={this.a}></Test>
            </div>
        );
    }
}

export default App;