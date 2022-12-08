import React, {Component} from 'react';

class App extends Component {
    state={
        myname:"charlie"
    }
    UNSAFE_componentWillMount() {
        console.log("will mount",this.state.myname )
        this.setState({
            myname:"Charlie"
        })
    }

    componentDidMount() {
        console.log("did mount",document.getElementById("myname"))
    }

    render() {
        console.log("render")
        return (
            <div>
                <span id="myname">{this.state.myname}</span>
            </div>
        );
    }
}

export default App;