import React, {Component} from 'react';
import './css/cinema.css';
import Cinema from './optioncardcomponent/cinemacomponent';
import Userinfo from './optioncardcomponent/userinfocomponent';
import Movie from "./optioncardcomponent/moviecomponent";
class App extends Component {
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

    which(){
        switch (this.state.current){
            case 0:
                return <Movie/>
            case 1:
                return <Cinema/>
            case 2:
                return <Userinfo/>
        }
    }

    render() {
        return (
            <div>
                {/*{this.state.current===0 && <Movie/>}*/}
                {/*{this.state.current===1 && <Cinema/>}*/}
                {/*{this.state.current===2 && <Userinfo/>}*/}
                {this.which()}
                <ul>
                    {this.state.list.map((item, index) =>
                        <li key={item.id} className={this.state.current === index ? "active" : ""}
                            onClick={() => this.clickEvent(index)}> {item.text}</li>)}

                </ul>
            </div>
        );
    }

    clickEvent = (index) => {
        this.setState({
            current: index
        })
    }
}

export default App;