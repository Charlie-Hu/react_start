import React, {Component} from 'react';
class Child extends Component{
    render(){
        return(
            <div>
                child
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Child></Child>
            </div>
        );
    }
}
