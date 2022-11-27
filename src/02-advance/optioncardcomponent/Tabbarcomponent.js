import React, {Component} from 'react';

class Tabbar extends Component {
    state = {
        list: [
            {
                id: 1,
                text: 'Movie',
            },
            {
                id: 2,
                text: 'Cinema',
            },
            {
                id: 3,
                text: 'UserInfo',
            }
        ],
        current: 0
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map((item, index) =>
                        <li key={item.id} className={this.state.current === index ? "active" : ""}
                            onClick={() => this.clickEvent(index)}> {item.text}</li>)}
                </ul>
            </div>
        );
    }

    clickEvent(index){
        this.setState({
            current: index
        })
        this.props.myevent(index)
    }

}

export default Tabbar;