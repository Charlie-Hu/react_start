import React, {Component} from 'react';

class App extends Component {
    state = {
        list: [
            {id: 1, text: '111'},
            {id: 2, text: '222'},
            {id: 3, text: '333'}
        ]
    }

    render() {
        // var newList = this.state.list.map(item => <li>{item}</li>)
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(item => <li key={item.id}>{item.text}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default App;