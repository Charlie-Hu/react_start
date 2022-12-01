import React, {Component} from 'react';
import './css/02cinema.css';
import Cinema from './optioncardcomponent/cinemacomponent';
import Userinfo from './optioncardcomponent/userinfocomponent';
import Movie from "./optioncardcomponent/moviecomponent";
import Tabbar from "./optioncardcomponent/Tabbarcomponent";
import Navbar from "./optioncardcomponent/Navbarcomponent";


class App extends Component {
    state = {
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
                }></Tabbar>
            </div>
        );
    }

    testFuc = () => {
        console.log(11111233232)
    }
}

export default App;