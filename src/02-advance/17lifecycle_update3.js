import React, {Component} from 'react';

class Child extends Component{
    render(){
        return(
            <div>
                child
            </div>
        )
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps",nextProps.text)
    }
}
class App extends Component {
    state={
        text:"11111111111"
    }
    render() {
        return (
            <div>
                {
                    this.state.text
                }
                <button onClick={()=>{this.setState({
                    text:"222222222"
                })}}>click </button>
                <Child text={this.state.text}></Child>
            </div>
        );
    }
}

export default App;