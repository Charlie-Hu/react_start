import React, {Component} from 'react';
class Child extends Component{
    render(){
        console.log(this.props)
        return <div>
            child-{this.props.text}
        </div>
    }
}
class App extends Component {
    state ={
        text:"11111111"
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.changeCl()}>Change</button>
                <Child text={this.state.text}></Child>
            </div>
        );
    }

    changeCl(){
        this.setState({
            text:"222222222"
        })
    }
}

export default App;