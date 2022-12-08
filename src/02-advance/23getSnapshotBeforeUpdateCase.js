import React, {Component, createRef} from 'react';

class App extends Component {
    state = {
        list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
    myRef = React.createRef()
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(this.myRef.current.scrollHeight)
        return this.myRef.current.scrollHeight
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.myRef.current.scrollHeight)
        this.myRef.current.scrollTop+=this.myRef.current.scrollHeight-snapshot
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.setState({
                    list:[...[11,12,13,14,15,16,17,18,19,20],...this.state.list]
                })}>Get email</button>
                <h1>Email App</h1>
                <div style={{height:"200px",overflow:"auto",border:"1px solid black"}} ref={this.myRef}>
                    <ul>
                        {
                            this.state.list.map(item => <li key={item} style={{height:"100px"}}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;