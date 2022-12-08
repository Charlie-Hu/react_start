import React, {Component} from 'react';
import BScroll from "better-scroll";

class App extends Component {
    state={
        list:["111","222","333","444","555","666","777","888","999","1111","22222"]
    }
    componentDidMount() {
        new BScroll("#wrapper")
    }

    render() {
        return (
            <div >
                <div id="wrapper" style={{background:"grey",width:"100px", height:"150px",overflow:"hidden"}}>
                    <ul>
                        {
                            this.state.list.map(item=><li key={item}>{item}</li>)
                        }
                    </ul>

                </div>

            </div>
        );
    }
}

export default App;