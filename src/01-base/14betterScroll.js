import React, {Component} from 'react';
import BScroll from 'better-scroll'

class App extends Component {
    state = {
        list: []
    }

    render() {
        return (
            <div>
                <button onClick={() => this.getlist()}>click</button>
                <div className="Wrapper" style={{height: "150px", background: "yellow", overflow: "hidden"}}>
                    <ul className="content">
                        {this.state.list.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            </div>
        );
    }

    getlist() {
        var list = [1, 25, 3, 11, 41, 32, 49, 24, 441, 224, 2, 47, 42, 4]
        this.setState({
            list: list
        }, () => {
            console.log(this.state.list)
            console.log(document.querySelectorAll('li'))
            new BScroll('.Wrapper')
        })
        // setTimeout(() => {
        //     this.setState({
        //         list: list
        //     })
        //     console.log(this.state.list)
        //     console.log(document.querySelectorAll('li'))
        //     new BScroll('.Wrapper')
        // }, 0.1)

    }
}

export default App;