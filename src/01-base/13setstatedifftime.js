import React, {Component} from 'react';

class App extends Component {
    state = {
        count: 1
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.clickAdd1}>add1</button>
            </div>
        );
    }

    clickAdd1 = () => {
        this.setState({
            count: this.state.count + 1
        })

        this.setState({
            count: this.state.count + 1
        })

        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }
}

// setState是异步任务
export default App;