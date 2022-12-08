import React, {Component} from 'react';

class Box extends Component {
    render() {
        console.log("render")
        return (
            <div style={{
                background: this.props.current===this.props.index?"":"grey",
                width: "100px",
                height: "100px",
                border: this.props.current===this.props.index?"1px solid red":"1px solid black",
                margin: "10px",
                float: "left"
            }}>

            </div>
        ) 
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.props.current===this.props.index || nextProps.current ===this.props.index){
            return true
        }
        return false
    }
}

class App extends Component {
    state = {
        list: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
        current: 0
    }

    render() {
        console.log(this.state.current)
        return (
            <div>
                <input type="number" value={this.state.current} onChange={(event)=>{this.setState({
                    current:Number(event.target.value)
                })}}/>
                <div style={{overflow: "hidden"}}>
                    {
                        this.state.list.map((item, index) => <Box current={this.state.current} index={index}
                                                                  key={item}/>)
                    }
                </div>
            </div>
        );
    }
}

export default App;