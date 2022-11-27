import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div style={{background:'lightblue'}}>
                <button onClick={this.props.sideAttr()}>click</button>

                <span>Navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{background:'grey'}}>
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
    state={
        isShow:true
    }
    sidebarControl=()=>{
        console.log(123)
        this.setState({
            isShow:!this.state.isShow
        })
    }

    render() {
        return (
            <div>
                <Navbar sideAttr={()=>this.sidebarControl}></Navbar>
                {this.state.isShow && <Sidebar/>}
            </div>
        );
    }
}

export default App;