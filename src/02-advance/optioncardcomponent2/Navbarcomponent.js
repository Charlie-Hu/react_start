import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div style={{background:"grey", textAlign:"center", overflow:"hidden"}}>
                <button style={{float:"left"}}>back</button>
                <span>set selection</span>
                <button style={{float:"right"}} onClick={this.props.myevent()}>center </button>
            </div>
        );
    }
}

export default Navbar;