import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div style={{background: 'lightblue'}}>
                {/*<button onClick={this.props.sideAttr()}>click</button>*/}
                {this.props.children}
                <span>Navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{background: 'grey', width:'30%',height:'600px'}}>
                <ul>
                    <li>11111111111</li>
                    <li>11111111111</li>
                    <li>11111111111</li>
                    <li>11111111111</li>
                    <li>11111111111</li>
                    <li>11111111111</li>
                    <li>11111111111</li>
                    <li>11111111111</li>
                    <li>11111111111</li>
                </ul>
            </div>
        )
    }
}

class App extends Component {
    state = {
        isShow: true
    }

    render() {
        return (
            <div>
                <Navbar>
                    <button onClick={() =>
                        this.setState({
                            isShow: !this.state.isShow
                        })}>display
                    </button>
                </Navbar>
                {this.state.isShow && <Sidebar/>}
            </div>
        );
    }
}


export default App;