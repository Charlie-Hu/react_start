import React, {Component} from 'react';
import axios from "axios";
import BScroll from "better-scroll";

class App extends Component {
    state = {
        name: "Charlie",
        list: []
    }

    componentDidMount() {
        axios.get("/test.json").then(item => {
            this.setState({
                list: item.data.employees.employee
            })
        })
        new BScroll("#wrapper")
    }


    render() {
        console.log(this.state.list)
        console.log("render")
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        name: "dou"
                    })
                }}>click
                </button>
                <span id="myname">{this.state.name}</span>
                <div id="wrapper" style={{background: "grey", width: "300px", height: "600px", overflow: "hidden"}}>
                    <ul>
                        {
                            this.state.list.map(item => <li key={item.id}>
                                <span><img src={item.photo} alt="plt"/></span><br/>
                                {item.firstName} {item.lastName}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }

    componentWillUpdate() {
        console.log("componentWillUnmount", document.getElementById("myname").innerHTML)
    }

    componentDidUpdate(prevprops,prevstate) {
        console.log("componentDidUnmount", document.getElementById("myname").innerHTML)
        console.log(prevstate,prevprops)
    }
}

export default App;