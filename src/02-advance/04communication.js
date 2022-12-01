import React, {Component} from 'react';

class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(event) => {
                    this.props.getinput(event.target.value)
                }}
                       value={this.props.value}
                />
            </div>
        )
    }
}

class App extends Component {
    state={
         username:localStorage.getItem('username'),
        password:''
    }
    render() {
        return (
            <div>
                <h1>login</h1>
                <Field label='username:' type="text" getinput={(value)=>this.setState({
                    username:value
                })} value = {this.state.username}/>
                <Field label='password:' type="Password" getinput={(value)=>this.setState({
                    password:value
                })}/>
                <button onClick={()=>console.log(this.state.username,this.state.password)}>login</button>
                <button onClick={()=>this.setState({
                    username:"",
                    password:"",
                })}>back</button>
            </div>
        );
    }
}

export default App;