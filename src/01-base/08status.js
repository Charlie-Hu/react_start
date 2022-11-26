import React, {Component} from 'react';

class App extends Component {
    // state = {
    //     // mytext: 'marked'
    //     myShow:true
    // }
    constructor() {
        super();
        this.state = {
            myShow:true,
            myName:"贝贝"
        }
    }

    render() {
        // var text='mark'
        return (
            <div>
                <h1>welcome react develop {this.state.myName}</h1>
                <button onClick={() => {
                    this.setState({
                        myShow:!this.state.myShow,
                        myName:"豆豆"
                    })
                    if (this.state.myShow){
                        console.log('marked something')
                    }
                    else{
                        console.log('cancel marked')
                    }
                }}>{this.state.myShow?'marked':'unmarked'}</button>
            </div>
        );
    }
}

export default App;