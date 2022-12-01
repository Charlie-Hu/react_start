import React, {Component} from 'react';

class Field extends Component {
    state= {
        value:''
    }

    clear(){
        this.setState({
            value:'',
        })
    }
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(event)=>{
                    this.setState({
                        value:event.target.value
                    })

                }}
                       value={this.state.value}
                />
            </div>
        )
    }
}

class App extends Component {
    username = React.createRef()
    password = React.createRef()
    render() {
        return (
            <div>
                <h1>login</h1>
                <Field label='username:' type="text" ref={this.username}/>
                <Field label='password:' type="Password" ref={this.password}/>
                <button onClick={()=>console.log(this.username.current.state.value)}>login</button>
                <button onClick={()=>{this.username.current.clear()}}>back</button>
            </div>
        );
    }
}

export default App;