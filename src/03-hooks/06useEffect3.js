import React, {Children, Component, useEffect} from 'react';

class App extends Component {
    state={
        isCreate:1
    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.setState({
                    isCreate:!this.state.isCreate
                })}}>click</button>
                {this.state.isCreate?<Child></Child>:""}
            </div>
        );
    }
}
function Child(){
     useEffect(()=>{
        window.onresize=()=>{
            console.log("onresize")
        }
        var timer = setInterval(()=>console.log('1'),1000)

         return ()=>{
            window.onresize=null;
            clearInterval(timer)
         }
     },[ ])
    return(
        <div>
            child
        </div>
    )
}

export default App;