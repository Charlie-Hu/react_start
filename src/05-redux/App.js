import React, {Component} from 'react';
import MRouter from "./router/IndexRouter";
import Tabbar from "./components/Tabbar";
import './views/css/app.css'
import store from './redux/store'
class App extends Component {
    state={
        isshow:store.getState()
    }
    componentDidMount() {
        store.subscribe(()=>{
            console.log("app subscribe",store.getState())
            this.setState({
                isshow:store.getState().isshow_reducer.show
            })
        })
    }

    render() {
        return (
            <div>
                <MRouter>
                    {this.state.isshow && <Tabbar></Tabbar>}
                </MRouter>

            </div>
        );
    }
}

export default App;