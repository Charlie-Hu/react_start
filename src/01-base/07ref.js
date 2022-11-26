import React, {Component} from 'react';

export default class App extends Component {
    a = 100
    myRef = React.createRef()
    render() {
        return (
            <div>
                <input ref={this.myRef}/>
                <button onClick={() => {
                    console.log(this.myRef.current.value)
                }}>add1
                </button>
            </div>
        );
    }
}