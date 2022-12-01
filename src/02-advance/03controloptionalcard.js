import React, {Component} from 'react';
import './css/02cinema.css';
import Cinema from './optioncardcomponent2/cinemacomponent';
import Userinfo from './optioncardcomponent2/userinfocomponent';
import Movie from "./optioncardcomponent2/moviecomponent";
import Tabbar from "./optioncardcomponent2/Tabbarcomponent";
import Navbar from "./optioncardcomponent2/Navbarcomponent";


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

    whichIs() {
        switch (this.state.current) {
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
                <Navbar myevent={() => this.testFuc}></Navbar>
                {/*{this.state.current===0 && <Movie/>}*/}
                {/*{this.state.current===1 && <Cinema/>}*/}
                {/*{this.state.current===2 && <Userinfo/>}*/}
                {this.whichIs()}
                <Tabbar myevent={
                    (index) => {
                        console.log(index)
                        this.setState({
                            current: index
                        })
                    }
                }
                        current={this.state.current}
                        list={this.state.list}
                ></Tabbar>
            </div>
        );
    }

    testFuc = () => {
        console.log(123)
        this.setState({
            current:2
        })

    }
}

export default App;