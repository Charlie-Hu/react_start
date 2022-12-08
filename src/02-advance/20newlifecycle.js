import React, {Component} from 'react';

class App extends Component {
    state={
        myname:"charlie",
        myage:100
    }
    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps")
        return{
            myname:"Charlie"
        }
    }


    render() {
        return (
            <div>
                app-{this.state.myname}{this.state.myage}
            </div>
        );
    }
}

export default App;