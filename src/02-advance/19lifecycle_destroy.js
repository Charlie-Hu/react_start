import React, {Children, Component} from 'react';

class App extends Component {
    state={
        isCreate:1
    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.setState({
                    isCreate:!this.state.isCreate
                })}}>click</button>
                {this.state.isCreate?<Child></Child>:""}
            </div>
        );
    }
}

class Child extends Component{
    render(){
        return(
            <div>
                child
            </div>
        )
    }
    componentDidMount() {
        window.onresize=()=>{
            console.log("onresize")
        }
        this.timer=setInterval(()=>console.log('1'),1000)
    }

    componentWillUnmount() {
        window.onresize=null
        clearInterval(this.timer)
    }
}
export default App;